document.addEventListener('DOMContentLoaded', () => {
    let materialsData = [];

    function loadMaterials() {
        try {
            materialsData = window.MaterialsDatabase || [];
            renderMaterials('all');
            populateCensus(materialsData);
        } catch (error) {
            console.error('Failed to load materials:', error);
        }
    }

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

    const authorOverlay = document.getElementById('author-overlay');

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

        // Fallback for click-outside if overlay is somehow missed
        authorModal.addEventListener('click', (e) => {
            if (e.target === authorModal) closeAll();
        });
    }

    // ═══════════════════════════════════════════
    // DIGITAL CENSUS BACKGROUND
    // ═══════════════════════════════════════════
    function populateCensus(materials) {
        const bg = document.getElementById('census-bg');
        if (!bg) return;

        const columnCount = 8;
        const names = materials.map(m => m.name);

        for (let i = 0; i < columnCount; i++) {
            const col = document.createElement('div');
            col.className = 'census-column';
            const shuffled = [...names].sort(() => Math.random() - 0.5);
            const content = [...shuffled, ...shuffled];
            col.innerHTML = content.map(name => `<span>${name.toUpperCase()}</span>`).join('');
            bg.appendChild(col);
        }
    }

    loadMaterials();

    // ═══════════════════════════════════════════
    // SKIP BUTTON
    // ═══════════════════════════════════════════
    const skipBtn = document.getElementById('skip-to-archive');
    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            document.getElementById('library').scrollIntoView({ behavior: 'smooth' });
        });

        // Hide skip button once past the tutorial
        window.addEventListener('scroll', () => {
            const library = document.getElementById('library');
            if (library) {
                const rect = library.getBoundingClientRect();
                skipBtn.style.opacity = rect.top > window.innerHeight ? '1' : '0';
                skipBtn.style.pointerEvents = rect.top > window.innerHeight ? 'auto' : 'none';
            }
        });
    }

    // ═══════════════════════════════════════════
    // SCROLLYTELLING — 3 Phases Only
    // Hero → Search → Card + Properties
    // ═══════════════════════════════════════════
    const tutorialSteps = {
        s0: document.getElementById('step-0'),
        s1: document.getElementById('step-1'),
        s2: document.getElementById('step-2'),
        s3: document.getElementById('step-3')
    };

    // Smooth Lerped Scroll Progress
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
        // Phase 0: Hero (0% - 20%)
        const hero = document.getElementById('step-0');
        if (hero) {
            const heroOut = Math.min(Math.max((0.2 - p) / 0.1, 0), 1);
            hero.style.opacity = heroOut;
            hero.style.transform = `scale(${1 + (1 - heroOut) * 0.05})`;
        }

        // Phase 0.5: Monograph (20% - 40%)
        const mono = document.getElementById('step-0-5');
        if (mono) {
            const monoIn = Math.min(Math.max((p - 0.2) / 0.08, 0), 1);
            const monoOut = Math.min(Math.max((0.4 - p) / 0.08, 0), 1);
            const alpha = Math.min(monoIn, monoOut);
            mono.style.opacity = alpha;

            const lines = mono.querySelectorAll('.mono-line');
            const monoProgress = Math.min(Math.max((p - 0.2) / 0.2, 0), 1);
            lines.forEach((line, i) => {
                const delay = i * 0.12;
                const lineP = Math.min(Math.max((monoProgress - delay) / 0.4, 0), 1);
                line.style.opacity = lineP;
                line.style.transform = `translateY(${(1 - lineP) * 15}px)`;
            });
        }

        // Phase 1: Search (40% - 60%)
        const search = document.getElementById('step-1');
        if (search) {
            const searchIn = Math.min(Math.max((p - 0.4) / 0.08, 0), 1);
            const searchOut = Math.min(Math.max((0.6 - p) / 0.08, 0), 1);
            search.style.opacity = Math.min(searchIn, searchOut);
            if (p >= 0.4 && p <= 0.6) {
                simulateTypingTutorial((p - 0.4) / 0.2);
            }
        }

        // Phase 2 & 3: Nitinol Card + Properties (60% - 100%)
        const card = document.getElementById('step-2');
        const props = document.getElementById('step-3');
        if (card && props) {
            const stepP = p >= 0.6 ? (p - 0.6) / 0.4 : 0;
            const propP = Math.min(Math.max((stepP - 0.4) / 0.6, 0), 1);

            card.style.opacity = Math.min(1, stepP * 2);
            props.style.opacity = propP;

            const wings = document.querySelectorAll('.tutorial-card-wing');
            wings.forEach(w => { w.style.opacity = Math.min(1, stepP * 2.5) * (1 - propP * 0.4); });

            const orbits = document.querySelectorAll('.orbit-item');
            orbits.forEach((orb, i) => {
                const delay = i * 0.08;
                const orbP = Math.min(Math.max((propP - delay) / 0.5, 0), 1);
                orb.style.opacity = orbP;
                orb.style.transform = `translate(-50%, -50%) rotate(${orb.style.getPropertyValue('--angle')}) translateY(-280px) rotate(calc(-1 * ${orb.style.getPropertyValue('--angle')}))`;
            });

            // Nitinol Memory Animation
            const lattice = document.getElementById('lattice-anim-target');
            const pattern = document.getElementById('square-pattern');
            if (lattice && pattern) {
                const skew = Math.max(0, 35 * (1 - (stepP / 0.7)));
                pattern.setAttribute('patternTransform', `skewX(${skew})`);
                lattice.style.filter = `blur(${skew * 0.1}px)`;
                const pulse = stepP > 0.7 ? 1 + (stepP - 0.7) * 0.05 : 1;
                lattice.style.transform = `scale(${pulse})`;
                lattice.style.opacity = 0.15 + (stepP > 0.7 ? (stepP - 0.7) * 0.5 : 0);
            }
        }

        // Narrative is now handled by the step-monograph and kinetic reveal logic above
    }

    function simulateTypingTutorial(p) {
        const target = document.querySelector('.type-target-tutorial');
        if (!target) return;
        const text = "Searching for Nitinol...";
        const charCount = Math.floor(p * text.length);
        target.innerText = text.substring(0, charCount) + "_";
    }

    // ═══════════════════════════════════════════
    // SEARCH LOGIC
    // ═══════════════════════════════════════════
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = materialsData.filter(m =>
            m.name.toLowerCase().includes(query) ||
            m.category.toLowerCase().includes(query) ||
            m.tagline.toLowerCase().includes(query)
        );
        renderMaterialsFromList(filtered);
        document.getElementById('library').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = e.target.value.toLowerCase();
            const filtered = materialsData.filter(m =>
                m.name.toLowerCase().includes(query) ||
                m.category.toLowerCase().includes(query)
            );
            if (filtered.length === 1) {
                openMaterialPage(filtered[0]);
                searchInput.value = '';
                renderMaterials('all');
            }
        }
    });

    // Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMaterials(btn.dataset.filter);
        });
    });

    // ═══════════════════════════════════════════
    // MATERIAL RENDERING
    // ═══════════════════════════════════════════
    function renderMaterials(filter) {
        let filtered = filter === 'all'
            ? materialsData
            : materialsData.filter(m => m.category.toLowerCase().includes(filter));

        renderMaterialsFromList(filtered);
    }

    function renderMaterialsFromList(list) {
        grid.innerHTML = '';

        if (list.length === 0) {
            grid.innerHTML = `
                <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 4rem; background: var(--glass-bg); border-radius: var(--radius-lg); border: 1px solid var(--glass-border);">
                    <span class="section-meta">Archive Error</span>
                    <h3 style="margin: 1rem 0;">No matching material found.</h3>
                    <p style="color: var(--muted-text);">Try searching for a broader term or check your spelling.</p>
                </div>
            `;
            return;
        }

        list.forEach((material, index) => {
            const card = document.createElement('div');
            card.className = 'material-card revealed';

            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <div class="material-signature" style="--signature-color: ${material.color}"></div>
                <span class="category">${material.category}</span>
                <h3>${material.name}</h3>
                <p>${material.tagline}</p>
            `;

            card.addEventListener('click', () => openMaterialPage(material));
            grid.appendChild(card);
            if (index >= 12) observer.observe(card);
        });
    }

    // ═══════════════════════════════════════════
    // MATERIAL DOSSIER — Deep Rendering
    // ═══════════════════════════════════════════

    function openMaterialPage(material) {
        // Prepare the 5 Engineering Pillars for the Header Background
        const pillars = ['mechanical', 'thermal', 'chemical', 'electrical', 'magnetic'];
        const pillarHTML = pillars.map((type, index) => {
            const data = material.engineering[type] || {};
            const cells = Object.entries(data).map(([k, v]) => `
                <div class="data-cell">
                    <span class="cell-k">${k}</span>
                    <span class="cell-v">${v}</span>
                </div>
            `).join('');

            return `
                <div class="data-pillar" style="transition-delay: ${index * 150}ms">
                    <span class="pillar-label">${type}</span>
                    ${cells || '<span class="cell-v" style="opacity:0.2">DATA_PENDING</span>'}
                </div>
            `;
        }).join('');

        // Prepare Reality List
        const realityList = Object.entries(material.applications || {}).map(([label, value]) => `
            <li>
                <span>${label}</span>
                <span>${value}</span>
            </li>
        `).join('');

        detailContent.innerHTML = `
            <div class="dossier-header">
                <div class="bg-data-grid">${pillarHTML}</div>
                <div class="header-hero-content">
                    <span class="category dossier-reveal">${material.category}</span>
                    <h2 class="dossier-reveal">${material.name}</h2>
                    <p class="tagline dossier-reveal">${material.tagline}</p>
                </div>
            </div>

            <section class="monograph-section">
                <div class="monograph-content">
                    ${material.history_and_lore.split('\n\n').map(p => `<p class="dossier-reveal">${p}</p>`).join('')}
                </div>
            </section>

            <section class="reality-section">
                <div class="reality-grid">
                    <div class="reality-card dossier-reveal">
                        <span class="reality-title">Operational Reality</span>
                        <ul class="reality-list">
                            ${realityList}
                        </ul>
                    </div>
                    <div class="reality-card dossier-reveal" style="background: transparent; border: none; padding: 0;">
                        <span class="reality-title">Synthesis Path</span>
                        <p style="font-size: 1.1rem; line-height: 1.8; color: var(--muted-text); font-weight: 300; margin-bottom: 3rem;">
                            ${material.synthesis}
                        </p>
                        <span class="reality-title">Future Potential</span>
                        <p style="font-size: 1.1rem; line-height: 1.8; color: var(--soft-white); font-weight: 300;">
                            ${material.future_potential}
                        </p>
                    </div>
                </div>
            </section>

            <section class="warning-section">
                <div class="warning-box dossier-reveal">
                    <span class="warning-label">Structural Vulnerabilities</span>
                    <div class="warning-content">
                        ${material.vulnerabilities}
                    </div>
                </div>
            </section>
        `;

        pageDetail.classList.add('active');
        pageDetail.scrollTop = 0;
        document.body.style.overflow = 'hidden';

        // Initialize Internal Observer for Dossier Elements
        const dossierObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        // Trigger Active state for staggered animations
        setTimeout(() => {
            pageDetail.classList.add('dossier-active');

            // Re-observe new elements
            const newElements = detailContent.querySelectorAll('.dossier-reveal');
            newElements.forEach(el => dossierObserver.observe(el));
        }, 50);

        // Kinetic Parallax Scroll Effect
        const parallaxGrid = detailContent.querySelector('.bg-data-grid');
        pageDetail.onscroll = () => {
            const scrolled = pageDetail.scrollTop;
            if (parallaxGrid) {
                parallaxGrid.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        };

        window.scrollTo(0, 0);
    }

    backBtn.addEventListener('click', () => {
        pageDetail.classList.remove('active', 'dossier-active');
        pageDetail.onscroll = null; // Clean up parallax
        document.body.style.overflow = 'auto';
    });


    // Smooth scroll for nav links (excluding the Author modal trigger)
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href.startsWith('#')) return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
