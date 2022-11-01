import { scene } from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/moon.jpg")
export function Aquarius() {

    const Material_1 = new THREE.MeshStandardMaterial({ map: star1Texture });

    ///AQUARIUS_1
    const AQUARIUS_1Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_1Mesh.position.set(400, 180, 85);
    AQUARIUS_1Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_1Mesh);
    const light7_1 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light7_1);
    light7_1.position.set(400, 180, 85);

    ///AQUARIUS_2
    const AQUARIUS_2Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_2Mesh.position.set(435, 110, -15);
    AQUARIUS_2Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_2Mesh);
    const light7_2 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light7_2);
    light7_2.position.set(435, 110, -15);

    ///AQUARIUS_3
    const AQUARIUS_3Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_3Mesh.position.set(440, 80, -15);
    AQUARIUS_3Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_3Mesh);
    const light7_3 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light7_3);
    light7_3.position.set(440, 80, -15);

    ///AQUARIUS_4
    const AQUARIUS_4Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_4Mesh.position.set(440, 80, -30);
    AQUARIUS_4Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_4Mesh);
    const light7_4 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light7_4);
    light7_4.position.set(440, 80, -30);

    ///AQUARIUS_5
    const AQUARIUS_5Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_5Mesh.position.set(440, 70, -35);
    AQUARIUS_5Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_5Mesh);
    const light7_5 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light7_5);
    light7_5.position.set(440, 70, -35);

    ///AQUARIUS_6
    const AQUARIUS_6Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_6Mesh.position.set(450, 10, 5);
    AQUARIUS_6Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_6Mesh);
    const light7_6 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light7_6);
    light7_6.position.set(450, 10, 5);

    ///AQUARIUS_7
    const AQUARIUS_7Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_7Mesh.position.set(445, 35, 15);
    AQUARIUS_7Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_7Mesh);
    const light7_7 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light7_7);
    light7_7.position.set(445, 35, 15);

    ///AQUARIUS_8
    const AQUARIUS_8Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_8Mesh.position.set(445, 40, 45);
    AQUARIUS_8Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_8Mesh);
    const light7_8 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light7_8);
    light7_8.position.set(445, 40, 45);

    ///AQUARIUS_9
    const AQUARIUS_9Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_9Mesh.position.set(445, 35, 60);
    AQUARIUS_9Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_9Mesh);
    const light7_9 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light7_9);
    light7_9.position.set(445, 35, 60);

    ///AQUARIUS_10
    const AQUARIUS_10Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_10Mesh.position.set(440, 15, 80);
    AQUARIUS_10Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_10Mesh);
    const light7_10 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light7_10);
    light7_10.position.set(445, 35, 60);

    ///AQUARIUS_11
    const AQUARIUS_11Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_11Mesh.position.set(440, 85, 25);
    AQUARIUS_11Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_11Mesh);
    const light7_11 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light7_11);
    light7_11.position.set(440, 85, 25);

    ///AQUARIUS_12
    const AQUARIUS_12Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_12Mesh.position.set(435, 95, 65);
    AQUARIUS_12Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_12Mesh);
    const light7_12 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light7_12);
    light7_12.position.set(440, 85, 25);

}