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
let anistat11 = true;
let anistat12 = true;
let anistat13 = true;
let anistat14 = true;
let anistat15 = true;
let anistat16= true;
let anistat17 = true;
let anistat18 = true;
let anistat19 = true;




const LineMaterial = new THREE.LineBasicMaterial({ color: '#d0ed0e' });
const l12 = [];
const l23 = [];
const l24 = [];
const l45 = [];
const l56 = [];
const l67 = [];
const l78 = [];
const l89 = [];
const l910 = [];
const l1012 = [];
const l1112 = [];
const l1214 = [];
const l915 = [];
const l1516 = [];
const l1517 = [];
const l2017 = [];
const l2120 = [];
const l1817 = [];
const l1918 = [];

var xdt12 = 200, ydt12 = -155, zdt12 = 370;
var xdt23 = 230, ydt23 = -150, zdt23 = 355;
var xdt24 = 230, ydt24 = -150, zdt24 = 355;
var xdt45 = 250, ydt45 = -115, zdt45 = 350;
var xdt56 = 285, ydt56 = -70, zdt56 = 340;
var xdt67 = 255, ydt67 = -25, zdt67 = 370;
var xdt78 = 215, ydt78 = -35, zdt78 = 392;
var xdt89 = 200, ydt89 = -50, zdt89 = 397;
var xdt910 = 180, ydt910 = -30, zdt910 = 410;
var xdt1012 = 200, ydt1012 = -25, zdt1012 = 400;
var xdt1112 = 205, ydt1112 = 15, zdt1112 = 400;
var xdt1214 = 215, ydt1214 = 10, zdt1214 = 395;
var xdt915 = 180, ydt915 = -30, zdt915 = 410;
var xdt1516 = 150, ydt1516 = -20, zdt1516 = 420;
var xdt1517 = 150, ydt1517 = -20, zdt1517 = 420;
var xdt2017 = 145, ydt2017 = -80, zdt2017 = 420;
var xdt2120 = 130, ydt2120 = -85, zdt2120 = 420;
var xdt1817 = 115, ydt1817 = -50, zdt1817 = 430;
var xdt1918 = 85, ydt1918 = -25, zdt1918 = 440;

