export const MaterialsDatabase = [
    {
        id: 'graphene',
        name: 'Graphene',
        category: 'Carbon',
        tagline: 'The strongest material ever tested.',
        history_and_lore: "First isolated in 2004 by using ordinary sticky tape to peel flakes off a block of graphite, Graphene is the first 2D material ever discovered. It is essentially a single layer of chicken-wire-shaped carbon atoms. Despite being just one atom thick, it is the strongest material ever tested by humanity.\n\nFor a student or researcher, Graphene represents the holy grail of materials science: it conducts electricity better than copper, is almost completely transparent, and is totally impermeable to all standard gases.",
        engineering: {
            mechanical: { "Tensile Strength": "130 GPa", "Young's Modulus": "1.0 TPa", "Hardness": "Extremely High" },
            thermal: { "Thermal Conductivity": "5300 W/m·K", "Expansion": "Negative" },
            chemical: { "Impermeability": "Impermeable to Helium", "Reactivity": "Low (Stable)" },
            electrical: { "Mobility": "200,000 cm²/V·s", "Bandgap": "0 eV (Semimetal)" },
            magnetic: { "Type": "Diamagnetic", "Effect": "Quantum Hall Effect" }
        },
        synthesis: "Mechanical exfoliation (tape method) for research. Chemical Vapor Desposition (CVD) on copper foil for industrial scaling.",
        applications: {
            "Energy Storage": "Next-generation supercapacitors.",
            "Biomedical": "Targeted drug delivery and bio-sensors.",
            "Electronics": "High-frequency transistors."
        },
        vulnerabilities: "Extremely difficult to manufacture at scale. 'Zero bandgap' makes it hard to use in digital logic.",
        future_potential: "Space elevator tethers and 100% efficient desalination.",
        dimensions: 2,
        spaceGroup: 'P6/mmm',
        crystalSystem: 'Hexagonal',
        renderMode: 'lattice',
        latticeType: 'hexagonal',
        blueprint: {
            atoms: [
                { type: 'C', pos: [0,0,0], color: '#00f2ff', size: 4 },
                { type: 'C', pos: [14.2, 8.2, 0], color: '#00f2ff', size: 4 },
                { type: 'C', pos: [14.2, 24.6, 0], color: '#00f2ff', size: 4 },
                { type: 'C', pos: [0, 32.8, 0], color: '#00f2ff', size: 4 },
                { type: 'C', pos: [-14.2, 24.6, 0], color: '#00f2ff', size: 4 },
                { type: 'C', pos: [-14.2, 8.2, 0], color: '#00f2ff', size: 4 }
            ],
            bonds: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,0]]
        },
        latticeParams: { a: 2.46, b: 2.46, c: 3.35 }, // c-axis is interlayer spacing in graphite
        palette: { primary: '#00f2ff', secondary: '#006677', accent: '#ffffff' }
    },
    {
        id: 'titanium',
        name: 'Titanium',
        category: 'Metal',
        tagline: 'The Metal of the Gods.',
        history_and_lore: "Named after the Titans of Greek mythology, Titanium is forged in the extreme heat of supernovae. It is as strong as steel but 45% lighter, and twice as strong as aluminum while being only 60% heavier. Crucially for medicine, it is one of the few metals that is completely ignored by the human immune system, allowing bone to grow directly into it.",
        engineering: {
            mechanical: { "Yield Strength": "828 MPa", "Modulus": "116 GPa", "Density": "4.51 g/cm³" },
            thermal: { "Melting Point": "1668 °C", "Conductivity": "21.9 W/m·K" },
            chemical: { "Corrosion": "Excellent (Oxide Film)", "Biocompatibility": "High" },
            electrical: { "Resistivity": "420 nΩ·m", "State": "Paramagnetic" },
            magnetic: { "Permeability": "1.00005 (Non-magnetic)" }
        },
        synthesis: "Extracted via the Kroll Process: Titanium Tetrachloride reduced by liquid magnesium in argon.",
        applications: {
            "Aerospace": "Jet engine turbines and spacecraft frames.",
            "Medical": "Joint replacements and dental implants.",
            "Industrial": "Desalination plants."
        },
        vulnerabilities: "Severe oxygen embrittlement above 400°C. Difficult to machine due to galling.",
        future_potential: "3D printing complex aerospace geometries to eliminate waste.",
        dimensions: 3,
        spaceGroup: 'Fm-3m', // Simplified for demo (Beta-Titanium phase)
        crystalSystem: 'Cubic (simplified)',
        symbol: 'Ti',
        renderMode: 'lattice',
        latticeType: 'fcc',
        blueprint: {
            atoms: [
                { type: 'Ti', pos: [-25,-25,-25], color: '#a8a8a8', size: 6 }, { type: 'Ti', pos: [25,-25,-25], color: '#a8a8a8', size: 6 },
                { type: 'Ti', pos: [25,25,-25], color: '#a8a8a8', size: 6 }, { type: 'Ti', pos: [-25,25,-25], color: '#a8a8a8', size: 6 },
                { type: 'Ti', pos: [-25,-25,25], color: '#a8a8a8', size: 6 }, { type: 'Ti', pos: [25,-25,25], color: '#a8a8a8', size: 6 },
                { type: 'Ti', pos: [25,25,25], color: '#a8a8a8', size: 6 }, { type: 'Ti', pos: [-25,25,25], color: '#a8a8a8', size: 6 },
                { type: 'Ti', pos: [0,-25,0], color: '#a8a8a8', size: 6 }, { type: 'Ti', pos: [0,25,0], color: '#a8a8a8', size: 6 },
                { type: 'Ti', pos: [-25,0,0], color: '#a8a8a8', size: 6 }, { type: 'Ti', pos: [25,0,0], color: '#a8a8a8', size: 6 },
                { type: 'Ti', pos: [0,0,-25], color: '#a8a8a8', size: 6 }, { type: 'Ti', pos: [0,0,25], color: '#a8a8a8', size: 6 }
            ],
            bonds: [[0,8], [8,1], [1,11], [11,2], [2,9], [9,3], [3,10], [10,0], [4,8], [8,5], [5,11], [11,6], [6,9], [9,7], [7,10], [10,4]]
        },
        latticeParams: { a: 2.95, b: 2.95, c: 4.68 },
        palette: { primary: '#a8a8a8', secondary: '#444444', accent: '#00f2ff' }
    },
    {
        id: 'aerogel',
        name: 'Aerogel',
        category: 'Solid',
        tagline: 'Frozen Smoke.',
        history_and_lore: "Often called 'frozen smoke', Aerogel is 99.8% air, making it the world's least dense solid. Yet its intricate silica nanostructure makes it one of the greatest thermal insulators in the universe. NASA uses it extensively to protect rovers from the freezing vacuum of space and to capture stardust.",
        engineering: {
            mechanical: { "Compressive Strength": "100 kPa", "Modulus": "1 MPa", "Density": "0.001 g/cm³" },
            thermal: { "Conductivity": "0.013 W/m·K", "Temp Resistance": "1200 °C" },
            chemical: { "Composition": "SiO2 (Silica)", "Surface Area": "800 m²/g" },
            electrical: { "Dielectric Constant": "1.1", "State": "Insulator" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Sol-Gel process followed by supercritical drying to extract liquid without collapsing the network.",
        applications: {
            "Aerospace": "Insulation for Mars Rovers.",
            "Physics": "Capturing hypervelocity cosmic dust.",
            "Commercial": "High-end winter apparel."
        },
        vulnerabilities: "Extremely brittle; shatters like glass under light impacts.",
        future_potential: "Graphene-based aerogels for flexible electronics.",
        renderMode: 'network',
        blueprint: {
            atoms: [
                { type: 'Si', pos: [0,0,0], color: '#e0f7fa', size: 4 },
                { type: 'O', pos: [15,10,-5], color: '#ffffff', size: 2.5 },
                { type: 'Si', pos: [25,25,10], color: '#e0f7fa', size: 4 },
                { type: 'Si', pos: [-20,30,0], color: '#e0f7fa', size: 4 },
                { type: 'O', pos: [-5,15,5], color: '#ffffff', size: 2.5 }
            ],
            bonds: [[0,1], [1,2], [0,4], [4,3]]
        },
        palette: { primary: '#e0f7fa', secondary: '#006064', accent: '#ffffff' }
    },
    {
        id: 'carbon-fiber',
        name: 'Carbon Fiber',
        category: 'Composite',
        tagline: 'Lighter than Aluminum, Tougher than Steel.',
        history_and_lore: "Carbon fiber is a composite that begins life as a soft polymer thread baked at 2500°C until only perfectly aligned microscopic crystals of pure carbon remain. It allows engineers to create structures that are drastically lighter than aluminum but possess the tensile strength of high-grade steel.",
        engineering: {
            mechanical: { "Tensile Strength": "7.0 GPa", "Density": "1.75 g/cm³", "Modulus": "230 GPa" },
            thermal: { "Thermal Expansion": "Negative", "Conductivity": "24 W/m·K" },
            chemical: { "Corrosion": "Immune", "Precursor": "Polyacrylonitrile (PAN)" },
            electrical: { "Conductivity": "Highly Conductive", "State": "Anisotropic" },
            magnetic: { "Type": "Diamagnetic" }
        },
        synthesis: "Oxidation at 300°C followed by carbonization at 3000°C in an inert atmosphere.",
        applications: {
            "Motorsport": "Formula 1 monocoques.",
            "Aerospace": "Boeing 787 fuselages.",
            "Sporting": "Professional cycling frames."
        },
        vulnerabilities: "Highly anisotropic; only strong in the direction of fibers. Shatters catastrophically.",
        future_potential: "Carbon nano-tube reinforced fibers for molecular strength."
    },
    {
        id: 'tungsten',
        name: 'Tungsten',
        category: 'Metal',
        tagline: 'The Unmeltable Guardian.',
        history_and_lore: "Tungsten has the highest melting point of all elements at 3,422°C. Because it cannot be easily melted, it is processed via powder metallurgy. Its extreme density and hardness make it the material of choice for extreme heat or kinetic impact applications.",
        engineering: {
            mechanical: { "Hardness": "3430 MPa (Vickers)", "Density": "19.25 g/cm³", "Modulus": "411 GPa" },
            thermal: { "Melting Point": "3422 °C", "Conductivity": "173 W/m·K" },
            chemical: { "Oxidation": "Low at high temp", "Resistance": "Acid resistant" },
            electrical: { "Resistivity": "52.8 nΩ·m", "State": "Conductor" },
            magnetic: { "Type": "Paramagnetic" }
        },
        synthesis: "Reduced from Tungsten Oxide with hydrogen gas to create pure powder.",
        applications: {
            "Energy": "Plasma shielding in fusion reactors.",
            "Military": "Kinetic bombardment projectiles.",
            "Industrial": "High-speed cutting tools."
        },
        vulnerabilities: "Extremely heavy; useless for aerospace structures. Brittle at room temperature.",
        future_potential: "Critical for the development of nuclear fusion reactors.",
        dimensions: 3,
        spaceGroup: 'Im-3m',
        crystalSystem: 'Cubic',
        symbol: 'W',
        renderMode: 'lattice',
        latticeType: 'bcc',
        blueprint: {
            atoms: [
                { type: 'W', pos: [-25,-25,-25], color: '#778899', size: 7 }, { type: 'W', pos: [25,-25,-25], color: '#778899', size: 7 },
                { type: 'W', pos: [25,25,-25], color: '#778899', size: 7 }, { type: 'W', pos: [-25,25,-25], color: '#778899', size: 7 },
                { type: 'W', pos: [-25,-25,25], color: '#778899', size: 7 }, { type: 'W', pos: [25,-25,25], color: '#778899', size: 7 },
                { type: 'W', pos: [25,25,25], color: '#778899', size: 7 }, { type: 'W', pos: [-25,25,25], color: '#778899', size: 7 },
                { type: 'W', pos: [0,0,0], color: '#778899', size: 7 }
            ],
            bonds: [[0,8], [1,8], [2,8], [3,8], [4,8], [5,8], [6,8], [7,8]]
        },
        latticeParams: { a: 3.16, b: 3.16, c: 3.16 },
        palette: { primary: '#778899', secondary: '#2f4f4f', accent: '#ffa500' }
    },
    {
        id: 'nitinol',
        name: 'Nitinol',
        category: 'Alloy',
        tagline: 'The Material that Remembers.',
        history_and_lore: "A 'shape memory' alloy of Nickel and Titanium. If bent out of shape, it will snap back to its original programmed form when heated. This occurs because the material physically rearranges its crystalline structure at the atomic level.",
        engineering: {
            mechanical: { "Superelasticity": "8% strain recovery", "Modulus": "75 GPa", "Density": "6.45 g/cm³" },
            thermal: { "Trans. Temp": "-20 to 110 °C", "Conductivity": "10 W/m·K" },
            chemical: { "Corrosion": "Excellent", "Composition": "50/50 Ni-Ti" },
            electrical: { "Resistivity": "820 nΩ·m", "State": "Conductor" },
            magnetic: { "Type": "Paramagnetic" }
        },
        synthesis: "Vacuum Induction Melting (VIM) of pure Nickel and Titanium.",
        applications: {
            "Medical": "Self-expanding cardiac stents.",
            "Robotics": "Synthetic muscle actuators.",
            "Aerospace": "Deployable solar panels."
        },
        vulnerabilities: "Difficult to weld or machine. Fatigue life is unpredictable under high stress cycles.",
        future_potential: "Solid-state heat engines generating electricity from waste heat.",
        symbol: 'NiTi',
        renderMode: 'lattice',
        latticeType: 'bcc',
        blueprint: {
            atoms: [
                { type: 'Ni', pos: [-25,-25,-25], color: '#ff00ff', size: 6 }, { type: 'Ni', pos: [25,-25,-25], color: '#ff00ff', size: 6 },
                { type: 'Ni', pos: [25,25,-25], color: '#ff00ff', size: 6 }, { type: 'Ni', pos: [-25,25,-25], color: '#ff00ff', size: 6 },
                { type: 'Ni', pos: [-25,-25,25], color: '#ff00ff', size: 6 }, { type: 'Ni', pos: [25,-25,25], color: '#ff00ff', size: 6 },
                { type: 'Ni', pos: [25,25,25], color: '#ff00ff', size: 6 }, { type: 'Ni', pos: [-25,25,25], color: '#ff00ff', size: 6 },
                { type: 'Ti', pos: [0,0,0], color: '#00f2ff', size: 8 }
            ],
            bonds: [[0,8], [1,8], [2,8], [3,8], [4,8], [5,8], [6,8], [7,8]]
        },
        latticeParams: { a: 3.01, b: 3.01, c: 3.01 },
        palette: { primary: '#ff00ff', secondary: '#440044', accent: '#00f2ff' }
    },
    {
        id: 'alumina',
        name: 'Alumina',
        category: 'Ceramic',
        tagline: 'The Workhorse Ceramic.',
        history_and_lore: "Aluminum Oxide is one of the most versatile technical ceramics. It is incredibly hard, electrically insulating, and highly resistant to chemical attack. In its natural crystal form, it is known as Sapphire or Ruby.",
        engineering: {
            mechanical: { "Hardness": "9 Mohs", "Comp. Strength": "2000 MPa", "Modulus": "370 GPa" },
            thermal: { "Melting Point": "2072 °C", "Conductivity": "30 W/m·K" },
            chemical: { "Inertness": "High", "Biocompatibility": "Excellent" },
            electrical: { "Diel. Strength": "15 kV/mm", "State": "Insulator" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Refined from bauxite ore via the Bayer Process and sintered at 1600°C.",
        applications: {
            "Defense": "Ceramic ballistic armor plates.",
            "Electronics": "High-voltage insulators.",
            "Medical": "Bearing surfaces in hip replacements."
        },
        vulnerabilities: "Highly brittle and susceptible to thermal shock; shatters if cooled too quickly.",
        future_potential: "Transparent alumina for unbreakable smartphone screens.",
        symbol: 'Al2O3',
        renderMode: 'network',
        blueprint: {
            atoms: [
                { type: 'Al', pos: [0,0,0], color: '#f5f5f5', size: 6 },
                { type: 'Al', pos: [0,40,0], color: '#f5f5f5', size: 6 },
                { type: 'O', pos: [20,20,15], color: '#ff5252', size: 4 },
                { type: 'O', pos: [-20,20,-15], color: '#ff5252', size: 4 },
                { type: 'O', pos: [0,20,-25], color: '#ff5252', size: 4 }
            ],
            bonds: [[0,2], [0,3], [0,4], [1,2], [1,3], [1,4]]
        },
        palette: { primary: '#ffffff', secondary: '#b71c1c', accent: '#ff5252' }
    },
    {
        id: 'peek',
        name: 'PEEK',
        category: 'Polymer',
        tagline: 'The King of Plastics.',
        history_and_lore: "A high-performance thermoplastic engineered to replace metal in extreme environments. It maintains stiffness at high temperatures, resists solvents, and is entirely invisible to X-rays (radiolucent).",
        engineering: {
            mechanical: { "Tensile Strength": "100 MPa", "Modulus": "3.6 GPa", "Density": "1.32 g/cm³" },
            thermal: { "Cont. Use Temp": "250 °C", "Melting Point": "343 °C" },
            chemical: { "Solvent Resistance": "High", "Biocompatibility": "High" },
            electrical: { "Diel. Strength": "20 kV/mm", "State": "Insulator" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Step-growth polymerization of bisphenolate salts.",
        symbol: 'PEEK',
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
    {
        id: 'silicon',
        name: 'Silicon',
        category: 'Semiconductor',
        tagline: 'The Brain of the Digital Age.',
        history_and_lore: "The foundation of the modern world. Silicon's ability to conduct electricity can be precisely controlled by 'doping', allowing for the creation of the transistors that power all microprocessors.",
        engineering: {
            mechanical: { "Hardness": "7 Mohs", "Density": "2.33 g/cm³", "Modulus": "130 GPa" },
            thermal: { "Melting Point": "1414 °C", "Conductivity": "149 W/m·K" },
            chemical: { "Purity": "99.9999999%", "Oxidation": "Forms SiO2 layer" },
            electrical: { "Band Gap": "1.12 eV", "State": "Semiconductor" },
            magnetic: { "Type": "Diamagnetic" }
        },
        synthesis: "Reduced from silica sand and grown into single crystals via the Czochralski process.",
        applications: {
            "Computing": "Microprocessors and GPUs.",
            "Energy": "Photovoltaic solar panels.",
            "Photonics": "Fiber-optic communication lasers."
        },
        vulnerabilities: "Extremely brittle; computing limits are being reached due to quantum tunneling.",
        future_potential: "Silicon Photonics: replacing copper wires with microscopic lasers.",
        dimensions: 3,
        spaceGroup: 'Fd-3m',
        crystalSystem: 'Cubic',
        symbol: 'Si',
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
        id: 'kevlar',
        name: 'Kevlar',
        category: 'Polymer',
        tagline: 'The Bulletproof Weave.',
        history_and_lore: "Developed by Stephanie Kwolek in 1965, Kevlar is a para-aramid fiber that is 5 times stronger than steel on an equal weight basis. Its secret lies in its molecular structure: long chains that lock together via hydrogen bonds, absorbing kinetic energy by dissipating force across the entire web.",
        engineering: {
            mechanical: { "Tensile Strength": "3.6 GPa", "Modulus": "70-112 GPa", "Density": "1.44 g/cm³" },
            thermal: { "Decomp. Temp": "450 °C", "Conductivity": "0.04 W/m·K" },
            chemical: { "Solvent Resist.": "High", "UV Sensitivity": "High" },
            electrical: { "State": "Insulator", "Dielectric": "3.5" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Poly-condensation of p-phenylenediamine and terephthaloyl chloride.",
        applications: {
            "Defense": "Body armor and helmets.",
            "Aerospace": "Jet engine containment rings.",
            "Industrial": "Cut-resistant gloves."
        },
        symbol: 'Kevlar',
        renderMode: 'polymer',
        blueprint: {
            atoms: [
                { type: 'C', pos: [-30,0,0], color: '#fdd835', size: 5 }, { type: 'C', pos: [-15,15,0], color: '#fdd835', size: 5 },
                { type: 'C', pos: [15,15,0], color: '#fdd835', size: 5 }, { type: 'C', pos: [30,0,0], color: '#fdd835', size: 5 },
                { type: 'N', pos: [45,-15,0], color: '#1e88e5', size: 5 }, { type: 'H', pos: [45,-30,0], color: '#ffffff', size: 3 }
            ],
            bonds: [[0,1], [1,2], [2,3], [3,4], [4,5]]
        },
        palette: { primary: '#fbc02d', secondary: '#f57f17', accent: '#ffffff' }
    },
    {
        id: 'copper',
        name: 'Copper',
        category: 'Metal',
        tagline: 'The Veins of the Modern World.',
        history_and_lore: "Copper ushered in the Bronze Age 5,000 years ago. Today, it remains critical for its balance of electrical conductivity and ductility. It literally wires the planet together, carrying power from dams to microchips.",
        engineering: {
            mechanical: { "Yield Strength": "70 MPa", "Modulus": "110-128 GPa", "Density": "8.96 g/cm³" },
            thermal: { "Melting Point": "1085 °C", "Conductivity": "401 W/m·K" },
            chemical: { "Corrosion": "Moderate (Patina)", "Biocompatibility": "Antimicrobial" },
            electrical: { "Conductivity": "59.6 MS/m", "Resistivity": "16.8 nΩ·m" },
            magnetic: { "Type": "Diamagnetic" }
        },
        synthesis: "Smelted from porphyry ore and electro-refined to 99.99% purity.",
        applications: {
            "Electrical": "Power grids and EV motors.",
            "Thermal": "Computer heat pipes.",
            "Architecture": "Corrosion-resistant roofing."
        },
        vulnerabilities: "Soft and heavy. Highly susceptible to theft for scrap value.",
        future_potential: "Critical for the green energy transition.",
        dimensions: 3,
        spaceGroup: 'Fm-3m',
        crystalSystem: 'Cubic',
        symbol: 'Cu',
        renderMode: 'lattice',
        latticeType: 'fcc',
        blueprint: {
            atoms: [
                { type: 'Cu', pos: [-25,-25,-25], color: '#ff8c00', size: 6 }, { type: 'Cu', pos: [25,-25,-25], color: '#ff8c00', size: 6 },
                { type: 'Cu', pos: [25,25,-25], color: '#ff8c00', size: 6 }, { type: 'Cu', pos: [-25,25,-25], color: '#ff8c00', size: 6 },
                { type: 'Cu', pos: [-25,-25,25], color: '#ff8c00', size: 6 }, { type: 'Cu', pos: [25,-25,25], color: '#ff8c00', size: 6 },
                { type: 'Cu', pos: [25,25,25], color: '#ff8c00', size: 6 }, { type: 'Cu', pos: [-25,25,25], color: '#ff8c00', size: 6 },
                { type: 'Cu', pos: [0,-25,0], color: '#ff8c00', size: 6 }, { type: 'Cu', pos: [0,25,0], color: '#ff8c00', size: 6 },
                { type: 'Cu', pos: [-25,0,0], color: '#ff8c00', size: 6 }, { type: 'Cu', pos: [25,0,0], color: '#ff8c00', size: 6 },
                { type: 'Cu', pos: [0,0,-25], color: '#ff8c00', size: 6 }, { type: 'Cu', pos: [0,0,25], color: '#ff8c00', size: 6 }
            ],
            bonds: [[0,8], [8,1], [1,11], [11,2], [2,9], [9,3], [3,10], [10,0], [4,8], [8,5], [5,11], [11,6], [6,9], [9,7], [7,10], [10,4]]
        },
        latticeParams: { a: 3.61, b: 3.61, c: 3.61 },
        palette: { primary: '#ff8c00', secondary: '#8b4513', accent: '#ffffff' }
    },
    {
        id: 'glass',
        name: 'Silica Glass',
        category: 'Ceramic',
        tagline: 'The Invisible Shield.',
        history_and_lore: "An 'amorphous solid'—atoms cooled so fast they couldn't form a lattice. By adding different oxides, engineers tune glass for everything from chemistry labs to smartphone screens.",
        engineering: {
            mechanical: { "Comp. Strength": "1000 MPa", "Hardness": "5.5-7 Mohs", "Density": "2.5 g/cm³" },
            thermal: { "Glass Transition": "520-600 °C", "Conductivity": "1.1 W/m·K" },
            chemical: { "Composition": "SiO2", "Resistance": "High to Acids" },
            electrical: { "Resistivity": "10^12 Ω·m", "State": "Insulator" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Sand, soda ash, and limestone melted at 1700°C and floated on liquid tin.",
        applications: {
            "Architecture": "Structural facades.",
            "Technology": "Fiber-optic cables.",
            "Science": "Microscope lenses."
        },
        symbol: 'SiO2',
        renderMode: 'network',
        blueprint: {
            atoms: [
                { type: 'Si', pos: [0,0,0], color: '#ffffff', size: 6 },
                { type: 'O', pos: [15,15,15], color: '#00f2ff', size: 4 },
                { type: 'O', pos: [-15,15,-15], color: '#00f2ff', size: 4 },
                { type: 'O', pos: [15,-15,-15], color: '#00f2ff', size: 4 },
                { type: 'O', pos: [-15,-15,15], color: '#00f2ff', size: 4 }
            ],
            bonds: [[0,1], [0,2], [0,3], [0,4]]
        },
        palette: { primary: '#ffffff', secondary: '#cccccc', accent: '#00f2ff' }
    },
    {
        id: 'steel',
        name: 'Steel',
        category: 'Alloy',
        tagline: 'The Skeleton of Civilization.',
        history_and_lore: "An alloy of iron and carbon. By adjusting carbon fractions or adding chromium, engineers can tune steel to be hard enough to cut glass or ductile enough for bridge cables.",
        engineering: {
            mechanical: { "Yield Strength": "250-2000 MPa", "Modulus": "200 GPa", "Density": "7.85 g/cm³" },
            thermal: { "Melting Point": "1510 °C", "Conductivity": "50 W/m·K" },
            chemical: { "Corrosion": "High (unless Stainless)", "Oxidation": "Moderate" },
            electrical: { "Resistivity": "100-150 nΩ·m", "State": "Conductor" },
            magnetic: { "Type": "Ferromagnetic", "Curie Temp": "770 °C" }
        },
        synthesis: "Pig iron refined in Basic Oxygen Furnace with pure oxygen.",
        applications: {
            "Construction": "I-beams and bridge cables.",
            "Transport": "Ship hulls and train tracks.",
            "Industrial": "Pipelines and heavy tooling."
        },
        vulnerabilities: "Standard steel rusts rapidly in water and oxygen.",
        future_potential: "H2-Green Steel using hydrogen to eliminate CO2.",
        dimensions: 3,
        spaceGroup: 'Im-3m', // Ferrite phase
        crystalSystem: 'Cubic',
        symbol: 'Fe-C',
        renderMode: 'lattice',
        latticeType: 'bcc',
        blueprint: {
            atoms: [
                { type: 'Fe', pos: [-25,-25,-25], color: '#78909c', size: 6 }, { type: 'Fe', pos: [25,-25,-25], color: '#78909c', size: 6 },
                { type: 'Fe', pos: [25,25,-25], color: '#78909c', size: 6 }, { type: 'Fe', pos: [-25,25,-25], color: '#78909c', size: 6 },
                { type: 'Fe', pos: [-25,-25,25], color: '#78909c', size: 6 }, { type: 'Fe', pos: [25,-25,25], color: '#78909c', size: 6 },
                { type: 'Fe', pos: [25,25,25], color: '#78909c', size: 6 }, { type: 'Fe', pos: [-25,25,25], color: '#78909c', size: 6 },
                { type: 'Fe', pos: [0,0,0], color: '#78909c', size: 6 },
                { type: 'C', pos: [0,25,0], color: '#263238', size: 4 }
            ],
            bonds: [[0,8], [1,8], [2,8], [3,8], [4,8], [5,8], [6,8], [7,8], [2,9], [3,9]]
        },
        latticeParams: { a: 2.87, b: 2.87, c: 2.87 },
        palette: { primary: '#90a4ae', secondary: '#263238', accent: '#ff5722' }
    },
    {
        id: 'concrete',
        name: 'Concrete',
        category: 'Composite',
        tagline: 'Liquid Stone.',
        natural_form: 'Pourable slurry that cures into an artificial rock',
        structure: 'Amorphous Calcium Silicate Hydrate Gel',
        history_and_lore: "The ancient Romans built the Pantheon out of concrete over 2,000 years ago, and it still stands today. Yet, the recipe was lost during the Dark Ages, only to be rediscovered in the 19th century.\n\nConcrete is the most widely used man-made material on the planet. It is a composite made of gravel, sand, and water, bound together by Portland cement. When water touches the cement, it doesn't dry out—it triggers a complex chemical reaction (hydration) that physically grows millions of microscopic interlocking crystals, turning liquid slurry into solid rock over 28 days.",
        engineering: {
            "Compressive Strength": "20 - 40 MPa (Can support immense weight)",
            "Tensile Strength": "2 - 5 MPa (Extremely weak when stretched)",
            "Density": "2.4 g/cm\u00b3"
        },
        synthesis: "A mixture of coarse aggregate (gravel), fine aggregate (sand), Portland cement (calcined limestone and clay), and water. Cures via exothermic hydration.",
        applications: {
            "Infrastructure": "Dams, highways, bridges, and airport runways.",
            "Architecture": "Foundations and high-rise building cores.",
            "Defense": "Nuclear reactor containment domes and bunkers."
        },
        vulnerabilities: "Terrible tensile strength. If the ground shifts or a beam bends, unreinforced concrete cracks instantly. This is why it must be poured around steel rebar.",
        future_potential: "Self-healing concrete embedded with dormant bacteria that secrete limestone to automatically seal cracks when water seeps in.",
        symbol: 'Concrete',
        renderMode: 'network',
        blueprint: {
            atoms: [
                { type: 'Aggregate', pos: [0,0,0], color: '#9e9e9e', size: 15 },
                { type: 'Cement', pos: [25,10,10], color: '#bdbdbd', size: 5 },
                { type: 'Cement', pos: [-20,-15,5], color: '#bdbdbd', size: 5 },
                { type: 'Cement', pos: [10,-20,-10], color: '#bdbdbd', size: 5 }
            ],
            bonds: [[0,1], [0,2], [0,3]]
        },
        palette: { primary: '#9e9e9e', secondary: '#424242', accent: '#ffffff' }
    },
    {
        id: 'aluminum',
        name: 'Aluminum',
        category: 'Metal',
        tagline: 'The Metal that Mastered the Sky.',
        natural_form: 'Silvery-white, lightweight ductile metal',
        structure: 'FCC Crystal Lattice',
        history_and_lore: "In the mid-19th century, Aluminum was so difficult to extract from its ore that it was considered more valuable than gold. Napoleon III famously served his most honored guests on aluminum plates, while lesser guests used gold.\n\nToday, thanks to the Hall-Héroult electrolytic process, it is cheap and abundant. Aluminum weighs only a third as much as steel. Without it, commercial aviation would be physically impossible. When alloyed with copper and zinc, it reaches strength levels that rival structural steel while maintaining its feather-light weight.",
        engineering: {
            "Density": "2.70 g/cm\u00b3 (Feather-light compared to iron)",
            "Yield Strength (Alloyed)": "Up to 500 MPa (Strong enough for jet wings)",
            "Electrical Conductivity": "37.7 \u00d7 10\u2076 S/m (Used in high-voltage power lines)"
        },
        synthesis: "Bauxite ore is refined into alumina powder. The alumina is then dissolved in molten cryolite at 960\u00b0C and massive electrical currents are passed through it to separate pure aluminum liquid.",
        applications: {
            "Aerospace": "Commercial aircraft fuselages and wings.",
            "Packaging": "Infinitely recyclable beverage cans and foil.",
            "Transportation": "Lightweight engine blocks and bicycle frames."
        },
        vulnerabilities: "Suffers from metal fatigue. Unlike steel, which can theoretically bend back and forth forever if the force is small, aluminum will eventually crack after a certain number of cycles, no matter how small the force.",
        future_potential: "Aluminum-ion batteries as a safer, faster-charging, and cheaper alternative to Lithium-ion.",
        symbol: 'Al',
        renderMode: 'lattice',
        latticeType: 'fcc',
        blueprint: {
            atoms: [
                { type: 'Al', pos: [-25,-25,-25], color: '#d3d3d3', size: 6 }, { type: 'Al', pos: [25,-25,-25], color: '#d3d3d3', size: 6 },
                { type: 'Al', pos: [25,25,-25], color: '#d3d3d3', size: 6 }, { type: 'Al', pos: [-25,25,-25], color: '#d3d3d3', size: 6 },
                { type: 'Al', pos: [-25,-25,25], color: '#d3d3d3', size: 6 }, { type: 'Al', pos: [25,-25,25], color: '#d3d3d3', size: 6 },
                { type: 'Al', pos: [25,25,25], color: '#d3d3d3', size: 6 }, { type: 'Al', pos: [-25,25,25], color: '#d3d3d3', size: 6 },
                { type: 'Al', pos: [0,-25,0], color: '#d3d3d3', size: 6 }, { type: 'Al', pos: [0,25,0], color: '#d3d3d3', size: 6 },
                { type: 'Al', pos: [-25,0,0], color: '#d3d3d3', size: 6 }, { type: 'Al', pos: [25,0,0], color: '#d3d3d3', size: 6 },
                { type: 'Al', pos: [0,0,-25], color: '#d3d3d3', size: 6 }, { type: 'Al', pos: [0,0,25], color: '#d3d3d3', size: 6 }
            ],
            bonds: [[0,8], [8,1], [1,11], [11,2], [2,9], [9,3], [3,10], [10,0], [4,8], [8,5], [5,11], [11,6], [6,9], [9,7], [7,10], [10,4]]
        },
        latticeParams: { a: 4.05, b: 4.05, c: 4.05 },
        palette: { primary: '#d3d3d3', secondary: '#696969', accent: '#00ffff' }
    },
    {
        id: 'teflon',
        name: 'PTFE (Teflon)',
        category: 'Polymer',
        tagline: 'The Frictionless Anomaly.',
        natural_form: 'Slippery, white synthetic fluoropolymer solid',
        structure: 'Carbon chain perfectly shielded by Fluorine atoms',
        history_and_lore: "Polytetrafluoroethylene (PTFE) was discovered by accident in 1938 when a scientist at DuPont opened a tank of tetrafluoroethylene gas to find nothing came out—the gas had spontaneously polymerized into a white powder.\n\nThe secret to PTFE is its chemistry. Fluorine is extremely electronegative, meaning it holds onto its carbon backbone with unimaginable force. Because the fluorine atoms are entirely satisfied, they refuse to interact with any other molecules in the universe. This makes PTFE almost entirely frictionless and chemically invincible. Nothing sticks to it. Not water, not oil, not even aggressive acids.",
        engineering: {
            "Coefficient of Friction": "0.04 (The third-lowest of any known solid material)",
            "Melting Point": "327 \u00b0C (Extremely high for a plastic)",
            "Chemical Resistance": "Near Absolute (Inert to boiling sulfuric acid)"
        },
        synthesis: "Free-radical polymerization of tetrafluoroethylene gas under high pressure, typically in water using an initiator.",
        applications: {
            "Domestic": "Non-stick coatings on cookware.",
            "Industrial": "Chemically inert pipe linings and valves in chemical plants.",
            "Aerospace": "Self-lubricating frictionless bearings and wire insulation."
        },
        symbol: 'PTFE',
        renderMode: 'polymer',
        blueprint: {
            atoms: [
                { type: 'C', pos: [0,-40,0], color: '#333333', size: 5 }, { type: 'C', pos: [0,-10,0], color: '#333333', size: 5 },
                { type: 'C', pos: [0,20,0], color: '#333333', size: 5 }, { type: 'C', pos: [0,50,0], color: '#333333', size: 5 },
                { type: 'F', pos: [15,-40,15], color: '#ffffff', size: 4 }, { type: 'F', pos: [-15,-40,-15], color: '#ffffff', size: 4 },
                { type: 'F', pos: [15,-10,-15], color: '#ffffff', size: 4 }, { type: 'F', pos: [-15,-10,15], color: '#ffffff', size: 4 },
                { type: 'F', pos: [15,20,15], color: '#ffffff', size: 4 }, { type: 'F', pos: [-15,20,-15], color: '#ffffff', size: 4 },
                { type: 'F', pos: [15,50,-15], color: '#ffffff', size: 4 }, { type: 'F', pos: [-15,50,15], color: '#ffffff', size: 4 }
            ],
            bonds: [[0,1], [1,2], [2,3], [0,4], [0,5], [1,6], [1,7], [2,8], [2,9], [3,10], [3,11]]
        },
        palette: { primary: '#ffffff', secondary: '#aaaaaa', accent: '#000000' }
    },
    {
        id: 'spider-silk',
        name: 'Spider Silk',
        category: 'Advanced',
        tagline: 'Nature\'s Kevlar.',
        history_and_lore: "Tougher than Kevlar and stronger than steel, dragline silk is a biological marvel. It can stretch 40% of its length without snapping, allowing webs to catch insects without breaking. Spiders cannot be farmed, so engineers are now 'brewing' synthetic silk in industrial vats.",
        engineering: {
            mechanical: { "Tensile Strength": "1.3 GPa", "Toughness": "165 J/g", "Density": "1.31 g/cm³" },
            thermal: { "Glass Transition": "210 °C", "Conductivity": "Low" },
            chemical: { "Composition": "Protein (Fibroin)", "Hygroscopy": "High (Shrinks in water)" },
            electrical: { "State": "Insulator", "Resistivity": "10^12 Ω·m" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Biologically extruded liquid protein that crystallizes under shear stress.",
        applications: {
            "Medical": "Biodegradable sutures and artificial tendons.",
            "Defense": "Ultra-light bulletproof vests (Experimental).",
            "Textiles": "High-performance sustainable fabrics."
        },
        vulnerabilities: "Degrades under UV light and loses tension when wet.",
        future_potential: "Bio-manufactured silk for structural medical implants.",
        symbol: 'Silk',
        renderMode: 'polymer',
        blueprint: {
            atoms: [
                { type: 'C', pos: [0,-40,0], color: '#8d6e63', size: 5 }, { type: 'N', pos: [15,-20,0], color: '#1e88e5', size: 5 },
                { type: 'C', pos: [0,0,0], color: '#8d6e63', size: 5 }, { type: 'N', pos: [15,20,0], color: '#1e88e5', size: 5 },
                { type: 'O', pos: [-15,0,0], color: '#e53935', size: 4 }
            ],
            bonds: [[0,1], [1,2], [2,3], [2,4]]
        },
        palette: { primary: '#a1887f', secondary: '#4e342e', accent: '#ff5252' }
    },
    {
        id: 'ybco',
        name: 'YBCO Superconductor',
        category: 'High-Tech',
        tagline: 'The Quantum Levitator.',
        history_and_lore: "In 1987, YBCO shocked the world as the first 'high-temperature' superconductor. It conducts electricity with zero resistance above the boiling point of liquid nitrogen, and its ability to expel magnetic fields allows it to magically 'lock' in mid-air.",
        engineering: {
            mechanical: { "State": "Brittle Ceramic", "Modulus": "157 GPa", "Density": "6.3 g/cm³" },
            thermal: { "Critical Temp": "93 Kelvin", "Melting Point": "1000 °C" },
            chemical: { "Composition": "YBa2Cu3O7", "Reactivity": "Low" },
            electrical: { "Resistance": "Zero (at <93K)", "Current Density": "10^6 A/cm²" },
            magnetic: { "Type": "Superconductor", "Meissner Effect": "Complete Expulsion" }
        },
        synthesis: "Solid-state sintering of Yttrium, Barium, and Copper oxides at 950°C.",
        applications: {
            "Transport": "Maglev train tracks.",
            "Medical": "High-field MRI electromagnets.",
            "Energy": "Lossless power grids (Experimental)."
        },
        vulnerabilities: "Extremely brittle ceramic; difficult to shape into flexible wires.",
        future_potential: "Fusion reactor magnets for compact, limitless energy.",
        symbol: 'YBCO',
        renderMode: 'lattice',
        blueprint: {
            atoms: [
                { type: 'Y', pos: [0,0,0], color: '#ffeb3b', size: 8 },
                { type: 'Ba', pos: [30,30,30], color: '#4caf50', size: 10 },
                { type: 'Cu', pos: [0,30,0], color: '#ff9800', size: 6 },
                { type: 'O', pos: [15,30,0], color: '#f44336', size: 4 }
            ],
            bonds: [[0,2], [2,3], [1,2]]
        },
        palette: { primary: '#8bc34a', secondary: '#33691e', accent: '#ffeb3b' }
    },
    {
        id: 'gold',
        name: 'Gold',
        category: 'Metal',
        tagline: 'The Immortal Metal.',
        history_and_lore: "Gold never rusts or tarnishes. Beyond its value as currency, it is a scientific marvel: the most malleable element known. A single ounce can be beaten into a translucent sheet covering 300 square feet.",
        engineering: {
            mechanical: { "Hardness": "2.5 Mohs", "Ductility": "Absolute", "Density": "19.3 g/cm³" },
            thermal: { "Melting Point": "1064 °C", "Conductivity": "318 W/m·K" },
            chemical: { "Corrosion": "None (Noble Metal)", "Solubility": "Aqua Regia only" },
            electrical: { "Conductivity": "41 MS/m", "State": "Conductor" },
            magnetic: { "Type": "Diamagnetic" }
        },
        synthesis: "Extracted via cyanide leaching and refined to 99.99% purity.",
        applications: {
            "Electronics": " astronaut visors and mission-critical connectors.",
            "Aerospace": "Satellite thermal shielding (reflects 98% infrared).",
            "Medical": "Biocompatible dental restorations."
        },
        vulnerabilities: "Exceptionally soft; easily scratched unless alloyed.",
        future_potential: "Cancer-destroying nanoparticles using targeted laser heating.",
        dimensions: 3,
        spaceGroup: 'Fm-3m',
        crystalSystem: 'Cubic',
        symbol: 'Au',
        renderMode: 'lattice',
        latticeType: 'fcc',
        blueprint: {
            atoms: [
                { type: 'Au', pos: [-25,-25,-25], color: '#ffd700', size: 6 }, { type: 'Au', pos: [25,-25,-25], color: '#ffd700', size: 6 },
                { type: 'Au', pos: [25,25,-25], color: '#ffd700', size: 6 }, { type: 'Au', pos: [-25,25,-25], color: '#ffd700', size: 6 },
                { type: 'Au', pos: [-25,-25,25], color: '#ffd700', size: 6 }, { type: 'Au', pos: [25,-25,25], color: '#ffd700', size: 6 },
                { type: 'Au', pos: [25,25,25], color: '#ffd700', size: 6 }, { type: 'Au', pos: [-25,25,25], color: '#ffd700', size: 6 },
                { type: 'Au', pos: [0,-25,0], color: '#ffd700', size: 6 }, { type: 'Au', pos: [0,25,0], color: '#ffd700', size: 6 },
                { type: 'Au', pos: [-25,0,0], color: '#ffd700', size: 6 }, { type: 'Au', pos: [25,0,0], color: '#ffd700', size: 6 },
                { type: 'Au', pos: [0,0,-25], color: '#ffd700', size: 6 }, { type: 'Au', pos: [0,0,25], color: '#ffd700', size: 6 }
            ],
            bonds: [[0,8], [8,1], [1,11], [11,2], [2,9], [9,3], [3,10], [10,0], [4,8], [8,5], [5,11], [11,6], [6,9], [9,7], [7,10], [10,4]]
        },
        latticeParams: { a: 4.08, b: 4.08, c: 4.08 },
        palette: { primary: '#ffd700', secondary: '#b8860b', accent: '#ffffff' }
    },
    {
        id: 'diamond',
        name: 'Diamond',
        category: 'Carbon',
        tagline: 'The Unbreakable Lattice.',
        history_and_lore: "The ultimate expression of the carbon atom. Diamond is the hardest natural material and, paradoxically, the best thermal conductor—pulling heat away 5x faster than copper while remaining a perfect electrical insulator.",
        engineering: {
            mechanical: { "Hardness": "10 Mohs", "Modulus": "1220 GPa", "Density": "3.51 g/cm³" },
            thermal: { "Conductivity": "2200 W/m·K", "Expansion": "0.8 µm/m·°C" },
            chemical: { "State": "Cubic Lattice", "Inertness": "Near Absolute" },
            electrical: { "Band Gap": "5.5 eV", "State": "Insulator" },
            magnetic: { "Type": "Diamagnetic" }
        },
        synthesis: "Lab-grown via HPHT or Chemical Vapor Deposition from methane.",
        applications: {
            "Industrial": "Stone-cutting drill bits and abrasives.",
            "Tech": "High-power laser optics and quantum substrates.",
            "Audio": "Tweeter domes in audiophile speakers."
        },
        vulnerabilities: "Brittle under impact; burns into CO2 at >700°C in oxygen.",
        future_potential: "Diamond computer chips running 100,000x faster than silicon.",
        dimensions: 3,
        spaceGroup: 'Fd-3m',
        crystalSystem: 'Cubic',
        symbol: 'C',
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
        id: 'silicon-carbide',
        name: 'Silicon Carbide',
        category: 'Ceramic',
        tagline: 'The Star Dust Ceramic.',
        history_and_lore: "Typically found in meteorites from carbon-rich stars, SiC bridges the gap between ceramics and semiconductors. It is the beating heart of modern electric vehicles, handling massive voltage and heat without melting.",
        engineering: {
            mechanical: { "Hardness": "9.5 Mohs", "Comp. Strength": "3900 MPa", "Density": "3.21 g/cm³" },
            thermal: { "Sublimation": "2730 °C", "Conductivity": "120 W/m·K" },
            chemical: { "Oxidation": "Resistant to 1600°C", "Acid Resistance": "High" },
            electrical: { "Band Gap": "3.2 eV", "Breakdown": "3 MV/cm" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Acheson Process: sand and carbon heated to 2500°C.",
        applications: {
            "Automotive": "Tesla power inverters and ceramic brakes.",
            "Defense": "Chobham tank armor.",
            "Industrial": "Kiln linings and abrasive grit."
        },
        vulnerabilities: "Brittle ceramic impact failure; expensive single-crystal growth.",
        future_potential: "Ultra-fast EV chargers (5-minute full charge capability).",
        symbol: 'SiC',
        renderMode: 'lattice',
        blueprint: {
            atoms: [
                { type: 'Si', pos: [-25,-25,-25], color: '#78909c', size: 6 },
                { type: 'C', pos: [0,0,0], color: '#263238', size: 4 },
                { type: 'Si', pos: [25,25,25], color: '#78909c', size: 6 }
            ],
            bonds: [[0,1], [1,2]]
        },
        palette: { primary: '#546e7a', secondary: '#263238', accent: '#ffffff' }
    },
    {
        id: 'wood',
        name: 'Engineered Timber',
        category: 'Wood',
        tagline: 'Nature\'s Carbon Sink.',
        history_and_lore: "Wood is the original composite. Long before humans mixed carbon fiber, nature mixed cellulose fibers with lignin to create trees that bend in hurricane winds. Engineered timber like CLT now allows us to build wooden skyscrapers that rival steel in strength.",
        engineering: {
            mechanical: { "Tensile Strength": "40-100 MPa", "Specific Strength": "High", "Density": "0.6 g/cm³" },
            thermal: { "Conductivity": "0.12 W/m·K", "Ignition": "250-300 °C" },
            chemical: { "Composition": "Cellulose/Lignin", "Anisotropy": "High" },
            electrical: { "State": "Insulator", "Dielectric": "2-5" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Biologically grown via solar energy; engineered via cross-lamination.",
        applications: {
            "Construction": "High-rise wooden skyscrapers.",
            "Acoustics": "Instrument soundboards.",
            "Industrial": "Sustainable packaging and bio-plastics."
        },
        vulnerabilities: "Susceptible to rot, termites, and anisotropic weakness.",
        future_potential: "Transparent wood to replace glass for better insulation."
    },
    {
        id: 'platinum',
        name: 'Platinum',
        category: 'Metal',
        tagline: 'The Chemical Catalyst.',
        history_and_lore: "One of the rarest elements on Earth. Platinum is a 'noble metal' that refuses to corrode, but its true power is catalysis. It forces toxic molecules to react and transform without being consumed, cleaning the air in every car's exhaust.",
        engineering: {
            mechanical: { "Hardness": "4.3 Mohs", "Ductility": "High", "Density": "21.45 g/cm³" },
            thermal: { "Melting Point": "1768 °C", "Conductivity": "72 W/m·K" },
            chemical: { "Catalysis": "Supreme", "Inertness": "Noble Metal" },
            electrical: { "Resistivity": "105 nΩ·m", "State": "Conductor" },
            magnetic: { "Type": "Paramagnetic" }
        },
        synthesis: "Extracted from nickel ore and refined via Aqua Regia dissolution.",
        applications: {
            "Automotive": "Catalytic converters.",
            "Energy": "Hydrogen Fuel Cell catalysts.",
            "Medical": "Pacemaker electrodes and chemo-drugs."
        },
        vulnerabilities: "Astronomically expensive; rare supply chain bottleneck.",
        future_potential: "Single-atom catalysis for the Hydrogen Economy."
    },
    {
        id: 'nylon',
        name: 'Nylon 6,6',
        category: 'Polymer',
        tagline: 'The Synthetic Silk.',
        history_and_lore: "Invented in 1935, Nylon was the first miracle synthetic. It replaced silk parachutes in WWII and now forms the backbone of everything from toothbrush bristles to machine gears due to its extreme abrasion resistance.",
        engineering: {
            mechanical: { "Tensile Strength": "85 MPa", "Elongation": "15-50%", "Density": "1.14 g/cm³" },
            thermal: { "Melting Point": "265 °C", "Conductivity": "0.25 W/m·K" },
            chemical: { "Hygroscopy": "High (Absorbs Water)", "Resistivity": "Oil/Fuel resistant" },
            electrical: { "Breakdown": "20 kV/mm", "State": "Insulator" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Polycondensation of hexamethylenediamine and adipic acid.",
        applications: {
            "Industrial": "Self-lubricating gears and bearings.",
            "Textiles": "High-durability ropes and apparel.",
            "Consumer": "Guitar strings and zip ties."
        },
        symbol: 'Nylon',
        renderMode: 'polymer',
        blueprint: {
            atoms: [
                { type: 'C', pos: [0,-40,0], color: '#ffffff', size: 5 }, { type: 'C', pos: [0,-10,0], color: '#ffffff', size: 5 },
                { type: 'N', pos: [15,10,0], color: '#1e88e5', size: 5 }, { type: 'C', pos: [0,30,0], color: '#ffffff', size: 5 }
            ],
            bonds: [[0,1], [1,2], [2,3]]
        },
        palette: { primary: '#f0f8ff', secondary: '#4682b4', accent: '#ffffff' }
    },
    {
        id: 'polycarbonate',
        name: 'Polycarbonate',
        category: 'Polymer',
        tagline: 'The Transparent Tank.',
        history_and_lore: "The plastic that thinks it's a metal. If you hit it with a hammer, it dents rather than shatters. 250 times stronger than glass, it’s used in riot shields and jet canopies where transparency and invincibility are both required.",
        engineering: {
            mechanical: { "Impact Strength": "800 J/m", "Transparency": "89%", "Density": "1.20 g/cm³" },
            thermal: { "Glass Transition": "147 °C", "Conductivity": "0.2 W/m·K" },
            chemical: { "Resistance": "High to Acids", "UV Sensitivity": "High" },
            electrical: { "Resistivity": "10^14 Ω·m", "State": "Insulator" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Reaction of bisphenol A (BPA) with phosgene gas.",
        applications: {
            "Defense": "Riot shields and fighter jet canopies.",
            "Consumer": "Safety goggles and motorcycle helmets.",
            "Medical": "Surgical instruments and incubators."
        },
        vulnerabilities: "Susceptible to scratching and UV-induced yellowing.",
        future_potential: "BPA-free high-impact bio-polycarbonates.",
        symbol: 'PC',
        renderMode: 'polymer',
        blueprint: {
            atoms: [
                { type: 'C', pos: [-20,0,0], color: '#e1f5fe', size: 5 }, { type: 'C', pos: [20,0,0], color: '#e1f5fe', size: 5 },
                { type: 'O', pos: [0,15,0], color: '#ff5252', size: 4 }, { type: 'C', pos: [0,35,0], color: '#e1f5fe', size: 5 }
            ],
            bonds: [[0,2], [1,2], [2,3]]
        },
        palette: { primary: '#b3e5fc', secondary: '#01579b', accent: '#ff5252' }
    },
    {
        id: 'borosilicate-glass',
        name: 'Borosilicate Glass',
        category: 'Ceramic',
        tagline: 'The Chemist\'s Canvas.',
        history_and_lore: "By adding boron oxide, Otto Schott created a glass that ignores thermal shock. It is the backbone of science: every beaker and test tube in the world relies on its ability to be blasted by a blowtorch without cracking.",
        engineering: {
            mechanical: { "Comp. Strength": "2000 MPa", "Modulus": "64 GPa", "Density": "2.23 g/cm³" },
            thermal: { "Expansion": "3.3 µm/m·°C", "Softening Point": "820 °C" },
            chemical: { "Durability": "Near Absolute", "Inertness": "High" },
            electrical: { "Resistivity": "10^13 Ω·m", "State": "Insulator" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Melting silica sand with boric oxide at 1600°C.",
        applications: {
            "Science": "Laboratory glassware and telescope mirrors.",
            "Energy": "Nuclear waste vitrification.",
            "Domestic": "Oven-safe bakeware."
        },
        vulnerabilities: "Still a ceramic; low tensile strength and brittle impact failure.",
        future_potential: "Ultra-thin flexible glass for rollable sensors.",
        symbol: 'Boro',
        renderMode: 'network',
        blueprint: {
            atoms: [
                { type: 'Si', pos: [0,0,0], color: '#ffffff', size: 5 },
                { type: 'B', pos: [20,10,0], color: '#9c27b0', size: 4 },
                { type: 'O', pos: [10,25,0], color: '#03a9f4', size: 3 }
            ],
            bonds: [[0,1], [1,2]]
        },
        palette: { primary: '#e1f5fe', secondary: '#0288d1', accent: '#9c27b0' }
    },
    {
        id: 'bronze',
        name: 'Bronze',
        category: 'Alloy',
        tagline: 'The First High-Tech Alloy.',
        history_and_lore: "Bronze defined an entire age of human history. By mixing 90% copper with 10% tin, ancient metallurgists created an alloy far harder than its parents. It holds a razor edge and resists seawater perfectly, making it the choice for submarine propellers even today.",
        engineering: {
            mechanical: { "Hardness": "150 Brinell", "Modulus": "115 GPa", "Density": "8.8 g/cm³" },
            thermal: { "Melting Point": "950 °C", "Conductivity": "50 W/m·K" },
            chemical: { "Corrosion": "High Seawater Resistance", "Composition": "Cu-Sn Alloy" },
            electrical: { "Conductivity": "7 MS/m", "State": "Conductor" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Crucible smelting of copper and tin; modern variants add manganese or silicon.",
        applications: {
            "Marine": "Submarine propellers and fittings.",
            "Music": "Church bells and drum cymbals.",
            "Industrial": "Low-friction bushings and non-sparking tools."
        },
        vulnerabilities: "Heavier and more expensive than steel; susceptible to 'bronze disease'.",
        future_potential: "3D printed aluminum-bronze for tidal energy generators.",
        symbol: 'CuSn',
        renderMode: 'lattice',
        blueprint: {
            atoms: [
                { type: 'Cu', pos: [-25,-25,-25], color: '#cd7f32', size: 6 },
                { type: 'Sn', pos: [0,0,0], color: '#c0c0c0', size: 7 },
                { type: 'Cu', pos: [25,25,25], color: '#cd7f32', size: 6 }
            ],
            bonds: [[0,1], [1,2]]
        },
        palette: { primary: '#cd7f32', secondary: '#3e2723', accent: '#ffffff' }
    },
    {
        id: 'lithium',
        name: 'Lithium',
        category: 'Metal',
        tagline: 'The Battery Fuel.',
        history_and_lore: "The lightest metal in the universe—it floats on water. Lithium is so reactive it catches fire in humid air. Its desperate desire to shed an electron makes it the perfect carrier for electricity, powering the mobile revolution from smartphones to EVs.",
        engineering: {
            mechanical: { "Hardness": "0.6 Mohs", "State": "Soft Metal", "Density": "0.534 g/cm³" },
            thermal: { "Melting Point": "180 °C", "Specific Heat": "3582 J/kg·K" },
            chemical: { "Reactivity": "Violent with Water", "Potential": "-3.04 V" },
            electrical: { "Conductivity": "10 MS/m", "State": "Conductor" },
            magnetic: { "Type": "Paramagnetic" }
        },
        synthesis: "Solar evaporation of brine pools followed by electrolysis.",
        applications: {
            "Energy": "Lithium-ion and Li-poly batteries.",
            "Aerospace": "Ultra-light Al-Li structural alloys.",
            "Medical": "Mood-stabilizing pharmaceuticals."
        },
        vulnerabilities: "Highly unstable and flammable; environmentally taxing extraction.",
        future_potential: "Solid-state batteries doubling EV range safely.",
        symbol: 'Li',
        renderMode: 'lattice',
        latticeType: 'bcc',
        blueprint: {
            atoms: [
                { type: 'Li', pos: [-25,-25,-25], color: '#f5f5f5', size: 6 },
                { type: 'Li', pos: [25,-25,-25], color: '#f5f5f5', size: 6 },
                { type: 'Li', pos: [25,25,-25], color: '#f5f5f5', size: 6 },
                { type: 'Li', pos: [-25,25,-25], color: '#f5f5f5', size: 6 },
                { type: 'Li', pos: [-25,-25,25], color: '#f5f5f5', size: 6 },
                { type: 'Li', pos: [25,-25,25], color: '#f5f5f5', size: 6 },
                { type: 'Li', pos: [25,25,25], color: '#f5f5f5', size: 6 },
                { type: 'Li', pos: [-25,25,25], color: '#f5f5f5', size: 6 },
                { type: 'Li', pos: [0,0,0], color: '#f5f5f5', size: 6 }
            ],
            bonds: [[0,8], [1,8], [2,8], [3,8], [4,8], [5,8], [6,8], [7,8]]
        },
        palette: { primary: '#f5f5f5', secondary: '#9e9e9e', accent: '#ff1744' }
    },
    {
        id: 'neodymium',
        name: 'Neodymium',
        category: 'Metal',
        tagline: 'The Invisible Force.',
        history_and_lore: "The king of magnets. Alloying Neodymium with iron and boron creates magnets so powerful they can hold 1000x their own weight. They miniaturized the world, enabling tiny cell phone speakers and thin hard drives.",
        engineering: {
            mechanical: { "Hardness": "Vickers 600", "State": "Brittle", "Density": "7.01 g/cm³" },
            thermal: { "Curie Temp": "312 °C", "Conductivity": "16.5 W/m·K" },
            chemical: { "Oxidation": "Rapid in Air", "Coating": "Nickel/Zinc required" },
            electrical: { "Resistivity": "640 nΩ·m", "State": "Conductor" },
            magnetic: { "Type": "Ferromagnetic", "Field Strength": "1.4 Tesla" }
        },
        synthesis: "Vacuum induction melting of rare-earth oxides into alloys.",
        applications: {
            "Tech": "Smartphone speakers and haptic motors.",
            "Energy": "Offshore wind turbine generators.",
            "Medical": "MRI machine permanent magnets."
        },
        vulnerabilities: "Loses magnetism permanently if heated; highly prone to corrosion.",
        future_potential: "Alternative crystal structures to reduce rare-earth reliance.",
        symbol: 'NdFeB',
        renderMode: 'lattice',
        blueprint: {
            atoms: [
                { type: 'Nd', pos: [0,0,0], color: '#607d8b', size: 8 },
                { type: 'Fe', pos: [25,0,0], color: '#78909c', size: 5 },
                { type: 'B', pos: [0,25,0], color: '#ff5722', size: 4 }
            ],
            bonds: [[0,1], [0,2]]
        },
        palette: { primary: '#607d8b', secondary: '#263238', accent: '#ff5722' }
    },
    {
        id: 'polyurethane',
        name: 'Polyurethane',
        category: 'Polymer',
        tagline: 'The Shape Shifter.',
        history_and_lore: "The chameleon of polymers. By tweaking the recipe, PU can be as soft as a mattress, as bouncy as a rubber band, or as hard as a bowling ball. It’s the material that makes modern comfort possible, from memory foam to roller-coaster wheels.",
        engineering: {
            mechanical: { "Tear Strength": "Extreme", "Hardness": "Shore A10 to D85", "Density": "1.2 g/cm³" },
            thermal: { "Insulation": "0.022 W/m·K", "Temp Limit": "80-100 °C" },
            chemical: { "Solvent Resistance": "High", "Structure": "Urethane Linkage" },
            electrical: { "Resistivity": "10^11 Ω·m", "State": "Insulator" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Step-growth reaction of diisocyanates and polyols.",
        applications: {
            "Consumer": "Mattresses and shoe soles (Spandex).",
            "Industrial": "Skateboard wheels and heavy-duty adhesives.",
            "Construction": "Spray-foam thermal insulation."
        },
        vulnerabilities: "Highly flammable; releases toxic hydrogen cyanide when burning.",
        future_potential: "Bio-polyurethanes derived from algae and plant oils.",
        symbol: 'PU',
        renderMode: 'polymer',
        blueprint: {
            atoms: [
                { type: 'C', pos: [-20,0,0], color: '#fff9c4', size: 5 },
                { type: 'N', pos: [0,15,0], color: '#1e88e5', size: 5 },
                { type: 'O', pos: [20,0,0], color: '#ff5252', size: 4 }
            ],
            bonds: [[0,1], [1,2]]
        },
        palette: { primary: '#fff9c4', secondary: '#fbc02d', accent: '#1e88e5' }
    },
    {
        id: 'beryllium',
        name: 'Beryllium',
        category: 'Metal',
        tagline: 'The Poisonous Prodigy.',
        history_and_lore: "A dream for engineers, a nightmare for safety. Beryllium is 30% lighter than aluminum yet 50% stiffer than steel. It holds its shape perfectly under extreme stress, making it the choice for the James Webb Space Telescope mirrors.",
        engineering: {
            mechanical: { "Modulus": "287 GPa", "Density": "1.85 g/cm³", "Hardness": "Mohs 5.5" },
            thermal: { "Specific Heat": "1825 J/kg·K", "Conductivity": "190 W/m·K" },
            chemical: { "Corrosion": "Stable Oxide Layer", "Toxicity": "Extreme (Fatal Dust)" },
            electrical: { "Conductivity": "25 MS/m", "State": "Conductor" },
            magnetic: { "Type": "Diamagnetic" }
        },
        synthesis: "Reduction of beryllium fluoride with magnesium at high heat.",
        applications: {
            "Aerospace": "Space telescope mirrors and jet gyroscopes.",
            "Nuclear": "Neutron reflectors in reactors.",
            "Audio": "Tweeter cones in high-end studio monitors."
        },
        vulnerabilities: "Astoundingly toxic if inhaled as dust; requires extreme safety protocols.",
        future_potential: "Critical for deep-space optics and neutron shielding in nuclear reactors.",
        symbol: 'Be',
        renderMode: 'lattice',
        latticeType: 'hcp',
        blueprint: {
            atoms: [
                { type: 'Be', pos: [0,0,0], color: '#e0e0e0', size: 5 },
                { type: 'Be', pos: [30,0,0], color: '#e0e0e0', size: 5 },
                { type: 'Be', pos: [15,25,0], color: '#e0e0e0', size: 5 },
                { type: 'Be', pos: [15,8,25], color: '#e0e0e0', size: 5 }
            ],
            bonds: [[0,1], [1,2], [2,0], [0,3], [1,3], [2,3]]
        },
        palette: { primary: '#e0e0e0', secondary: '#424242', accent: '#ffffff' }
    },
    {
        id: 'cobalt',
        name: 'Cobalt',
        category: 'Metal',
        tagline: 'The High-Heat Heart.',
        history_and_lore: "For centuries a pigment, now a survival critical element. Cobalt forms 'Superalloys' that stay strong even when glowing red hot. It’s the beating heart of every jet engine turbine and a stabilizer in the batteries that power the electric vehicle revolution.",
        engineering: {
            mechanical: { "Hardness": "5.0 Mohs", "Modulus": "209 GPa", "Density": "8.9 g/cm³" },
            thermal: { "Melting Point": "1495 °C", "Conductivity": "100 W/m·K" },
            chemical: { "Resistivity": "Wear/Galling Resistant", "Oxidation": "Low" },
            electrical: { "Conductivity": "16 MS/m", "State": "Conductor" },
            magnetic: { "Type": "Ferromagnetic", "Curie Temp": "1121 °C" }
        },
        synthesis: "Mined as a byproduct of copper/nickel; refined via roasting and electrolysis.",
        applications: {
            "Aerospace": "Jet engine turbine blades.",
            "Energy": "Lithium-ion battery cathodes.",
            "Medical": "Orthopedic joint replacements."
        },
        vulnerabilities: "Ethically complex supply chain; heavy and mildly toxic.",
        future_potential: "Cobalt-free battery chemistries to escape supply constraints."
    },
    {
        id: 'brass',
        name: 'Brass',
        category: 'Alloy',
        tagline: 'The Golden Substitute.',
        history_and_lore: "The elegant cousin of Bronze. By mixing copper with zinc, we get a material that looks like gold but kills bacteria on contact. It’s the choice for hospital doorknobs and the entire 'brass section' of every orchestra due to its acoustic brilliance.",
        engineering: {
            mechanical: { "Hardness": "150 Vickers", "Machinability": "100% (Standard)", "Density": "8.5 g/cm³" },
            thermal: { "Melting Point": "900 °C", "Conductivity": "110 W/m·K" },
            chemical: { "Antimicrobial": "Kills viruses in minutes", "Composition": "Cu-Zn" },
            electrical: { "Conductivity": "15 MS/m", "State": "Conductor" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Melting copper and zinc; lead added for 'buttery' machining.",
        applications: {
            "Architecture": "Antimicrobial doorknobs and fixtures.",
            "Defense": "Ammunition casings (seal-and-shrink property).",
            "Music": "Trumpets, saxophones, and tubas."
        },
        vulnerabilities: "Dezincification in saltwater, turning it into a weak copper sponge.",
        future_potential: "Lead-free brass for global non-toxic water infrastructure."
    },
    {
        id: 'lead',
        name: 'Lead',
        category: 'Metal',
        tagline: 'The Heavy Shield.',
        history_and_lore: "Once a miracle for Roman aqueducts, now a known neurotoxin. Yet Lead remains irreplaceable: its extreme atomic density makes it the ultimate shield against radiation. Without lead, safe medical X-rays and nuclear power would be impossible.",
        engineering: {
            mechanical: { "Hardness": "1.5 Mohs", "State": "Extremely Soft", "Density": "11.34 g/cm³" },
            thermal: { "Melting Point": "327 °C", "Conductivity": "35 W/m·K" },
            chemical: { "Inertness": "High", "Toxicity": "Extreme Neurotoxin" },
            electrical: { "Resistivity": "208 nΩ·m", "State": "Conductor" },
            magnetic: { "Type": "Diamagnetic" }
        },
        synthesis: "Smelting Galena ore with carbon to produce molten lead.",
        applications: {
            "Medical": "Radiation shielding aprons and wall linings.",
            "Energy": "Lead-acid starter batteries for vehicles.",
            "Industrial": "Ballast weights and cable sheathing."
        },
        vulnerabilities: "Devastatingly toxic; extremely poor structural strength.",
        future_potential: "Phase-out in favor of bismuth and tungsten alternatives."
    },
    {
        id: 'uranium',
        name: 'Uranium',
        category: 'Actinide',
        tagline: 'The Sleeping Giant.',
        history_and_lore: "A single pellet the size of a fingertip holds as much energy as a ton of coal. Uranium is the densest energy source available to humanity, powering entire nations and submarine fleets with zero carbon emissions.",
        engineering: {
            mechanical: { "Hardness": "6 Mohs", "Modulus": "172 GPa", "Density": "19.1 g/cm³" },
            thermal: { "Melting Point": "1132 °C", "Energy Density": "80M MJ/kg" },
            chemical: { "Reactivity": "Pyrophoric as Dust", "Oxidation": "Rapid" },
            electrical: { "Resistivity": "280 nΩ·m", "State": "Conductor" },
            magnetic: { "Type": "Paramagnetic" }
        },
        synthesis: "Centrifuge enrichment of Yellowcake into U-235 pellets.",
        applications: {
            "Energy": "Commercial nuclear reactor fuel.",
            "Defense": "Nuclear naval propulsion and armor-piercing rounds.",
            "Industrial": "Depleted uranium high-density ballasts."
        },
        vulnerabilities: "Radioactive waste longevity; geopolitical enrichment risks.",
        future_potential: "Fast-breeder reactors that consume their own nuclear waste."
    },
    {
        id: 'magnesium',
        name: 'Magnesium',
        category: 'Metal',
        tagline: 'The Combustible Feather.',
        history_and_lore: "The lightest structural metal. Magnesium is 75% lighter than steel, but it has a dark side: in powder form, it is highly flammable. It burns so hot it strips oxygen from water, making it the choice for incendiary flares and ultra-light laptops.",
        engineering: {
            mechanical: { "Hardness": "2.5 Mohs", "Density": "1.74 g/cm³", "Specific Strength": "High" },
            thermal: { "Melting Point": "650 °C", "Ignition": "Fast as Powder" },
            chemical: { "Corrosion": "High (Galvanic)", "Structure": "HCP Lattice" },
            electrical: { "Conductivity": "22 MS/m", "State": "Conductor" },
            magnetic: { "Type": "Paramagnetic" }
        },
        synthesis: "Pidgeon process reduction from dolomite rock or seawater.",
        applications: {
            "Automotive": "Steering wheels and high-performance engine blocks.",
            "Electronics": "Ultra-light laptop and camera chassis.",
            "Defense": "Incendiary flares and tracer rounds."
        },
        vulnerabilities: "Catastrophically flammable; corrodes rapidly if uncoated.",
        future_potential: "Magnesium-ion batteries are being researched as a potential successor to lithium, offering double the volumetric energy capacity without the fire risks of lithium-ion."
    },
    {
        id: 'gallium',
        name: 'Gallium',
        category: 'Metal',
        tagline: 'The Melting Metal.',
        history_and_lore: "A metal that breaks human intuition. Gallium melts at 29.7°C, meaning your body heat turns a solid block into liquid silver. Beyond this parlor trick, Gallium Nitride (GaN) microchips are replacing silicon, allowing electricity to flow faster and cooler in your phone chargers.",
        engineering: {
            mechanical: { "Hardness": "1.5 Mohs", "Modulus": "9.8 GPa", "Density": "5.91 g/cm³" },
            thermal: { "Melting Point": "29.7 °C", "Boiling Point": "2229 °C" },
            chemical: { "Reactivity": "Attacks Aluminum", "Corrosion": "High (Liquid state)" },
            electrical: { "Electron Mobility": "Extremely High", "State": "Conductor" },
            magnetic: { "Type": "Diamagnetic" }
        },
        synthesis: "Trace byproduct of aluminum and zinc ore processing.",
        applications: {
            "Electronics": "GaN chargers and high-frequency radar.",
            "Optics": "Foundation of blue and white LEDs.",
            "Medical": "Radiopharmaceuticals for cancer imaging."
        },
        vulnerabilities: "Infiltrates and destroys aluminum structures by making them brittle.",
        future_potential: "Self-healing liquid metal wires for soft robotics."
    },
    {
        id: 'plutonium',
        name: 'Plutonium',
        category: 'Actinide',
        tagline: 'The Synthetic Destroyer.',
        history_and_lore: "The most complex material ever created. Plutonium does not exist in nature; it was synthesized in 1940. It has six distinct solid phases and expands when it solidifies. Warm to the touch due to radioactive decay, it is the dark heart of modern thermonuclear physics.",
        engineering: {
            mechanical: { "State": "Phase-unstable", "Modulus": "96 GPa", "Density": "19.8 g/cm³" },
            thermal: { "Melting Point": "640 °C", "Decay Heat": "2.4 W/kg" },
            chemical: { "Pyrophoricity": "High", "Oxidation": "Self-heating" },
            electrical: { "Resistivity": "1450 nΩ·m", "State": "Conductor" },
            magnetic: { "Type": "Paramagnetic" }
        },
        synthesis: "Transmuted from Uranium-238 inside nuclear reactors.",
        applications: {
            "Defense": "Fissile cores for nuclear weapons.",
            "Space": "RTG power for Voyager and Curiosity rovers.",
            "Research": "Fast-neutron physics."
        },
        vulnerabilities: "Intensely toxic and radioactive; expands 70% during oxidation.",
        future_potential: "Peaceful 'MOX' fuel for commercial carbon-free power."
    },
    {
        id: 'ito',
        name: 'Indium Tin Oxide',
        category: 'Semiconductor',
        tagline: 'The Transparent Wire.',
        history_and_lore: "The magical exception to the laws of physics. Glass is usually transparent but insulating; copper is conductive but opaque. ITO is both. It’s the invisible grid behind every smartphone touch screen and OLED panel in existence.",
        engineering: {
            mechanical: { "State": "Thin Film", "Hardness": "6.5 Mohs", "Density": "7.1 g/cm³" },
            thermal: { "Melting Point": "1527 °C", "Conductivity": "0.8-1.5 W/m·K" },
            chemical: { "Composition": "90% In2O3 / 10% SnO2", "Stability": "High" },
            electrical: { "Transmittance": "90%", "Sheet Resistance": "10 Ω/sq" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Vacuum sputtering of indium/tin oxides onto glass or plastic.",
        applications: {
            "Displays": "Capacitive touch screens and OLED panels.",
            "Energy": "Transparent electrodes for solar cells.",
            "Aerospace": "De-icing window coatings for cockpits."
        },
        vulnerabilities: "Indium is incredibly rare; the film is brittle and cracks if flexed.",
        future_potential: "Flexible silver nanowire or graphene replacements."
    },
    {
        id: 'tantalum',
        name: 'Tantalum',
        category: 'Metal',
        tagline: 'The Uncorruptible Capacitor.',
        history_and_lore: "Named after Tantalus because it refuses to 'drink' or react with anything. Entirely immune to body fluids, it is the perfect medical implant. In electronics, it allows for impossibly small, stable capacitors that enabled the miniaturization of the cell phone.",
        engineering: {
            mechanical: { "Hardness": "Mohs 6.5", "Ductility": "High", "Density": "16.69 g/cm³" },
            thermal: { "Melting Point": "2996 °C", "Conductivity": "57 W/m·K" },
            chemical: { "Corrosion": "Near Absolute", "Acid Resistance": "Supreme" },
            electrical: { "Capacitance": "Highest Volumetric", "State": "Conductor" },
            magnetic: { "Type": "Paramagnetic" }
        },
        synthesis: "Extracted from Coltan ore via hydrofluoric acid dissolution.",
        applications: {
            "Electronics": "High-reliability micro-capacitors for mobile tech.",
            "Medical": "Neural implants and cranial plates.",
            "Industrial": "Lining for boiling acid reaction vessels."
        },
        vulnerabilities: "Astronomically expensive conflict mineral; very heavy.",
        future_potential: "Hypersonic missile coatings capable of surviving Mach 10."
    },
    {
        id: 'zirconium',
        name: 'Zirconium',
        category: 'Metal',
        tagline: 'The Nuclear Sponge.',
        history_and_lore: "While famous as a 'fake diamond', zirconium’s real power is nuclear. It is effectively transparent to neutrons, allowing them to fly through like ghosts. This makes Zirconium alloys the only material used to hold nuclear fuel inside reactors.",
        engineering: {
            mechanical: { "Hardness": "5.0 Mohs", "Modulus": "94 GPa", "Density": "6.52 g/cm³" },
            thermal: { "Melting Point": "1855 °C", "Conductivity": "22 W/m·K" },
            chemical: { "Neutron Cross": "0.18 barns", "Corrosion": "High Stability" },
            electrical: { "Resistivity": "420 nΩ·m", "State": "Conductor" },
            magnetic: { "Type": "Paramagnetic" }
        },
        synthesis: "Kroll process separation from hafnium (a neutron absorber).",
        applications: {
            "Nuclear": "Fuel rod cladding for commercial reactors.",
            "Chemical": "Piping for highly corrosive acid plants.",
            "Medical": "Bio-ceramic dental crowns and knee replacements."
        },
        vulnerabilities: "Overheats and reacts with steam at 900°C to generate explosive hydrogen.",
        future_potential: "Accident Tolerant Fuels (ATF) to prevent nuclear meltdowns."
    },
    {
        id: 'iridium',
        name: 'Iridium',
        category: 'Metal',
        tagline: 'The Extraterrestrial Metal.',
        history_and_lore: "The most corrosion-resistant element known. Iridium is so rare in the Earth's crust that its global presence in a specific rock layer proved a massive asteroid wiped out the dinosaurs. It survives extreme heat and chemical attack, making it vital for the tips of high-performance spark plugs.",
        engineering: {
            mechanical: { "Hardness": "6.5 Mohs", "Modulus": "528 GPa", "Density": "22.56 g/cm³" },
            thermal: { "Melting Point": "2446 °C", "Conductivity": "147 W/m·K" },
            chemical: { "Corrosion": "Absolute (Immune to Aqua Regia)", "Stability": "Supreme" },
            electrical: { "Resistivity": "47 nΩ·m", "State": "Conductor" },
            magnetic: { "Type": "Paramagnetic" }
        },
        synthesis: "Isolated as a microscopic byproduct of platinum and nickel refining.",
        applications: {
            "Automotive": "Long-life spark plug electrodes.",
            "Industrial": "Crucibles for growing sapphire crystals.",
            "Science": "The original standard meter and kilogram alloy."
        },
        vulnerabilities: "Nearly impossible to machine or forge; one of the rarest elements.",
        future_potential: "Radioactive isotopes for industrial radiography of thick steel."
    },
    {
        id: 'gallium-nitride',
        name: 'Gallium Nitride (GaN)',
        category: 'Semiconductor',
        tagline: 'The Silicon Slayer.',
        history_and_lore: "For 50 years, Silicon was king. But Silicon melts under high power. GaN is a 'wide-bandgap' semiconductor that handles massive voltages and frequencies with ease. It conducts electrons 1000x more efficiently, miniaturizing everything from your laptop charger to military radar.",
        engineering: {
            mechanical: { "Hardness": "11 GPa", "Modulus": "210 GPa", "Density": "6.1 g/cm³" },
            thermal: { "Conductivity": "130 W/m·K", "Temp Limit": "High" },
            chemical: { "Stability": "Excellent", "Inertness": "High" },
            electrical: { "Band Gap": "3.4 eV", "Breakdown": "3.3 MV/cm" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Grown via MOCVD or MBE onto silicon or sapphire wafers.",
        applications: {
            "Consumer": "Ultra-fast miniaturized power adapters.",
            "Telecom": "5G cellular base station amplifiers.",
            "Defense": "Active Electronically Scanned Array (AESA) radar."
        },
        vulnerabilities: "Difficult to grow without microscopic crystal defects.",
        future_potential: "Foundational material for LiDAR in autonomous vehicles."
    },
    {
        id: 'bismuth',
        name: 'Bismuth',
        category: 'Metal',
        tagline: 'The Rainbow Heavyweight.',
        history_and_lore: "Bismuth forms hyper-geometric hopper crystals that look like alien cities. Beyond its beauty, it is a safe heavy metal. While sitting next to lead on the periodic table, it is non-toxic, making it the choice for everything from stomach medicine to lead-free bullets.",
        engineering: {
            mechanical: { "Hardness": "2.2 Mohs", "State": "Brittle", "Density": "9.78 g/cm³" },
            thermal: { "Melting Point": "271 °C", "Conductivity": "7.9 W/m·K" },
            chemical: { "Toxicity": "None", "Stability": "Technically radioactive (half-life > universe)" },
            electrical: { "Resistivity": "1.07 µΩ·m", "State": "Conductor" },
            magnetic: { "Type": "Diamagnetic (Strongest natural)" }
        },
        synthesis: "Byproduct of lead/copper refining isolated via Betterton-Kroll process.",
        applications: {
            "Medical": "Pepto-Bismol stomach relief.",
            "Plumbing": "Lead-free brass for water pipes.",
            "Defense": "Non-toxic shotgun pellets for wetlands."
        },
        vulnerabilities: "Extremely brittle; cannot be used in structural engineering.",
        future_potential: "Advanced thermoelectrics for car exhaust energy recovery."
    },
    {
        id: 'silver',
        name: 'Silver',
        category: 'Metal',
        tagline: 'The Perfect Conductor.',
        history_and_lore: "The absolute peak of physics. Silver possesses the highest electrical conductivity, the highest thermal conductivity, and the highest optical reflectivity of any element. If Copper is the standard, Silver is the theoretical maximum for energy transfer.",
        engineering: {
            mechanical: { "Hardness": "2.5 Mohs", "Ductility": "High", "Density": "10.49 g/cm³" },
            thermal: { "Conductivity": "429 W/m·K", "Melting Point": "961 °C" },
            chemical: { "Reactivity": "Tarnishes with Sulfur", "Inertness": "Noble Metal" },
            electrical: { "Conductivity": "63 MS/m", "State": "Conductor" },
            magnetic: { "Type": "Diamagnetic" }
        },
        synthesis: "Electro-refined byproduct of copper, gold, and lead mining.",
        applications: {
            "Energy": "Conductive paste on every solar panel.",
            "Optics": "Reflective coating for high-end telescopes.",
            "Medical": "Nanoparticles in bandages to kill bacteria."
        },
        vulnerabilities: "Tarnishes rapidly; expensive restricted use compared to copper.",
        future_potential: "Transparent nanowire inks for rollable smartphone screens."
    },
    {
        id: 'mercury',
        name: 'Mercury',
        category: 'Metal',
        tagline: 'The Liquid Enigma.',
        history_and_lore: "The only metal that is liquid at room temperature. So dense that an iron anvil floats on its surface. While its toxicity has phased it out of most consumer use, it remains vital for liquid mirror telescopes and high-pressure physics experiments.",
        engineering: {
            mechanical: { "State": "Liquid", "Surface Tension": "485 mN/m", "Density": "13.53 g/cm³" },
            thermal: { "Melting Point": "-38.8 °C", "Conductivity": "8.3 W/m·K" },
            chemical: { "Toxicity": "Extreme Neurotoxin", "Volatility": "High (Vaporizes)" },
            electrical: { "Conductivity": "1.0 MS/m", "State": "Conductor" },
            magnetic: { "Type": "Diamagnetic" }
        },
        synthesis: "Condensation of vapor from roasted Cinnabar ore.",
        applications: {
            "Science": "Deep-space liquid mirror telescopes.",
            "Industrial": "High-pressure switches and vapor lamps.",
            "Medical": "Legacy thermometers and dental amalgams."
        },
        vulnerabilities: "Odorless lethal vapors; highly bio-accumulative neurotoxin.",
        future_potential: "Replacement by Galinstan (non-toxic liquid alloy) in most tech."
    },
    {
        id: 'graphene-aerogel',
        name: 'Graphene Aerogel',
        category: 'Carbon',
        tagline: 'The Solid Cloud.',
        history_and_lore: "The lightest solid ever created. Composed of 99.8% air, a block of Graphene Aerogel can sit on the petals of a flower without bending them. Yet, it is 10x stronger than steel by weight and can absorb 900x its own weight in oil spills, making it a miracle of material science.",
        engineering: {
            mechanical: { "Density": "0.16 mg/cm³", "Elasticity": "Extreme", "Modulus": "1 GPa (Specific)" },
            thermal: { "Insulation": "0.015 W/m·K", "Stability": "High" },
            chemical: { "Porosity": "99.8%", "Oil Absorption": "900x mass" },
            electrical: { "Conductivity": "Excellent", "State": "Conductor" },
            magnetic: { "Type": "Non-magnetic" }
        },
        synthesis: "Freeze-drying a solution of graphene oxide and carbon nanotubes.",
        applications: {
            "Environment": "Rapid ocean oil spill recovery.",
            "Energy": "Ultra-capacitor electrodes.",
            "Aerospace": "Thermal insulation for deep space probes."
        },
        vulnerabilities: "Difficult and expensive to produce in large structural sizes.",
        future_potential: "Weightless structural reinforcement for high-altitude airships."
    },
    {
        id: 'amorphous-metal',
        name: 'Amorphous Metal',
        category: 'Alloy',
        tagline: 'The Liquid Metal Alloy.',
        history_and_lore: "Atoms 'frozen' in chaos. By cooling metal at one million degrees per second, we prevent crystal formation. This 'Metallic Glass' is twice as strong as titanium and has a 'super-elastic' bounce, storing nearly 100% of kinetic energy.",
        engineering: {
            mechanical: { "Yield Strength": "1.9 GPa", "Hardness": "900 HV", "Density": "Varies (High)" },
            thermal: { "Glass Transition": "400-500 °C", "Conductivity": "Variable" },
            chemical: { "Corrosion": "Near Absolute", "Atomic State": "Non-crystalline" },
            electrical: { "Resistivity": "High (Metal)", "State": "Conductor" },
            magnetic: { "Type": "Soft Magnetic" }
        },
        synthesis: "Ultra-rapid quenching of molten alloys via melt-spinning.",
        applications: {
            "Aerospace": "Oil-free gearboxes for Mars rovers.",
            "Consumer": "Indestructible smartphone frames.",
            "Sports": "High-efficiency golf club heads."
        },
        vulnerabilities: "Susceptible to 'work softening'; extremely difficult to weld.",
        future_potential: "3D printing of complex, wear-free medical implants."
    },
    {
        id: 'metamaterials',
        name: 'Metamaterials',
        category: 'High-Tech',
        tagline: 'Defying the Laws of Optics.',
        history_and_lore: "Materials that do not exist in nature. Their power comes from microscopic geometry, not chemistry. By carving patterns smaller than light waves, we can force light to flow around objects, making them effectively invisible.",
        engineering: {
            mechanical: { "Structure": "Periodic Arrays", "Scale": "Sub-wavelength" },
            thermal: { "Conductivity": "Structural-dependent", "Stability": "Varies" },
            chemical: { "Composition": "Composite", "Stability": "High" },
            electrical: { "Permittivity": "Negative (Tunable)", "State": "Engineered" },
            magnetic: { "Permeability": "Negative (Tunable)" }
        },
        synthesis: "Advanced nanolithography and semiconductor etching.",
        applications: {
            "Defense": "Optical invisibility cloaks.",
            "Telecom": "Super-lenses for sub-wavelength imaging.",
            "Infrastructure": "Seismic shields to divert earthquake waves."
        },
        vulnerabilities: "Currently only functional at narrow frequency bands.",
        future_potential: "Paper-thin 'metalenses' that eliminate camera bumps.",
        symbol: 'Meta',
        renderMode: 'network',
        blueprint: {
            atoms: [
                { type: 'Node', pos: [0,0,0], color: '#00e676', size: 8 },
                { type: 'Node', pos: [40,0,0], color: '#00e676', size: 8 },
                { type: 'Node', pos: [20,35,0], color: '#00e676', size: 8 }
            ],
            bonds: [[0,1], [1,2], [2,0]]
        },
        palette: { primary: '#00e676', secondary: '#1b5e20', accent: '#ffffff' }
    },
    {
        id: 'carbon-nanotubes',
        name: 'Carbon Nanotubes (CNT)',
        category: 'Carbon',
        tagline: 'The Ultimate Fiber.',
        history_and_lore: "The strongest material discovered by man. A CNT is a sheet of graphene rolled into a seamless cylinder. It is 100x stronger than steel at one-sixth the weight, and is the only material theoretically strong enough to build a Space Elevator.",
        engineering: {
            mechanical: { "Tensile": "63-100 GPa", "Modulus": "1 TPa", "Density": "1.3 g/cm³" },
            thermal: { "Conductivity": "3500 W/m·K", "Stability": "Up to 2800 °C" },
            chemical: { "Reactivity": "Low", "Biocompatibility": "Asbestos-like risks" },
            electrical: { "Conductivity": "Ballistic", "State": "Super-conductor/Semi" },
            magnetic: { "Type": "Paramagnetic" }
        },
        synthesis: "Chemical Vapor Deposition (CVD) over metal catalysts.",
        applications: {
            "Materials": "Ultra-strong reinforced composites.",
            "Electronics": "Next-generation molecular transistors.",
            "Energy": "The theoretical 36,000km Space Elevator tether."
        },
        vulnerabilities: "Inhaled dust poses severe lung toxicity risks.",
        future_potential: "Space Elevators reducing the cost to orbit by 99%."
    }
];
