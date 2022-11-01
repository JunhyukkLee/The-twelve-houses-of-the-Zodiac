import { scene } from "../planet.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/moon.jpg")
export function Aries() {

    const Material_1 = new THREE.MeshStandardMaterial({ map: star1Texture });

    ///ARIES_1
    const ARIES_1Mesh = new THREE.Mesh(geometry, Material_1);
    ARIES_1Mesh.position.set(165, 265, -325);
    ARIES_1Mesh.scale.setScalar(4);
    scene.add(ARIES_1Mesh);
    const light5_1 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light5_1);
    light5_1.position.set(165, 265, -325);

    ///ARIES_2
    const ARIES_2Mesh = new THREE.Mesh(geometry, Material_1);
    ARIES_2Mesh.position.set(265, 240, -270);
    ARIES_2Mesh.scale.setScalar(4);
    scene.add(ARIES_2Mesh);
    const light5_2 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light5_2);
    light5_2.position.set(265, 240, -270);

    ///ARIES_3
    const ARIES_3Mesh = new THREE.Mesh(geometry, Material_1);
    ARIES_3Mesh.position.set(310, 220, -240);
    ARIES_3Mesh.scale.setScalar(4);
    scene.add(ARIES_3Mesh);
    const light5_3 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light5_3);
    light5_3.position.set(310, 220, -240);


    ///ARIES_4
    const ARIES_4Mesh = new THREE.Mesh(geometry, Material_1);
    ARIES_4Mesh.position.set(325, 185, -250);
    ARIES_4Mesh.scale.setScalar(4);
    scene.add(ARIES_4Mesh);
    const light5_4 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light5_4);
    light5_4.position.set(325, 185, -250);


}