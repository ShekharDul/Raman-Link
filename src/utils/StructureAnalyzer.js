/**
 * StructureAnalyzer.js
 * Expanded Socrates Engine for Total Organic API Coverage.
 */

export class StructureAnalyzer {
    constructor() {
        this.SOCRATES_DATA = {
            // OXYGEN GROUPS
            'CARBONYL': { base: 1680, shift: -25, label: 'C=O STRETCH', rationale: 'Socrates Table 12.1: Carbonyl stretching in pharmaceutical solids.' },
            'ESTER': { base: 1740, shift: -10, label: 'ESTER C=O', rationale: 'Socrates Table 12.5: Saturated ester carbonyl stretching.' },
            'ALCOHOL_OH': { base: 3400, shift: -100, label: 'O-H STRETCH', rationale: 'Socrates Table 10.1: Intermolecular hydrogen-bonded OH groups.' },
            'ETHER': { base: 1120, shift: -10, label: 'C-O-C ASYM STRETCH', rationale: 'Socrates Table 10.4: Aliphatic and aromatic ethers.' },
            
            // NITROGEN GROUPS
            'AMIDE_I': { base: 1650, shift: -20, label: 'AMIDE I', rationale: 'Socrates Table 13.4: Highly characteristic C=O in secondary amides.' },
            'AMIDE_II': { base: 1550, shift: -10, label: 'AMIDE II', rationale: 'Socrates Table 13.4: N-H deformation / C-N stretch coupling.' },
            'AMINE_NH': { base: 3350, shift: -30, label: 'N-H STRETCH', rationale: 'Socrates Table 13.1: Primary and secondary amine stretching.' },
            'NITRILE': { base: 2240, shift: 5, label: 'C≡N STRETCH', rationale: 'Socrates Table 14.1: Aliphatic and aromatic nitriles.' },
            
            // AROMATICS & HYDROCARBONS
            'AROMATIC_CC': { base: 1600, shift: 5, label: 'RING C=C', rationale: 'Socrates Table 3.2: Skeletal vibrations of aromatic rings.' },
            'AROMATIC_CH': { base: 3060, shift: -5, label: 'AROMATIC C-H', rationale: 'Socrates Table 3.1: High wavenumber C-H stretching modes.' },
            'ALKANE_CH': { base: 2930, shift: 0, label: 'ALIPHATIC C-H', rationale: 'Socrates Table 1.1: CH2 and CH3 stretching in aliphatic chains.' },
            
            // SULFUR & HALOGENS
            'SULFONE': { base: 1320, shift: -15, label: 'SO2 ASYM STRETCH', rationale: 'Socrates Table 21.3: Asymmetric stretching of the sulfone group.' },
            'NITRO': { base: 1350, shift: -10, label: 'NO2 SYMM STRETCH', rationale: 'Socrates Table 15.2: Symmetric stretching of nitro compounds.' },
            'THIOL': { base: 2570, shift: -10, label: 'S-H STRETCH', rationale: 'Socrates Table 21.1: Characteristic weak SH vibration.' },
            'CHLORINE': { base: 720, shift: -10, label: 'C-CL STRETCH', rationale: 'Socrates Table 22.1: Carbon-Chlorine stretching in organic halides.' }
        };
    }

    predict(smiles) {
        const predictions = [];
        const s = smiles.toUpperCase();
        
        // Comprehensive Organic API Logic Mapping
        if (s.includes('O=C')) {
            if (s.includes('OC=O') || s.includes('O=CO')) predictions.push(this.createAssignment('ESTER'));
            else if (s.includes('NC=O') || s.includes('NC(O)')) {
                predictions.push(this.createAssignment('AMIDE_I'));
                predictions.push(this.createAssignment('AMIDE_II'));
            } else predictions.push(this.createAssignment('CARBONYL'));
        }
        
        if (s.includes('O') && !s.includes('O=C')) {
            if (s.includes('OH') || s.includes('[OH]')) predictions.push(this.createAssignment('ALCOHOL_OH'));
            else predictions.push(this.createAssignment('ETHER'));
        }

        if (s.includes('N') && !s.includes('NC=O')) {
            if (s.includes('C#N') || s.includes('C#N')) predictions.push(this.createAssignment('NITRILE'));
            else if (s.includes('NH') || s.includes('N')) predictions.push(this.createAssignment('AMINE_NH'));
        }

        if (s.includes('C1=CC=CC=C1') || s.includes('c1ccccc1') || s.includes('C1=CC=')) {
            predictions.push(this.createAssignment('AROMATIC_CC'));
            predictions.push(this.createAssignment('AROMATIC_CH'));
        }

        if (s.includes('C') && !s.includes('C1=')) predictions.push(this.createAssignment('ALKANE_CH'));
        if (s.includes('S(=O)(=O)')) predictions.push(this.createAssignment('SULFONE'));
        if (s.includes('[N+](=O)[O-]')) predictions.push(this.createAssignment('NITRO'));
        if (s.includes('S') && !s.includes('S=O')) predictions.push(this.createAssignment('THIOL'));
        if (s.includes('CL')) predictions.push(this.createAssignment('CHLORINE'));

        return predictions.sort((a, b) => b.wavenumber - a.wavenumber);
    }

    createAssignment(key) {
        const p = this.SOCRATES_DATA[key];
        const predicted = p.base + p.shift;
        return {
            wavenumber: predicted,
            mode: p.label,
            fwhm: '4.5',
            area: '100.0',
            rationale: `SOCRATES_PROTOCOL: ${p.rationale} (Predicted Frequency: ${predicted} cm⁻¹)`
        };
    }
}
