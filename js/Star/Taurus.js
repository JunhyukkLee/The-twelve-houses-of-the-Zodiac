import {camera, renderer, scene} from "../main.js";

//TAURUS
const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Taurus(){
    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });

//TAURUS_1
const TAURUS_1Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_1Mesh.position.set(0,195, -407);
TAURUS_1Mesh.scale.setScalar(4);
scene.add(TAURUS_1Mesh);

//TAURUS_2
const TAURUS_2Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_2Mesh.position.set(24,236, -385);
TAURUS_2Mesh.scale.setScalar(4);
scene.add(TAURUS_2Mesh);

//TAURUS_3
const TAURUS_3Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_3Mesh.position.set(60,195, -403);
TAURUS_3Mesh.scale.setScalar(4);
scene.add(TAURUS_3Mesh);

//TAURUS_4
const TAURUS_4Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_4Mesh.position.set(80,175, -409);
TAURUS_4Mesh.scale.setScalar(4);
scene.add(TAURUS_4Mesh);

//TAURUS_5
const TAURUS_5Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_5Mesh.position.set(80,160, -415);
TAURUS_5Mesh.scale.setScalar(4);
scene.add(TAURUS_5Mesh);

//TAURUS_6
const TAURUS_6Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_6Mesh.position.set(90,162, -412);
TAURUS_6Mesh.scale.setScalar(4);
scene.add(TAURUS_6Mesh);

////TAURUS_7
const TAURUS_7Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_7Mesh.position.set(95,147, -417);
TAURUS_7Mesh.scale.setScalar(4);
scene.add(TAURUS_7Mesh);

////TAURUS_8
const TAURUS_8Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_8Mesh.position.set(82,152, -418);
TAURUS_8Mesh.scale.setScalar(4);
scene.add(TAURUS_8Mesh);

////TAURUS_9
const TAURUS_9Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_9Mesh.position.set(64,151, -419);
TAURUS_9Mesh.scale.setScalar(4);
scene.add(TAURUS_9Mesh);

////TAURUS_10
const TAURUS_10Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_10Mesh.position.set(119,127, -416);
TAURUS_10Mesh.scale.setScalar(4);
scene.add(TAURUS_10Mesh);

////TAURUS_11
const TAURUS_11Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_11Mesh.position.set(170,107, -404);
TAURUS_11Mesh.scale.setScalar(4);
scene.add(TAURUS_11Mesh);

////TAURUS_12
const TAURUS_12Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_12Mesh.position.set(175,100, -404);
TAURUS_12Mesh.scale.setScalar(4);
scene.add(TAURUS_12Mesh);

}
