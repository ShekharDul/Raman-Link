import { RamanEngine } from './utils/RamanEngine.js';
import { PredictionEngine } from './utils/PredictionEngine.js';
import { MoleculeService } from './utils/MoleculeService.js';
import { StructureAnalyzer } from './utils/StructureAnalyzer.js';
import { LatticeLibrary } from './data/LatticeLibrary.js';

document.addEventListener('DOMContentLoaded', () => {
    const engine = new RamanEngine();
    const predictor = new PredictionEngine();
    const moleculeService = new MoleculeService();
    const analyzer = new StructureAnalyzer();
    
    let chart = null;
    let referenceData = null;
    let sampleData = null;
    let currentPredictions = [];
    let currentCompound = "";
    let currentCompoundSMILES = "";
    let activeUploadType = 'sample';

    // View Switching Logic
    const views = {
        home: document.getElementById('view-home'),
        app: document.getElementById('view-app'),
        methodology: document.getElementById('view-methodology'),
        detail: document.getElementById('view-detail')
    };

    function showView(viewId) {
        Object.values(views).forEach(v => v.classList.add('view-hidden'));
        views[viewId].classList.remove('view-hidden');
    }

    // UI Elements
    const launchBtn = document.getElementById('launch-app');
    const goHome = document.getElementById('go-home');
    const viewMethodologyBtn = document.getElementById('view-methodology-btn');
    const methodGoHome = document.getElementById('method-go-home');
    const methodToApp = document.getElementById('method-to-app');
    const detailBackToProtocol = document.getElementById('detail-back-to-protocol');
    const detailGoHome = document.getElementById('detail-go-home');

    const fileInput = document.getElementById('file-input');
    const uploadRef = document.getElementById('upload-reference');
    const uploadSam = document.getElementById('upload-sample');
    const compoundSearch = document.getElementById('compound-search');
    const searchBtn = document.getElementById('search-btn');
    const addToAnalysisBtn = document.getElementById('add-to-analysis-btn');
    const pubchemDossier = document.getElementById('pubchem-dossier');
    const assignmentsList = document.querySelector('#assignments-list .list-content');
    const statPeaks = document.getElementById('stat-peaks');
    const statMatch = document.getElementById('stat-match');
    const metaPills = document.getElementById('meta-pills');

    function init() {
        setupNavigation();
        setupEventListeners();
        setupDeepDiveLinks();
    }

    function setupNavigation() {
        launchBtn.onclick = () => { showView('app'); if (!chart) initChart(); };
        goHome.onclick = () => { showView('home'); };
        viewMethodologyBtn.onclick = () => { showView('methodology'); };
        methodGoHome.onclick = () => { showView('home'); };
        methodToApp.onclick = () => { showView('app'); if (!chart) initChart(); };
        detailBackToProtocol.onclick = () => { showView('methodology'); };
        detailGoHome.onclick = () => { showView('home'); };
    }

    const detailData = {
        discovery: {
            title: "Discovery Engine",
            desc: "The Discovery Engine is a real-time metadata crawler designed to extract polymorphic standards from global research indices.",
            how: "We use high-concurrency requests to PubChem and simulated research repositories to parse HKL indices and peak markers.",
            audit: {
                success: ["Well-characterized Small Molecule APIs", "Polymorphs documented in CCDC/PubChem", "Standardized spectral units (cm⁻¹)"],
                failure: ["Novel proprietary R&D scaffolds", "Molecules with zero documented characterization", "Non-standard vibrational reporting"]
            }
        },
        perturbation: {
            title: "Vibrational Perturbation Model",
            desc: "A heuristic physics model that calculates the 'Lattice Shift' between a molecule in a vacuum versus a crystal lattice.",
            how: "We establishes a 'Molecular Baseline' from SMILES and apply 'Delta-Logic' offsets based on functional group environments.",
            audit: {
                success: ["Carbonyl Stretching (Red-shifts)", "Aromatic Ring Breathing (Splitting)", "Strong Hydrogen Bonding networks"],
                failure: ["High-symmetry inorganic lattices", "Heavy metal coordination complexes", "Amorphous/Liquid phases"]
            }
        },
        pipeline: {
            title: "Standardized Processing Pipeline",
            desc: "A deterministic mathematical sequence for transforming raw detector counts into clean spectral data.",
            how: "Sequencing: Modified Z-Score (Despike) -> Savitzky-Golay (Smooth) -> 5th-Order Polyfit (Baseline).",
            audit: {
                success: ["Fluorescence-rich organic samples", "Cosmic-ray contaminated CCD data", "Baseline drift in portable spectrometers"],
                failure: ["Ultra-low SNR data (Signal < Noise)", "Samples with saturation artifacts", "Non-linear detector responses"]
            }
        },
        socrates: {
            title: "The Socrates Standard",
            desc: "Based on 'Infrared and Raman Characteristic Group Frequencies: Tables and Charts' by George Socrates—the definitive bible of spectroscopy.",
            how: "Our engine performs automated fragment analysis on SMILES strings to identify molecular connectivity. These identified fragments are then matched against the Socrates Standard (1,500+ vibrational markers) to predict the characteristic peaks and assignments required for interpretation.",
            audit: {
                success: ["Common Organic APIs (Ibuprofen, Paracetamol, etc.)", "Standardized functional groups (Carbonyls, Amides, Aromatics)", "Small-molecule pharmaceuticals"],
                failure: ["Inorganic crystal lattices (not covered by Socrates tables)", "Transition metal coordination complexes", "Novel exotic scaffolds with zero literature markers"]
            }
        },
        parsing: {
            title: "Universal Heuristic Parser",
            desc: "A smart ingestion engine designed to eliminate the manual pre-processing of laboratory data exports.",
            how: "Our engine uses regex-based 'tunnelling' to skip headers and heuristic variance analysis to detect unit conflicts ($nm$ vs $cm^{-1}$) and delimiter types.",
            audit: {
                success: ["Exports from Bruker, Renishaw, Horiba, and Ocean Insight", "Comma, Tab, and Semicolon delimiters", "Data with varying detector scales (Normalization)"],
                failure: ["Encrypted binary formats (.spc, .wdf) without CSV export", "Files with non-numeric data mixed into the signal columns", "Highly non-linear detector responses"]
            }
        }
    };

    function setupDeepDiveLinks() {
        document.querySelectorAll('.detail-link').forEach(link => {
            link.onclick = () => {
                const topic = link.dataset.topic;
                const data = detailData[topic];
                renderDetailPage(data);
                showView('detail');
            };
        });
    }

    function renderDetailPage(data) {
        const content = document.getElementById('detail-content');
        const label = document.getElementById('detail-topic-label');
        label.textContent = `DEEP_DIVE: ${data.title.toUpperCase()}`;
        
        content.innerHTML = `
            <h1 class="serif-title" style="font-size: 3rem;">${data.title}.</h1>
            <p class="subtitle">${data.desc}</p>
            
            <div class="method-section" style="margin-top:40px;">
                <h3>IMPLEMENTATION_LOGIC</h3>
                <p>${data.how}</p>
            </div>

            <div class="audit-grid">
                <div class="audit-card success">
                    <h4>OPTIMIZED_FOR</h4>
                    <ul>${data.audit.success.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
                <div class="audit-card failure">
                    <h4>LIMITATIONS_AND_FAILURES</h4>
                    <ul>${data.audit.failure.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
            </div>
        `;
    }

    function setupEventListeners() {
        uploadRef.onclick = () => { activeUploadType = 'reference'; fileInput.click(); };
        uploadSam.onclick = () => { activeUploadType = 'sample'; fileInput.click(); };
        fileInput.addEventListener('change', (e) => processFile(e.target.files[0]));
        searchBtn.onclick = handleSearch;
        compoundSearch.onkeypress = (e) => { if (e.key === 'Enter') handleSearch(); };

        addToAnalysisBtn.onclick = () => {
            if (!currentCompoundSMILES) return;
            currentPredictions = analyzer.predict(currentCompoundSMILES);
            runAnalysis();
            addToAnalysisBtn.style.background = 'var(--accent)';
            addToAnalysisBtn.textContent = "STRUCTURE_SYNCED";
        };

        const resizer = document.getElementById('resizer-handle');
        const workspace = document.getElementById('spectrum-workspace');
        let isDragging = false;
        resizer.onmousedown = () => { isDragging = true; document.body.style.cursor = 'row-resize'; };
        document.onmousemove = (e) => {
            if (!isDragging) return;
            const containerOffset = views.app.getBoundingClientRect().top + 70;
            const newHeight = e.clientY - containerOffset;
            if (newHeight > 200 && newHeight < window.innerHeight - 300) {
                workspace.style.height = `${newHeight}px`;
                if (chart) chart.resize();
            }
        };
        document.onmouseup = () => { isDragging = false; document.body.style.cursor = 'default'; };
    }

    function initChart() {
        const ctx = document.getElementById('raman-chart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'line',
            data: { 
                datasets: [
                    { label: 'SAMPLE', borderColor: '#ffffff', borderWidth: 1.5, pointRadius: 0, data: [] },
                    { label: 'REFERENCE', borderColor: '#6366f1', borderDash: [5, 5], borderWidth: 1.5, pointRadius: 0, data: [] }
                ] 
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { type: 'linear', grid: { color: '#222' }, ticks: { color: '#666' } },
                    y: { grid: { color: '#222' }, ticks: { color: '#666' } }
                },
                plugins: { legend: { display: true, labels: { color: '#888', font: { size: 10 } } } }
            }
        });
    }

    async function handleSearch() {
        const query = compoundSearch.value.trim();
        if (!query) return;
        searchBtn.textContent = "DEEP SCAN...";
        pubchemDossier.innerHTML = `<div class="pill" style="width:100%; text-align:center;">SCANNING_GLOBAL_RESEARCH_INDEX...</div>`;
        
        try {
            await new Promise(r => setTimeout(r, 1200));
            const molecule = await moleculeService.searchCompound(query);
            currentCompound = molecule.name;
            currentCompoundSMILES = molecule.smiles;
            updateDossierUI(molecule);
            const localMatch = LatticeLibrary.find(l => l.compound.toLowerCase() === query.toLowerCase());
            
            if (localMatch) {
                renderDiscoveryPackages(localMatch.forms);
                addToAnalysisBtn.style.display = 'none';
            } else {
                addToAnalysisBtn.style.display = 'block';
                addToAnalysisBtn.style.background = 'transparent';
                addToAnalysisBtn.textContent = "CORRELATE STRUCTURE";
            }
            metaPills.innerHTML = `<span class="pill">SOURCE: PUBCHEM_CID_${molecule.cid}</span>`;
        } catch (error) {
            pubchemDossier.innerHTML = `<p style="color:red">ERROR: DISCOVERY_FAILED</p>`;
            addToAnalysisBtn.style.display = 'none';
        } finally { searchBtn.textContent = "SEARCH"; }
    }

    function renderDiscoveryPackages(forms) {
        const polymorphContainer = document.createElement('div');
        polymorphContainer.className = 'polymorph-selector';
        polymorphContainer.innerHTML = `<div class="box-label" style="font-size:0.5rem; margin: 15px 0 10px; color: var(--accent);">DISCOVERED_LATTICE_PACKAGES</div>`;
        forms.forEach(form => {
            const btn = document.createElement('div');
            btn.className = 'form-card';
            btn.innerHTML = `<div class="form-name">${form.name}</div><div class="form-meta">Characterized Standard</div>`;
            btn.onclick = () => {
                currentPredictions = form.peaks;
                runAnalysis();
                document.querySelectorAll('.form-card').forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
            };
            polymorphContainer.appendChild(btn);
        });
        pubchemDossier.appendChild(polymorphContainer);
    }

    function updateDossierUI(mol) {
        pubchemDossier.innerHTML = `
            <div class="dossier-item"><span class="label">FORMULA</span> <span>${mol.formula}</span></div>
            <div class="dossier-item"><span class="label">M_WEIGHT</span> <span>${mol.weight} g/mol</span></div>
            <div class="smiles-code" style="font-size: 0.5rem; color: var(--accent); margin-top:10px;">${mol.smiles}</div>
        `;
    }

    async function processFile(file) {
        if (!file) return;
        const rawData = await file.text();
        const { points } = engine.parseData(rawData);
        const processed = engine.processSignal(points);
        if (activeUploadType === 'reference') referenceData = processed;
        else sampleData = processed;
        runAnalysis();
    }

    function runAnalysis() {
        if (sampleData) chart.data.datasets[0].data = sampleData;
        if (referenceData) chart.data.datasets[1].data = referenceData;
        chart.update();
        const dataToAnalyze = sampleData || referenceData;
        if (!dataToAnalyze) return;
        const rawPeaks = engine.detectPeaks(dataToAnalyze);
        const fittedPeaks = engine.fitPeaks(rawPeaks, dataToAnalyze);
        statPeaks.textContent = fittedPeaks.length;
        const result = predictor.analyzeHybrid(currentCompound, fittedPeaks, currentPredictions);
        statMatch.textContent = result.error ? "0%" : `${result.confidence}%`;
        renderAssignments(result.assignments || [], result.form);
    }

    function renderAssignments(assignments, formName) {
        assignmentsList.innerHTML = '';
        assignments.forEach(asn => {
            const row = document.createElement('div');
            row.className = 'table-row data';
            let deltaHtml = "";
            if (referenceData && sampleData) {
                const shift = asn.userWavenumber - (asn.refWavenumber || asn.userWavenumber);
                deltaHtml = `<span style="color: ${Math.abs(shift) > 2 ? 'var(--accent)' : 'var(--text-dim)'}; font-size:0.6rem;">Δ ${shift.toFixed(1)}</span>`;
            }
            row.innerHTML = `<div style="display:flex; flex-direction:column;"><span>${asn.userWavenumber.toFixed(1)} cm⁻¹</span>${deltaHtml}</div><span>${asn.mode}</span><span>${asn.fwhm}</span><span>${asn.area}</span>`;
            row.onclick = () => showEvidence({ ...asn, form: formName }, row);
            assignmentsList.appendChild(row);
        });
    }

    function showEvidence(asn, row) {
        document.getElementById('ev-body').innerHTML = `<p><strong style="color:var(--accent)">Assignment: ${asn.mode}</strong><br><br>${asn.rationale}<br><br><em>Target: ${asn.form || 'Molecular Motif'}</em></p><div class="math-pills"><span class="math-pill">FWHM: ${asn.fwhm || '--'}</span><span class="math-pill">AREA: ${asn.area || '--'}</span></div>`;
        document.querySelectorAll('.table-row.data').forEach(el => el.classList.remove('active'));
        row.classList.add('active');
    }

    init();
});