export function lineSagittarius() {

    lineT12();
    lineT23();
    lineT24();
    lineT45();
    lineT56();
    lineT67();
    lineT78();
    lineT89();
    lineT910();
    lineT1012();
    lineT1112();
    lineT1214();
    lineT915();
    lineT1516();
    lineT1517();
    lineT2017();
    lineT2120();
    lineT1817();
    lineT1918();

}
function lineT12(){
    if (anistat1 == true) {
        var reqT12 = requestAnimationFrame(lineT12);
    }
    if (xdt12 > 230) {
        cancelAnimationFrame(reqT12);
        anistat1 = false;
    }
    xdt12 = xdt12 + 0.3;
    ydt12 = ydt12 + 0.05;
    zdt12 = zdt12 - 0.15;
    l12.push(new THREE.Vector3(200,-155,370));
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
    if (xdt23 < 210) {
        cancelAnimationFrame(reqT23);
        anistat2 = false;
    }
    xdt23 = xdt23 - 0.2;
    ydt23 = ydt23 + 0.2;
    zdt23 = zdt23 + 0.2;
    l23.push(new THREE.Vector3(230,-150,355));
    l23.push(new THREE.Vector3(xdt23, ydt23, zdt23));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l23);
    const line23 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line23);
    l23.pop();
    l23.pop();
}
function lineT24(){

    if (anistat3 == true) {
        var reqT24 = requestAnimationFrame(lineT24);
    }
    if (xdt24 > 250) {
        cancelAnimationFrame(reqT24);
        anistat3 = false;
    }
    xdt24 = xdt24 + 0.2;
    ydt24 = ydt24 + 0.35;
    zdt24 = zdt24 - 0.05;
    l24.push(new THREE.Vector3(230,-150,355));
    l24.push(new THREE.Vector3(xdt24, ydt24, zdt24));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l24);
    const line24 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line24);
    l24.pop();
    l24.pop();
}
function lineT45(){
    if (anistat4 == true) {
        var reqT45 = requestAnimationFrame(lineT45);
    }
    if (xdt45 > 285) {
        cancelAnimationFrame(reqT45);
        anistat4 = false;
    }
    xdt45 = xdt45 + 0.35;
    ydt45 = ydt45 + 0.45;
    zdt45 = zdt45 - 0.1;
    l45.push(new THREE.Vector3(250,-115,350));
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
    if (xdt56 < 255) {
        cancelAnimationFrame(reqT56);
        anistat5 = false;
    }
    xdt56 = xdt56 - 0.3;
    ydt56 = ydt56 + 0.45;
    zdt56 = zdt56 + 0.3;
    l56.push(new THREE.Vector3(285,-70,340));
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
    if (xdt67 < 215) {
        cancelAnimationFrame(reqT67);
        anistat6 = false;
    }
    xdt67 = xdt67 - 0.4;
    ydt67 = ydt67 - 0.1;
    zdt67 = zdt67 + 0.22;
    l67.push(new THREE.Vector3(255,-25,370));
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
    if (xdt78 < 200) {
        cancelAnimationFrame(reqT78);
        anistat7 = false;
    }
    xdt78 = xdt78 - 0.15;
    ydt78 = ydt78 - 0.15;
    zdt78 = zdt78 + 0.05;
    l78.push(new THREE.Vector3(215,-35,392));
    l78.push(new THREE.Vector3(xdt78, ydt78, zdt78));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l78);
    const line78 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line78);
    l78.pop();
    l78.pop();
}
function lineT89(){
    if (anistat8 == true) {
        var reqT89 = requestAnimationFrame(lineT89);
    }
    if (xdt89 < 180) {
        cancelAnimationFrame(reqT89);
        anistat8 = false;
    }
    xdt89 = xdt89 - 0.2;
    ydt89 = ydt89 + 0.2;
    zdt89 = zdt89 + 0.13;
    l89.push(new THREE.Vector3(200,-50,397));
    l89.push(new THREE.Vector3(xdt89, ydt89, zdt89));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l89);
    const line89 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line89);
    l89.pop();
    l89.pop();
}
function lineT910(){
    if (anistat9 == true) {
        var reqT910 = requestAnimationFrame(lineT910);
    }
    if (xdt910 > 200) {
        cancelAnimationFrame(reqT910);
        anistat9= false;
    }
    xdt910 = xdt910 + 0.2;
    ydt910 = ydt910 + 0.05;
    zdt910 = zdt910 - 0.1;
    l910.push(new THREE.Vector3(180,-30,410));
    l910.push(new THREE.Vector3(xdt910, ydt910, zdt910));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l910);
    const line910 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line910);
    l910.pop();
    l910.pop();
}
function lineT1012(){
    if (anistat10 == true) {
        var reqT1012 = requestAnimationFrame(lineT1012);
    }
    if (xdt1012 > 215) {
        cancelAnimationFrame(reqT1012);
        anistat10 = false;
    }
    xdt1012 = xdt1012 + 0.15;
    ydt1012 = ydt1012 + 0.35;
    zdt1012 = zdt1012 - 0.05;
    l1012.push(new THREE.Vector3(200,-25,400));
    l1012.push(new THREE.Vector3(xdt1012, ydt1012, zdt1012));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1012);
    const line1012 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1012);
    l1012.pop();
    l1012.pop();
}
function lineT1112(){
    if (anistat11== true) {
        var reqT1112 = requestAnimationFrame(lineT1112);
    }
    if (xdt1112 > 215) {
        cancelAnimationFrame(reqT1112);
        anistat11 = false;
    }
    xdt1112 = xdt1112 + 0.1;
    ydt1112 = ydt1112 - 0.05;
    zdt1112 = zdt1112 - 0.05;
    l1112.push(new THREE.Vector3(205,15,400));
    l1112.push(new THREE.Vector3(xdt1112, ydt1112, zdt1112));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1112);
    const line1112 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1112);
    l1112.pop();
    l1112.pop();
}
function lineT1214(){

    if (anistat12 == true) {
        var reqT1214 = requestAnimationFrame(lineT1214);
    }
    if (xdt1214 > 250) {
        cancelAnimationFrame(reqT1214);
        anistat12 = false;
    }
    xdt1214 = xdt1214 + 0.35;
    ydt1214 = ydt1214 + 0.15;
    zdt1214 = zdt1214 - 0.25;
    l1214.push(new THREE.Vector3(215,10,395));
    l1214.push(new THREE.Vector3(xdt1214, ydt1214, zdt1214));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1214);
    const line1214 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1214);
    l1214.pop();
    l1214.pop();
}
function lineT915(){
    if (anistat13== true) {
        var reqT915 = requestAnimationFrame(lineT915);
    }
    if (xdt915 < 150) {
        cancelAnimationFrame(reqT915);
        anistat13 = false;
    }
    xdt915 = xdt915 - 0.3;
    ydt915 = ydt915 + 0.1;
    zdt915 = zdt915 + 0.1;
    l915.push(new THREE.Vector3(180,-30,410));
    l915.push(new THREE.Vector3(xdt915, ydt915, zdt915));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l915);
    const line915 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line915);
    l915.pop();
    l915.pop();
}
function lineT1516(){
    if (anistat14 == true) {
        var reqT1516 = requestAnimationFrame(lineT1516);
    }
    if (xdt1516 < 140) {
        cancelAnimationFrame(reqT1516);
        anistat14 = false;
    }
    xdt1516 = xdt1516 - 0.1;
    ydt1516 = ydt1516 + 0.4;
    zdt1516 = zdt1516 + 0.05;
    l1516.push(new THREE.Vector3(150,-20,420));
    l1516.push(new THREE.Vector3(xdt1516, ydt1516, zdt1516));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1516);
    const line1516 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1516);
    l1516.pop();
    l1516.pop();
}
function lineT1517(){
    if (anistat15 == true) {
        var reqT1517 = requestAnimationFrame(lineT1517);
    }
    if (xdt1517 < 140) {
        cancelAnimationFrame(reqT1517);
        anistat15 = false;
    }
    xdt1517 = xdt1517 - 0.1;
    ydt1517 = ydt1517 - 0.25;
    zdt1517 = zdt1517 + 0.05;
    l1517.push(new THREE.Vector3(150,-20,420));
    l1517.push(new THREE.Vector3(xdt1517, ydt1517, zdt1517));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1517);
    const line1517 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1517);
    l1517.pop();
    l1517.pop();
}
function lineT2017(){

    if (anistat16 == true) {
        var reqT2017 = requestAnimationFrame(lineT2017);
    }
    if (xdt2017 < 140) {
        cancelAnimationFrame(reqT2017);
        anistat16 = false;
    }
    xdt2017 = xdt2017 - 0.05;
    ydt2017 = ydt2017 + 0.35;
    zdt2017 = zdt2017 + 0.05;
    l2017.push(new THREE.Vector3(145,-80,420));
    l2017.push(new THREE.Vector3(xdt2017, ydt2017, zdt2017));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l2017);
    const line2017 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line2017);
    l2017.pop();
    l2017.pop();
}
function lineT2120(){
    if (anistat17 == true) {
        var reqT2120 = requestAnimationFrame(lineT2120);
    }
    if (xdt2120 > 145) {
        cancelAnimationFrame(reqT2120);
        anistat17 = false;
    }
    xdt2120 = xdt2120 + 0.15;
    ydt2120 = ydt2120 + 0.05;
    zdt2120 = zdt2120 + 0;
    l2120.push(new THREE.Vector3(130,-85,420));
    l2120.push(new THREE.Vector3(xdt2120, ydt2120, zdt2120));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l2120);
    const line2120 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line2120);
    l2120.pop();
    l2120.pop();
}
function lineT1817(){
    if (anistat18 == true) {
        var reqT1817 = requestAnimationFrame(lineT1817);
    }
    if (xdt1817 > 140) {
        cancelAnimationFrame(reqT1817);
        anistat18= false;
    }
    xdt1817 = xdt1817 + 0.25;
    ydt1817 = ydt1817 + 0.05;
    zdt1817 = zdt1817 - 0.05;
    l1817.push(new THREE.Vector3(115,-50,430));
    l1817.push(new THREE.Vector3(xdt1817, ydt1817, zdt1817));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1817);
    const line1817 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1817);
    l1817.pop();
    l1817.pop();
}
function lineT1918(){
    if (anistat19 == true) {
        var reqT1918 = requestAnimationFrame(lineT1918);
    }
    if (xdt1918 > 115) {
        cancelAnimationFrame(reqT1918);
        anistat19= false;
    }
    xdt1918 = xdt1918 + 0.3;
    ydt1918 = ydt1918 - 0.25;
    zdt1918 = zdt1918 - 0.1;
    l1918.push(new THREE.Vector3(85,-25,440));
    l1918.push(new THREE.Vector3(xdt1918, ydt1918, zdt1918));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1918);
    const line1918 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1918);
    l1918.pop();
    l1918.pop();
}

