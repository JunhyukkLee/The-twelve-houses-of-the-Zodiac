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
const l43 = [];
const l46 = [];
const l67 = [];
const l78 = [];
const l811 = [];
const l1112 = [];
const l1113 = [];
const l213 = [];

var xdt12 = -40, ydt12 = 125, zdt12 = -432;
var xdt23 = -68, ydt23 = 126, zdt23 = -428;
var xdt43 = -150, ydt43 = 172, zdt43 = -389;
var xdt46 = -150, ydt46 = 172, zdt46 = -389;
var xdt67 = -180, ydt67 = 178, zdt67 = -374;
var xdt78 = -206, ydt78 = 144, zdt78 = -374;
var xdt811 = -208, ydt811 = 120, zdt811 = -382;
var xdt1112 = -88, ydt1112 = 75, zdt1112 = -435;
var xdt1113 = -88, ydt1113 = 75, zdt1113 = -435;
var xdt213 = -68, ydt213 = 126, zdt213 = -428;


export function lineGemini() {

    lineT12();
    lineT23();
    lineT43();
    lineT46();
    lineT67();
    lineT78();
    lineT811();
    lineT1112();
    lineT1113();
    lineT213();
}
function lineT12(){
    if (anistat1 == true) {
        var reqT12 = requestAnimationFrame(lineT12);
    }
    if (xdt12 < -68) {
        cancelAnimationFrame(reqT12);
        anistat1 = false;
    }
    xdt12 = xdt12 - 0.28;
    ydt12 = ydt12 + 0.01;
    zdt12 = zdt12 + 0.04;
    l12.push(new THREE.Vector3(-40, 125, -432));
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
    if (xdt23 < -93) {
        cancelAnimationFrame(reqT23);
        anistat2 = false;
    }
    xdt23 = xdt23 - 0.25;
    ydt23 = ydt23 + 0.06;
    zdt23 = zdt23 + 0.08;
    l23.push(new THREE.Vector3(-68, 126, -428));
    l23.push(new THREE.Vector3(xdt23, ydt23, zdt23));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l23);
    const line23 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line23);
    l23.pop();
    l23.pop();
}
function lineT43(){

    if (anistat3 == true) {
        var reqT43 = requestAnimationFrame(lineT43);
    }
    if (xdt43 > -93) {
        cancelAnimationFrame(reqT43);
        anistat3 = false;
    }
    xdt43 = xdt43 + 0.57;
    ydt43 = ydt43 - 0.4;
    zdt43 = zdt43 - 0.31;
    l43.push(new THREE.Vector3(-150, 172, -389));
    l43.push(new THREE.Vector3(xdt43, ydt43, zdt43));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l43);
    const line43 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line43);
    l43.pop();
    l43.pop();

}
function lineT46(){
    if (anistat4 == true) {
        var reqT46 = requestAnimationFrame(lineT46);
    }
    if (xdt46 < -180) {
        cancelAnimationFrame(reqT46);
        console.log(xdt46,ydt46,zdt46);
        anistat4 = false;
    }
    xdt46 = xdt46 - 0.3;
    ydt46 = ydt46 + 0.06;
    zdt46 = zdt46 + 0.15;
    l46.push(new THREE.Vector3(-150, 172, -389));
    l46.push(new THREE.Vector3(xdt46, ydt46, zdt46));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l46);
    const line46 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line46);
    l46.pop();
    l46.pop();
}
function lineT67(){
    if (anistat5 == true) {
        var reqT67 = requestAnimationFrame(lineT67);
    }
    if (xdt67 < -206) {
        cancelAnimationFrame(reqT67);
        anistat5 = false;
    }
    xdt67 = xdt67 - 0.26;
    ydt67 = ydt67 - 0.34;

    l67.push(new THREE.Vector3(-180, 178, -374));
    l67.push(new THREE.Vector3(xdt67, ydt67, zdt67));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l67);
    const line67 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line67);
    l67.pop();
    l67.pop();
}
function lineT78(){
    if (anistat6 == true) {
        var reqT78 = requestAnimationFrame(lineT78);
    }
    if (xdt78 < -208) {
        cancelAnimationFrame(reqT78);
        anistat6 = false;
    }
    xdt78 = xdt78 - 0.02;
    ydt78 = ydt78 - 0.24;
    zdt78 = zdt78 - 0.08;
    l78.push(new THREE.Vector3(-206, 144, -374));
    l78.push(new THREE.Vector3(xdt78, ydt78, zdt78));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l78);
    const line78 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line78);
    l78.pop();
    l78.pop();
}
function lineT811(){

    if (anistat7 == true) {
        var reqT811 = requestAnimationFrame(lineT811);
    }
    if (xdt811 > -88) {
        cancelAnimationFrame(reqT811);
        anistat7 = false;
    }
    xdt811 = xdt811 + 1.2;
    ydt811 = ydt811 - 0.55;
    zdt811 = zdt811 - 0.53;
    l811.push(new THREE.Vector3(-208, 120, -382));
    l811.push(new THREE.Vector3(xdt811, ydt811, zdt811));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l811);
    const line811 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line811);
    l811.pop();
    l811.pop();

}
function lineT1112(){
    if (anistat8 == true) {
        var reqT1112 = requestAnimationFrame(lineT1112);
    }
    if (xdt1112 < -100) {
        cancelAnimationFrame(reqT1112);
        console.log(xdt1112,ydt1112,zdt1112);
        anistat8 = false;
    }
    xdt1112 = xdt1112 - 0.12;
    ydt1112 = ydt1112 - 0.3;

    l1112.push(new THREE.Vector3(-88, 75, -435));
    l1112.push(new THREE.Vector3(xdt1112, ydt1112, zdt1112));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1112);
    const line1112 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1112);
    l1112.pop();
    l1112.pop();
}
function lineT1113(){

    if (anistat9 == true) {
        var reqT1113 = requestAnimationFrame(lineT1113);
    }
    if (xdt1113 > -65) {
        cancelAnimationFrame(reqT1113);
        anistat9 = false;
    }
    xdt1113 = xdt1113 + 0.23;
    ydt1113 = ydt1113 + 0.3;

    l1113.push(new THREE.Vector3(-88, 75, -435));
    l1113.push(new THREE.Vector3(xdt1113, ydt1113, zdt1113));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1113);
    const line1113 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1113);
    l1113.pop();
    l1113.pop();

}
function lineT213(){
    if (anistat10 == true) {
        var reqT213 = requestAnimationFrame(lineT213);
    }
    if (xdt213 > -65) {
        cancelAnimationFrame(reqT213);
        console.log(xdt213,ydt213,zdt213);
        anistat10 = false;
    }
    xdt213 = xdt213 + 0.03;
    ydt213 = ydt213 - 0.21;
    zdt213 = zdt213 - 0.07;
    l213.push(new THREE.Vector3(-68, 126, -428));
    l213.push(new THREE.Vector3(xdt213, ydt213, zdt213));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l213);
    const line213 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line213);
    l213.pop();
    l213.pop();
}
