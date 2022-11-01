import { Taurus } from "./Star/Taurus.js";
import { Leo } from "./Star/Leo.js";
import { Cancer } from "./Star/Cancer.js";
import { Jemini } from "./Star/Jemini.js";
import { Virgo } from "./Star/Virgo.js";
import { Libra } from "./Star/Libra.js";
import { lineTaurus } from "./Line/lineTaurus.js";
import { lineLeo } from "./Line/lineLeo.js";
import { lineCancer } from "./Line/lineCancer.js";
import { lineJemini } from "./Line/lineJemini.js";
import { lineVirgo } from "./Line/lineVirgo.js";
import { lineLibra } from "./Line/lineLibra.js";
import { Aries } from "./Star/Aries.js";
import { Pisces } from "./Star/Pisces.js";
import { Aquarius } from "./Star/Aquarius.js";
import { Capricorn} from "./Star/Capricorn.js";
import { Sagittarius } from "./Star/Sagittarius.js";
import { Scorpius } from "./Star/Scorpius.js";
import { lineAries} from "./Line/lineAries.js";
import {linePisces } from "./Line/linePisces.js";
import { lineAquarius} from "./Line/lineAquarius.js";
import { lineCapricorn } from "./Line/lineCapricorn.js";
import { lineSagittarius } from "./Line/lineSagittarius.js";
import { lineScorpius } from "./Line/lineScorpius.js";

var earth_rt_speed = 0;

// Set width, height size
var width  = window.innerWidth,
    height = window.innerHeight;

// Create scene
export const scene = new THREE.Scene();
const loader = new THREE.TextureLoader();
var camera = new THREE.PerspectiveCamera( 90, width / height, 1, 1000 );
// camera.position.set(-80, -20, 20);  

// TrackballControls for view control
var controls = new THREE.TrackballControls(camera);

controls.update();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement );

// Planet
const earthTexture = loader.load("./images/earth.jpg");


// etc
const moonTexture = loader.load("./images/moon.jpg");
const cloudTexture = loader.load("./images/clouds.png");

//starstarstarstarstarstar
const star1Texture = loader.load("./images/moon.jpg")
const star2Texture = loader.load("./images/moon.jpg")

// Set Materials
const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture});

const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
const cloudMaterial = new THREE.MeshStandardMaterial({ map: cloudTexture, transparent: true });

var earthPosition = 75;

//
// Set Mesh
//
const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)

const torusMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );

Taurus();
Leo();
Cancer();
Jemini();
Virgo();
Libra();
lineTaurus();
lineLeo();
lineCancer();
lineJemini();
lineVirgo();
lineLibra();
Aries();
Pisces();
Aquarius();
Capricorn();
Sagittarius();
Scorpius();
lineAries();
linePisces();
lineAquarius();
lineCapricorn();
lineSagittarius();
lineScorpius();

renderer.render( scene, camera );

// Earth & Moon
const earthGroup = new THREE.Group();
const earthMesh = new THREE.Mesh(geometry, earthMaterial);
earthMesh.rotation.x = -0.37*Math.PI; // 0.37
createPlanet(scene, earthMesh, earthGroup, -100,-90,-20, 20);

const earthCloudMesh = new THREE.Mesh(geometry, cloudMaterial);
createPlanet(scene, earthCloudMesh, earthGroup, 75, 6.01 );
earthCloudMesh.rotation.y = 6;

const moonGroup = new THREE.Group();
const moonMesh = new THREE.Mesh(geometry, moonMaterial);
moonMesh.rotation.x = -0.446*Math.PI;
createPlanet(scene, moonMesh, moonGroup, 10, 1.2);

var moonTorusGeometry = new THREE.TorusGeometry(10, 0.03,50,100);
const moonTorus = new THREE.Mesh( moonTorusGeometry, torusMaterial );
moonTorus.rotation.x = -0.04*Math.PI;
moonTorus.position.x=75;
moonTorus.add(moonMesh);

// Background
var stars = createStars(480, 100);
scene.add(stars);

