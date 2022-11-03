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
import { Capricorn } from "./Star/Capricorn.js";
import { Sagittarius } from "./Star/Sagittarius.js";
import { Scorpius } from "./Star/Scorpius.js";
import { lineAries } from "./Line/lineAries.js";
import { linePisces } from "./Line/linePisces.js";
import { lineAquarius } from "./Line/lineAquarius.js";
import { lineCapricorn } from "./Line/lineCapricorn.js";
import { lineSagittarius } from "./Line/lineSagittarius.js";
import { lineScorpius } from "./Line/lineScorpius.js";

// Set width, height size
var width = window.innerWidth,
    height = window.innerHeight;
let default_value=0;
var cameraMove=false;
// Create scene
export const scene = new THREE.Scene();
const loader = new THREE.TextureLoader();
export var camera = new THREE.PerspectiveCamera(90, width / height, 1, 10000);

const torusMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );

var earth_rt_speed = 0.0005;
// TrackballControls for view control
export var controls = new THREE.TrackballControls(camera);
controls.update();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);



// Planet
const earthTexture = loader.load("./images/earth.jpg");
const moonTexture = loader.load("./images/moon.jpg");

// Set Materials
const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });

const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });

// Set Mesh
const geometry = new THREE.SphereGeometry(1, 32, 32); // (radius, widthSegments, heightSegments)

Taurus();
Leo();
Cancer();
Jemini();
Virgo();
Libra();
Aries();
Pisces();
Aquarius();
Capricorn();
Sagittarius();
Scorpius();

renderer.render(scene, camera);

// Earth & Moon
const earthGroup = new THREE.Group();
const earthMesh = new THREE.Mesh(geometry, earthMaterial);
earthMesh.rotation.x = -0.37 * Math.PI; // 0.37
createPlanet(scene, earthMesh, earthGroup, 75, 0, 0, 6);

var earthTorusGeometry = new THREE.TorusGeometry(75, 0.00003,50,100);
const earthTorus = new THREE.Mesh( earthTorusGeometry, torusMaterial );
earthTorus.rotation.x = 0.5*Math.PI;
earthTorus.position.x=0;
earthTorus.add(earthMesh);
scene.add(earthTorus);

const moonGroup = new THREE.Group();
const moonMesh = new THREE.Mesh(geometry, moonMaterial);
moonMesh.rotation.x = -0.446 * Math.P;
createPlanet(scene, moonMesh, moonGroup, 10, 1.2);

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
createSubLigt(-240, 0, 240);
createSubLigt(-240, 0, -240);
createSubLigt(240, 0, -240);

// Illuminate the sun
createSpotlights(scene);

// Close up taget
var selectedCons = 0;

camera.position.set(300, 300, 500);

// Move to zodiac when button clicked
document.getElementById("btn_Aries").onclick = function (event) {
    if (selectedCons !== 'Aries') {
        selectedCons = 'Aries'
        var stars1 = AriesBackground(480, 100)
        scene.add(stars1);
    }
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    controls.reset();
    camera.position.set(-20, -20, 20);
    lineAries();
};

document.getElementById("btn_Taurus").onclick = function (event) {
    if (selectedCons !== 'Taurus') {
        selectedCons = 'Taurus'
        var stars2 = TaurusBackground(480, 100)
        scene.add(stars2);
    }
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    controls.reset();
    camera.position.set(-10, -30, 55);
    lineTaurus();
};

document.getElementById("btn_Gemini").onclick = function (event) {
    if (selectedCons !== 'Gemini') {
        selectedCons = 'Gemini'
        var stars3 = GeminiBackground(480, 100)
        scene.add(stars3);
    }
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    controls.reset();
    camera.position.set(5, -5, 20);
    lineJemini();
};

document.getElementById("btn_Cancer").onclick = function (event) {
    if (selectedCons !== 'Cancer') {
        selectedCons = 'Cancer'
        var stars4 = CancerBackground(480, 100)
        scene.add(stars4);
    }
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    controls.reset();
    camera.position.set(70, 7, 70);
    lineCancer();
};

document.getElementById("btn_Leo").onclick = function (event) {
    if (selectedCons !== 'Leo') {
        selectedCons = 'Leo'
        var stars5 = LeoBackground(480, 100)
        scene.add(stars5);
    }
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    controls.reset();
    camera.position.set(50, 10, 10);
    lineLeo();
};

document.getElementById("btn_Virgo").onclick = function (event) {
    if (selectedCons !== 'Virgo') {
        selectedCons = 'Virgo'
        var stars6 = VirgoBackground(480, 100)
        scene.add(stars6);
    }
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    controls.reset();
    camera.position.set(15, -3, -5);
    lineVirgo();
};

