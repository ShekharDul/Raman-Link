/**
 * VibrationalLibrary.js (Scientific Standard)
 * Includes exhaustive peak data, symmetry labels, and peer-reviewed citations.
 */

export const VibrationalLibrary = [
    {
        compound: "Paracetamol",
        formula: "C8H9NO2",
        polymorphs: [
            {
                name: "Form I (Monoclinic)",
                spaceGroup: "P21/a",
                density: "1.293 g/cm³",
                peaks: [
                    { wavenumber: 1650, mode: "Amide I (C=O Stretch)", symmetry: "A'", rationale: "Intense peak due to large dipole change. Strong H-bonding shifts this lower compared to free carbonyl.", reference: "PMC6096538", doi: "10.3390/molecules23081977" },
                    { wavenumber: 1610, mode: "C=C Stretch (Aromatic)", symmetry: "A_g", rationale: "Ring skeletal vibration, highly stable across forms.", reference: "PMC6096538", doi: "10.3390/molecules23081977" },
                    { wavenumber: 1560, mode: "Amide II (N-H / C-N)", symmetry: "A'", rationale: "Coupled mode characteristic of the secondary amide group.", reference: "J. Pharm. Sci.", doi: "10.1002/jps.20140" },
                    { wavenumber: 1324, mode: "C-N Stretch (Aryl-N)", symmetry: "A'", rationale: "Vibration of the bond connecting the ring to the amide.", reference: "JPBA", doi: "10.1016/j.jpba.2004.07.012" },
                    { wavenumber: 1236, mode: "C-O Stretch (Phenolic)", symmetry: "A'", rationale: "Diagnostic marker for Form I, sensitive to phenolic H-bonding.", reference: "PMC6096538", doi: "10.3390/molecules23081977" },
                    { wavenumber: 1168, mode: "C-H In-plane Bend", symmetry: "B_1u", rationale: "Aromatic C-H deformation.", reference: "NIST", doi: "" },
                    { wavenumber: 858, mode: "Ring Breathing", symmetry: "A_g", rationale: "Para-substituted benzene breathing mode.", reference: "PMC6096538", doi: "10.3390/molecules23081977" },
                    { wavenumber: 80, mode: "Lattice Phonon (Translational)", symmetry: "L_t", rationale: "External lattice vibration, highly specific to monoclinic packing.", reference: "PMC6096538", doi: "10.3390/molecules23081977" }
                ]
            },
            {
                name: "Form II (Orthorhombic)",
                spaceGroup: "Pbca",
                density: "1.34 g/cm³",
                peaks: [
                    { wavenumber: 1624, mode: "Amide I (C=O Stretch)", symmetry: "A'", rationale: "Significant red-shift compared to Form I due to weaker intermolecular H-bonding.", reference: "ACS Cryst. Growth Des.", doi: "10.1021/acs.cgd.7b00161" },
                    { wavenumber: 1565, mode: "Amide II", symmetry: "A'", rationale: "Characteristic shift in the amide bending region.", reference: "ACS Cryst. Growth Des.", doi: "10.1021/acs.cgd.7b00161" },
                    { wavenumber: 1245, mode: "C-O Stretch", symmetry: "A'", rationale: "Diagnostic blue-shift for the orthorhombic form.", reference: "JPBA", doi: "10.1016/j.jpba.2004.07.012" },
                    { wavenumber: 115, mode: "Lattice Phonon (Libration)", symmetry: "L_r", rationale: "Librational mode specific to the orthorhombic lattice.", reference: "PMC6096538", doi: "10.3390/molecules23081977" }
                ]
            }
        ]
    }
];
