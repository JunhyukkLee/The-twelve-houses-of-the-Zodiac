import {camera, renderer, scene} from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture
const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")
export function Virgo() {

    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });
    //VIRGO_1
    const VIRGO_1Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_1Mesh.position.set(-423, 152, 30);
    VIRGO_1Mesh.scale.setScalar(4);
    scene.add(VIRGO_1Mesh);
    // const light11_1 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_1);
    // light11_1.position.set(-40, 125, -432);

    //VIRGO_2
    const VIRGO_2Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_2Mesh.position.set(-430, 125, 44);
    VIRGO_2Mesh.scale.setScalar(4);
    scene.add(VIRGO_2Mesh);
    // const light11_2 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_2);
    // light11_2.position.set(-40, 125, -432);

    //VIRGO_3
    const VIRGO_3Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_3Mesh.position.set(-431, 110, 70);
    VIRGO_3Mesh.scale.setScalar(4);
    scene.add(VIRGO_3Mesh);
    // const light11_3 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_3);
    // light11_3.position.set(-40, 125, -432);

    //VIRGO_4
    const VIRGO_4Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_4Mesh.position.set(-420, 121, 103);
    VIRGO_4Mesh.scale.setScalar(4);
    scene.add(VIRGO_4Mesh);
    // const light11_4 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_4);
    // light11_4.position.set(-40, 125, -432);

    //VIRGO_5
    const VIRGO_5Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_5Mesh.position.set(-400, 167, 125);
    VIRGO_5Mesh.scale.setScalar(4);
    scene.add(VIRGO_5Mesh);
    // const light11_5 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_5);
    // light11_5.position.set(-40, 125, -432);

    //VIRGO_6
    const VIRGO_6Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_6Mesh.position.set(-418, 83, 145);
    VIRGO_6Mesh.scale.setScalar(4);
    scene.add(VIRGO_6Mesh);
    // const light11_6 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_6);
    // light11_6.position.set(-40, 125, -432);

    //VIRGO_7
    const VIRGO_7Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_7Mesh.position.set(-408, 80, 175);
    VIRGO_7Mesh.scale.setScalar(4);
    scene.add(VIRGO_7Mesh);
    // const light11_7 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_7);
    // light11_7.position.set(-40, 125, -432);

    //VIRGO_8
    const VIRGO_8Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_8Mesh.position.set(-382, 50, 230);
    VIRGO_8Mesh.scale.setScalar(4);
    scene.add(VIRGO_8Mesh);
    // const light11_8 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_8);
    // light11_8.position.set(-40, 125, -432);

    //VIRGO_9
    //VIRGO_9Mesh.position.set(-396,0, 215);
    const VIRGO_9Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_9Mesh.position.set(-431, 70, 105);
    VIRGO_9Mesh.scale.setScalar(4);
    scene.add(VIRGO_9Mesh);
    // const light11_9 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_9);
    // light11_9.position.set(-40, 125, -432);

    //VIRGO_10
    const VIRGO_10Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_10Mesh.position.set(-435, 25, 105);
    VIRGO_10Mesh.scale.setScalar(4);
    scene.add(VIRGO_10Mesh);
    // const light11_10 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_10);
    // light11_10.position.set(-40, 125, -432);

    //VIRGO_11
    const VIRGO_11Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_11Mesh.position.set(-420, 3, 160);
    VIRGO_11Mesh.scale.setScalar(4);
    scene.add(VIRGO_11Mesh);
    // const light11_11 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_11);
    // light11_11.position.set(-40, 125, -432);

    //VIRGO_12
    const VIRGO_12Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_12Mesh.position.set(-415, 14, 172);
    VIRGO_12Mesh.scale.setScalar(4);
    scene.add(VIRGO_12Mesh);
    // const light11_12 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_12);
    // light11_12.position.set(-40, 125, -432);

    //VIRGO_13
    const VIRGO_13Mesh = new THREE.Mesh(geometry, Material_1);
    VIRGO_13Mesh.position.set(-396, 0, 215);
    VIRGO_13Mesh.scale.setScalar(4);
    scene.add(VIRGO_13Mesh);
    // const light11_13 = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light11_13);
    // light11_13.position.set(-40, 125, -432);

    const light_star12 = new THREE.PointLight(0xffffff,-1); // soft white light
    light_star12.position.set(300, 300, 500);
    scene.add(light_star12);
    let time = new Date() /1000

    function animate() {
        let curTime;
        curTime = new Date()/1000
        requestAnimationFrame( animate );
        light_star12.intensity =4* (Math.abs(Math.sin((1 / 3) * Math.PI * (curTime-time))))

        renderer.render( scene, camera );
    }
    animate()

}
