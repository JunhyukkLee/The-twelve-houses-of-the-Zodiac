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
let anistat10 = true;
let anistat12 = true;
let anistat13 = true;



const LineMaterial = new THREE.LineBasicMaterial({ color: '#d0ed0e' });
const l12 = [];
const l23 = [];
const l35 = [];
const l56 = [];
const l67 = [];
const l78 = [];
const l811 = [];
const l812 = [];
const l910 = [];
const l1113 = [];
const l1314 = [];
const l1214 = [];

var xdt12 = 370, ydt12 = 105, zdt12 = -225;
var xdt23 = 380, ydt23 = 95, zdt23 = -215;
var xdt35 = 385, ydt35 = 105, zdt35 = -200;
var xdt56 = 410, ydt56 = 105, zdt56 = -140;
var xdt67 = 420, ydt67 = 105, zdt67 = -110;
var xdt78 = 400, ydt78 = 150, zdt78 = -145;
var xdt811 = 365, ydt811 = 200, zdt811 = -160;
var xdt812 = 365, ydt812 = 200, zdt812 = -160;
var xdt910 = 355, ydt910 = 220, zdt910 = -160;
var xdt1113 = 345, ydt1113 = 235, zdt1113 = -165;
var xdt1314 = 340, ydt1314 = 250, zdt1314 = -150;
var xdt1214 = 355, ydt1214 = 230, zdt1214 = -140;

