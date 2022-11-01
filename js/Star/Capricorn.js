import { scene } from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodiacccc.png")
export function Capricorn() {

    const Material_1 = new THREE.MeshStandardMaterial({ map: star1Texture });

    ///CAPRICORN_1
    const CAPRICORN_1Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_1Mesh.position.set(300, 85, 320);
    CAPRICORN_1Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_1Mesh);
    // const light8_1 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light8_1);
    // light8_1.position.set(300, 85, 320);

    ///CAPRICORN_2
    const CAPRICORN_2Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_2Mesh.position.set(310, 60, 320);
    CAPRICORN_2Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_2Mesh);
    // const light8_2 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light8_2);
    // light8_2.position.set(310, 60, 320);

    ///CAPRICORN_3
    const CAPRICORN_3Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_3Mesh.position.set(370, -10, 255);
    CAPRICORN_3Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_3Mesh);
    // const light8_3 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light8_3);
    // light8_3.position.set(370, -10, 255);

    ///CAPRICORN_4
    const CAPRICORN_4Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_4Mesh.position.set(390, -30, 225);
    CAPRICORN_4Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_4Mesh);
    // const light8_4 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light8_4);
    // light8_4.position.set(390, -30, 225);

    ///CAPRICORN_5
    const CAPRICORN_5Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_5Mesh.position.set(400, -45, 200);
    CAPRICORN_5Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_5Mesh);
    // const light8_5 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light8_5);
    // light8_5.position.set(400, -45, 200);

    ///CAPRICORN_6
    const CAPRICORN_6Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_6Mesh.position.set(405, -55, 185);
    CAPRICORN_6Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_6Mesh);
    // const light8_6 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light8_6);
    // light8_6.position.set(405, -55, 185);

    ///CAPRICORN_7
    const CAPRICORN_7Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_7Mesh.position.set(390, -60, 215);
    CAPRICORN_7Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_7Mesh);
    // const light8_7 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light8_7);
    // light8_7.position.set(390, -60, 215);

    ///CAPRICORN_8
    const CAPRICORN_8Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_8Mesh.position.set(375, -70, 240);
    CAPRICORN_8Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_8Mesh);
    // const light8_8 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light8_8);
    // light8_8.position.set(375, -70, 240);

    ///CAPRICORN_9
    const CAPRICORN_9Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_9Mesh.position.set(350, -70, 275);
    CAPRICORN_9Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_9Mesh);
    // const light8_9 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light8_9);
    // light8_9.position.set(350, -70, 275);

    ///CAPRICORN_10
    const CAPRICORN_10Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_10Mesh.position.set(325, -70, 300);
    CAPRICORN_10Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_10Mesh);
    // const light8_10 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light8_10);
    // light8_10.position.set(325, -70, 300);

    ///CAPRICORN_11
    const CAPRICORN_11Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_11Mesh.position.set(325, -55, 305);
    CAPRICORN_11Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_11Mesh);
    // const light8_11 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light8_11);
    // light8_11.position.set(325, -55, 305);



}