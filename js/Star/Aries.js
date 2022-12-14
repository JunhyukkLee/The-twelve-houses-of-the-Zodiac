import {camera, controls, scene, renderer} from "../main.js";

const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)
// Set Texture

const loader = new THREE.TextureLoader();
const star1Texture = loader.load("./images/zodia.png")

export function Aries() {

    const Material_1 = new THREE.MeshPhongMaterial({ map: star1Texture });
    
    ///ARIES_1
    const ARIES_1Mesh = new THREE.Mesh(geometry, Material_1);
    ARIES_1Mesh.position.set(165, 265, -325);
    ARIES_1Mesh.scale.setScalar(4);
    scene.add(ARIES_1Mesh);

    ///ARIES_2
    const ARIES_2Mesh = new THREE.Mesh(geometry, Material_1);
    ARIES_2Mesh.position.set(265, 240, -270);
    ARIES_2Mesh.scale.setScalar(4);
    scene.add(ARIES_2Mesh);

    ///ARIES_3
    const ARIES_3Mesh = new THREE.Mesh(geometry, Material_1);
    ARIES_3Mesh.position.set(310, 220, -240);
    ARIES_3Mesh.scale.setScalar(4);
    scene.add(ARIES_3Mesh);

    ///ARIES_4
    const ARIES_4Mesh = new THREE.Mesh(geometry, Material_1);
    ARIES_4Mesh.position.set(325, 185, -250);
    ARIES_4Mesh.scale.setScalar(4);
    scene.add(ARIES_4Mesh);

    const light_star2 = new THREE.AmbientLight(0xffffff,-1111);
    light_star2.position.set(0,0,0);
    scene.add(light_star2);
    let time = new Date() /1000

    function animate() {
        let curTime;
        curTime = new Date()/1000
        requestAnimationFrame( animate );
        light_star2.intensity =6* (Math.abs(Math.sin((1 / 3) * Math.PI * (curTime-time)))-0.5)

        renderer.render( scene, camera );
    }
    animate()

}