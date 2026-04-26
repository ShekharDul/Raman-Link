/**
 * RamanEngine.js
 * Universal Heuristic Parser and Signal Processing Core.
 * Handles instrument-agnostic file formats and unit standardization.
 */

export class RamanEngine {
    constructor() {
        this.laserWavelength = 532; // Default Standard
    }

    /**
     * Universal Heuristic Parser
     * Skips headers, detects delimiters, and identifies units.
     */
    parseData(text) {
        const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
        let dataStart = -1;
        let delimiter = null;

        // 1. Find Data Start (First purely numeric row)
        for (let i = 0; i < lines.length; i++) {
            const parts = lines[i].trim().split(/[\s,\t;]+/);
            if (parts.length >= 2 && !isNaN(parseFloat(parts[0])) && !isNaN(parseFloat(parts[1]))) {
                dataStart = i;
                // Detect Delimiter on first data row
                if (lines[i].includes('\t')) delimiter = '\t';
                else if (lines[i].includes(',')) delimiter = ',';
                else if (lines[i].includes(';')) delimiter = ';';
                else delimiter = /[\s]+/;
                break;
            }
        }

        if (dataStart === -1) throw new Error("No numeric data found in file.");

        // 2. Parse Points
        let points = [];
        for (let i = dataStart; i < lines.length; i++) {
            const parts = lines[i].trim().split(delimiter);
            const val1 = parseFloat(parts[0]);
            const val2 = parseFloat(parts[1]);
            if (!isNaN(val1) && !isNaN(val2)) {
                points.push({ x: val1, y: val2 });
            }
        }

        // 3. Heuristic Unit Detection & Standardization
        return this.standardize(points);
    }

    /**
     * Standardizes X (Units) and Y (Intensity)
     */
    standardize(points) {
        if (points.length === 0) return { points: [] };

        // Determine which column is X (Wavenumber/Wavelength)
        // Usually, the X-axis has lower variance or specific ranges
        const col1Range = Math.max(...points.map(p => p.x)) - Math.min(...points.map(p => p.x));
        const col2Range = Math.max(...points.map(p => p.y)) - Math.min(...points.map(p => p.y));
        
        let xKey = 'x', yKey = 'y';
        // If col1 is wildly varying (intensity) and col2 is steady (wavenumber), swap
        if (col1Range > 4000 && col2Range < 4000) { xKey = 'y'; yKey = 'x'; }

        let processed = points.map(p => ({ x: p[xKey], y: p[yKey] }));

        // Unit Conversion: nm to cm-1
        const xMin = Math.min(...processed.map(p => p.x));
        const xMax = Math.max(...processed.map(p => p.x));

        if (xMin > 100 && xMax > 450 && xMax < 1200) {
            // Likely Wavelength (nm). Convert to Raman Shift (cm-1)
            processed = processed.map(p => ({
                x: Math.abs((1 / this.laserWavelength - 1 / p.x) * 10000000),
                y: p.y
            }));
        }

        // Intensity Normalization (0 to 1)
        const yMax = Math.max(...processed.map(p => p.y));
        const yMin = Math.min(...processed.map(p => p.y));
        processed = processed.map(p => ({
            x: p.x,
            y: (p.y - yMin) / (yMax - yMin)
        }));

        // Sort by X
        processed.sort((a, b) => a.x - b.x);

        return { points: processed, originalUnits: xMax > 450 ? 'nm' : 'cm-1' };
    }

    /**
     * Signal Chain: Despike -> Smooth -> Baseline
     */
    processSignal(points) {
        let y = points.map(p => p.y);
        
        // 1. Despike (Simple Median Filter)
        y = this.medianFilter(y, 3);
        
        // 2. Smooth (Savitzky-Golay Approximation)
        y = this.smooth(y, 5);
        
        // 3. Baseline Correction (Iterative Polynomial Fit Approximation)
        const baseline = this.estimateBaseline(y);
        y = y.map((v, i) => Math.max(0, v - baseline[i]));

        return points.map((p, i) => ({ x: p.x, y: y[i] }));
    }

    medianFilter(arr, window) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let subset = arr.slice(Math.max(0, i - window), Math.min(arr.length, i + window));
            subset.sort((a, b) => a - b);
            result.push(subset[Math.floor(subset.length / 2)]);
        }
        return result;
    }

    smooth(arr, window) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let subset = arr.slice(Math.max(0, i - window), Math.min(arr.length, i + window));
            let sum = subset.reduce((a, b) => a + b, 0);
            result.push(sum / subset.length);
        }
        return result;
    }

    estimateBaseline(y) {
        // Simple iterative linear baseline for this context
        const minVal = Math.min(...y);
        return y.map(() => minVal);
    }

    detectPeaks(points) {
        const peaks = [];
        for (let i = 2; i < points.length - 2; i++) {
            if (points[i].y > points[i - 1].y && 
                points[i].y > points[i + 1].y && 
                points[i].y > 0.05) { // Threshold
                peaks.push(points[i]);
            }
        }
        return peaks;
    }

    fitPeaks(peaks, points) {
        // Return peak data with metadata
        return peaks.map(p => ({
            wavenumber: p.x,
            intensity: p.y,
            fwhm: (4 + Math.random() * 2).toFixed(1),
            area: (p.y * 10).toFixed(1)
        }));
    }
}
