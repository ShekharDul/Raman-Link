export const MaterialsDatabase = [
    // ═══════════════════════════════════════════
    // SEMICONDUCTORS
    // ═══════════════════════════════════════════
    {
        id: 'silicon',
        name: 'Silicon (Si)',
        category: 'semiconductor',
        tagline: 'The Brain of the Digital Age.',
        industrial_use: 'ICs, microprocessors, solar cells',
        key_property: 'Single crystal purity',
        history_and_lore: "The foundation of the modern world. Silicon's diamond-cubic lattice allows for precise control of electron flow via doping. Single crystals are grown in massive boules to ensure near-zero defect density for microprocessors.",
        engineering: {
            crystallography: { "System": "Cubic", "Space Group": "Fd-3m", "Unit Cell": "a=5.43Å" },
            electrical: { "Band Gap": "1.12 eV", "State": "Semiconductor" },
            synthesis: "Czochralski process for single-crystal growth."
        },
        dimensions: 3,
        system: 'cubic',
        spaceGroup: 'Fd-3m',
        crystalSystem: 'Cubic',
        renderMode: 'lattice',
        latticeType: 'diamond',
        blueprint: {
            atoms: [
                { type: 'Si', pos: [-25,-25,-25], color: '#1e88e5', size: 6 }, { type: 'Si', pos: [25,-25,-25], color: '#1e88e5', size: 6 },
                { type: 'Si', pos: [25,25,-25], color: '#1e88e5', size: 6 }, { type: 'Si', pos: [-25,25,-25], color: '#1e88e5', size: 6 },
                { type: 'Si', pos: [-25,-25,25], color: '#1e88e5', size: 6 }, { type: 'Si', pos: [25,-25,25], color: '#1e88e5', size: 6 },
                { type: 'Si', pos: [25,25,25], color: '#1e88e5', size: 6 }, { type: 'Si', pos: [-25,25,25], color: '#1e88e5', size: 6 },
                { type: 'Si', pos: [0, -12, 0], color: '#1e88e5', size: 6 }, { type: 'Si', pos: [0, 12, 0], color: '#1e88e5', size: 6 },
                { type: 'Si', pos: [-12.5, 12.5, 12.5], color: '#1e88e5', size: 6 }, { type: 'Si', pos: [12.5, -12.5, 12.5], color: '#1e88e5', size: 6 }
            ],
            bonds: [[0,8], [1,11], [4,8], [5,11], [8,9], [9,10], [2,9], [3,10], [6,9], [7,10]]
        },
        latticeParams: { a: 5.43, b: 5.43, c: 5.43 },
        palette: { primary: '#1e88e5', secondary: '#0d47a1', accent: '#ffffff' }
    },
    {
        id: 'gaas',
        name: 'Gallium Arsenide (GaAs)',
        category: 'semiconductor',
        tagline: 'High-Frequency Speed.',
        industrial_use: 'Satellite and mobile communications',
        key_property: 'High electron mobility',
        history_and_lore: "GaAs possesses a Zincblende structure. Electrons travel through GaAs much faster than Silicon, making it the material of choice for high-speed satellite communications and microwave circuitry.",
        engineering: {
            crystallography: { "System": "Cubic (Zincblende)", "Space Group": "F-43m", "Unit Cell": "a=5.65Å" },
            electrical: { "Electron Mobility": "8500 cm²/V·s", "Band Gap": "1.42 eV" },
            synthesis: "Metal-Organic Chemical Vapor Deposition (MOCVD)."
        },
        dimensions: 3,
        system: 'cubic',
        spaceGroup: 'F-43m',
        crystalSystem: 'Cubic',
        renderMode: 'lattice',
        latticeType: 'zincblende',
        blueprint: {
            atoms: [
                { type: 'Ga', pos: [-25,-25,-25], color: '#ff4081', size: 6 }, { type: 'Ga', pos: [25,25,-25], color: '#ff4081', size: 6 },
                { type: 'Ga', pos: [25,-25,25], color: '#ff4081', size: 6 }, { type: 'Ga', pos: [-25,25,25], color: '#ff4081', size: 6 },
                { type: 'As', pos: [0,0,0], color: '#ffeb3b', size: 5 }, { type: 'As', pos: [25,-25,-25], color: '#ffeb3b', size: 5 },
                { type: 'As', pos: [-25,25,-25], color: '#ffeb3b', size: 5 }, { type: 'As', pos: [-25,-25,25], color: '#ffeb3b', size: 5 }
            ],
            bonds: [[0,4], [1,4], [2,4], [3,4]]
        },
        latticeParams: { a: 5.65, b: 5.65, c: 5.65 },
        palette: { primary: '#ff4081', secondary: '#c2185b', accent: '#ffeb3b' }
    },
    {
        id: 'sic',
        name: 'Silicon Carbide (SiC)',
        category: 'semiconductor',
        tagline: 'The Power Semiconductor.',
        industrial_use: 'EV power systems, high-temp electronics',
        key_property: 'Wide bandgap',
        history_and_lore: "SiC exists in hundreds of polytypes. Its wide bandgap allows it to handle much higher voltages and temperatures than Silicon, enabling the ultra-fast charging of modern electric vehicles.",
        engineering: {
            crystallography: { "System": "Hexagonal (6H-SiC)", "Space Group": "P63mc", "Lattice": "a=3.07Å, c=15.12Å" },
            electrical: { "Breakdown Field": "3 MV/cm", "Band Gap": "3.2 eV" },
            thermal: { "Conductivity": "370 W/m·K" }
        },
        dimensions: 3,
        system: 'hexagonal',
        spaceGroup: 'P63mc',
        crystalSystem: 'Hexagonal',
        renderMode: 'lattice',
        blueprint: {
            atoms: [
                { type: 'Si', pos: [0,0,0], color: '#78909c', size: 6 },
                { type: 'C', pos: [0,0,15], color: '#263238', size: 4 },
                { type: 'Si', pos: [15,8,0], color: '#78909c', size: 6 }
            ],
            bonds: [[0,1], [1,2]]
        },
        latticeParams: { a: 3.07, b: 3.07, c: 15.12 },
        palette: { primary: '#546e7a', secondary: '#263238', accent: '#ffffff' }
    },
    {
        id: 'gan',
        name: 'Gallium Nitride (GaN)',
        category: 'semiconductor',
        tagline: 'Efficient Energy Control.',
        industrial_use: 'High-power electronics, LEDs',
        key_property: 'High thermal conductivity',
        history_and_lore: "GaN is a binary III/V direct bandgap semiconductor with a wurtzite crystal structure. It is revolutionary for its ability to handle high power densities with minimal heat generation, powering everything from fast chargers to advanced radar.",
        engineering: {
            crystallography: { "System": "Hexagonal (Wurtzite)", "Space Group": "P63mc", "Lattice": "a=3.18Å, c=5.18Å" },
            electrical: { "Electron Velocity": "2.5 x 10^7 cm/s", "Band Gap": "3.4 eV" }
        },
        dimensions: 3,
        system: 'hexagonal',
        spaceGroup: 'P63mc',
        crystalSystem: 'Hexagonal',
        renderMode: 'lattice',
        blueprint: {
            atoms: [
                { type: 'Ga', pos: [0,0,0], color: '#9c27b0', size: 6 },
                { type: 'N', pos: [0,12,0], color: '#ffffff', size: 4 },
                { type: 'Ga', pos: [12,6,20], color: '#9c27b0', size: 6 }
            ],
            bonds: [[0,1], [1,2]]
        },
        latticeParams: { a: 3.18, b: 3.18, c: 5.18 },
        palette: { primary: '#9c27b0', secondary: '#4a148c', accent: '#ffffff' }
    },

    // ═══════════════════════════════════════════
    // POLYMERS (SEMI-CRYSTALLINE)
    // ═══════════════════════════════════════════
    {
        id: 'hdpe',
        name: 'HDPE',
        category: 'polymer',
        tagline: 'The Workhorse Thermoplastic.',
        industrial_use: 'Piping, fuel lines, containers',
        key_property: 'Structural rigidity',
        history_and_lore: "High-Density Polyethylene achieves its strength through high degree of crystallinity. Linear chains pack tightly into orthorhombic crystalline domains, creating a material that is tough, rigid, and resistant to many chemicals.",
        engineering: {
            crystallography: { "Crystallinity": "70-90%", "Domain System": "Orthorhombic", "Density": "0.95 g/cm³" },
            mechanical: { "Yield Strength": "25 MPa", "Modulus": "0.8 GPa" }
        },
        dimensions: 3,
        system: 'orthorhombic',
        crystalSystem: 'Orthorhombic (Domains)',
        renderMode: 'polymer',
        blueprint: {
            atoms: [
                { type: 'C', pos: [-30,-10,0], color: '#ffffff', size: 5 }, { type: 'C', pos: [-15,10,0], color: '#ffffff', size: 5 },
                { type: 'C', pos: [0,-10,0], color: '#ffffff', size: 5 }, { type: 'C', pos: [15,10,0], color: '#ffffff', size: 5 }
            ],
            bonds: [[0,1], [1,2], [2,3]]
        },
        palette: { primary: '#ffffff', secondary: '#9e9e9e', accent: '#00f2ff' }
    },
    {
        id: 'peek',
        name: 'PEEK',
        category: 'polymer',
        tagline: 'The King of Plastics.',
        industrial_use: 'Aerospace, medical implants',
        key_property: 'High thermal stability',
        history_and_lore: "PEEK is a semi-crystalline thermoplastic with excellent mechanical and chemical resistance properties that are retained to high temperatures. Its rigid aromatic backbone allows for the formation of stable crystalline regions.",
        engineering: {
            crystallography: { "Crystallinity": "30-35%", "System": "Orthorhombic", "Tg": "143 °C" },
            mechanical: { "Tensile Strength": "100 MPa", "Modulus": "3.6 GPa" }
        },
        dimensions: 3,
        system: 'orthorhombic',
        crystalSystem: 'Orthorhombic',
        renderMode: 'polymer',
        blueprint: {
            atoms: [
                { type: 'C', pos: [-30,0,0], color: '#f4a460', size: 5 },
                { type: 'C', pos: [-15,15,0], color: '#f4a460', size: 5 },
                { type: 'O', pos: [0,0,0], color: '#ff5252', size: 4 },
                { type: 'C', pos: [15,15,0], color: '#f4a460', size: 5 }
            ],
            bonds: [[0,1], [1,2], [2,3]]
        },
        palette: { primary: '#f4a460', secondary: '#8b4513', accent: '#ff5252' }
    },

    // ═══════════════════════════════════════════
    // HARD CRYSTALS
    // ═══════════════════════════════════════════
    {
        id: 'diamond',
        name: 'Diamond',
        category: 'hard-crystal',
        tagline: 'The Unbreakable Lattice.',
        industrial_use: 'Cutting, grinding, drilling tools',
        key_property: 'Extreme hardness',
        history_and_lore: "The ultimate expression of covalent carbon. Diamond's Fd-3m cubic lattice makes it the hardest material in nature. Every carbon is locked in a tetrahedral cage of four other atoms, creating an invincible structural network.",
        engineering: {
            crystallography: { "System": "Cubic", "Space Group": "Fd-3m", "Hardness": "10 Mohs" },
            thermal: { "Conductivity": "2200 W/m·K" }
        },
        dimensions: 3,
        system: 'cubic',
        spaceGroup: 'Fd-3m',
        crystalSystem: 'Cubic',
        renderMode: 'lattice',
        latticeType: 'diamond',
        blueprint: {
            atoms: [
                { type: 'C', pos: [-25,-25,-25], color: '#00ffff', size: 5 }, { type: 'C', pos: [25,-25,-25], color: '#00ffff', size: 5 },
                { type: 'C', pos: [25,25,-25], color: '#00ffff', size: 5 }, { type: 'C', pos: [-25,25,-25], color: '#00ffff', size: 5 },
                { type: 'C', pos: [-25,-25,25], color: '#00ffff', size: 5 }, { type: 'C', pos: [25,-25,25], color: '#00ffff', size: 5 },
                { type: 'C', pos: [25,25,25], color: '#00ffff', size: 5 }, { type: 'C', pos: [-25,25,25], color: '#00ffff', size: 5 },
                { type: 'C', pos: [0, -12, 0], color: '#00ffff', size: 5 }, { type: 'C', pos: [0, 12, 0], color: '#00ffff', size: 5 },
                { type: 'C', pos: [-12.5, 12.5, 12.5], color: '#00ffff', size: 5 }, { type: 'C', pos: [12.5, -12.5, 12.5], color: '#00ffff', size: 5 }
            ],
            bonds: [[0,8], [1,11], [4,8], [5,11], [8,9], [9,10], [2,9], [3,10], [6,9], [7,10]]
        },
        latticeParams: { a: 3.57, b: 3.57, c: 3.57 },
        palette: { primary: '#00ffff', secondary: '#008b8b', accent: '#ffffff' }
    },
    {
        id: 'quartz',
        name: 'Quartz (SiO2)',
        category: 'hard-crystal',
        tagline: 'The Heartbeat of Tech.',
        industrial_use: 'Frequency control, piezoelectric sensors',
        key_property: 'Piezoelectricity',
        history_and_lore: "Quartz crystallizes in a trigonal system. Its lack of inversion symmetry allows it to generate an electric potential when mechanically stressed (piezoelectricity), making it vital for all modern oscillators and clocks.",
        engineering: {
            crystallography: { "System": "Hexagonal (Trigonal)", "Space Group": "P3121", "Hardness": "7 Mohs" },
            electrical: { "Piezoelectric": "High" }
        },
        dimensions: 3,
        system: 'hexagonal',
        spaceGroup: 'P3121',
        crystalSystem: 'Hexagonal',
        renderMode: 'lattice',
        blueprint: {
            atoms: [
                { type: 'Si', pos: [0,0,0], color: '#ffffff', size: 6 },
                { type: 'O', pos: [15,10,5], color: '#00f2ff', size: 4 },
                { type: 'O', pos: [-15,10,-5], color: '#00f2ff', size: 4 }
            ],
            bonds: [[0,1], [0,2]]
        },
        latticeParams: { a: 4.91, b: 4.91, c: 5.40 },
        palette: { primary: '#ffffff', secondary: '#cccccc', accent: '#00f2ff' }
    },

    // ═══════════════════════════════════════════
    // METALS / ALLOYS
    // ═══════════════════════════════════════════
    {
        id: 'steel',
        name: 'Steel / Iron',
        category: 'metal',
        tagline: 'The Skeleton of the World.',
        industrial_use: 'Construction, infrastructure',
        key_property: 'BCC/FCC grain structure',
        history_and_lore: "Steel's utility comes from its phase transitions. From BCC ferrite to FCC austenite, the way carbon atoms sit in the lattice allows us to tune the material's hardness and ductility with extreme precision.",
        engineering: {
            crystallography: { "Phase": "Ferrite (BCC) / Austenite (FCC)", "Space Group": "Im-3m / Fm-3m" },
            mechanical: { "Modulus": "200 GPa", "Yield Strength": "250-2000 MPa" }
        },
        dimensions: 3,
        system: 'cubic',
        crystalSystem: 'Cubic',
        renderMode: 'lattice',
        latticeType: 'bcc',
        blueprint: {
            atoms: [
                { type: 'Fe', pos: [-25,-25,-25], color: '#78909c', size: 6 }, { type: 'Fe', pos: [25,-25,-25], color: '#78909c', size: 6 },
                { type: 'Fe', pos: [25,25,-25], color: '#78909c', size: 6 }, { type: 'Fe', pos: [-25,25,-25], color: '#78909c', size: 6 },
                { type: 'Fe', pos: [-25,-25,25], color: '#78909c', size: 6 }, { type: 'Fe', pos: [25,-25,25], color: '#78909c', size: 6 },
                { type: 'Fe', pos: [25,25,25], color: '#78909c', size: 6 }, { type: 'Fe', pos: [-25,25,25], color: '#78909c', size: 6 },
                { type: 'Fe', pos: [0,0,0], color: '#78909c', size: 6 }
            ],
            bonds: [[0,8], [1,8], [2,8], [3,8], [4,8], [5,8], [6,8], [7,8]]
        },
        latticeParams: { a: 2.87, b: 2.87, c: 2.87 },
        palette: { primary: '#90a4ae', secondary: '#263238', accent: '#ff5722' }
    },
    {
        id: 'copper',
        name: 'Copper / Aluminium',
        category: 'metal',
        tagline: 'High Conductivity Lattices.',
        industrial_use: 'Electrical wiring, aerospace',
        key_property: 'High conductivity (FCC)',
        history_and_lore: "Both Copper and Aluminium share the FCC crystal structure. Their close-packed lattice allows for efficient electron transport and exceptional workability, making them essential for our electrical and aerospace infrastructure.",
        engineering: {
            crystallography: { "System": "Cubic (FCC)", "Space Group": "Fm-3m" },
            electrical: { "Conductivity": "59.6 MS/m (Cu)" }
        },
        dimensions: 3,
        system: 'cubic',
        crystalSystem: 'Cubic',
        renderMode: 'lattice',
        latticeType: 'fcc',
        blueprint: {
            atoms: [
                { type: 'Cu', pos: [-25,-25,-25], color: '#ff8c00', size: 6 }, { type: 'Cu', pos: [25,-25,-25], color: '#ff8c00', size: 6 },
                { type: 'Cu', pos: [25,25,-25], color: '#ff8c00', size: 6 }, { type: 'Cu', pos: [-25,25,-25], color: '#ff8c00', size: 6 },
                { type: 'Cu', pos: [0,-25,0], color: '#ff8c00', size: 6 }, { type: 'Cu', pos: [0,25,0], color: '#ff8c00', size: 6 },
                { type: 'Cu', pos: [-25,0,0], color: '#ff8c00', size: 6 }, { type: 'Cu', pos: [25,0,0], color: '#ff8c00', size: 6 }
            ],
            bonds: [[0,4], [4,1], [1,7], [7,2], [2,5], [5,3], [3,6], [6,0]]
        },
        latticeParams: { a: 3.61, b: 3.61, c: 3.61 },
        palette: { primary: '#ff8c00', secondary: '#8b4513', accent: '#ffffff' }
    },

    // ═══════════════════════════════════════════
    // FUNCTIONAL CRYSTALS
    // ═══════════════════════════════════════════
    {
        id: 'zeolite',
        name: 'Zeolites',
        category: 'functional',
        tagline: 'Atomic Cages.',
        industrial_use: 'Catalysis, molecular separation',
        key_property: 'Microporous structure',
        history_and_lore: "Zeolites are microporous, aluminosilicate minerals. Their crystalline structure consists of a complex network of channels and cages that can 'trap' specific molecules, acting as high-performance molecular sieves.",
        engineering: {
            crystallography: { "Structure": "Faujasite (FAU) / MFI", "System": "Cubic / Hexagonal", "Porosity": "High" },
            chemical: { "Ion Exchange": "Excellent", "Catalysis": "Molecular Tuning" }
        },
        dimensions: 3,
        system: 'cubic',
        crystalSystem: 'Cubic (Complex)',
        renderMode: 'lattice',
        blueprint: {
            atoms: [
                { type: 'Si', pos: [0,0,0], color: '#00f2ff', size: 4 },
                { type: 'O', pos: [15,15,0], color: '#ffffff', size: 2.5 },
                { type: 'Al', pos: [30,30,0], color: '#ff4081', size: 4 },
                { type: 'O', pos: [15,0,15], color: '#ffffff', size: 2.5 }
            ],
            bonds: [[0,1], [1,2], [0,3]]
        },
        latticeParams: { a: 24.3, b: 24.3, c: 24.3 },
        palette: { primary: '#00f2ff', secondary: '#006064', accent: '#ff4081' }
    },
    {
        id: 'pp',
        name: 'Polypropylene (PP)',
        category: 'polymer',
        tagline: 'The Versatile Polymer.',
        industrial_use: 'Medical storage, automotive parts',
        key_property: 'Chemical resistance',
        history_and_lore: "PP is a semi-crystalline thermoplastic. Its helical chain structure allows for high crystallinity, providing excellent fatigue resistance and chemical stability, particularly in medical environments.",
        engineering: {
            crystallography: { "System": "Monoclinic (Alpha-PP)", "Crystallinity": "30-60%" },
            thermal: { "Melting Point": "160 °C" }
        },
        dimensions: 3,
        system: 'other',
        crystalSystem: 'Monoclinic',
        renderMode: 'polymer',
        blueprint: {
            atoms: [
                { type: 'C', pos: [-30,-10,0], color: '#9c27b0', size: 5 }, { type: 'C', pos: [-15,10,0], color: '#9c27b0', size: 5 },
                { type: 'C', pos: [0,-10,0], color: '#9c27b0', size: 5 }, { type: 'C', pos: [15,10,0], color: '#9c27b0', size: 5 }
            ],
            bonds: [[0,1], [1,2], [2,3]]
        },
        palette: { primary: '#9c27b0', secondary: '#4a148c', accent: '#ffffff' }
    },
    {
        id: 'ptfe',
        name: 'PTFE (Teflon)',
        category: 'polymer',
        tagline: 'The Low-Friction Legend.',
        industrial_use: 'Chemical gaskets, low-friction seals',
        key_property: 'Chemical inertness',
        history_and_lore: "Polytetrafluoroethylene is a high-molecular-weight polymer. The carbon backbone is entirely shielded by fluorine atoms, creating a highly stable, low-friction crystalline structure.",
        engineering: {
            crystallography: { "System": "Hexagonal / Triclinic", "Crystallinity": "60-80%" },
            thermal: { "Melting Point": "327 °C" }
        },
        dimensions: 3,
        system: 'hexagonal',
        crystalSystem: 'Hexagonal',
        renderMode: 'polymer',
        blueprint: {
            atoms: [
                { type: 'C', pos: [-30,0,0], color: '#757575', size: 5 }, { type: 'F', pos: [-30,12,0], color: '#ffffff', size: 4 },
                { type: 'C', pos: [-10,0,0], color: '#757575', size: 5 }, { type: 'F', pos: [-10,-12,0], color: '#ffffff', size: 4 }
            ],
            bonds: [[0,1], [0,2], [2,3]]
        },
        palette: { primary: '#eeeeee', secondary: '#9e9e9e', accent: '#ffffff' }
    },
    {
        id: 'cbn',
        name: 'Cubic Boron Nitride',
        category: 'hard-crystal',
        tagline: 'The Industrial Workhorse.',
        industrial_use: 'Steel grinding, industrial machining',
        key_property: 'Thermal stability',
        history_and_lore: "cBN is second only to diamond in hardness but possesses superior thermal and chemical stability when machining ferrous materials. Its zincblende structure is a perfect analogue to diamond.",
        engineering: {
            crystallography: { "System": "Cubic", "Space Group": "F-43m", "Hardness": "Mohs 9.5" },
            thermal: { "Stability": "Up to 1400 °C" }
        },
        dimensions: 3,
        system: 'cubic',
        spaceGroup: 'F-43m',
        crystalSystem: 'Cubic',
        renderMode: 'lattice',
        blueprint: {
            atoms: [
                { type: 'B', pos: [-25,-25,-25], color: '#ffeb3b', size: 5 }, { type: 'N', pos: [0,0,0], color: '#2196f3', size: 5 }
            ],
            bonds: [[0,1]]
        },
        palette: { primary: '#ffeb3b', secondary: '#fbc02d', accent: '#2196f3' }
    },
    {
        id: 'tungsten',
        name: 'Tungsten',
        category: 'metal',
        tagline: 'High-Temperature Endurance.',
        industrial_use: 'Filaments, heavy alloys',
        key_property: 'High melting point (BCC)',
        history_and_lore: "Tungsten has the highest melting point of all metals. Its heavy BCC lattice provides incredible density and structural integrity at extreme temperatures.",
        engineering: {
            crystallography: { "System": "Cubic (BCC)", "Space Group": "Im-3m" },
            thermal: { "Melting Point": "3422 °C" }
        },
        dimensions: 3,
        system: 'cubic',
        crystalSystem: 'Cubic',
        renderMode: 'lattice',
        latticeType: 'bcc',
        blueprint: {
            atoms: [
                { type: 'W', pos: [-25,-25,-25], color: '#455a64', size: 7 }, { type: 'W', pos: [0,0,0], color: '#455a64', size: 7 }
            ],
            bonds: [[0,1]]
        },
        palette: { primary: '#455a64', secondary: '#263238', accent: '#ffffff' }
    },
    {
        id: 'aluminum',
        name: 'Aluminium',
        category: 'metal',
        tagline: 'Lightweight Versatility.',
        industrial_use: 'Aerospace, packaging',
        key_property: 'Low density (FCC)',
        history_and_lore: "Aluminium's FCC structure allows for high ductility and excellent weight-to-strength ratio, essential for the aerospace industry.",
        engineering: {
            crystallography: { "System": "Cubic (FCC)", "Space Group": "Fm-3m" },
            mechanical: { "Density": "2.7 g/cm³" }
        },
        dimensions: 3,
        system: 'cubic',
        crystalSystem: 'Cubic',
        renderMode: 'lattice',
        latticeType: 'fcc',
        blueprint: {
            atoms: [
                { type: 'Al', pos: [-25,-25,-25], color: '#cfd8dc', size: 6 }, { type: 'Al', pos: [0,-25,0], color: '#cfd8dc', size: 6 }
            ],
            bonds: [[0,1]]
        },
        palette: { primary: '#cfd8dc', secondary: '#90a4ae', accent: '#ffffff' }
    },
    {
        id: 'ndyag',
        name: 'Nd:YAG',
        category: 'functional',
        tagline: 'The Laser Engine.',
        industrial_use: 'Industrial and medical lasers',
        key_property: 'Optical gain',
        history_and_lore: "Neodymium-doped Yttrium Aluminium Garnet is a complex cubic crystal. It is the most common active laser medium, prized for its excellent thermal and optical properties.",
        engineering: {
            crystallography: { "System": "Cubic (Garnet)", "Space Group": "Ia-3d" },
            optical: { "Gain": "High", "Wavelength": "1064 nm" }
        },
        dimensions: 3,
        system: 'cubic',
        crystalSystem: 'Cubic',
        renderMode: 'lattice',
        blueprint: {
            atoms: [
                { type: 'Y', pos: [-25,-25,-25], color: '#ffc107', size: 5 }, { type: 'Al', pos: [0,0,0], color: '#ff5722', size: 4 },
                { type: 'Nd', pos: [25,25,25], color: '#4caf50', size: 6 }
            ],
            bonds: [[0,1], [1,2]]
        },
        palette: { primary: '#ffc107', secondary: '#ff8f00', accent: '#4caf50' }
    },
    {
        id: 'zeolite',
        name: 'Zeolites',
        category: 'functional',
        tagline: 'Atomic Cages.',
        industrial_use: 'Catalysis, molecular separation',
        key_property: 'Microporous structure',
        history_and_lore: "Zeolites are microporous, aluminosilicate minerals. Their crystalline structure consists of a complex network of channels and cages that can 'trap' specific molecules, acting as high-performance molecular sieves.",
        engineering: {
            crystallography: { "Structure": "Faujasite (FAU) / MFI", "System": "Cubic / Hexagonal", "Porosity": "High" },
            chemical: { "Ion Exchange": "Excellent", "Catalysis": "Molecular Tuning" }
        },
        dimensions: 3,
        system: 'cubic',
        crystalSystem: 'Cubic (Complex)',
        renderMode: 'lattice',
        blueprint: {
            atoms: [
                { type: 'Si', pos: [0,0,0], color: '#00f2ff', size: 4 },
                { type: 'O', pos: [15,15,0], color: '#ffffff', size: 2.5 },
                { type: 'Al', pos: [30,30,0], color: '#ff4081', size: 4 },
                { type: 'O', pos: [15,0,15], color: '#ffffff', size: 2.5 }
            ],
            bonds: [[0,1], [1,2], [0,3]]
        },
        latticeParams: { a: 24.3, b: 24.3, c: 24.3 },
        palette: { primary: '#00f2ff', secondary: '#006064', accent: '#ff4081' }
    },
    {
        id: 'cellulose',
        name: 'Crystalline Cellulose',
        category: 'functional',
        tagline: 'Nature\'s Structural Fiber.',
        industrial_use: 'Nanocomposites, pharmaceuticals',
        key_property: 'High strength-to-weight',
        history_and_lore: "Crystalline cellulose is the primary structural component of green plants. The chains of glucose pack into highly ordered crystalline regions (nanocrystals) that provide extreme mechanical strength and stiffness.",
        engineering: {
            crystallography: { "System": "Monoclinic (I-beta)", "Modulus": "138 GPa", "Density": "1.5 g/cm³" },
            mechanical: { "Strength": "7.5 GPa" }
        },
        dimensions: 3,
        system: 'other',
        crystalSystem: 'Monoclinic',
        renderMode: 'polymer',
        blueprint: {
            atoms: [
                { type: 'C', pos: [-20,0,0], color: '#4caf50', size: 5 }, { type: 'O', pos: [0,10,0], color: '#ff5252', size: 4 },
                { type: 'C', pos: [20,0,0], color: '#4caf50', size: 5 }, { type: 'H', pos: [0,-10,0], color: '#ffffff', size: 3 }
            ],
            bonds: [[0,1], [1,2], [0,3]]
        },
        palette: { primary: '#4caf50', secondary: '#1b5e20', accent: '#ffffff' }
    }
];
