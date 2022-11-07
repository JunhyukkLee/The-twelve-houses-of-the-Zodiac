import {camera, renderer, scene} from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Aquarius() {

    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });

    ///AQUARIUS_1
    const AQUARIUS_1Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_1Mesh.position.set(400, 180, 85);
    AQUARIUS_1Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_1Mesh);

    ///AQUARIUS_2
    const AQUARIUS_2Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_2Mesh.position.set(435, 110, -15);
    AQUARIUS_2Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_2Mesh);

    ///AQUARIUS_3
    const AQUARIUS_3Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_3Mesh.position.set(440, 80, -15);
    AQUARIUS_3Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_3Mesh);

    ///AQUARIUS_4
    const AQUARIUS_4Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_4Mesh.position.set(440, 80, -30);
    AQUARIUS_4Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_4Mesh);

    ///AQUARIUS_5
    const AQUARIUS_5Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_5Mesh.position.set(440, 70, -35);
    AQUARIUS_5Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_5Mesh);

    ///AQUARIUS_6
    const AQUARIUS_6Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_6Mesh.position.set(450, 10, 5);
    AQUARIUS_6Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_6Mesh);

    ///AQUARIUS_7
    const AQUARIUS_7Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_7Mesh.position.set(445, 35, 15);
    AQUARIUS_7Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_7Mesh);

    ///AQUARIUS_8
    const AQUARIUS_8Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_8Mesh.position.set(445, 40, 45);
    AQUARIUS_8Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_8Mesh);

    ///AQUARIUS_9
    const AQUARIUS_9Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_9Mesh.position.set(445, 35, 60);
    AQUARIUS_9Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_9Mesh);

    ///AQUARIUS_10
    const AQUARIUS_10Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_10Mesh.position.set(440, 15, 80);
    AQUARIUS_10Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_10Mesh);

    ///AQUARIUS_11
    const AQUARIUS_11Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_11Mesh.position.set(440, 85, 25);
    AQUARIUS_11Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_11Mesh);

    ///AQUARIUS_12
    const AQUARIUS_12Mesh = new THREE.Mesh(geometry, Material_1);
    AQUARIUS_12Mesh.position.set(435, 95, 65);
    AQUARIUS_12Mesh.scale.setScalar(4);
    scene.add(AQUARIUS_12Mesh);

}