import {camera, renderer, scene} from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Cancer() {

    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });

    //CANCER_1
    const CANCER_1Mesh = new THREE.Mesh(geometry, Material_1);
    CANCER_1Mesh.position.set(-260, 35, -365);
    CANCER_1Mesh.scale.setScalar(4);
    scene.add(CANCER_1Mesh);

    // CANCER_2
    const CANCER_2Mesh = new THREE.Mesh(geometry, Material_1);
    CANCER_2Mesh.position.set(-325, 65, -305);
    CANCER_2Mesh.scale.setScalar(4);
    scene.add(CANCER_2Mesh);

    //CANCER_3
    const CANCER_3Mesh = new THREE.Mesh(geometry, Material_1);
    CANCER_3Mesh.position.set(-330, 85, -290);
    CANCER_3Mesh.scale.setScalar(4);
    scene.add(CANCER_3Mesh);

    //CANCER_4
    const CANCER_4Mesh = new THREE.Mesh(geometry, Material_1);
    CANCER_4Mesh.position.set(-340, 135, -260);
    CANCER_4Mesh.scale.setScalar(4);
    scene.add(CANCER_4Mesh);

    //CANCER_5
    const CANCER_5Mesh = new THREE.Mesh(geometry, Material_1);
    CANCER_5Mesh.position.set(-340, 5, -295);
    CANCER_5Mesh.scale.setScalar(4);
    scene.add(CANCER_5Mesh);
}
