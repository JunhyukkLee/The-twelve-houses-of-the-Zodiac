import {camera, renderer, scene} from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Libra() {

    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });

    //LIBRA_1
    const LIBRA_1Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_1Mesh.position.set(-342, 45, 290);
    LIBRA_1Mesh.scale.setScalar(4);
    scene.add(LIBRA_1Mesh);

    //LIBRA_2
    const LIBRA_2Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_2Mesh.position.set(-272, 60, 350);
    LIBRA_2Mesh.scale.setScalar(4);
    scene.add(LIBRA_2Mesh);

    //LIBRA_3
    const LIBRA_3Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_3Mesh.position.set(-279, 0, 350);
    LIBRA_3Mesh.scale.setScalar(4);
    scene.add(LIBRA_3Mesh);

    //LIBRA_4
    const LIBRA_4Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_4Mesh.position.set(-270, -30, 360);
    LIBRA_4Mesh.scale.setScalar(4);
    scene.add(LIBRA_4Mesh);

    //LIBRA_5
    const LIBRA_5Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_5Mesh.position.set(-246, -40, 370);
    LIBRA_5Mesh.scale.setScalar(4);
    scene.add(LIBRA_5Mesh);

    //LIBRA_6
    const LIBRA_6Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_6Mesh.position.set(-342, -40, 280);
    LIBRA_6Mesh.scale.setScalar(4);
    scene.add(LIBRA_6Mesh);

    //LIBRA_7
    const LIBRA_7Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_7Mesh.position.set(-322, -100, 297);
    LIBRA_7Mesh.scale.setScalar(4);
    scene.add(LIBRA_7Mesh);

    //LIBRA_8
    const LIBRA_8Mesh = new THREE.Mesh(geometry, Material_1);
    LIBRA_8Mesh.position.set(-332, -120, 280);
    LIBRA_8Mesh.scale.setScalar(4);
    scene.add(LIBRA_8Mesh);

}