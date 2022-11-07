import {camera, renderer, scene} from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Gemini() {

    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });

    //GEMINI_1
    const GEMINI_1Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_1Mesh.position.set(-40, 125, -432);
    GEMINI_1Mesh.scale.setScalar(4);
    scene.add(GEMINI_1Mesh);

    //GEMINI_2
    const GEMINI_2Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_2Mesh.position.set(-68, 126, -428);
    GEMINI_2Mesh.scale.setScalar(4);
    scene.add(GEMINI_2Mesh);

    //GEMINI_3
    const GEMINI_3Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_3Mesh.position.set(-93, 132, -420);
    GEMINI_3Mesh.scale.setScalar(4);
    scene.add(GEMINI_3Mesh);

    //GEMINI_4
    const GEMINI_4Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_4Mesh.position.set(-150, 172, -389);
    GEMINI_4Mesh.scale.setScalar(4);
    scene.add(GEMINI_4Mesh);

    //GEMINI_5
    const GEMINI_5Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_5Mesh.position.set(-172, 172, -380);
    GEMINI_5Mesh.scale.setScalar(4);
    scene.add(GEMINI_5Mesh);

    //GEMINI_6
    const GEMINI_6Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_6Mesh.position.set(-180, 178, -374);
    GEMINI_6Mesh.scale.setScalar(4);
    scene.add(GEMINI_6Mesh);

    //GEMINI_7
    const GEMINI_7Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_7Mesh.position.set(-206, 144, -374);
    GEMINI_7Mesh.scale.setScalar(4);
    scene.add(GEMINI_7Mesh);

    //GEMINI_8
    const GEMINI_8Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_8Mesh.position.set(-208, 120, -382);
    GEMINI_8Mesh.scale.setScalar(4);
    scene.add(GEMINI_8Mesh);

    //GEMINI_9
    const GEMINI_9Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_9Mesh.position.set(-173, 110, -403);
    GEMINI_9Mesh.scale.setScalar(4);
    scene.add(GEMINI_9Mesh);

    //GEMINI_10
    const GEMINI_10Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_10Mesh.position.set(-143, 95, -417);
    GEMINI_10Mesh.scale.setScalar(4);
    scene.add(GEMINI_10Mesh);

    //GEMINI_11
    const GEMINI_11Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_11Mesh.position.set(-88, 75, -435);
    GEMINI_11Mesh.scale.setScalar(4);
    scene.add(GEMINI_11Mesh);

    //GEMINI_12
    const GEMINI_12Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_12Mesh.position.set(-100, 45, -435);
    GEMINI_12Mesh.scale.setScalar(4);
    scene.add(GEMINI_12Mesh);

    //GEMINI_13
    const GEMINI_13Mesh = new THREE.Mesh(geometry, Material_1);
    GEMINI_13Mesh.position.set(-65, 105, -435);
    GEMINI_13Mesh.scale.setScalar(4);
    scene.add(GEMINI_13Mesh);
}
