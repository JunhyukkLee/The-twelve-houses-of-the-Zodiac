import { scene } from "../planet.js";
let anistat1 = true;
let anistat2 = true;
let anistat3 = true;
let anistat4 = true;
let anistat5 = true;
let anistat6 = true;
let anistat7 = true;
let anistat8 = true;
let anistat9 = true;





const LineMaterial = new THREE.LineBasicMaterial({ color: '#d0ed0e' });
const l12 = [];
const l23 = [];
const l34 = [];
const l45 = [];
const l56 = [];
const l67 = [];
const l78 = [];
const l810 = [];
const l110 = [];


var xdt12 = 300, ydt12 = 85, zdt12 = 320;
var xdt23 = 310, ydt23 = 60, zdt23 = 320;
var xdt34 = 370, ydt34 = -10, zdt34 = 255;
var xdt45 = 390, ydt45 = -30, zdt45 = 225;
var xdt56 = 400, ydt56 = -45, zdt56 = 200;
var xdt67 = 405, ydt67 = -55, zdt67 = 185;
var xdt78 = 390, ydt78 = -60, zdt78 = 215;
var xdt810 = 385, ydt810 = -70, zdt810 = 240;
var xdt110 = 300, ydt110 = 85, zdt110 = 320;

export function lineCapricorn() {

    lineT12();
    lineT23();
    lineT34();
    lineT45();
    lineT56();
    lineT67();
    lineT78();
    lineT810();
    lineT110();

}
function lineT12(){
    if (anistat1 == true) {
        var reqT12 = requestAnimationFrame(lineT12);
    }
    if (xdt12 > 310) {
        cancelAnimationFrame(reqT12);
        anistat1 = false;
    }
    xdt12 = xdt12 + 0.1;
    ydt12 = ydt12 - 0.25;

    l12.push(new THREE.Vector3(300, 85, 320));
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
    if (xdt23 > 370) {
        cancelAnimationFrame(reqT23);
        anistat2 = false;
    }
    xdt23 = xdt23 + 0.6;
    ydt23 = ydt23 - 0.7;
    zdt23 = zdt23 - 0.65;
    l23.push(new THREE.Vector3(310, 60, 320));
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
    if (xdt34 > 390) {
        cancelAnimationFrame(reqT34);
        anistat3 = false;
    }
    xdt34 = xdt34 + 0.2;
    ydt34 = ydt34 - 0.2;
    zdt34 = zdt34 - 0.3;
    l34.push(new THREE.Vector3(370, -10, 255));
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
    if (xdt45 > 400) {
        cancelAnimationFrame(reqT45);
        anistat4 = false;
    }
    xdt45 = xdt45 + 0.1;
    ydt45 = ydt45 - 0.15;
    zdt45 = zdt45 - 0.25;
    l45.push(new THREE.Vector3(390, -30, 220));
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
    if (xdt56 > 405) {
        cancelAnimationFrame(reqT56);
        anistat5 = false;
    }
    xdt56 = xdt56 + 0.05;
    ydt56 = ydt56 - 0.1;
    zdt56 = zdt56 - 0.15;
    l56.push(new THREE.Vector3(400, -45, 200));
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
    if (xdt67 < 390) {
        cancelAnimationFrame(reqT67);
        anistat6 = false;
    }
    xdt67 = xdt67 - 0.15;
    ydt67 = ydt67 - 0.05;
    zdt67 = zdt67 + 0.3;
    l67.push(new THREE.Vector3(405, -55, 185));
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
    if (xdt78 < 375) {
        cancelAnimationFrame(reqT78);
        anistat7 = false;
    }
    xdt78 = xdt78 - 0.15;
    ydt78 = ydt78 - 0.1;
    zdt78 = zdt78 + 0.25;
    l78.push(new THREE.Vector3(390, -60, 215));
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
    if (xdt810 < 325) {
        cancelAnimationFrame(reqT810);
        anistat8 = false;
    }
    xdt810 = xdt810 - 0.5;
    ydt810 = ydt810 - 0;
    zdt810 = zdt810 + 0.6;
    l810.push(new THREE.Vector3(375, -70, 240));
    l810.push(new THREE.Vector3(xdt810, ydt810, zdt810));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l810);
    const line810 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line810);
    l810.pop();
    l810.pop();
}
function lineT110(){
    if (anistat9 == true) {
        var reqT110 = requestAnimationFrame(lineT110);
    }
    if (xdt110 > 325) {
        cancelAnimationFrame(reqT110);
        anistat9= false;
    }
    xdt110 = xdt110 + 0.25;
    ydt110 = ydt110 - 1.55;
    zdt110 = zdt110 - 0.2;
    l110.push(new THREE.Vector3(300, 85, 320));
    l110.push(new THREE.Vector3(xdt110, ydt110, zdt110));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l110);
    const line110 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line110);
    l110.pop();
    l110.pop();
}


