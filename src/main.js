import { MaterialsDatabase } from './data/materials.js';
import { WebGLCore } from './visuals/WebGLCore.js';

document.addEventListener('DOMContentLoaded', () => {
    let materialsData = MaterialsDatabase || [];
    
    const grid = document.getElementById('materials-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const detailContent = document.getElementById('detail-content');
    const tutorialWrapper = document.querySelector('.tutorial-wrapper');
    const app = document.getElementById('app');
    const authorBtn = document.getElementById('open-author');
    const authorModal = document.getElementById('author-modal');
    const closeAuthor = document.getElementById('close-author');
    const backBtn = document.querySelector('.back-btn');
    const searchInput = document.getElementById('material-search');
    const pageDetail = document.getElementById('page-detail');
    const authorOverlay = document.getElementById('author-overlay');

    let webgl = null;

    function initApp() {
        renderMaterials('all');
        populateCensus(materialsData);
    }

    // SCROLL REVEAL OBSERVER
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // ═══════════════════════════════════════════
    // AUTHOR MODAL LOGIC
    // ═══════════════════════════════════════════
    if (authorBtn && authorModal && closeAuthor && authorOverlay) {
        authorBtn.addEventListener('click', (e) => {
            e.preventDefault();
            authorModal.classList.add('active');
            authorOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const closeAll = () => {
            authorModal.classList.remove('active');
            authorOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        closeAuthor.addEventListener('click', closeAll);
        authorOverlay.addEventListener('click', closeAll);
    }

    // ═══════════════════════════════════════════
    // DIGITAL CENSUS BACKGROUND
    // ═══════════════════════════════════════════
    function populateCensus(materials) {
        const bg = document.getElementById('census-bg');
        if (!bg) return;
        const names = materials.map(m => m.name);
        for (let i = 0; i < 8; i++) {
            const col = document.createElement('div');
            col.className = 'census-column';
            const shuffled = [...names].sort(() => Math.random() - 0.5);
            col.innerHTML = [...shuffled, ...shuffled].map(name => `<span>${name.toUpperCase()}</span>`).join('');
            bg.appendChild(col);
        }
    }

    // ═══════════════════════════════════════════
    // SCROLLYTELLING TUTORIAL
    // ═══════════════════════════════════════════
    let targetScrollP = 0;
    let currentScrollP = 0;
    const lerpAmount = 0.12;

    function updateTutorialFrame() {
        if (!tutorialWrapper) return;
        currentScrollP += (targetScrollP - currentScrollP) * lerpAmount;
        updateTutorial(currentScrollP);
        requestAnimationFrame(updateTutorialFrame);
    }
    requestAnimationFrame(updateTutorialFrame);

    window.addEventListener('scroll', () => {
        if (!tutorialWrapper) return;
        const rect = tutorialWrapper.getBoundingClientRect();
        const p = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
        targetScrollP = p;
    });

    function updateTutorial(p) {
        const hero = document.getElementById('step-0');
        if (hero) hero.style.opacity = Math.min(Math.max((0.2 - p) / 0.1, 0), 1);

        const mono = document.getElementById('step-0-5');
        if (mono) {
            const alpha = Math.min(Math.max((p - 0.2) / 0.08, 0), Math.max((0.4 - p) / 0.08, 0));
            mono.style.opacity = alpha;
        }

        const search = document.getElementById('step-1');
        if (search) search.style.opacity = Math.min(Math.max((p - 0.4) / 0.08, 0), Math.max((0.6 - p) / 0.08, 0));

        const card = document.getElementById('step-2');
        const props = document.getElementById('step-3');
        if (card && props) {
            const stepP = p >= 0.6 ? (p - 0.6) / 0.4 : 0;
            card.style.opacity = Math.min(1, stepP * 2);
            props.style.opacity = Math.min(Math.max((stepP - 0.4) / 0.6, 0), 1);
        }
    }

    // ═══════════════════════════════════════════
    // SEARCH & FILTERING
    // ═══════════════════════════════════════════
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = materialsData.filter(m => m.name.toLowerCase().includes(query) || m.category.toLowerCase().includes(query));
        renderMaterialsFromList(filtered);
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMaterials(btn.dataset.filter);
        });
    });

    function renderMaterials(filter) {
        const filtered = filter === 'all' ? materialsData : materialsData.filter(m => m.category.toLowerCase().includes(filter));
        renderMaterialsFromList(filtered);
    }

    function renderMaterialsFromList(list) {
        grid.innerHTML = '';
        list.forEach((material, index) => {
            const card = document.createElement('div');
            card.className = 'material-card revealed';
            card.innerHTML = `
                <div class="material-signature" style="--signature-color: ${material.color || '#00f2ff'}"></div>
                <span class="category">${material.category}</span>
                <h3>${material.name}</h3>
                <p>${material.tagline}</p>
            `;
            card.addEventListener('click', () => openMaterialPage(material));
            grid.appendChild(card);
        });
    }

    // ═══════════════════════════════════════════
    // MATERIAL DOSSIER (WEBGL)
    // ═══════════════════════════════════════════
    function openMaterialPage(material) {
        const applications = Object.entries(material.applications || {}).slice(0, 4);
        const params = material.latticeParams || { a: 0, b: 0, c: 0 };
        const mode = material.renderMode || 'lattice';
        
        const labels = {
            lattice: {
                l2_title: "The Unit Cell",
                l2_desc: `Entropy resolved. Atoms snapping into ${material.latticeType || 'crystalline'} order.`,
                l3_title: "3x3 Crystal Morph",
                l3_desc: "Single unit cell transformed into a macro-structural crystal block. Bulk properties manifest."
            },
            polymer: {
                l2_title: "The Monomer Chain",
                l2_desc: "Entropy resolved. Individual monomers docking and fusing into a covalent backbone chain.",
                l3_title: "Molecular Network",
                l3_desc: "Single chain entangling with others to form a high-strength fibrillar mesh."
            },
            network: {
                l2_title: "The Vitreous Network",
                l2_desc: "Entropy resolved. Atoms linking into a stochastic, non-repeating tetrahedral network.",
                l3_title: "Amorphous Cluster",
                l3_desc: "Localized network expanding into a massive, rigid atomic complex."
            }
        }[mode] || labels.lattice;

        pageDetail.innerHTML = `
            <div class="immersive-hud-container" id="hud-wrapper">
                <div class="hud-sticky-frame">
                    <div class="macro-label">SYSTEM_CORE: ASSEMBLY_ENGINE_ACTIVE</div>
                    <div class="hud-bg-effects"><div class="scanline-ribbon"></div><div class="digital-noise"></div></div>

                    <div class="hud-layer hud-text-layer">
                        <div class="hud-node node-header" id="node-0">
                            <span class="hud-label">LEVEL 01 // MATERIAL INTRODUCTION</span>
                            <h2 class="hud-title">${material.name}</h2>
                            <div class="hud-content">${material.tagline} Atoms floating in a state of high entropy.</div>
                        </div>
                        <div class="hud-node node-origin" id="node-1">
                            <span class="hud-label">LEVEL 02 // STRUCTURAL ASSEMBLY</span>
                            <h2 class="hud-title">${labels.l2_title}</h2>
                            <div class="hud-content">
                                ${labels.l2_desc}<br><br>
                                ${mode === 'lattice' ? `
                                    <div class="crystallography-hud">
                                        <div class="hud-stat"><strong>System:</strong> ${material.crystalSystem || 'N/A'}</div>
                                        <div class="hud-stat"><strong>Space Group:</strong> ${material.spaceGroup || 'N/A'}</div>
                                        <div class="hud-stat"><strong>Lattice:</strong> a:${params.a} | b:${params.b} | c:${params.c} Å</div>
                                    </div>
                                ` : `<strong>Primary Symbol:</strong> ${material.symbol}`}
                            </div>
                        </div>
                        <div class="hud-node node-diagnostic" id="node-2">
                            <span class="hud-label">LEVEL 03 // SCALE EXPANSION</span>
                            <h2 class="hud-title">${labels.l3_title}</h2>
                            <div class="hud-content">
                                ${labels.l3_desc}
                            </div>
                        </div>
                        <div class="hud-node node-reality" id="node-3">
                            <span class="hud-label">LEVEL 04 // APPLICATIONS</span>
                            <h2 class="hud-title">Industrial Utility</h2>
                            <div class="hud-content">
                                <ul class="deployment-list">
                                    ${applications.map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="hud-layer hud-visual-layer">
                        <div class="camera-lens" id="webgl-container" style="width:100%; height:100%;"></div>
                    </div>

                    <div class="hud-controls">
                        <button class="hud-close-btn" id="close-hud">TERMINATE SESSION [ESC]</button>
                        <div class="hud-progress-container"><div class="hud-progress-bar" id="hud-progress"></div></div>
                        <div class="hud-status-tag" id="hud-status">STATUS: ASSEMBLING ATOMS...</div>
                    </div>
                </div>
                <div class="scroll-track" style="height: 320vh; pointer-events: none;"></div>
            </div>
        `;

        pageDetail.classList.add('active');
        document.body.style.overflow = 'hidden';

        const container = document.getElementById('webgl-container');
        webgl = new WebGLCore(container);
        webgl.setupMaterial(material);

        const hudProgress = document.getElementById('hud-progress');
        const hudStatus = document.getElementById('hud-status');

        let currentProgress = 0;
        let targetProgress = 0;

        const updateFrame = () => {
            const scrollMax = pageDetail.scrollHeight - window.innerHeight;
            targetProgress = Math.min(Math.max(pageDetail.scrollTop / (scrollMax || 1), 0), 1);
            currentProgress += (targetProgress - currentProgress) * 0.08;
            
            const p = currentProgress;
            webgl.update(p);

            if (hudProgress) hudProgress.style.width = `${p * 100}%`;
            const phaseIndex = Math.min(3, Math.floor(p * 3.99));
            const statusMsgs = ["ATOM ENTROPY", "ASSEMBLING LATTICE", "STRUCTURAL GROWTH", "DE-MATERIALIZING"];
            if (hudStatus) hudStatus.textContent = `STATUS: ${statusMsgs[phaseIndex]} [DRIFT: ${(p * 100).toFixed(1)}%]`;

            for (let i = 0; i < 4; i++) {
                const node = document.getElementById(`node-${i}`);
                if (node) {
                    const nodeP = Math.max(0, 1 - Math.abs(p - (i * 0.25 + 0.125)) * 6);
                    node.style.opacity = nodeP;
                    node.style.transform = `translateY(-50%) translateX(${(1 - nodeP) * 40}px)`;
                }
            }

            if (pageDetail.classList.contains('active')) requestAnimationFrame(updateFrame);
        };

        requestAnimationFrame(updateFrame);

        document.getElementById('close-hud').onclick = () => {
            pageDetail.classList.remove('active');
            document.body.style.overflow = 'auto';
            if (webgl) webgl.dispose();
        };
    }

    // Skip Button Logic
    const skipBtn = document.getElementById('skip-to-archive');
    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            const library = document.getElementById('library');
            if (library) library.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Escape Key Listener
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (pageDetail.classList.contains('active')) {
                pageDetail.classList.remove('active');
                document.body.style.overflow = 'auto';
                if (webgl) webgl.dispose();
            }
            if (authorModal.classList.contains('active')) {
                authorModal.classList.remove('active');
                authorOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });

    initApp();
});
