import { scene } from "../planet.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/moon.jpg")
export function Leo() {

    const Material_1 = new THREE.MeshStandardMaterial({ map: star1Texture});

    //LEO_1
    const LEO_1Mesh = new THREE.Mesh(geometry, Material_1);
    LEO_1Mesh.position.set(-410, 13, -186);
    LEO_1Mesh.scale.setScalar(4);
    scene.add(LEO_1Mesh);
    const light1_1 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light1_1);
    light1_1.position.set(-40, 125, -432);

    //LEO_2
    const LEO_2Mesh = new THREE.Mesh(geometry, Material_1);
    LEO_2Mesh.position.set(-420, 19, -152);
    LEO_2Mesh.scale.setScalar(4);
    scene.add(LEO_2Mesh);
    const light1_2 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light1_2);
    light1_2.position.set(-40, 125, -432);

    //LEO_3
    const LEO_3Mesh = new THREE.Mesh(geometry, Material_1);
    LEO_3Mesh.position.set(-426, -14, -142);
    LEO_3Mesh.scale.setScalar(4);
    scene.add(LEO_3Mesh);
    const light1_3 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light1_3);
    light1_3.position.set(-40, 125, -432);

    //LEO_4
    const LEO_4Mesh = new THREE.Mesh(geometry, Material_1);
    LEO_4Mesh.position.set(-423, -45, -148);
    LEO_4Mesh.scale.setScalar(4);
    scene.add(LEO_4Mesh);
    const light1_4 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light1_4);
    light1_4.position.set(-40, 125, -432);

    //LEO_5
    const LEO_5Mesh = new THREE.Mesh(geometry, Material_1);
    LEO_5Mesh.position.set(-410, -57, -173);
    LEO_5Mesh.scale.setScalar(4);
    scene.add(LEO_5Mesh);
    const light1_5 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light1_5);
    light1_5.position.set(-40, 125, -432);

    //LEO_6
    const LEO_6Mesh = new THREE.Mesh(geometry, Material_1);
    LEO_6Mesh.position.set(-405, -84, -176);
    LEO_6Mesh.scale.setScalar(4);
    scene.add(LEO_6Mesh);
    const light1_6 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light1_6);
    light1_6.position.set(-40, 125, -432);


    //LEO_7Mesh.position.set(-440,-74, -66);
    //LEO_7
    const LEO_7Mesh = new THREE.Mesh(geometry, Material_1);
    LEO_7Mesh.position.set(-432, -106, -66);
    LEO_7Mesh.scale.setScalar(4);
    scene.add(LEO_7Mesh);
    const light1_7 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light1_7);
    light1_7.position.set(-40, 125, -432);


    //LEO_8
    const LEO_8Mesh = new THREE.Mesh(geometry, Material_1);
    LEO_8Mesh.position.set(-440, -74, -66);
    LEO_8Mesh.scale.setScalar(4);
    scene.add(LEO_8Mesh);
    const light1_8 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light1_8);
    light1_8.position.set(-40, 125, -432);


    //LEO_9
    const LEO_9Mesh = new THREE.Mesh(geometry, Material_1);
    LEO_9Mesh.position.set(-433, -122, -22);
    LEO_9Mesh.scale.setScalar(4);
    scene.add(LEO_9Mesh);
    const light1_9 = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light1_9);
    light1_9.position.set(-40, 125, -432);
}
