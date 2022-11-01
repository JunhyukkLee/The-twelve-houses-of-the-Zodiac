import { scene } from "../planet.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/moon.jpg")
export function Libra() {

    const Material_1 = new THREE.MeshStandardMaterial({ map: star1Texture });

    //LIBRA_1
    const LIBRA_1Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_1Mesh.position.set(-342, 45, 290);
    LIBRA_1Mesh.scale.setScalar(4);
    scene.add(LIBRA_1Mesh);
    const light12_1 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light12_1);
    light12_1.position.set(-40, 125, -432);

    //LIBRA_2
    const LIBRA_2Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_2Mesh.position.set(-272, 60, 350);
    LIBRA_2Mesh.scale.setScalar(4);
    scene.add(LIBRA_2Mesh);
    const light12_2 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light12_2);
    light12_2.position.set(-40, 125, -432);

    //LIBRA_3
    const LIBRA_3Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_3Mesh.position.set(-279, 0, 350);
    LIBRA_3Mesh.scale.setScalar(4);
    scene.add(LIBRA_3Mesh);
    const light12_3 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light12_3);
    light12_3.position.set(-40, 125, -432);

    //LIBRA_4
    const LIBRA_4Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_4Mesh.position.set(-270, -30, 360);
    LIBRA_4Mesh.scale.setScalar(4);
    scene.add(LIBRA_4Mesh);
    const light12_4 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light12_4);
    light12_4.position.set(-40, 125, -432);

    //LIBRA_5
    const LIBRA_5Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_5Mesh.position.set(-246, -40, 370);
    LIBRA_5Mesh.scale.setScalar(4);
    scene.add(LIBRA_5Mesh);
    const light12_5 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light12_5);
    light12_5.position.set(-40, 125, -432);


    //LIBRA_6
    const LIBRA_6Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_6Mesh.position.set(-342, -40, 280);
    LIBRA_6Mesh.scale.setScalar(4);
    scene.add(LIBRA_6Mesh);
    const light12_6 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light12_6);
    light12_6.position.set(-40, 125, -432);

    //LIBRA_7
    const LIBRA_7Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_7Mesh.position.set(-322, -100, 297);
    LIBRA_7Mesh.scale.setScalar(4);
    scene.add(LIBRA_7Mesh);
    const light12_7 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light12_7);
    light12_7.position.set(-40, 125, -432);


    //LIBRA_8
    const LIBRA_8Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_8Mesh.position.set(-332, -120, 280);
    LIBRA_8Mesh.scale.setScalar(4);
    scene.add(LIBRA_8Mesh);
    const light12_8 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light12_8);
    light12_8.position.set(-40, 125, -432);

}
