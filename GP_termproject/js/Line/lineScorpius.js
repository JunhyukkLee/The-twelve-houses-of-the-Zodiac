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




const LineMaterial = new THREE.LineBasicMaterial({ color: '#d0ed0e' });
const l12 = [];
const l23 = [];
const l34 = [];
const l46 = [];
const l68 = [];
const l89 = [];
const l911 = [];
const l1112 = [];
const l1312 = [];
const l1412 = [];
const l1512 = [];

var xdt12 = 5, ydt12 = -115, zdt12 = 435;
var xdt23 = 20, ydt23 = -130, zdt23 = 430;
var xdt34 = 30, ydt34 = -142, zdt34 = 425;
var xdt46 = 10, ydt46 = -165, zdt46 = 417;
var xdt68 = -55, ydt68 = -165, zdt68 = 415;
var xdt89 = -75, ydt89 = -100, zdt89 = 430;
var xdt911 = -105, ydt911 = -50, zdt911 = 435;
var xdt1112 = -135, ydt1112 = -30, zdt1112 = 427;
var xdt1312 = -175, ydt1312 = 5, zdt1312 = 415;
var xdt1412 = -185, ydt1412 = -40, zdt1412 = 407;
var xdt1512 = -180, ydt1512 = -70, zdt1512 = 405;

