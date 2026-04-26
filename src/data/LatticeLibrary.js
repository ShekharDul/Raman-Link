/**
 * LatticeLibrary.js
 * Experimental ground-truth data for pharmaceutical crystal forms.
 * This handles the "Solid-State Physics" that SMILES cannot predict.
 */

export const LatticeLibrary = [
    {
        compound: "Paracetamol",
        forms: [
            {
                name: "Form I (Monoclinic)",
                stability: "Stable at RT",
                peaks: [
                    { wavenumber: 1650, mode: "Amide I (C=O)", rationale: "C=O stretching involved in strong intermolecular H-bonding." },
                    { wavenumber: 1610, mode: "Aromatic C=C", rationale: "Skeletal ring stretching." },
                    { wavenumber: 1560, mode: "Amide II", rationale: "N-H bending and C-N stretching." },
                    { wavenumber: 1237, mode: "C-N stretch", rationale: "Diagnostic for Form I." },
                    { wavenumber: 858, mode: "Ring breathing", rationale: "Primary aromatic marker." },
                    { wavenumber: 110, mode: "Lattice Phonon", rationale: "Low-frequency mode unique to Monoclinic packing." }
                ]
            },
            {
                name: "Form II (Orthorhombic)",
                stability: "Metastable",
                peaks: [
                    { wavenumber: 1665, mode: "Amide I (C=O)", rationale: "Shifted due to weaker H-bonding network in Form II." },
                    { wavenumber: 1621, mode: "Aromatic C=C", rationale: "Lattice-induced shift." },
                    { wavenumber: 1565, mode: "Amide II", rationale: "N-H shift." },
                    { wavenumber: 1222, mode: "C-N stretch", rationale: "Diagnostic for Form II (Lattice marker)." },
                    { wavenumber: 865, mode: "Ring breathing", rationale: "Lattice-induced shift." },
                    { wavenumber: 95, mode: "Lattice Phonon", rationale: "Orthorhombic lattice vibration." }
                ]
            }
        ]
    },
    {
        compound: "Aspirin",
        forms: [
            {
                name: "Form I",
                peaks: [
                    { wavenumber: 1750, mode: "Ester C=O", rationale: "Stretching of the acetyl group." },
                    { wavenumber: 1605, mode: "Aromatic C=C", rationale: "Ring skeletal mode." },
                    { wavenumber: 1045, mode: "C-O stretch", rationale: "Diagnostic for Form I packing." }
                ]
            }
        ]
    }
];
