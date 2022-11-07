import {camera, renderer, scene} from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Sagittarius() {

    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });

///SAGITTARIUS_1
const SAGITTARIUS_1Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_1Mesh.position.set(200,-155,370);
SAGITTARIUS_1Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_1Mesh);

///SAGITTARIUS_2
const SAGITTARIUS_2Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_2Mesh.position.set(230,-150,355);
SAGITTARIUS_2Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_2Mesh);

///SAGITTARIUS_3
const SAGITTARIUS_3Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_3Mesh.position.set(210,-130,375);
SAGITTARIUS_3Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_3Mesh);

///SAGITTARIUS_4
const SAGITTARIUS_4Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_4Mesh.position.set(250,-115,350);
SAGITTARIUS_4Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_4Mesh);

///SAGITTARIUS_5
const SAGITTARIUS_5Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_5Mesh.position.set(285,-70,340);
SAGITTARIUS_5Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_5Mesh);

///SAGITTARIUS_6
const SAGITTARIUS_6Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_6Mesh.position.set(255,-25,370);
SAGITTARIUS_6Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_6Mesh);

///SAGITTARIUS_7
const SAGITTARIUS_7Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_7Mesh.position.set(215,-35,392);
SAGITTARIUS_7Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_7Mesh);

///SAGITTARIUS_8
const SAGITTARIUS_8Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_8Mesh.position.set(200,-50,397);
SAGITTARIUS_8Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_8Mesh);

///SAGITTARIUS_9
const SAGITTARIUS_9Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_9Mesh.position.set(180,-30,410);
SAGITTARIUS_9Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_9Mesh);

///SAGITTARIUS_10
const SAGITTARIUS_10Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_10Mesh.position.set(200,-25,400);
SAGITTARIUS_10Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_10Mesh);

///SAGITTARIUS_11
const SAGITTARIUS_11Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_11Mesh.position.set(205,15,400);
SAGITTARIUS_11Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_11Mesh);

///SAGITTARIUS_12
const SAGITTARIUS_12Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_12Mesh.position.set(215,10,395);
SAGITTARIUS_12Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_12Mesh);

///SAGITTARIUS_13
const SAGITTARIUS_13Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_13Mesh.position.set(230,15,385);
SAGITTARIUS_13Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_13Mesh);

///SAGITTARIUS_14
const SAGITTARIUS_14Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_14Mesh.position.set(250,25,370);
SAGITTARIUS_14Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_14Mesh);

///SAGITTARIUS_15
const SAGITTARIUS_15Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_15Mesh.position.set(150,-20,420);
SAGITTARIUS_15Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_15Mesh);

///SAGITTARIUS_16
const SAGITTARIUS_16Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_16Mesh.position.set(140,20,425);
SAGITTARIUS_16Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_16Mesh);

///SAGITTARIUS_17
const SAGITTARIUS_17Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_17Mesh.position.set(140,-45,425);
SAGITTARIUS_17Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_17Mesh);

///SAGITTARIUS_18
const SAGITTARIUS_18Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_18Mesh.position.set(115,-50,430);
SAGITTARIUS_18Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_18Mesh);

///SAGITTARIUS_19
const SAGITTARIUS_19Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_19Mesh.position.set(85,-25,440);
SAGITTARIUS_19Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_19Mesh);

///SAGITTARIUS_20
const SAGITTARIUS_20Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_20Mesh.position.set(145,-80,420);
SAGITTARIUS_20Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_20Mesh);

///SAGITTARIUS_21
const SAGITTARIUS_21Mesh = new THREE.Mesh(geometry, Material_1);
SAGITTARIUS_21Mesh.position.set(130,-85,420);
SAGITTARIUS_21Mesh.scale.setScalar(4);
scene.add(SAGITTARIUS_21Mesh);

}