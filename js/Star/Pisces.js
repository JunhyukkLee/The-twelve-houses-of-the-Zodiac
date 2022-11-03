import {camera, renderer, scene} from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Pisces() {

    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });

    ///PISCES_1
    const PISCES_1Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_1Mesh.position.set(370, 105, -225);
    PISCES_1Mesh.scale.setScalar(4);
    scene.add(PISCES_1Mesh);
    // const light6_1 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_1);
    // light6_1.position.set(370, 105, -225);

    ///PISCES_2
    const PISCES_2Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_2Mesh.position.set(380, 95, -215);
    PISCES_2Mesh.scale.setScalar(4);
    scene.add(PISCES_2Mesh);
    // const light6_2 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_2);
    // light6_2.position.set(380, 95, -215);

    ///PISCES_3
    const PISCES_3Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_3Mesh.position.set(385, 105, -200);
    PISCES_3Mesh.scale.setScalar(4);
    scene.add(PISCES_3Mesh);
    // const light6_3 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_3);
    // light6_3.position.set(385, 105, -200);

    ///PISCES_4
    const PISCES_4Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_4Mesh.position.set(400, 110, -170);
    PISCES_4Mesh.scale.setScalar(4);
    scene.add(PISCES_4Mesh);
    // const light6_4 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_4);
    // light6_4.position.set(400, 110, -170);

    ///PISCES_5
    const PISCES_5Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_5Mesh.position.set(410, 105, -140);
    PISCES_5Mesh.scale.setScalar(4);
    scene.add(PISCES_5Mesh);
    // const light6_5 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_5);
    // light6_5.position.set(410, 105, -140);

    ///PISCES_6
    const PISCES_6Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_6Mesh.position.set(420, 105, -110);
    PISCES_6Mesh.scale.setScalar(4);
    scene.add(PISCES_6Mesh);
    // const light6_6 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_6);
    // light6_6.position.set(420, 105, -110);

    ///PISCES_7
    const PISCES_7Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_7Mesh.position.set(400, 150, -145);
    PISCES_7Mesh.scale.setScalar(4);
    scene.add(PISCES_7Mesh);
    // const light6_7 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_7);
    // light6_7.position.set(400, 150, -145);

    ///PISCES_8
    const PISCES_8Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_8Mesh.position.set(365, 200, -160);
    PISCES_8Mesh.scale.setScalar(4);
    scene.add(PISCES_8Mesh);
    // const light6_8 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_8);
    // light6_8.position.set(365, 200, -160);

    ///PISCES_9
    const PISCES_9Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_9Mesh.position.set(355, 220, -160);
    PISCES_9Mesh.scale.setScalar(4);
    scene.add(PISCES_9Mesh);
    // const light6_9 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_9);
    // light6_9.position.set(355, 220, -160);

    ///PISCES_10
    const PISCES_10Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_10Mesh.position.set(360, 220, -150);
    PISCES_10Mesh.scale.setScalar(4);
    scene.add(PISCES_10Mesh);
    // const light6_10 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_10);
    // light6_10.position.set(360, 220, -150);

    ///PISCES_11
    const PISCES_11Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_11Mesh.position.set(345, 235, -165);
    PISCES_11Mesh.scale.setScalar(4);
    scene.add(PISCES_11Mesh);
    // const light6_11 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_11);
    // light6_11.position.set(345, 235, -165);

    ///PISCES_12
    const PISCES_12Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_12Mesh.position.set(355, 230, -140);
    PISCES_12Mesh.scale.setScalar(4);
    scene.add(PISCES_12Mesh);
    // const light6_12 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_12);
    // light6_12.position.set(355, 230, -140);

    ///PISCES_13
    const PISCES_13Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_13Mesh.position.set(340, 250, -150);
    PISCES_13Mesh.scale.setScalar(4);
    scene.add(PISCES_13Mesh);
    // const light6_13 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_13);
    // light6_13.position.set(340, 250, -150);

    ///PISCES_14
    const PISCES_14Mesh = new THREE.Mesh(geometry, Material_1);
    PISCES_14Mesh.position.set(350, 240, -135);
    PISCES_14Mesh.scale.setScalar(4);
    scene.add(PISCES_14Mesh);
    // const light6_14 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light6_14);
    // light6_14.position.set(350, 240, -135);

    const light_star8 = new THREE.PointLight(0xffffff,-1); // soft white light
    light_star8.position.set(300, 300, 500);
    scene.add(light_star8);
    let time = new Date() /1000

    function animate() {
        let curTime;
        curTime = new Date()/1000
        requestAnimationFrame( animate );
        light_star8.intensity =4* (Math.abs(Math.sin((1 / 3) * Math.PI * (curTime-time))))

        renderer.render( scene, camera );
    }
    animate()

}