// Set a source of light
const light = new THREE.PointLight("white", 1.25); //(color, intensity, distance)
light.position.set(0, 0, 0);
scene.add(light);

// Set a sub light
createSubLigt(240, 240, 0);
createSubLigt(240, -240, 0);
createSubLigt(-240, 240, 0);
createSubLigt(-240, -240, 0);
createSubLigt(240, 0, 240);
createSubLigt(-240, 0 ,240);
createSubLigt(-240, 0, -240);
createSubLigt(240, 0, -240);

// Illuminate the sun
createSpotlights(scene);

// Close up taget
var selectedCons = 0;

camera.position.set(0, 0, -10);
document.getElementById("btn_Aries").onclick = function (event) {
    if (selectedCons !== 'Aries') {
            selectedCons = 'Aries'
            init_position();
    }
    controls.reset();
    controls.zoomCamera(100);
    camera.position.set(-20, -20, 20);
};
document.getElementById("btn_Taurus").onclick = function (event) {
    if (selectedCons !== 'Taurus') {
            selectedCons = 'Taurus'
            init_position();
    }
    controls.reset();
    camera.position.set(-10, -30, 55);
};
document.getElementById("btn_Gemini").onclick = function (event) {
    if (selectedCons !== 'Gemini') {
            selectedCons = 'Gemini'
            init_position();
    }
    controls.reset();
    camera.position.set(5, -5, 20);
};
document.getElementById("btn_Cancer").onclick = function (event) {
    if (selectedCons !== 'Cancer') {
            selectedCons = 'Cancer'
            init_position();
    }
    controls.reset();
    camera.position.set(70, 7, 70);
    controls.zoomCamera();
};
document.getElementById("btn_Leo").onclick = function (event) {
    if (selectedCons !== 'Leo') {
            selectedCons = 'Leo'
            init_position();
    }
    controls.reset();
    camera.position.set(50, 10, 10);
};
document.getElementById("btn_Virgo").onclick = function (event) {
    if (selectedCons !== 'Virgo') {
            selectedCons = 'Virgo'
            init_position();
    }
    controls.reset();
    camera.position.set(15, -3, -5);
};
document.getElementById("btn_Libra").onclick = function (event) {
    if (selectedCons !== 'Libra') {
            selectedCons = 'Libra'
            init_position();
    }
    controls.reset();
    camera.position.set(5, 0, -5);
};
document.getElementById("btn_Scorpio").onclick = function (event) {
    if (selectedCons !== 'Scorpio') {
            selectedCons = 'Scorpio'
            init_position();
    }
    controls.reset();
    camera.position.set(1, 3, -10);
};
document.getElementById("btn_Sagittarius").onclick = function (event) {
    if (selectedCons !== 'Sagittarius') {
            selectedCons = 'Sagittarius'
            init_position();
    }
    controls.reset();
    camera.position.set(-5, 0, -10);
};
document.getElementById("btn_Capricon").onclick = function (event) {
    if (selectedCons !== 'Capricon') {
            selectedCons = 'Capricon'
            init_position();
    }
    controls.reset();
    camera.position.set(-15, 0, -10);
};
document.getElementById("btn_Aquarius").onclick = function (event) {
    if (selectedCons !== 'Aquarius') {
            selectedCons = 'Aquarius'
            init_position();
    }
    controls.reset();
    camera.position.set(-15, -5, 0);
};
document.getElementById("btn_Pisces").onclick = function (event) {
    if (selectedCons !== 'Pisces') {
            selectedCons = 'Pisces'
            init_position();
    }
    controls.reset();
    camera.position.set(-50, -30, 20);
};


// Speed control buttons
document.getElementById("SpeedResetBtn").onclick = function (event) {
    earth_rt_speed = 0.0005;
};
document.getElementById("SpeedUpBtn").onclick = function (event) {
    earth_rt_speed += 0.005;
};
document.getElementById("SpeedDownBtn").onclick = function (event) {
    if(earth_rt_speed > 0)
        earth_rt_speed -= 0.005;
};
document.getElementById("PlanetPositionResetBtn").onclick = function (event) {
    earth_rt_speed = 0;
    moonTorus.rotation.z = 0;
};
document.getElementById("btn_cameraReset").onclick = function (event) {
    camera.position.set(300, 300, 500);
};


