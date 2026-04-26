import { RamanEngine } from './utils/RamanEngine.js';

class RamanApp {
    constructor() {
        this.engine = new RamanEngine();
        this.sampleData = null;
        this.referenceData = null;
        this.analysisResults = null;

        this.initElements();
        this.bindEvents();
    }

    initElements() {
        // Views
        this.viewMain = document.getElementById('view-main');
        this.viewResults = document.getElementById('view-results');
        this.overlayProcessing = document.getElementById('overlay-processing');

        // Inputs
        this.compoundSelector = document.getElementById('compound-selector');
        this.inputSample = document.getElementById('input-sample');
        this.inputReference = document.getElementById('input-reference');
        this.dropSample = document.getElementById('drop-sample');
        this.dropReference = document.getElementById('drop-reference');

        // Buttons
        this.btnInterpret = document.getElementById('btn-interpret');
        this.btnBack = document.getElementById('btn-back');
        this.btnDownloadData = document.getElementById('download-data');
        this.btnDownloadPlot = document.getElementById('download-plot');

        // Stats
        this.statPeaks = document.getElementById('stat-peaks');
        this.statScore = document.getElementById('stat-score');

        // Canvas
        this.canvas = document.getElementById('spectrum-canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    bindEvents() {
        // File Drop Logic
        this.setupFileDrop(this.dropSample, this.inputSample, 'sample');
        this.setupFileDrop(this.dropReference, this.inputReference, 'reference');

        // Actions
        this.btnInterpret.addEventListener('click', () => this.runAnalysis());
        this.btnBack.addEventListener('click', () => this.showView('main'));
        
        this.btnDownloadData.addEventListener('click', () => this.downloadCSV());
        this.btnDownloadPlot.addEventListener('click', () => this.downloadPlot());
    }

    setupFileDrop(dropZone, input, type) {
        dropZone.addEventListener('click', () => input.click());
        
        input.addEventListener('change', (e) => {
            if (e.target.files.length) this.handleFile(e.target.files[0], type);
        });

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('active');
        });

        dropZone.addEventListener('dragleave', () => dropZone.classList.remove('active'));

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('active');
            if (e.dataTransfer.files.length) this.handleFile(e.dataTransfer.files[0], type);
        });
    }

    async handleFile(file, type) {
        const text = await file.text();
        const data = this.parseCSV(text);
        
        if (type === 'sample') {
            this.sampleData = data;
            document.getElementById('label-sample').textContent = file.name;
            document.getElementById('label-sample').style.color = 'var(--accent)';
        } else {
            this.referenceData = data;
            document.getElementById('label-reference').textContent = file.name;
            document.getElementById('label-reference').style.color = 'var(--accent)';
        }
    }

    parseCSV(text) {
        const lines = text.trim().split('\n');
        return lines.map(line => {
            const [x, y] = line.split(',').map(Number);
            return { x, y };
        }).filter(p => !isNaN(p.x) && !isNaN(p.y));
    }

    async runAnalysis() {
        if (!this.sampleData) {
            alert("Please provide an experimental batch sample.");
            return;
        }

        this.showProcessing(true);

        // Simulate scientific processing time
        await new Promise(resolve => setTimeout(resolve, 1500));

        const material = this.compoundSelector.value;
        this.analysisResults = this.engine.analyze(this.sampleData, this.referenceData, material);

        this.renderPlot();
        this.updateStats();
        this.showProcessing(false);
        this.showView('results');
    }

    updateStats() {
        this.statPeaks.textContent = this.analysisResults.peaks.length;
        this.statScore.textContent = `${Math.round(this.analysisResults.confidence * 100)}%`;
    }

    renderPlot() {
        const width = this.canvas.width = this.canvas.offsetWidth * 2;
        const height = this.canvas.height = this.canvas.offsetHeight * 2;
        const ctx = this.ctx;

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, width, height);

        const padding = 100;
        const plotWidth = width - padding * 2;
        const plotHeight = height - padding * 2;

        // Find scale
        const allPoints = [...this.sampleData, ...(this.referenceData || [])];
        const minX = Math.min(...allPoints.map(p => p.x));
        const maxX = Math.max(...allPoints.map(p => p.x));
        const maxY = Math.max(...allPoints.map(p => p.y));

        const getX = (x) => padding + ((x - minX) / (maxX - minX)) * plotWidth;
        const getY = (y) => height - padding - (y / maxY) * plotHeight;

        // Draw Axes
        ctx.strokeStyle = "#27272a";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.stroke();

        // Draw Reference (if exists)
        if (this.referenceData) {
            ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
            ctx.setLineDash([10, 10]);
            this.drawPath(this.referenceData, getX, getY);
            ctx.setLineDash([]);
        }

        // Draw Sample
        ctx.strokeStyle = "#10b981";
        ctx.lineWidth = 4;
        this.drawPath(this.sampleData, getX, getY);

        // Peak Labels
        ctx.fillStyle = "#fff";
        ctx.font = "24px 'Courier Prime'";
        this.analysisResults.peaks.forEach(peak => {
            const px = getX(peak.x);
            const py = getY(peak.y);
            ctx.fillText(`${Math.round(peak.x)}`, px - 20, py - 20);
            
            ctx.beginPath();
            ctx.arc(px, py, 5, 0, Math.PI * 2);
            ctx.fill();
        });

        // Legend
        ctx.font = "bold 28px Inter";
        ctx.fillText("EXPERIMENTAL BATCH", padding + 50, padding + 50);
        if (this.referenceData) {
            ctx.fillStyle = "rgba(255,255,255,0.4)";
            ctx.fillText("REFERENCE STANDARD", padding + 50, padding + 90);
        }
    }

    drawPath(data, getX, getY) {
        const ctx = this.ctx;
        ctx.beginPath();
        data.forEach((p, i) => {
            if (i === 0) ctx.moveTo(getX(p.x), getY(p.y));
            else ctx.lineTo(getX(p.x), getY(p.y));
        });
        ctx.stroke();
    }

    downloadCSV() {
        if (!this.analysisResults) return;

        let csv = "Peak Number,Wavenumber (cm-1),Intensity (a.u.),Shift (relative to ref),Note\n";
        this.analysisResults.peaks.forEach((p, i) => {
            const shift = p.shift ? p.shift.toFixed(2) : "N/A";
            csv += `${i + 1},${p.x.toFixed(2)},${p.y.toFixed(2)},${shift},${p.label || ""}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Raman_Analysis_${this.compoundSelector.value}.csv`;
        a.click();
    }

    downloadPlot() {
        const url = this.canvas.toDataURL("image/png");
        const a = document.createElement('a');
        a.href = url;
        a.download = `Raman_Plot_${this.compoundSelector.value}.png`;
        a.click();
    }

    showView(view) {
        if (view === 'main') {
            this.viewMain.classList.remove('view-hidden');
            this.viewResults.classList.add('view-hidden');
        } else {
            this.viewMain.classList.add('view-hidden');
            this.viewResults.classList.remove('view-hidden');
        }
    }

    showProcessing(show) {
        if (show) this.overlayProcessing.classList.remove('view-hidden');
        else this.overlayProcessing.classList.add('view-hidden');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new RamanApp();
});