document.getElementById("btn_Libra").onclick = function (event) {
    if (selectedCons !== 'Libra') {
        selectedCons = 'Libra'
        var stars7 = LibraBackground(480, 100)
        scene.add(stars7);
    }
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    controls.reset();
    camera.position.set(5, 0, -5);
    lineLibra();
};

document.getElementById("btn_Scorpio").onclick = function (event) {
    if (selectedCons !== 'Scorpio') {
        selectedCons = 'Scorpio'
        var stars8 = ScorpiusBackground(480, 100)
        scene.add(stars8);
    }
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    controls.reset();
    camera.position.set(1, 3, -10);
    lineScorpius();
};

document.getElementById("btn_Sagittarius").onclick = function (event) {
    if (selectedCons !== 'Sagittarius') {
        selectedCons = 'Sagittarius'
        var stars9 = SagittariusBackground(480, 100)
        scene.add(stars9);
    }
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    controls.reset();
    camera.position.set(-5, 0, -10);
    lineSagittarius();
};

document.getElementById("btn_Capricon").onclick = function (event) {
    if (selectedCons !== 'Capricon') {
        selectedCons = 'Capricon'
        var stars10 = CapricornBackground(480, 100)
        scene.add(stars10);
    }
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    controls.reset();
    camera.position.set(-15, 0, -10);
    lineCapricorn();
};

document.getElementById("btn_Aquarius").onclick = function (event) {
    if (selectedCons !== 'Aquarius') {
        selectedCons = 'Aquarius'
        var stars11 = AquariusBackground(480, 100)
        scene.add(stars11);
    }
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    controls.reset();
    camera.position.set(-15, -5, 0);
    lineAquarius();
};

document.getElementById("btn_Pisces").onclick = function (event) {
    if (selectedCons !== 'Pisces') {
        selectedCons = 'Pisces'
        var stars12 = PiscesBackground(480, 100)
        scene.add(stars12);
    }
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    controls.reset();
    camera.position.set(-50, -30, 20);
    linePisces();
};

// Find zodiac with birthday
document.getElementById("prompt").onclick = function (event) {
    var month = prompt("Enter your month: ");
    var date = prompt("Enter your date: ");
    var zod = checkZodiac(date, month);
    alert("Your zodiac is: " + zod + "!");
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    if (zod == 'Aries') {
        var stars1 = AriesBackground(480, 100)
        scene.add(stars1);

        controls.reset();
        camera.position.set(-20, -20, 20);
    }

    if (zod == 'Taurus') {
        var stars2 = TaurusBackground(480, 100)
        scene.add(stars2);

        controls.reset();
        camera.position.set(-10, -30, 55);
    }

    if (zod == 'Gemini') {
        var stars3 = GeminiBackground(480, 100)
        scene.add(stars3);

        controls.reset();
        camera.position.set(5, -5, 20);
    }

    if (zod == 'Cancer') {
        var stars4 = CancerBackground(480, 100)
        scene.add(stars4);

        controls.reset();
        camera.position.set(70, 7, 70);
    }

    if (zod == 'Leo') {
        var stars5 = LeoBackground(480, 100)
        scene.add(stars5);

        controls.reset();
        camera.position.set(50, 10, 10);
    }

    if (zod == 'Virgo') {
        var stars6 = VirgoBackground(480, 100)
        scene.add(stars6);

        controls.reset();
        camera.position.set(15, -3, -5);
    }

    if (zod == 'Libra') {
        var stars7 = LibraBackground(480, 100)
        scene.add(stars7);

        controls.reset();
        camera.position.set(5, 0, -5);
    }

    if (zod == 'Scorpio') {
        var stars8 = ScorpiusBackground(480, 100)
        scene.add(stars8);

        controls.reset();
        camera.position.set(1, 3, -10);
    }

    if (zod == 'Sagittarius') {
        var stars9 = SagittariusBackground(480, 100)
        scene.add(stars9);

        controls.reset();
        camera.position.set(-5, 0, -10);
    }

    if (zod == 'Capricon') {
        var stars10 = CapricornBackground(480, 100)
        scene.add(stars10);

        controls.reset();
        camera.position.set(-15, 0, -10);
    }

    if (zod == 'Aquarius') {
        var stars11 = AquariusBackground(480, 100)
        scene.add(stars11);

        controls.reset();
        camera.position.set(-15, -5, 0);
    }

    if (zod == 'Pisces') {
        var stars12 = PiscesBackground(480, 100)
        scene.add(stars12);

        controls.reset();
        camera.position.set(-50, -30, 20);
    }
};

