import {camera, renderer, scene} from "../main.js";

//TAURUS
const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Taurus(){
    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TAURUS_1
const TAURUS_1Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_1Mesh.position.set(0,195, -407);
TAURUS_1Mesh.scale.setScalar(4);
scene.add(TAURUS_1Mesh);
// const light2 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light2 );
// light2.position.set(60,195, -403);


//TAURUS_2
const TAURUS_2Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_2Mesh.position.set(24,236, -385);
TAURUS_2Mesh.scale.setScalar(4);
scene.add(TAURUS_2Mesh);
// const light3 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light3 );
// light3.position.set(60,195, -403);


//TAURUS_3
const TAURUS_3Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_3Mesh.position.set(60,195, -403);
TAURUS_3Mesh.scale.setScalar(4);
scene.add(TAURUS_3Mesh);
// const light4 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light4 );
// light4.position.set(60,195, -403);

//TAURUS_4
const TAURUS_4Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_4Mesh.position.set(80,175, -409);
TAURUS_4Mesh.scale.setScalar(4);
scene.add(TAURUS_4Mesh);
// const light5 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light5 );
// light5.position.set(80,175, -409);
//TAURUS_5
const TAURUS_5Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_5Mesh.position.set(80,160, -415);
TAURUS_5Mesh.scale.setScalar(4);
scene.add(TAURUS_5Mesh);
// const light6 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light6 );
// light6.position.set(80,160, -415);

////TAURUS_6
const TAURUS_6Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_6Mesh.position.set(90,162, -412);
TAURUS_6Mesh.scale.setScalar(4);
scene.add(TAURUS_6Mesh);
// const light7 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light7 );
// light7.position.set(90,162, -412);


//TAURUS_7Mesh.position.set(85,152, -415);
////TAURUS_7
const TAURUS_7Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_7Mesh.position.set(95,147, -417);
TAURUS_7Mesh.scale.setScalar(4);
scene.add(TAURUS_7Mesh);
// const light8 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light8 );
// light8.position.set(95,147, -417);

////TAURUS_8
const TAURUS_8Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_8Mesh.position.set(82,152, -418);
TAURUS_8Mesh.scale.setScalar(4);
scene.add(TAURUS_8Mesh);
// const light9 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light9 );
// light9.position.set(82,152, -418);

////TAURUS_9
const TAURUS_9Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_9Mesh.position.set(64,151, -419);
TAURUS_9Mesh.scale.setScalar(4);
scene.add(TAURUS_9Mesh);
// const light10 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light10 );
// light10.position.set(64,151, -419);

////TAURUS_10
const TAURUS_10Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_10Mesh.position.set(119,127, -416);
TAURUS_10Mesh.scale.setScalar(4);
scene.add(TAURUS_10Mesh);
// const light11 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light11 );
// light11.position.set(119,127, -416);

////TAURUS_11
const TAURUS_11Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_11Mesh.position.set(170,107, -404);
TAURUS_11Mesh.scale.setScalar(4);
scene.add(TAURUS_11Mesh);
// const light12 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light12 );
// light12.position.set(170,107, -404);

////TAURUS_12
const TAURUS_12Mesh = new THREE.Mesh(geometry, Material_1);
TAURUS_12Mesh.position.set(175,100, -404);
TAURUS_12Mesh.scale.setScalar(4);
scene.add(TAURUS_12Mesh);
// const light13 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light13 );
// light13.position.set(175,100, -404);

}
