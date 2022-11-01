import { scene } from "../main.js";
let anistat1 = true;
let anistat2 = true;
let anistat3 = true;
let anistat4 = true;
let anistat5 = true;
let anistat6 = true;
let anistat7 = true;
let anistat8 = true;
let anistat9 = true;
let anistat10 = true;




const LineMaterial = new THREE.LineBasicMaterial({ color: '#d0ed0e' });
const l12 = [];
const l23 = [];
const l34 = [];
const l45 = [];
const l56 = [];
const l67 = [];
const l78 = [];
const l810 = [];
const l112 = [];
const l1211 = [];



var xdt12 = 400, ydt12 = 180, zdt12 = 85;
var xdt23 = 435, ydt23 = 110, zdt23 = -15;
var xdt34 = 440, ydt34 = 80, zdt34 = -15;
var xdt45 = 440, ydt45 = 80, zdt45 = -30;
var xdt56 = 440, ydt56 = 70, zdt56 = -35;
var xdt67 = 450, ydt67 = 10, zdt67 = 5;
var xdt78 = 445, ydt78 = 35, zdt78 = 15;
var xdt810 = 445, ydt810 = 40, zdt810 = 45;
var xdt112 = 440, ydt112 = 85, zdt112 = 25;
var xdt1211 = 435, ydt1211 = 95, zdt1211 = 65;



export function lineAquarius() {

    lineT12();
    lineT23();
    lineT34();
    lineT45();
    lineT56();
    lineT67();
    lineT78();
    lineT810();
    lineT112();
    lineT1211();


}
function lineT12(){
    if (anistat1 == true) {
        var reqT12 = requestAnimationFrame(lineT12);
    }
    if (xdt12 > 435) {
        cancelAnimationFrame(reqT12);
        anistat1 = false;
    }
    xdt12 = xdt12 + 0.35;
    ydt12 = ydt12 - 0.7;
    zdt12 = zdt12 - 1;
    l12.push(new THREE.Vector3(400, 180, 85));
    l12.push(new THREE.Vector3(xdt12, ydt12, zdt12));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l12);
    const line12 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line12);
    l12.pop();
    l12.pop();
}
function lineT23(){
    if (anistat2 == true) {
        var reqT23 = requestAnimationFrame(lineT23);
    }
    if (xdt23 > 440) {
        cancelAnimationFrame(reqT23);
        anistat2 = false;
    }
    xdt23 = xdt23 + 0.05;
    ydt23 = ydt23 - 0.3;
    zdt23 = zdt23 + 0;
    l23.push(new THREE.Vector3(435, 110, -15));
    l23.push(new THREE.Vector3(xdt23, ydt23, zdt23));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l23);
    const line23 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line23);
    l23.pop();
    l23.pop();
}
function lineT34(){

    if (anistat3 == true) {
        var reqT34 = requestAnimationFrame(lineT34);
    }
    if (zdt34 < -30) {
        cancelAnimationFrame(reqT34);
        anistat3 = false;
    }
    xdt34 = xdt34 + 0;

    zdt34 = zdt34 - 0.15;
    l34.push(new THREE.Vector3(440, 80, -15));
    l34.push(new THREE.Vector3(xdt34, ydt34, zdt34));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l34);
    const line34 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line34);
    l34.pop();
    l34.pop();
}
function lineT45(){
    if (anistat4 == true) {
        var reqT45 = requestAnimationFrame(lineT45);
    }
    if (ydt45 < 70) {
        cancelAnimationFrame(reqT45);
        anistat4 = false;
    }
    xdt45 = xdt45 - 0;
    ydt45 = ydt45 - 0.1;
    zdt45 = zdt45 - 0.05;
    l45.push(new THREE.Vector3(440, 80, -30));
    l45.push(new THREE.Vector3(xdt45, ydt45, zdt45));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l45);
    const line45 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line45);
    l45.pop();
    l45.pop();
}
function lineT56(){
    if (anistat5 == true) {
        var reqT56 = requestAnimationFrame(lineT56);
    }
    if (xdt56 > 450) {
        cancelAnimationFrame(reqT56);
        anistat5 = false;
    }
    xdt56 = xdt56 + 0.1;
    ydt56 = ydt56 - 0.6;
    zdt56 = zdt56 + 0.4;
    l56.push(new THREE.Vector3(440, 70, -35));
    l56.push(new THREE.Vector3(xdt56, ydt56, zdt56));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l56);
    const line56 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line56);
    l56.pop();
    l56.pop();
}
function lineT67(){
    if (anistat6 == true) {
        var reqT67 = requestAnimationFrame(lineT67);
    }
    if (xdt67 < 445) {
        cancelAnimationFrame(reqT67);
        anistat6 = false;
    }
    xdt67 = xdt67 - 0.05;
    ydt67 = ydt67 + 0.25;
    zdt67 = zdt67 + 0.1;
    l67.push(new THREE.Vector3(450, 10, 5));
    l67.push(new THREE.Vector3(xdt67, ydt67, zdt67));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l67);
    const line67 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line67);
    l67.pop();
    l67.pop();
}
function lineT78(){

    if (anistat7 == true) {
        var reqT78 = requestAnimationFrame(lineT78);
    }
    if (ydt78 > 40) {
        cancelAnimationFrame(reqT78);
        anistat7 = false;
    }
    xdt78 = xdt78 - 0;
    ydt78 = ydt78 + 0.05;
    zdt78 = zdt78 + 0.3;
    l78.push(new THREE.Vector3(445, 35, 15));
    l78.push(new THREE.Vector3(xdt78, ydt78, zdt78));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l78);
    const line78 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line78);
    l78.pop();
    l78.pop();
}
function lineT810(){
    if (anistat8 == true) {
        var reqT810 = requestAnimationFrame(lineT810);
    }
    if (xdt810 < 440) {
        cancelAnimationFrame(reqT810);
        anistat8 = false;
    }
    xdt810 = xdt810 - 0.05;
    ydt810 = ydt810 - 0.25;
    zdt810 = zdt810 + 0.35;
    l810.push(new THREE.Vector3(445, 40, 45));
    l810.push(new THREE.Vector3(xdt810, ydt810, zdt810));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l810);
    const line810 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line810);
    l810.pop();
    l810.pop();
}
function lineT112(){
    if (anistat9 == true) {
        var reqT112 = requestAnimationFrame(lineT112);
    }
    if (xdt112 < 435) {
        cancelAnimationFrame(reqT112);
        anistat9= false;
    }
    xdt112 = xdt112 - 0.05;
    ydt112 = ydt112 + 0.25;
    zdt112 = zdt112 - 0.4;
    l112.push(new THREE.Vector3(440, 85, 25));
    l112.push(new THREE.Vector3(xdt112, ydt112, zdt112));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l112);
    const line112 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line112);
    l112.pop();
    l112.pop();
}
function lineT1211(){

    if (anistat10 == true) {
        var reqT1211 = requestAnimationFrame(lineT1211);
    }
    if (xdt1211 > 440) {
        cancelAnimationFrame(reqT1211);
        anistat10 = false;
    }
    xdt1211 = xdt1211 + 0.05;
    ydt1211 = ydt1211 - 0.1;
    zdt1211 = zdt1211 - 0.4;
    l1211.push(new THREE.Vector3(435, 95, 65));
    l1211.push(new THREE.Vector3(xdt1211, ydt1211, zdt1211));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1211);
    const line1211 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1211);
    l1211.pop();
    l1211.pop();
}

