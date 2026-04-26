/**
 * MoleculeService.js
 * Interfaces with the PubChem PUG REST API to fetch 
 * verified scientific structures and metadata.
 */

export class MoleculeService {
    constructor() {
        this.baseUrl = "https://pubchem.ncbi.nlm.nih.gov/rest/pug";
    }

    /**
     * Searches for a compound by name and returns CID and SMILES
     */
    async searchCompound(name) {
        try {
            // 1. Get CID
            const cidResponse = await fetch(`${this.baseUrl}/compound/name/${name}/cids/JSON`);
            if (!cidResponse.ok) throw new Error("COMPOUND_NOT_FOUND");
            const cidData = await cidResponse.json();
            const cid = cidData.IdentifierList.CID[0];

            // 2. Get Properties (SMILES, Formula, Weight)
            const propsResponse = await fetch(`${this.baseUrl}/compound/cid/${cid}/property/CanonicalSMILES,MolecularFormula,MolecularWeight,Complexity/JSON`);
            const propsData = await propsResponse.json();
            const properties = propsData.PropertyTable.Properties[0];

            return {
                cid: cid,
                name: name,
                smiles: properties.CanonicalSMILES,
                formula: properties.MolecularFormula,
                weight: properties.MolecularWeight,
                complexity: properties.Complexity
            };
        } catch (error) {
            console.error("PubChem API Error:", error);
            throw error;
        }
    }
}
