import { scene } from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Jemini() {

    const Material_1 = new THREE.MeshStandardMaterial({ map: star1Texture });

    //GEMINI_1
    const GEMINI_1Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_1Mesh.position.set(-40, 125, -432);
    GEMINI_1Mesh.scale.setScalar(4);
    scene.add(GEMINI_1Mesh);
    // const light3_1 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_1);
    // light3_1.position.set(60, 195, -403);

    //GEMINI_2
    const GEMINI_2Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_2Mesh.position.set(-68, 126, -428);
    GEMINI_2Mesh.scale.setScalar(4);
    scene.add(GEMINI_2Mesh);
    // const light3_2 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_2);
    // light3_2.position.set(60, 195, -403);

    //GEMINI_3
    const GEMINI_3Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_3Mesh.position.set(-93, 132, -420);
    GEMINI_3Mesh.scale.setScalar(4);
    scene.add(GEMINI_3Mesh);
    // const light3_3 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_3);
    // light3_3.position.set(60, 195, -403);

    //GEMINI_4
    const GEMINI_4Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_4Mesh.position.set(-150, 172, -389);
    GEMINI_4Mesh.scale.setScalar(4);
    scene.add(GEMINI_4Mesh);
    // const light3_4 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_4);
    // light3_4.position.set(60, 195, -403);

    //GEMINI_5
    const GEMINI_5Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_5Mesh.position.set(-172, 172, -380);
    GEMINI_5Mesh.scale.setScalar(4);
    scene.add(GEMINI_5Mesh);
    // const light3_5 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_5);
    // light3_5.position.set(60, 195, -403);

    //GEMINI_6
    const GEMINI_6Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_6Mesh.position.set(-180, 178, -374);
    GEMINI_6Mesh.scale.setScalar(4);
    scene.add(GEMINI_6Mesh);
    // const light3_6 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_6);
    // light3_6.position.set(60, 195, -403);

    //GEMINI_7
    const GEMINI_7Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_7Mesh.position.set(-206, 144, -374);
    GEMINI_7Mesh.scale.setScalar(4);
    scene.add(GEMINI_7Mesh);
    // const light3_7 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_7);
    // light3_7.position.set(60, 195, -403);

    //GEMINI_8
    const GEMINI_8Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_8Mesh.position.set(-208, 120, -382);
    GEMINI_8Mesh.scale.setScalar(4);
    scene.add(GEMINI_8Mesh);
    // const light3_8 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_8);
    // light3_8.position.set(60, 195, -403);

    //GEMINI_9
    const GEMINI_9Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_9Mesh.position.set(-173, 110, -403);
    GEMINI_9Mesh.scale.setScalar(4);
    scene.add(GEMINI_9Mesh);
    // const light3_9 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_9);
    // light3_9.position.set(60, 195, -450);

    //GEMINI_10
    const GEMINI_10Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_10Mesh.position.set(-143, 95, -417);
    GEMINI_10Mesh.scale.setScalar(4);
    scene.add(GEMINI_10Mesh);
    // const light3_10 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_10);
    // light3_10.position.set(60, 195, -450)


    //GEMINI_11
    const GEMINI_11Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_11Mesh.position.set(-88, 75, -435);
    GEMINI_11Mesh.scale.setScalar(4);
    scene.add(GEMINI_11Mesh);
    // const light3_11 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_11);
    // light3_11.position.set(60, 195, -450);

    //GEMINI_12
    const GEMINI_12Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_12Mesh.position.set(-100, 45, -435);
    GEMINI_12Mesh.scale.setScalar(4);
    scene.add(GEMINI_12Mesh);
    // const light3_12 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_12);
    // light3_12.position.set(60, 195, -450);


    //GEMINI_13
    const GEMINI_13Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_13Mesh.position.set(-65, 105, -435);
    GEMINI_13Mesh.scale.setScalar(4);
    scene.add(GEMINI_13Mesh);
    // const light3_13 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light3_13);
    // light3_13.position.set(60, 195, -450);



}
