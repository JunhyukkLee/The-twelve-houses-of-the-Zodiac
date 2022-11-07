import {camera, renderer, scene} from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Pisces() {

    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });

    ///PISCES_1
    const PISCES_1Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_1Mesh.position.set(370, 105, -225);
    PISCES_1Mesh.scale.setScalar(4);
    scene.add(PISCES_1Mesh);

    ///PISCES_2
    const PISCES_2Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_2Mesh.position.set(380, 95, -215);
    PISCES_2Mesh.scale.setScalar(4);
    scene.add(PISCES_2Mesh);

    ///PISCES_3
    const PISCES_3Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_3Mesh.position.set(385, 105, -200);
    PISCES_3Mesh.scale.setScalar(4);
    scene.add(PISCES_3Mesh);

    ///PISCES_4
    const PISCES_4Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_4Mesh.position.set(400, 110, -170);
    PISCES_4Mesh.scale.setScalar(4);
    scene.add(PISCES_4Mesh);

    ///PISCES_5
    const PISCES_5Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_5Mesh.position.set(410, 105, -140);
    PISCES_5Mesh.scale.setScalar(4);
    scene.add(PISCES_5Mesh);

    ///PISCES_6
    const PISCES_6Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_6Mesh.position.set(420, 105, -110);
    PISCES_6Mesh.scale.setScalar(4);
    scene.add(PISCES_6Mesh);

    ///PISCES_7
    const PISCES_7Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_7Mesh.position.set(400, 150, -145);
    PISCES_7Mesh.scale.setScalar(4);
    scene.add(PISCES_7Mesh);

    ///PISCES_8
    const PISCES_8Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_8Mesh.position.set(365, 200, -160);
    PISCES_8Mesh.scale.setScalar(4);
    scene.add(PISCES_8Mesh);

    ///PISCES_9
    const PISCES_9Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_9Mesh.position.set(355, 220, -160);
    PISCES_9Mesh.scale.setScalar(4);
    scene.add(PISCES_9Mesh);

    ///PISCES_10
    const PISCES_10Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_10Mesh.position.set(360, 220, -150);
    PISCES_10Mesh.scale.setScalar(4);
    scene.add(PISCES_10Mesh);

    ///PISCES_11
    const PISCES_11Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_11Mesh.position.set(345, 235, -165);
    PISCES_11Mesh.scale.setScalar(4);
    scene.add(PISCES_11Mesh);

    ///PISCES_12
    const PISCES_12Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_12Mesh.position.set(355, 230, -140);
    PISCES_12Mesh.scale.setScalar(4);
    scene.add(PISCES_12Mesh);

    ///PISCES_13
    const PISCES_13Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_13Mesh.position.set(340, 250, -150);
    PISCES_13Mesh.scale.setScalar(4);
    scene.add(PISCES_13Mesh);

    ///PISCES_14
    const PISCES_14Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_14Mesh.position.set(350, 240, -135);
    PISCES_14Mesh.scale.setScalar(4);
    scene.add(PISCES_14Mesh);

}