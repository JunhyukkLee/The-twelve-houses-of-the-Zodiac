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
let anistat11 = true;
let anistat12 = true;
let anistat13 = true;


const LineMaterial = new THREE.LineBasicMaterial({ color: '#d0ed0e' });
const l12 = [];
const l23 = [];
const l43 = [];
const l54 = [];
const l93 = [];
const l910 = [];
const l64 = [];
const l610 = [];
const l76 = [];
const l87 = [];
const l1312 = [];
const l1211 = [];
const l1110 = [];

var xdt12 = -423, ydt12 = 152, zdt12 = 30;
var xdt23 = -430, ydt23 = 125, zdt23 = 44;
var xdt43 = -420, ydt43 = 121, zdt43 = 103;
var xdt54 = -400, ydt54 = 167, zdt54 = 125;
var xdt93 = -431, ydt93 = 70, zdt93 = 105;
var xdt910 = -431, ydt910 = 70, zdt910 = 105;
var xdt64 = -418, ydt64 = 83, zdt64 = 145;
var xdt610 = -418, ydt610 = 83, zdt610 = 145;
var xdt76 = -408, ydt76 = 80, zdt76 = 175;
var xdt87 = -382, ydt87 = 50, zdt87 = 230;
var xdt1312 = -396, ydt1312 = 0, zdt1312 = 215;
var xdt1211 = -415, ydt1211 = 14, zdt1211 = 172;
var xdt1110 = -420, ydt1110 = 3, zdt1110 = 160;


