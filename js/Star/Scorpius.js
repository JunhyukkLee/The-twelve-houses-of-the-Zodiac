import {camera, renderer, scene} from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Scorpius() {

    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });

   ///SCORPIUS_1
const SCORPIUS_1Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_1Mesh.position.set(5,-115,435);
SCORPIUS_1Mesh.scale.setScalar(4);
scene.add(SCORPIUS_1Mesh);

///SCORPIUS_2
const SCORPIUS_2Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_2Mesh.position.set(20,-130,430);
SCORPIUS_2Mesh.scale.setScalar(4);
scene.add(SCORPIUS_2Mesh);

///SCORPIUS_3
const SCORPIUS_3Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_3Mesh.position.set(30,-142,425);
SCORPIUS_3Mesh.scale.setScalar(4);
scene.add(SCORPIUS_3Mesh);

///SCORPIUS_4
const SCORPIUS_4Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_4Mesh.position.set(10,-165,417);
SCORPIUS_4Mesh.scale.setScalar(4);
scene.add(SCORPIUS_4Mesh);

///SCORPIUS_5
const SCORPIUS_5Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_5Mesh.position.set(-25,-170,415);
SCORPIUS_5Mesh.scale.setScalar(4);
scene.add(SCORPIUS_5Mesh);

///SCORPIUS_6
const SCORPIUS_6Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_6Mesh.position.set(-55,-165,415);
SCORPIUS_6Mesh.scale.setScalar(4);
scene.add(SCORPIUS_6Mesh);

///SCORPIUS_7
const SCORPIUS_7Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_7Mesh.position.set(-65,-130,425);
SCORPIUS_7Mesh.scale.setScalar(4);
scene.add(SCORPIUS_7Mesh);

///SCORPIUS_8
const SCORPIUS_8Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_8Mesh.position.set(-75,-100,430);
SCORPIUS_8Mesh.scale.setScalar(4);
scene.add(SCORPIUS_8Mesh);

///SCORPIUS_9
const SCORPIUS_9Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_9Mesh.position.set(-105,-50,435);
SCORPIUS_9Mesh.scale.setScalar(4);
scene.add(SCORPIUS_9Mesh);

///SCORPIUS_10
const SCORPIUS_10Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_10Mesh.position.set(-120,-40,430);
SCORPIUS_10Mesh.scale.setScalar(4);
scene.add(SCORPIUS_10Mesh);

///SCORPIUS_11
const SCORPIUS_11Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_11Mesh.position.set(-135,-30,427);
SCORPIUS_11Mesh.scale.setScalar(4);
scene.add(SCORPIUS_11Mesh);

///SCORPIUS_12
const SCORPIUS_12Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_12Mesh.position.set(-185,-15,410);
SCORPIUS_12Mesh.scale.setScalar(4);
scene.add(SCORPIUS_12Mesh);

///SCORPIUS_13
const SCORPIUS_13Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_13Mesh.position.set(-175,5,415);
SCORPIUS_13Mesh.scale.setScalar(4);
scene.add(SCORPIUS_13Mesh);

///SCORPIUS_14
const SCORPIUS_14Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_14Mesh.position.set(-185,-40,407);
SCORPIUS_14Mesh.scale.setScalar(4);
scene.add(SCORPIUS_14Mesh);

///SCORPIUS_15
const SCORPIUS_15Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_15Mesh.position.set(-180,-70,405);
SCORPIUS_15Mesh.scale.setScalar(4);
scene.add(SCORPIUS_15Mesh);

}