const animate = function () {
    requestAnimationFrame( animate );

    // Use trackball
    controls.update();

    // rotation
    earthMesh.rotation.y += earth_rt_speed;
    earthCloudMesh.rotation.z += earth_rt_speed * 2;
    moonMesh.rotation.y += earth_rt_speed * 40;

    // revolution
    moonTorus.rotation.z -=0.1*earth_rt_speed;

    renderer.render( scene, camera );
};

animate();

function createPlanet(scene, mesh, group, x, y, z, scale) {
    mesh.position.set(x, y, z);
    mesh.scale.setScalar(scale);
    group.add(mesh);
    scene.add(group);
}
function createZodiacal(scene, mesh, group, x,y,z, scale) {
    mesh.position.set(x, y, z);
    mesh.scale.setScalar(scale);
    group.add(mesh);
    scene.add(group);
}

function createSpotlights(scene) {
    var color = 'white';
    var intensity = 3;
    var distance = 35;
    var angle = Math.PI/4;
    addSpotlight(color, intensity, distance, angle, -25, 25, 0); // 1
    addSpotlight(color, intensity, distance, angle, 25, 25, 0); // 2
    addSpotlight(color, intensity, distance, angle, 25, -25, 0); // 3
    addSpotlight(color, intensity, distance, angle, -25, -25, 0); // 4
    addSpotlight(color, intensity, distance, angle, 0, 0, 40); // 5
    addSpotlight(color, intensity, distance, angle, 0, 0, -40); // 6
    addSpotlight(color, intensity, distance, angle, 25, 0, 25); // 7
    addSpotlight(color, intensity, distance, angle, 25, 0, -25); // 8
    addSpotlight(color, intensity, distance, angle, -25, 0, -25); // 9
    addSpotlight(color, intensity, distance, angle, -25, 0, 25); // 10
    addSpotlight(color, intensity, distance, angle, 0, 25, 25); // 11
    addSpotlight(color, intensity, distance, angle, 0, 25, -25); // 12
    addSpotlight(color, intensity, distance, angle, 0, -25, 25); // 13
    addSpotlight(color, intensity, distance, angle, 0, -25, -25); // 14
}

function addSpotlight(c, i ,d, a, x, y, z){
    var spotlight = new THREE.SpotLight(c, i, d, a);
    spotlight.position.set(x, y, z);
    scene.add( spotlight );
}

function createSubLigt(x, y, z){
    const subLight = new THREE.PointLight("white", 0.05, 0); //(color, intensity, distance)
    subLight.position.set(x, y, z);
    scene.add(subLight);
}

function createStars(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/back.png'),
            side: THREE.BackSide
        })
    );
}


function AquariusBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/aquarius.png'),
            side: THREE.BackSide
        })
    );
}
function AriesBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/aries.png'),
            side: THREE.BackSide
        })
    );
}
function CancerBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/cancer.png'),
            side: THREE.BackSide
        })
    );
}
function CapricornBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/capricorn.png'),
            side: THREE.BackSide
        })
    );
}
function GeminiBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/gemini.png'),
            side: THREE.BackSide
        })
    );
}
function LeoBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/leo.png'),
            side: THREE.BackSide
        })
    );
}
function LibraBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/libra.png'),
            side: THREE.BackSide
        })
    );
}
function PiscesBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/pisces.png'),
            side: THREE.BackSide
        })
    );
}
function SagittariusBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/sagittarius.png'),
            side: THREE.BackSide
        })
    );
}
function ScorpiusBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/scorpius.png'),
            side: THREE.BackSide
        })
    );
}
function TaurusBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/taurus.png'),
            side: THREE.BackSide
        })
    );
}
function VirgoBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map:  THREE.ImageUtils.loadTexture('images/virg.png'),
            side: THREE.BackSide
        })
    );
}

function init_position() {

}