export function lineVirgo() {

    lineT12();
    lineT23();
    lineT43();
    lineT54();
    lineT93();
    lineT910();
    lineT64();
    lineT610();
    lineT76();
    lineT87();
    lineT1312();
    lineT1211();
    lineT1110();
}
function lineT12(){
    if (anistat1 == true) {
        var reqT12 = requestAnimationFrame(lineT12);
    }
    if (xdt12 < -430) {
        cancelAnimationFrame(reqT12);
        anistat1 = false;
    }
    xdt12 = xdt12 - 0.07;
    ydt12 = ydt12 - 0.27;
    zdt12 = zdt12 + 0.14;
    l12.push(new THREE.Vector3(-423, 152, 30));
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
    if (xdt23 < -431) {
        cancelAnimationFrame(reqT23);
        anistat2 = false;
    }
    xdt23 = xdt23 - 0.01;
    ydt23 = ydt23 - 0.15;
    zdt23 = zdt23 + 0.26;
    l23.push(new THREE.Vector3(-430, 125, 44));
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
    if (xdt43 < -431) {
        cancelAnimationFrame(reqT43);
        anistat3 = false;
    }
    xdt43 = xdt43 - 0.11;
    ydt43 = ydt43 - 0.11;
    zdt43 = zdt43 - 0.33;
    l43.push(new THREE.Vector3(-420, 121, 103));
    l43.push(new THREE.Vector3(xdt43, ydt43, zdt43));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l43);
    const line43 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line43);
    l43.pop();
    l43.pop();

}
function lineT54(){
    if (anistat4 == true) {
        var reqT54 = requestAnimationFrame(lineT54);
    }
    if (xdt54 < -420) {
        cancelAnimationFrame(reqT54);
   
        anistat4 = false;
    }
    xdt54 = xdt54 - 0.2;
    ydt54 = ydt54 - 0.46;
    zdt54 = zdt54 - 0.22;
    l54.push(new THREE.Vector3(-400, 167, 125));
    l54.push(new THREE.Vector3(xdt54, ydt54, zdt54));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l54);
    const line54 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line54);
    l54.pop();
    l54.pop();
}
function lineT93(){
    if (anistat5 == true) {
        var reqT93 = requestAnimationFrame(lineT93);
    }
    if (ydt93 > 110) {
        cancelAnimationFrame(reqT93);
        anistat5 = false;
    }
    
    ydt93 = ydt93 + 0.4;
    zdt93 = zdt93 - 0.35;
    l93.push(new THREE.Vector3(-431, 70, 105));
    l93.push(new THREE.Vector3(xdt93, ydt93, zdt93));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l93);
    const line93 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line93);
    l93.pop();
    l93.pop();
}
function lineT910(){
    if (anistat6 == true) {
        var reqT910 = requestAnimationFrame(lineT910);
    }
    if (xdt910 < -435) {
        cancelAnimationFrame(reqT910);
        anistat6 = false;
    }
    xdt910 = xdt910 - 0.04;
    ydt910 = ydt910 - 0.45;

    l910.push(new THREE.Vector3(-431, 70, 105));
    l910.push(new THREE.Vector3(xdt910, ydt910, zdt910));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l910);
    const line910 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line910);
    l910.pop();
    l910.pop();
}
function lineT64(){

    if (anistat7 == true) {
        var reqT64 = requestAnimationFrame(lineT64);
    }
    if (xdt64 < -420) {
        cancelAnimationFrame(reqT64);
        anistat7 = false;
    }
    xdt64 = xdt64 - 0.02;
    ydt64 = ydt64 + 0.38;
    zdt64 = zdt64 - 0.42;
    l64.push(new THREE.Vector3(-418, 83, 145));
    l64.push(new THREE.Vector3(xdt64, ydt64, zdt64));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l64);
    const line64 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line64);
    l64.pop();
    l64.pop();

}
function lineT610(){
    if (anistat8 == true) {
        var reqT610 = requestAnimationFrame(lineT610);
    }
    if (xdt610 < -435) {
        cancelAnimationFrame(reqT610);
       
        anistat8 = false;
    }
    xdt610 = xdt610 - 0.17;
    ydt610 = ydt610 - 0.58;
    zdt610 = zdt610 - 0.4;
    l610.push(new THREE.Vector3(-418, 83, 145));
    l610.push(new THREE.Vector3(xdt610, ydt610, zdt610));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l610);
    const line610 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line610);
    l610.pop();
    l610.pop();
}
function lineT76(){

    if (anistat9 == true) {
        var reqT76 = requestAnimationFrame(lineT76);
    }
    if (xdt76 < -418) {
        cancelAnimationFrame(reqT76);
        anistat9 = false;
    }
    xdt76 = xdt76 - 0.1;
    ydt76 = ydt76 - 0.03;
    zdt76 = zdt76 - 0.3;
    l76.push(new THREE.Vector3(-408, 80, 175));
    l76.push(new THREE.Vector3(xdt76, ydt76, zdt76));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l76);
    const line76 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line76);
    l76.pop();
    l76.pop();

}
function lineT87(){
    if (anistat10 == true) {
        var reqT87 = requestAnimationFrame(lineT87);
    }
    if (xdt87 < -408) {
        cancelAnimationFrame(reqT87);
    
        anistat10 = false;
    }
    xdt87 = xdt87 - 0.26;
    ydt87 = ydt87 + 0.3;
    zdt87 = zdt87 - 0.65;
    l87.push(new THREE.Vector3(-382, 50, 230));
    l87.push(new THREE.Vector3(xdt87, ydt87, zdt87));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l87);
    const line87 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line87);
    l87.pop();
    l87.pop();
}
function lineT1312(){
    if (anistat11 == true) {
        var reqT1312 = requestAnimationFrame(lineT1312);
    }
    if (xdt1312 < -415) {
        cancelAnimationFrame(reqT1312);
        anistat11 = false;
    }
    xdt1312 = xdt1312 - 0.19;
    ydt1312 = ydt1312 + 0.14;
    zdt1312 = zdt1312 - 0.43;
    l1312.push(new THREE.Vector3(-396, 0, 215));
    l1312.push(new THREE.Vector3(xdt1312, ydt1312, zdt1312));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1312);
    const line1312 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1312);
    l1312.pop();
    l1312.pop();
}
function lineT1211(){

    if (anistat12 == true) {
        var reqT1211 = requestAnimationFrame(lineT1211);
    }
    if (xdt1211 < -420) {
        cancelAnimationFrame(reqT1211);
        anistat12 = false;
    }
    xdt1211 = xdt1211 - 0.05;
    ydt1211 = ydt1211 - 0.11;
    zdt1211 = zdt1211 - 0.12;
    l1211.push(new THREE.Vector3(-415, 14, 172));
    l1211.push(new THREE.Vector3(xdt1211, ydt1211, zdt1211));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1211);
    const line1211 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1211);
    l1211.pop();
    l1211.pop();

}
function lineT1110(){
    if (anistat13 == true) {
        var reqT1110 = requestAnimationFrame(lineT1110);
    }
    if (xdt1110 < -435) {
        cancelAnimationFrame(reqT1110);
        anistat13 = false;
    }
    xdt1110 = xdt1110 - 0.15;
    ydt1110 = ydt1110 + 0.22;
    zdt1110 = zdt1110 - 0.55;
    l1110.push(new THREE.Vector3(-420, 3, 160));
    l1110.push(new THREE.Vector3(xdt1110, ydt1110, zdt1110));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1110);
    const line1110 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1110);
    l1110.pop();
    l1110.pop();
}
