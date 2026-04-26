export class RamanEngine {
    constructor() {
        this.library = {
            paracetamol: [857, 1168, 1237, 1324, 1562, 1650],
            aspirin: [1044, 1191, 1294, 1606, 1622, 1750],
            ibuprofen: [742, 834, 1182, 1208, 1450, 1610],
            metformin: [736, 936, 1034, 1475, 1567, 1626]
        };
    }

    analyze(sampleData, referenceData, material) {
        // 1. Basic Peak Detection
        const peaks = this.findPeaks(sampleData);
        
        // 2. Reference Comparison (if provided)
        let confidence = 0.5;
        if (referenceData) {
            const refPeaks = this.findPeaks(referenceData);
            confidence = this.calculateSimilarity(peaks, refPeaks);
            this.mapShifts(peaks, refPeaks);
        } else if (this.library[material]) {
            // Compare against library if no reference file
            const libPeaks = this.library[material];
            confidence = this.calculateLibraryMatch(peaks, libPeaks);
        }

        return {
            peaks,
            confidence: Math.min(0.99, confidence),
            material
        };
    }

    findPeaks(data) {
        const peaks = [];
        const threshold = Math.max(...data.map(p => p.y)) * 0.15;

        for (let i = 2; i < data.length - 2; i++) {
            const p = data[i];
            if (p.y > threshold && 
                p.y > data[i-1].y && p.y > data[i-2].y && 
                p.y > data[i+1].y && p.y > data[i+2].y) {
                peaks.push({ ...p });
            }
        }
        return peaks;
    }

    calculateSimilarity(peaksA, peaksB) {
        if (peaksA.length === 0 || peaksB.length === 0) return 0;
        
        let matches = 0;
        peaksA.forEach(pa => {
            const match = peaksB.find(pb => Math.abs(pa.x - pb.x) < 10);
            if (match) matches++;
        });

        return matches / Math.max(peaksA.length, peaksB.length);
    }

    calculateLibraryMatch(peaks, libPeaks) {
        let matches = 0;
        peaks.forEach(p => {
            if (libPeaks.some(lp => Math.abs(p.x - lp) < 15)) matches++;
        });
        return matches / Math.max(peaks.length, libPeaks.length);
    }

    mapShifts(samplePeaks, refPeaks) {
        samplePeaks.forEach(sp => {
            const closest = refPeaks.reduce((prev, curr) => 
                Math.abs(curr.x - sp.x) < Math.abs(prev.x - sp.x) ? curr : prev
            );
            if (Math.abs(closest.x - sp.x) < 25) {
                sp.shift = sp.x - closest.x;
                sp.label = sp.shift > 0 ? "Blue Shift" : "Red Shift";
            }
        });
    }
}
