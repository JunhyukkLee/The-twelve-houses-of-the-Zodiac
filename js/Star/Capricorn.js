import {camera, renderer, scene} from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Capricorn() {

    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });

    ///CAPRICORN_1
    const CAPRICORN_1Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_1Mesh.position.set(300, 85, 320);
    CAPRICORN_1Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_1Mesh);

    ///CAPRICORN_2
    const CAPRICORN_2Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_2Mesh.position.set(310, 60, 320);
    CAPRICORN_2Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_2Mesh);

    ///CAPRICORN_3
    const CAPRICORN_3Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_3Mesh.position.set(370, -10, 255);
    CAPRICORN_3Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_3Mesh);

    ///CAPRICORN_4
    const CAPRICORN_4Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_4Mesh.position.set(390, -30, 225);
    CAPRICORN_4Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_4Mesh);

    ///CAPRICORN_5
    const CAPRICORN_5Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_5Mesh.position.set(400, -45, 200);
    CAPRICORN_5Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_5Mesh);

    ///CAPRICORN_6
    const CAPRICORN_6Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_6Mesh.position.set(405, -55, 185);
    CAPRICORN_6Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_6Mesh);

    ///CAPRICORN_7
    const CAPRICORN_7Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_7Mesh.position.set(390, -60, 215);
    CAPRICORN_7Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_7Mesh);

    ///CAPRICORN_8
    const CAPRICORN_8Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_8Mesh.position.set(375, -70, 240);
    CAPRICORN_8Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_8Mesh);

    ///CAPRICORN_9
    const CAPRICORN_9Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_9Mesh.position.set(350, -70, 275);
    CAPRICORN_9Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_9Mesh);

    ///CAPRICORN_10
    const CAPRICORN_10Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_10Mesh.position.set(325, -70, 300);
    CAPRICORN_10Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_10Mesh);

    ///CAPRICORN_11
    const CAPRICORN_11Mesh = new THREE.Mesh(geometry, Material_1);
    CAPRICORN_11Mesh.position.set(325, -55, 305);
    CAPRICORN_11Mesh.scale.setScalar(4);
    scene.add(CAPRICORN_11Mesh);
}