export function linePisces() {

    lineT12();
    lineT23();
    lineT35();
    lineT56();
    lineT67();
    lineT78();
    lineT811();
    lineT812();
    lineT910();
    lineT1113();
    lineT1314();
    lineT1214();

}
function lineT12(){
    if (anistat1 == true) {
        var reqT12 = requestAnimationFrame(lineT12);
    }
    if (xdt12 > 380) {
        cancelAnimationFrame(reqT12);
        anistat1 = false;
    }
    xdt12 = xdt12 + 0.1;
    ydt12 = ydt12 - 0.1;
    zdt12 = zdt12 + 0.1;
    l12.push(new THREE.Vector3(370, 105, -225));
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
    if (xdt23 > 385) {
        cancelAnimationFrame(reqT23);
        anistat2 = false;
    }
    xdt23 = xdt23 + 0.05;
    ydt23 = ydt23 + 0.1;
    zdt23 = zdt23 + 0.15;
    l23.push(new THREE.Vector3(380, 95, -215));
    l23.push(new THREE.Vector3(xdt23, ydt23, zdt23));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l23);
    const line23 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line23);
    l23.pop();
    l23.pop();
}
function lineT35(){

    if (anistat3 == true) {
        var reqT35 = requestAnimationFrame(lineT35);
    }
    if (xdt35 > 410) {
        cancelAnimationFrame(reqT35);
        anistat3 = false;
    }
    xdt35 = xdt35 + 0.25;

    zdt35 = zdt35 + 0.6;
    l35.push(new THREE.Vector3(385, 105, -200));
    l35.push(new THREE.Vector3(xdt35, ydt35, zdt35));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l35);
    const line35 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line35);
    l35.pop();
    l35.pop();
}
function lineT56(){
    if (anistat1 == true) {
        var reqT56 = requestAnimationFrame(lineT56);
    }
    if (xdt56 > 420) {
        cancelAnimationFrame(reqT56);
        anistat1 = false;
    }
    xdt56 = xdt56 + 0.1;

    zdt56 = zdt56 + 0.3;
    l56.push(new THREE.Vector3(410, 105, -140));
    l56.push(new THREE.Vector3(xdt56, ydt56, zdt56));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l56);
    const line56 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line56);
    l56.pop();
    l56.pop();
}
function lineT67(){
    if (anistat2 == true) {
        var reqT67 = requestAnimationFrame(lineT67);
    }
    if (xdt67 < 400) {
        cancelAnimationFrame(reqT67);
        anistat2 = false;
    }
    xdt67 = xdt67 - 0.2;
    ydt67 = ydt67 + 0.45;
    zdt67 = zdt67 - 0.35;
    l67.push(new THREE.Vector3(420, 105, -110));
    l67.push(new THREE.Vector3(xdt67, ydt67, zdt67));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l67);
    const line67 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line67);
    l67.pop();
    l67.pop();
}
function lineT78(){

    if (anistat3 == true) {
        var reqT78 = requestAnimationFrame(lineT78);
    }
    if (xdt78 < 365) {
        cancelAnimationFrame(reqT78);
        anistat3 = false;
    }
    xdt78 = xdt78 - 0.35;
    ydt78 = ydt78 + 0.5;
    zdt78 = zdt78 - 0.15;
    l78.push(new THREE.Vector3(400, 150, -145));
    l78.push(new THREE.Vector3(xdt78, ydt78, zdt78));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l78);
    const line78 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line78);
    l78.pop();
    l78.pop();
}
function lineT811(){
    if (anistat1 == true) {
        var reqT811 = requestAnimationFrame(lineT811);
    }
    if (xdt811 < 345) {
        cancelAnimationFrame(reqT811);
        anistat1 = false;
    }
    xdt811 = xdt811 - 0.2;
    ydt811 = ydt811 + 0.35;
    zdt811 = zdt811 - 0.05;
    l811.push(new THREE.Vector3(365, 200, -160));
    l811.push(new THREE.Vector3(xdt811, ydt811, zdt811));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l811);
    const line811 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line811);
    l811.pop();
    l811.pop();
}
function lineT812(){
    if (anistat2 == true) {
        var reqT812 = requestAnimationFrame(lineT812);
    }
    if (xdt812 < 355) {
        cancelAnimationFrame(reqT812);
        anistat2 = false;
    }
    xdt812 = xdt812 - 0.1;
    ydt812 = ydt812 + 0.3;
    zdt812 = zdt812 + 0.2;
    l812.push(new THREE.Vector3(365, 200, -160));
    l812.push(new THREE.Vector3(xdt812, ydt812, zdt812));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l812);
    const line812 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line812);
    l812.pop();
    l812.pop();
}
function lineT910(){

    if (anistat3 == true) {
        var reqT910 = requestAnimationFrame(lineT910);
    }
    if (xdt910 > 360) {
        cancelAnimationFrame(reqT910);
        anistat3 = false;
    }
    xdt910 = xdt910 + 0.05;

    zdt910 = zdt910 + 0.1;
    l910.push(new THREE.Vector3(355, 220, -160));
    l910.push(new THREE.Vector3(xdt910, ydt910, zdt910));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l910);
    const line910 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line910);
    l910.pop();
    l910.pop();
}
function lineT1113(){
    if (anistat1 == true) {
        var reqT1113 = requestAnimationFrame(lineT1113);
    }
    if (xdt1113 < 340) {
        cancelAnimationFrame(reqT1113);
        anistat1 = false;
    }
    xdt1113 = xdt1113 - 0.05;
    ydt1113 = ydt1113 + 0.15;
    zdt1113 = zdt1113 + 0.15;
    l1113.push(new THREE.Vector3(345, 235, -165));
    l1113.push(new THREE.Vector3(xdt1113, ydt1113, zdt1113));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1113);
    const line1113 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1113);
    l1113.pop();
    l1113.pop();
}
function lineT1314(){
    if (anistat2 == true) {
        var reqT1314 = requestAnimationFrame(lineT1314);
    }
    if (xdt1314 > 350) {
        cancelAnimationFrame(reqT1314);
        anistat2 = false;
    }
    xdt1314 = xdt1314 + 0.1;
    ydt1314 = ydt1314 - 0.1;
    zdt1314 = zdt1314 + 0.15 ;
    l1314.push(new THREE.Vector3(340, 250, -150));
    l1314.push(new THREE.Vector3(xdt1314, ydt1314, zdt1314));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1314);
    const line1314 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1314);
    l1314.pop();
    l1314.pop();
}
function lineT1214(){

    if (anistat3 == true) {
        var reqT1214 = requestAnimationFrame(lineT1214);
    }
    if (xdt1214 < 350) {
        cancelAnimationFrame(reqT1214);
        anistat3 = false;
    }
    xdt1214 = xdt1214 - 0.05;
    ydt1214 = ydt1214 + 0.1;
    zdt1214 = zdt1214 + 0.05;
    l1214.push(new THREE.Vector3(355, 230, -140));
    l1214.push(new THREE.Vector3(xdt1214, ydt1214, zdt1214));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1214);
    const line1214 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1214);
    l1214.pop();
    l1214.pop();
}