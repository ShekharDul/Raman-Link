/**
 * PredictionEngine.js (Hybrid Robust Version)
 * Combines Experimental Lattice Physics with Theoretical Structural Correlation.
 */

import { LatticeLibrary } from '../data/LatticeLibrary.js';

export class PredictionEngine {
    constructor() {
        this.tolerance = 8.0;
    }

    /**
     * HYBRID ANALYZER
     * Prioritizes Experimental Lattice Ground-Truth, falls back to Structural Logic.
     */
    analyzeHybrid(compoundName, detectedPeaks, theoreticalMap) {
        // 1. Attempt Lattice Match (Solid-State Physics)
        const latticeMatch = LatticeLibrary.find(item => 
            item.compound.toLowerCase() === compoundName.toLowerCase()
        );

        if (latticeMatch) {
            // Check each form (e.g. Form I vs Form II)
            const formResults = latticeMatch.forms.map(form => {
                const matches = this.matchPeaks(detectedPeaks, form.peaks);
                return {
                    form: form.name,
                    confidence: (matches.length / form.peaks.length * 100).toFixed(1),
                    assignments: matches,
                    tier: "EXPERIMENTAL_REFERENCE"
                };
            });

            // Return the best-fitting polymorphic form
            const bestForm = formResults.sort((a, b) => b.confidence - a.confidence)[0];
            if (bestForm.confidence > 20) {
                return bestForm;
            }
        }

        // 2. Fallback to Structural Correlation (Molecular Chemistry)
        if (theoreticalMap.length > 0) {
            const theoreticalMatches = this.matchPeaks(detectedPeaks, theoreticalMap);
            return {
                form: "Molecular Structure (General)",
                confidence: (theoreticalMatches.length / theoreticalMap.length * 100).toFixed(1),
                assignments: theoreticalMatches,
                tier: "THEORETICAL_CORRELATION"
            };
        }

        return { error: "NO_MATCHING_MOTIFS_DETECTED", assignments: [] };
    }

    matchPeaks(detected, reference) {
        const results = [];
        detected.forEach(peak => {
            let bestRef = null;
            let minDiff = this.tolerance;

            reference.forEach(ref => {
                const diff = Math.abs(peak.wavenumber - ref.wavenumber);
                if (diff < minDiff) {
                    minDiff = diff;
                    bestRef = {
                        ...ref,
                        userWavenumber: peak.wavenumber,
                        diff: diff,
                        fwhm: peak.fwhm,
                        area: peak.area
                    };
                }
            });

            if (bestRef) results.push(bestRef);
        });
        return results;
    }
}
