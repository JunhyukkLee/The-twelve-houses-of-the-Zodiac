import { scene } from "../planet.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/moon.jpg")
export function Cancer() {

    const Material_1 = new THREE.MeshStandardMaterial({ map: star1Texture });

    //CANCER_1
    const CANCER_1Mesh = new THREE.Mesh(geometry, Material_1);
    CANCER_1Mesh.position.set(-260, 35, -365);
    CANCER_1Mesh.scale.setScalar(4);
    scene.add(CANCER_1Mesh);
    const light2_1 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light2_1);
    light2_1.position.set(-40, 125, -432);
    //CANCER_2
    const CANCER_2Mesh = new THREE.Mesh(geometry, Material_1);
    CANCER_2Mesh.position.set(-325, 65, -305);
    CANCER_2Mesh.scale.setScalar(4);
    scene.add(CANCER_2Mesh);
    const light2_2 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light2_2);
    light2_2.position.set(-40, 125, -432);

    //CANCER_3
    const CANCER_3Mesh = new THREE.Mesh(geometry, Material_1);
    CANCER_3Mesh.position.set(-330, 85, -290);
    CANCER_3Mesh.scale.setScalar(4);
    scene.add(CANCER_3Mesh);
    const light2_3 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light2_3);
    light2_3.position.set(-40, 125, -432);

    //CANCER_4
    const CANCER_4Mesh = new THREE.Mesh(geometry, Material_1);
    CANCER_4Mesh.position.set(-340, 135, -260);
    CANCER_4Mesh.scale.setScalar(4);
    scene.add(CANCER_4Mesh);
    const light2_4 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light2_4);
    light2_4.position.set(-40, 125, -432);

    //CANCER_5
    const CANCER_5Mesh = new THREE.Mesh(geometry, Material_1);
    CANCER_5Mesh.position.set(-340, 5, -295);
    CANCER_5Mesh.scale.setScalar(4);
    scene.add(CANCER_5Mesh);
    const light2_5 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light2_5);
    light2_5.position.set(-40, 125, -432);


}
