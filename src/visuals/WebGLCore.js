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
        this.camera.position.z = 150;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(this.width, this.height);
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        container.appendChild(this.renderer.domElement);

        this.setupLights();
        this.setupComposer();

        this.moleculeGroup = new THREE.Group();
        this.scene.add(this.moleculeGroup);

        this.atoms = [];
        this.bonds = [];
        this.currentMode = null;
        this.animationPhase = 0;

        window.addEventListener('resize', () => this.onResize());
        
        // Initial Mock Molecule (Paracetamol-like)
        this.createMolecule();
    }

    setupLights() {
        const ambient = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambient);
        const directional = new THREE.DirectionalLight(0xffffff, 2);
        directional.position.set(100, 100, 100);
        this.scene.add(directional);
        const rim = new THREE.PointLight(0x00f2ff, 10, 500);
        rim.position.set(-100, -100, -50);
        this.scene.add(rim);
    }

    setupComposer() {
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        this.bloomPass = new UnrealBloomPass(new THREE.Vector2(this.width, this.height), 0.4, 0.4, 0.85);
        this.composer.addPass(this.bloomPass);
    }

    createMolecule() {
        // Simple Phenyl Ring + Amide group for Paracetamol visualization
        const atomPositions = [
            { id: 0, type: 'C', pos: [0, 0, 0], color: '#777777', size: 4 }, // Ring
            { id: 1, type: 'C', pos: [14, 0, 0], color: '#777777', size: 4 },
            { id: 2, type: 'C', pos: [21, 12, 0], color: '#777777', size: 4 },
            { id: 3, type: 'C', pos: [14, 24, 0], color: '#777777', size: 4 },
            { id: 4, type: 'C', pos: [0, 24, 0], color: '#777777', size: 4 },
            { id: 5, type: 'C', pos: [-7, 12, 0], color: '#777777', size: 4 },
            { id: 6, type: 'O', pos: [7, -15, 0], color: '#ff0000', size: 5 }, // Hydroxyl
            { id: 7, type: 'N', pos: [7, 35, 0], color: '#0000ff', size: 5 }, // Amide N
            { id: 8, type: 'C', pos: [7, 50, 0], color: '#777777', size: 4 }, // Amide C=O
            { id: 9, type: 'O', pos: [20, 55, 0], color: '#ff0000', size: 5 } // Carbonyl O
        ];

        const bonds = [
            [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], // Ring
            [0, 6], [3, 7], [7, 8], [8, 9] // Groups
        ];

        atomPositions.forEach(a => {
            const mat = new THREE.MeshPhysicalMaterial({ 
                color: a.color, 
                metalness: 0.2, 
                roughness: 0.1, 
                emissive: a.color, 
                emissiveIntensity: 0.1 
            });
            const mesh = new THREE.Mesh(new THREE.SphereGeometry(a.size, 32, 32), mat);
            mesh.position.set(...a.pos);
            mesh.userData = { originalPos: new THREE.Vector3(...a.pos), id: a.id };
            this.moleculeGroup.add(mesh);
            this.atoms.push(mesh);
        });

        const bondMat = new THREE.MeshPhysicalMaterial({ color: '#ffffff', transparent: true, opacity: 0.3 });
        bonds.forEach(([i1, i2]) => {
            const start = this.atoms[i1].position;
            const end = this.atoms[i2].position;
            const dir = new THREE.Vector3().subVectors(end, start);
            const len = dir.length();
            const cyl = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, len, 12), bondMat);
            
            cyl.position.copy(start).add(dir.clone().multiplyScalar(0.5));
            cyl.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
            
            this.moleculeGroup.add(cyl);
            this.bonds.push({ mesh: cyl, startIdx: i1, endIdx: i2 });
        });

        // Center molecule
        const box = new THREE.Box3().setFromObject(this.moleculeGroup);
        const center = box.getCenter(new THREE.Vector3());
        this.moleculeGroup.position.sub(center);
    }

    setVibrationMode(mode) {
        this.currentMode = mode;
        this.animationPhase = 0;
    }

    update() {
        const time = Date.now() * 0.001;
        this.moleculeGroup.rotation.y += 0.002;

        if (this.currentMode) {
            this.animationPhase += 0.15;
            const amp = Math.sin(this.animationPhase) * 2.0;

            // Simple Logic for "Amide I (C=O Stretch)"
            if (this.currentMode.includes("C=O")) {
                const atomC = this.atoms[8];
                const atomO = this.atoms[9];
                
                // Move them in opposite directions
                const dir = new THREE.Vector3().subVectors(atomO.userData.originalPos, atomC.userData.originalPos).normalize();
                atomO.position.copy(atomO.userData.originalPos).add(dir.clone().multiplyScalar(amp));
                atomC.position.copy(atomC.userData.originalPos).add(dir.clone().multiplyScalar(-amp * 0.5));
            }

            // Sync Bonds
            this.bonds.forEach(b => {
                const start = this.atoms[b.startIdx].position;
                const end = this.atoms[b.endIdx].position;
                const dir = new THREE.Vector3().subVectors(end, start);
                const len = dir.length();
                b.mesh.position.copy(start).add(dir.clone().multiplyScalar(0.5));
                b.mesh.scale.y = len / (start.distanceTo(end) || 1); // Not quite right but works for demo
                b.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
                b.mesh.scale.set(1, len / (this.atoms[b.startIdx].userData.originalPos.distanceTo(this.atoms[b.endIdx].userData.originalPos)), 1);
            });
        }

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
}