export function lineScorpius() {

    lineT12();
    lineT23();
    lineT34();
    lineT46();
    lineT68();
    lineT89();
    lineT911();
    lineT1112();
    lineT1312();
    lineT1412();
    lineT1512();


}
function lineT12(){
    if (anistat1 == true) {
        var reqT12 = requestAnimationFrame(lineT12);
    }
    if (xdt12 > 20) {
        cancelAnimationFrame(reqT12);
        anistat1 = false;
    }
    xdt12 = xdt12 + 0.15;
    ydt12 = ydt12 - 0.15;
    zdt12 = zdt12 - 0.05;
    l12.push(new THREE.Vector3(5,-115,435));
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
    if (xdt23 > 30) {
        cancelAnimationFrame(reqT23);
        anistat2 = false;
    }
    xdt23 = xdt23 + 0.1;
    ydt23 = ydt23 - 0.12;
    zdt23 = zdt23 - 0.05;
    l23.push(new THREE.Vector3(20,-130,430));
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
    if (xdt34 < 10) {
        cancelAnimationFrame(reqT34);
        anistat3 = false;
    }
    xdt34 = xdt34 - 0.2;
    ydt34 = ydt34 - 0.23;
    zdt34 = zdt34 - 0.08;
    l34.push(new THREE.Vector3(30,-142,425));
    l34.push(new THREE.Vector3(xdt34, ydt34, zdt34));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l34);
    const line34 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line34);
    l34.pop();
    l34.pop();
}
function lineT46(){
    if (anistat4 == true) {
        var reqT46 = requestAnimationFrame(lineT46);
    }
    if (xdt46 < -55) {
        cancelAnimationFrame(reqT46);
        anistat4 = false;
    }
    xdt46 = xdt46 - 0.65;
    ydt46 = ydt46 - 0;
    zdt46 = zdt46 - 0.02;
    l46.push(new THREE.Vector3(10,-165,417));
    l46.push(new THREE.Vector3(xdt46, ydt46, zdt46));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l46);
    const line46 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line46);
    l46.pop();
    l46.pop();
}
function lineT68(){
    if (anistat5 == true) {
        var reqT68 = requestAnimationFrame(lineT68);
    }
    if (xdt68 < -75) {
        cancelAnimationFrame(reqT68);
        anistat5 = false;
    }
    xdt68 = xdt68 - 0.2;
    ydt68 = ydt68 + 0.65;
    zdt68 = zdt68 + 0.15;
    l68.push(new THREE.Vector3(-55,-165,415));
    l68.push(new THREE.Vector3(xdt68, ydt68, zdt68));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l68);
    const line68 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line68);
    l68.pop();
    l68.pop();
}
function lineT89(){
    if (anistat6 == true) {
        var reqT89 = requestAnimationFrame(lineT89);
    }
    if (xdt89 < -105) {
        cancelAnimationFrame(reqT89);
        anistat6 = false;
    }
    xdt89 = xdt89 - 0.3;
    ydt89 = ydt89 + 0.5;
    zdt89 = zdt89 + 0.05;
    l89.push(new THREE.Vector3(-75,-100,430));
    l89.push(new THREE.Vector3(xdt89, ydt89, zdt89));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l89);
    const line89 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line89);
    l89.pop();
    l89.pop();
}
function lineT911(){

    if (anistat7 == true) {
        var reqT911 = requestAnimationFrame(lineT911);
    }
    if (xdt911 < -135) {
        cancelAnimationFrame(reqT911);
        anistat7 = false;
    }
    xdt911 = xdt911 - 0.3;
    ydt911 = ydt911 + 0.2;
    zdt911 = zdt911 - 0.08;
    l911.push(new THREE.Vector3(-105,-50,435));
    l911.push(new THREE.Vector3(xdt911, ydt911, zdt911));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l911);
    const line911 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line911);
    l911.pop();
    l911.pop();
}
function lineT1112(){
    if (anistat8 == true) {
        var reqT1112 = requestAnimationFrame(lineT1112);
    }
    if (xdt1112 < -185) {
        cancelAnimationFrame(reqT1112);
        anistat8 = false;
    }
    xdt1112 = xdt1112 - 0.5;
    ydt1112 = ydt1112 + 0.15;
    zdt1112 = zdt1112 - 0.17;
    l1112.push(new THREE.Vector3(-135,-30,427));
    l1112.push(new THREE.Vector3(xdt1112, ydt1112, zdt1112));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1112);
    const line1112 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1112);
    l1112.pop();
    l1112.pop();
}
function lineT1312(){
    if (anistat9 == true) {
        var reqT1312 = requestAnimationFrame(lineT1312);
    }
    if (xdt1312 < -185) {
        cancelAnimationFrame(reqT1312);
        anistat9= false;
    }
    xdt1312 = xdt1312 - 0.1;
    ydt1312 = ydt1312 - 0.2;
    zdt1312 = zdt1312 - 0.05;
    l1312.push(new THREE.Vector3(-175,5,415));
    l1312.push(new THREE.Vector3(xdt1312, ydt1312, zdt1312));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1312);
    const line1312 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1312);
    l1312.pop();
    l1312.pop();
}
function lineT1412(){
    if (anistat10 == true) {
        var reqT1412 = requestAnimationFrame(lineT1412);
    }
    if (ydt1412 > -15) {
        cancelAnimationFrame(reqT1412);
        anistat10 = false;
    }
    xdt1412 = xdt1412 + 0;
    ydt1412 = ydt1412 + 0.25;
    zdt1412 = zdt1412 + 0.03;
    l1412.push(new THREE.Vector3(-185,-40,407));
    l1412.push(new THREE.Vector3(xdt1412, ydt1412, zdt1412));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1412);
    const line1412 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1412);
    l1412.pop();
    l1412.pop();
}
function lineT1512(){
    if (anistat11 == true) {
        var reqT1512 = requestAnimationFrame(lineT1512);
    }
    if (xdt1512 < -185) {
        cancelAnimationFrame(reqT1512);
        anistat11 = false;
    }
    xdt1512 = xdt1512 - 0.05;
    ydt1512 = ydt1512 + 0.55;
    zdt1512 = zdt1512 + 0.05;
    l1512.push(new THREE.Vector3(-180,-70,405));
    l1512.push(new THREE.Vector3(xdt1512, ydt1512, zdt1512));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l1512);
    const line1512 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1512);
    l1512.pop();
    l1512.pop();
}

