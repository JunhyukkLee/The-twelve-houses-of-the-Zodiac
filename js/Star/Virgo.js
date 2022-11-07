import {camera, renderer, scene} from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Virgo() {

    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });
    //VIRGO_1
    const VIRGO_1Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_1Mesh.position.set(-423, 152, 30);
    VIRGO_1Mesh.scale.setScalar(4);
    scene.add(VIRGO_1Mesh);

    //VIRGO_2
    const VIRGO_2Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_2Mesh.position.set(-430, 125, 44);
    VIRGO_2Mesh.scale.setScalar(4);
    scene.add(VIRGO_2Mesh);

    //VIRGO_3
    const VIRGO_3Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_3Mesh.position.set(-431, 110, 70);
    VIRGO_3Mesh.scale.setScalar(4);
    scene.add(VIRGO_3Mesh);

    //VIRGO_4
    const VIRGO_4Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_4Mesh.position.set(-420, 121, 103);
    VIRGO_4Mesh.scale.setScalar(4);
    scene.add(VIRGO_4Mesh);

    //VIRGO_5
    const VIRGO_5Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_5Mesh.position.set(-400, 167, 125);
    VIRGO_5Mesh.scale.setScalar(4);
    scene.add(VIRGO_5Mesh);

    //VIRGO_6
    const VIRGO_6Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_6Mesh.position.set(-418, 83, 145);
    VIRGO_6Mesh.scale.setScalar(4);
    scene.add(VIRGO_6Mesh);

    //VIRGO_7
    const VIRGO_7Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_7Mesh.position.set(-408, 80, 175);
    VIRGO_7Mesh.scale.setScalar(4);
    scene.add(VIRGO_7Mesh);

    //VIRGO_8
    const VIRGO_8Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_8Mesh.position.set(-382, 50, 230);
    VIRGO_8Mesh.scale.setScalar(4);
    scene.add(VIRGO_8Mesh);

    //VIRGO_9
    const VIRGO_9Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_9Mesh.position.set(-431, 70, 105);
    VIRGO_9Mesh.scale.setScalar(4);
    scene.add(VIRGO_9Mesh);

    //VIRGO_10
    const VIRGO_10Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_10Mesh.position.set(-435, 25, 105);
    VIRGO_10Mesh.scale.setScalar(4);
    scene.add(VIRGO_10Mesh);

    //VIRGO_11
    const VIRGO_11Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_11Mesh.position.set(-420, 3, 160);
    VIRGO_11Mesh.scale.setScalar(4);
    scene.add(VIRGO_11Mesh);

    //VIRGO_12
    const VIRGO_12Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_12Mesh.position.set(-415, 14, 172);
    VIRGO_12Mesh.scale.setScalar(4);
    scene.add(VIRGO_12Mesh);

    //VIRGO_13
    const VIRGO_13Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_13Mesh.position.set(-396, 0, 215);
    VIRGO_13Mesh.scale.setScalar(4);
    scene.add(VIRGO_13Mesh);

}
