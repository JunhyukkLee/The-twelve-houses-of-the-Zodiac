import { scene } from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodiacccc.png")
export function Scorpius() {

    const Material_1 = new THREE.MeshStandardMaterial({ map: star1Texture });

   ///SCORPIUS_1
const SCORPIUS_1Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_1Mesh.position.set(5,-115,435);
SCORPIUS_1Mesh.scale.setScalar(4);
scene.add(SCORPIUS_1Mesh);
const light10_1 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_1 );
light10_1.position.set(5,-115,435);

///SCORPIUS_2
const SCORPIUS_2Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_2Mesh.position.set(20,-130,430);
SCORPIUS_2Mesh.scale.setScalar(4);
scene.add(SCORPIUS_2Mesh);
const light10_2 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_2 );
light10_2.position.set(20,-130,430);

///SCORPIUS_3
const SCORPIUS_3Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_3Mesh.position.set(30,-142,425);
SCORPIUS_3Mesh.scale.setScalar(4);
scene.add(SCORPIUS_3Mesh);
const light10_3 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_3 );
light10_3.position.set(30,-142,425);

///SCORPIUS_4
const SCORPIUS_4Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_4Mesh.position.set(10,-165,417);
SCORPIUS_4Mesh.scale.setScalar(4);
scene.add(SCORPIUS_4Mesh);
const light10_4 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_4 );
light10_4.position.set(10,-165,417);

///SCORPIUS_5
const SCORPIUS_5Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_5Mesh.position.set(-25,-170,415);
SCORPIUS_5Mesh.scale.setScalar(4);
scene.add(SCORPIUS_5Mesh);
const light10_5 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_5 );
light10_5.position.set(-20,-170,417);

///SCORPIUS_6
const SCORPIUS_6Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_6Mesh.position.set(-55,-165,415);
SCORPIUS_6Mesh.scale.setScalar(4);
scene.add(SCORPIUS_6Mesh);
const light10_6 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_6 );
light10_6.position.set(-55,-165,415);

///SCORPIUS_7
const SCORPIUS_7Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_7Mesh.position.set(-65,-130,425);
SCORPIUS_7Mesh.scale.setScalar(4);
scene.add(SCORPIUS_7Mesh);
const light10_7 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_7 );
light10_7.position.set(-65,-130,425);

///SCORPIUS_8
const SCORPIUS_8Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_8Mesh.position.set(-75,-100,430);
SCORPIUS_8Mesh.scale.setScalar(4);
scene.add(SCORPIUS_8Mesh);
const light10_8 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_8 );
light10_8.position.set(-75,-100,430);

///SCORPIUS_9
const SCORPIUS_9Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_9Mesh.position.set(-105,-50,435);
SCORPIUS_9Mesh.scale.setScalar(4);
scene.add(SCORPIUS_9Mesh);
const light10_9 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_9 );
light10_9.position.set(-105,-50,435);

///SCORPIUS_10
const SCORPIUS_10Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_10Mesh.position.set(-120,-40,430);
SCORPIUS_10Mesh.scale.setScalar(4);
scene.add(SCORPIUS_10Mesh);
const light10_10 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_10 );
light10_10.position.set(-120,-40,430);

///SCORPIUS_11
const SCORPIUS_11Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_11Mesh.position.set(-135,-30,427);
SCORPIUS_11Mesh.scale.setScalar(4);
scene.add(SCORPIUS_11Mesh);
const light10_11 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_11 );
light10_11.position.set(-135,-30,427);

///SCORPIUS_12
const SCORPIUS_12Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_12Mesh.position.set(-185,-15,410);
SCORPIUS_12Mesh.scale.setScalar(4);
scene.add(SCORPIUS_12Mesh);
const light10_12 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_12 );
light10_12.position.set(-185,-15,410);

///SCORPIUS_13
const SCORPIUS_13Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_13Mesh.position.set(-175,5,415);
SCORPIUS_13Mesh.scale.setScalar(4);
scene.add(SCORPIUS_13Mesh);
const light10_13 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_13 );
light10_13.position.set(-175,5,415);

///SCORPIUS_14
const SCORPIUS_14Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_14Mesh.position.set(-185,-40,407);
SCORPIUS_14Mesh.scale.setScalar(4);
scene.add(SCORPIUS_14Mesh);
const light10_14 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_14 );
light10_14.position.set(-185,-40,407);

///SCORPIUS_15
const SCORPIUS_15Mesh = new THREE.Mesh(geometry, Material_1);
SCORPIUS_15Mesh.position.set(-180,-70,405);
SCORPIUS_15Mesh.scale.setScalar(4);
scene.add(SCORPIUS_15Mesh);
const light10_15 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light10_15 );
light10_15.position.set(-180,-70,405);


}