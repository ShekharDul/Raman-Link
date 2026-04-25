import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export class WebGLCore {
    constructor(container) {
        this.container = container;
        this.width = container.clientWidth;
        this.height = container.clientHeight;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(35, this.width / this.height, 0.1, 5000);
        this.camera.position.z = 350;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(this.width, this.height);
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2; // MINIMAL PREMIUM: Reduced from 2.0
        container.appendChild(this.renderer.domElement);

        // Lights: High-End Photographic Rig
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(this.ambientLight);
        
        this.keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
        this.keyLight.position.set(150, 150, 150);
        this.scene.add(this.keyLight);

        this.rimLight = new THREE.PointLight(0xffffff, 5, 800);
        this.rimLight.position.set(-150, -150, -150);
        this.scene.add(this.rimLight);

        // Env Map for Chrome/Metallic Luster
        const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
        pmremGenerator.compileEquirectangularShader();
        this.envMap = pmremGenerator.fromScene(new THREE.Scene()).texture;

        // Groups
        this.masterGroup = new THREE.Group();
        this.unitCellGroup = new THREE.Group();
        this.bulkGroup = new THREE.Group();
        this.hudGroup = new THREE.Group();
        
        this.scene.add(this.masterGroup);
        this.masterGroup.add(this.unitCellGroup);
        this.masterGroup.add(this.bulkGroup);
        this.masterGroup.add(this.hudGroup);

        // Post-Processing
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        // MINIMAL PREMIUM: Reduced bloom strength from 1.0 to 0.5
        this.bloomPass = new UnrealBloomPass(new THREE.Vector2(this.width, this.height), 0.5, 0.4, 0.9);
        this.composer.addPass(this.bloomPass);

        this.atoms = [];
        this.bonds = [];
        this.bulkBonds = []; // New: track bulk bonds for animation
        this.atomData = [];
        this.hudElements = [];
        this.bulkMaterials = []; // Optimization: Shared materials for bulk

        window.addEventListener('resize', () => this.onResize());
    }

    createPremiumMaterial(color, category, isBulk = false) {
        const baseColor = new THREE.Color(color);
        const params = {
            color: baseColor,
            envMap: this.envMap,
            metalness: 0.9,
            roughness: 0.15, // Slightly rougher for realism
            clearcoat: 0.5, // Reduced from 1.0
            clearcoatRoughness: 0.1,
            emissive: baseColor,
            emissiveIntensity: isBulk ? 0.02 : 0.05, // Subtle glow
            transparent: true,
            opacity: 1.0
        };

        if (category === 'Metal') {
            params.metalness = 1.0;
            params.roughness = 0.08;
        } else if (category === 'Polymer') {
            params.metalness = 0.1;
            params.roughness = 0.3;
            params.transmission = 0.5; 
            params.thickness = 5.0;
            params.attenuationColor = baseColor;
            params.attenuationDistance = 1.0;
        } else if (category === 'Ceramic' || category === 'Carbon') {
            params.metalness = 0.1;
            params.roughness = 0.1;
            params.transmission = 0.4;
            params.ior = 2.4;
        }

        return new THREE.MeshPhysicalMaterial(params);
    }

    setupMaterial(material) {
        this.currentMaterial = material;
        const blueprint = material.blueprint || { atoms: [], bonds: [] };

        // 1. Full Reset
        [this.unitCellGroup, this.bulkGroup, this.hudGroup].forEach(g => {
            while(g.children.length > 0) {
                const child = g.children[0];
                if (child.geometry) child.geometry.dispose();
                if (child.material) {
                    if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
                    else child.material.dispose();
                }
                g.remove(child);
            }
        });

        this.atoms = [];
        this.bonds = [];
        this.bulkBonds = [];
        this.atomData = [];
        this.hudElements = [];
        this.bulkMaterials = [];

        // 2. Build Unit Cell
        blueprint.atoms.forEach((a) => {
            const mat = this.createPremiumMaterial(a.color, material.category);
            const atom = new THREE.Mesh(new THREE.SphereGeometry(a.size || 5, 32, 32), mat); // Lower poly for perf
            
            const idlePos = new THREE.Vector3(
                THREE.MathUtils.randFloatSpread(600),
                THREE.MathUtils.randFloatSpread(600),
                THREE.MathUtils.randFloatSpread(600)
            );
            atom.position.copy(idlePos);
            
            this.unitCellGroup.add(atom);
            this.atoms.push(atom);
            this.atomData.push({
                idlePos: idlePos,
                targetPos: new THREE.Vector3(...a.pos),
                noiseOffset: Math.random() * 1000
            });

            // Optimization: Prepare bulk materials
            this.bulkMaterials.push(this.createPremiumMaterial(a.color, material.category, true));
        });

        // 3. Build Bonds
        blueprint.bonds.forEach(([i1, i2], idx) => {
            const start = this.atomData[i1].targetPos;
            const end = this.atomData[i2].targetPos;
            const mid = start.clone().add(end).multiplyScalar(0.5);
            const dir = end.clone().sub(start);

            const bond = new THREE.Mesh(
                new THREE.CylinderGeometry(1, 1, dir.length(), 8), // Lower poly
                new THREE.MeshPhysicalMaterial({
                    color: 0x888888,
                    metalness: 1.0,
                    roughness: 0.2,
                    envMap: this.envMap,
                    transparent: true,
                    opacity: 0
                })
            );
            bond.position.copy(mid);
            bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
            bond.scale.set(1, 0.001, 1);
            this.unitCellGroup.add(bond);
            this.bonds.push(bond);

            if (idx % 2 === 0) {
                const marker = new THREE.Group();
                const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0, 12, 0)]);
                const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: 0x00f2ff, transparent: true, opacity: 0 }));
                marker.add(line);
                marker.position.copy(mid);
                this.hudGroup.add(marker);
                this.hudElements.push({ group: marker, line: line });
            }
        });

        // 4. Build Unit Cell Bounding Box (HUD)
        if (material.renderMode === 'lattice') {
            const boxSize = 50; // Standard unit cell size for the viz
            const boxGeo = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
            const edges = new THREE.EdgesGeometry(boxGeo);
            const boxLine = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: material.palette.primary, transparent: true, opacity: 0 }));
            this.unitCellGroup.add(boxLine);
            this.hudElements.push({ group: boxLine, line: boxLine }); // Animate alongside bonds
        }

        // 5. Build Bulk Lattice (Optimized)
        if (material.renderMode === 'lattice') {
            const spacing = 50; 
            const is2D = material.dimensions === 2;
            const zMin = is2D ? 0 : -1;
            const zMax = is2D ? 0 : 1;

            for(let x = -1; x <= 1; x++) {
                for(let y = -1; y <= 1; y++) {
                    for(let z = zMin; z <= zMax; z++) {
                        if (x===0 && y===0 && z===0) continue;
                        
                        const cellPos = new THREE.Vector3(x*spacing, y*spacing, z*spacing);
                        const cellGroup = new THREE.Group();

                        // Add Atoms
                        this.atoms.forEach((atom, i) => {
                            const m = new THREE.Mesh(atom.geometry, this.bulkMaterials[i]);
                            m.position.copy(this.atomData[i].targetPos).add(cellPos);
                            cellGroup.add(m);
                        });

                        // Add Bonds (Structural Simulation)
                        blueprint.bonds.forEach(([i1, i2]) => {
                            const start = this.atomData[i1].targetPos.clone().add(cellPos);
                            const end = this.atomData[i2].targetPos.clone().add(cellPos);
                            const mid = start.clone().add(end).multiplyScalar(0.5);
                            const dir = end.clone().sub(start);

                            const bond = new THREE.Mesh(
                                new THREE.CylinderGeometry(0.8, 0.8, dir.length(), 6),
                                new THREE.MeshPhysicalMaterial({
                                    color: 0x666666,
                                    metalness: 0.5,
                                    roughness: 0.5,
                                    transparent: true,
                                    opacity: 0
                                })
                            );
                            bond.position.copy(mid);
                            bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
                            cellGroup.add(bond);
                            this.bulkBonds.push(bond); // Store for animation
                        });

                        this.bulkGroup.add(cellGroup);
                    }
                }
            }
        }
        this.bulkGroup.visible = false;
        this.bulkGroup.scale.set(0.6, 0.6, 0.6); 
        this.rimLight.color.set(new THREE.Color(material.palette.primary));
    }

    update(p) {
        const time = Date.now() * 0.001;

        // P [0.1 - 0.4]: Assembly Phase
        const assemblyP = THREE.MathUtils.clamp((p - 0.1) * 4, 0, 1);
        this.atoms.forEach((atom, i) => {
            const data = this.atomData[i];
            const noise = new THREE.Vector3(
                Math.sin(time + data.noiseOffset) * 15,
                Math.cos(time * 0.8 + data.noiseOffset) * 15,
                Math.sin(time * 1.2 + data.noiseOffset) * 15
            );
            atom.position.lerpVectors(data.idlePos.clone().add(noise), data.targetPos, assemblyP);
            
            const fadeOut = THREE.MathUtils.clamp(1 - (p - 0.5) * 5, 0, 1);
            atom.material.opacity = p > 0.5 ? fadeOut : 1.0;
        });

        // P [0.3 - 0.5]: Bonds
        const bondP = THREE.MathUtils.clamp((p - 0.3) * 5, 0, 1);
        const ghostFade = THREE.MathUtils.clamp(1 - (p-0.5)*5, 0, 1);
        this.bonds.forEach(bond => {
            bond.scale.y = Math.max(0.001, bondP);
            bond.material.opacity = p > 0.5 ? (Math.min(0.5, bondP * 0.5) * ghostFade) : Math.min(0.5, bondP * 0.5);
        });

        this.hudElements.forEach(el => {
            el.line.material.opacity = p > 0.5 ? (bondP * 0.3 * ghostFade) : bondP * 0.3;
            el.group.scale.set(bondP, bondP, bondP);
        });

        // P [0.5 - 0.8]: Bulk Growth
        if (p > 0.45) {
            this.bulkGroup.visible = true;
            const bulkP = THREE.MathUtils.clamp((p - 0.45) * 4, 0, 1);
            
            // Optimized bulk material update
            this.bulkMaterials.forEach(m => {
                m.opacity = bulkP;
            });

            this.bulkBonds.forEach(b => {
                b.material.opacity = bulkP * 0.4; // Slightly lower opacity for bulk bonds
            });

            const s = 0.5 + bulkP * 0.2; // Reduced scale range: 0.5 to 0.7
            this.bulkGroup.scale.set(s, s, s);
            this.bulkGroup.rotation.y += 0.003;
        } else {
            this.bulkGroup.visible = false;
        }

        // P [0.8 - 1.0]: Master Dissolve
        if (p > 0.8) {
            const dissolveP = 1 - (p - 0.8) * 5;
            this.masterGroup.scale.set(dissolveP, dissolveP, dissolveP);
        } else {
            this.masterGroup.scale.set(1,1,1);
        }

        // Camera Dynamics
        this.camera.position.z = 350 - p * 120;
        this.masterGroup.rotation.y = p * Math.PI * 0.5 + time * 0.05;
        
        this.composer.render();
    }

    onResize() {
        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
        this.composer.setSize(this.width, this.height);
    }

    dispose() {
        window.removeEventListener('resize', () => this.onResize());
        this.renderer.dispose();
        if (this.container.contains(this.renderer.domElement)) {
            this.container.removeChild(this.renderer.domElement);
        }
    }
}