// checks month and date within the valid range of a specified zodiac
function checkZodiac(day, month) {
    let astro_sign = "";

    if (month == "12") {

        if (day < 22)
            astro_sign = "Sagittarius";
        else
            astro_sign = "Capricorn";
    }

    else if (month == "1") {
        if (day < 20)
            astro_sign = "Capricorn";
        else
            astro_sign = "Aquarius";
    }

    else if (month == "2") {
        if (day < 19)
            astro_sign = "Aquarius";
        else
            astro_sign = "Pisces";
    }

    else if (month == "3") {
        if (day < 21)
            astro_sign = "Pisces";
        else
            astro_sign = "Aries";
    }
    else if (month == "4") {
        if (day < 20)
            astro_sign = "Aries";
        else
            astro_sign = "Taurus";
    }

    else if (month == "5") {
        if (day < 21)
            astro_sign = "Taurus";
        else
            astro_sign = "Gemini";
    }

    else if (month == "6") {
        if (day < 21)
            astro_sign = "Gemini";
        else
            astro_sign = "Cancer";
    }

    else if (month == "7") {
        if (day < 23)
            astro_sign = "Cancer";
        else
            astro_sign = "Leo";
    }

    else if (month == "8") {
        if (day < 23)
            astro_sign = "Leo";
        else
            astro_sign = "Virgo";
    }

    else if (month == "9") {
        if (day < 23)
            astro_sign = "Virgo";
        else
            astro_sign = "Libra";
    }

    else if (month == "10") {
        if (day < 23)
            astro_sign = "Libra";
        else
            astro_sign = "Scorpio";
    }

    else if (month == "11") {
        if (day < 22)
            astro_sign = "Scorpio";
        else
            astro_sign = "Sagittarius";
    }

    return astro_sign;
}

// Speed control buttons
document.getElementById("btn_cameraReset").onclick = function (event) {
    if(cameraMove==true){
        cameraMove=false;
        earthTorus.remove(camera);
    }
    camera.position.set(300, 300, 500);
    var stars20 = createStars(480, 100);
    scene.add(stars20);
};

document.getElementById("btn_binggle").onclick = function (event) {
    if(cameraMove==false){
        cameraMove=true;
        camera.position.set(75,0,0);
        earthTorus.add(camera);
    }
};


const animate = function () {
    requestAnimationFrame(animate);
    // Use trackball
    controls.update();
    earthMesh.rotation.y += earth_rt_speed;
    earthTorus.rotation.z -= earth_rt_speed;
    renderer.render(scene, camera);
};
animate();

function createPlanet(scene, mesh, group, x, y, z, scale) {
    mesh.position.set(x, y, z);
    mesh.scale.setScalar(scale);
    group.add(mesh);
    scene.add(group);
}

// Lights
function createSpotlights(scene) {
    var color = 'white';
    var intensity = 3;
    var distance = 35;
    var angle = Math.PI / 4;
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

function addSpotlight(c, i, d, a, x, y, z) {
    var spotlight = new THREE.SpotLight(c, i, d, a);
    spotlight.position.set(x, y, z);
    scene.add(spotlight);
}

function createSubLigt(x, y, z) {
    const subLight = new THREE.PointLight("white", 0.05, 0); //(color, intensity, distance)
    subLight.position.set(x, y, z);
    scene.add(subLight);
}

function createStars(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/back.jpg'),
            side: THREE.BackSide
        })
    );
}

// Illustration
function AquariusBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/aquarius.png'),
            side: THREE.BackSide
        })
    );
}

export function AriesBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/aries.png'),
            side: THREE.BackSide
        })
    );
}

function CancerBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/cancer.png'),
            side: THREE.BackSide
        })
    );
}

function CapricornBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/capricorn.png'),
            side: THREE.BackSide
        })
    );
}

function GeminiBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/gemini.png'),
            side: THREE.BackSide
        })
    );
}

function LeoBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/leo.png'),
            side: THREE.BackSide
        })
    );
}

function LibraBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/libra.png'),
            side: THREE.BackSide
        })
    );
}

function PiscesBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/pisces.png'),
            side: THREE.BackSide
        })
    );
}

function SagittariusBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/sagittarius.png'),
            side: THREE.BackSide
        })
    );
}

function ScorpiusBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/scorpius.png'),
            side: THREE.BackSide
        })
    );
}

function TaurusBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/taurus.png'),
            side: THREE.BackSide
        })
    );
}

function VirgoBackground(radius, segments) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, segments),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/virgo.png'),
            side: THREE.BackSide
        })
    );
}