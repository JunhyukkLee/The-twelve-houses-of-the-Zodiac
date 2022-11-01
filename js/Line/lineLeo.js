import { scene } from "../main.js";
let anistat1 = true;
let anistat2 = true;
let anistat3 = true;
let anistat4 = true;
let anistat5 = true;
let anistat6 = true;
let anistat7 = true;
let anistat8 = true;


const LineMaterial = new THREE.LineBasicMaterial({ color: '#d0ed0e' });
const l12 = [];
const l23 = [];
const l34 = [];
const l84 = [];
const l54=[];
const l89 = [];
const l65=[];
const l96 = [];
var xdt12 = -410, ydt12 = 13, zdt12 = -186;
var xdt23 = -420, ydt23 = 19, zdt23 = -152;
var xdt34 = -426, ydt34 = -14, zdt34 = -142;
var xdt84 = -440, ydt84 = -74, zdt84 = -66;
var xdt54 = -410, ydt54 = -57, zdt54 = -173;
var xdt89 = -440, ydt89 = -74, zdt89 = -66;
var xdt65 = -405, ydt65 = -84, zdt65 = -176;
var xdt96 = -433, ydt96 = -122, zdt96 = -22;
export function lineLeo() {
    lineT12();
    lineT23();
    lineT34();
    lineT84();
    lineT54();
    lineT89();
    lineT65();
    lineT96();
}
function lineT12(){
    if (anistat1 == true) {
        var reqT12 = requestAnimationFrame(lineT12);
    }
    if (xdt12 < -420) {
        cancelAnimationFrame(reqT12);
        anistat1 = false;
    }
    xdt12 = xdt12 - 0.5;
    ydt12 = ydt12 + 0.3;
    zdt12 = zdt12 + 1.7;
    l12.push(new THREE.Vector3(-410, 13, -186));
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
    if (xdt23 < -426) {
        cancelAnimationFrame(reqT23);
        anistat2 = false;
    }
    xdt23 = xdt23 - 0.3;
    ydt23 = ydt23 - 1.65;
    zdt23 = zdt23 + 0.5;
    l23.push(new THREE.Vector3(-420, 19, -152));
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
    if (xdt34 > -423) {
        cancelAnimationFrame(reqT34);
        anistat3 = false;
    }
    xdt34 = xdt34 + 0.15;
    ydt34 = ydt34 - 1.55;
    zdt34 = zdt34 - 0.3;
    l34.push(new THREE.Vector3(-426, -14, -142));
    l34.push(new THREE.Vector3(xdt34, ydt34, zdt34));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l34);
    const line34 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line34);
    l34.pop();
    l34.pop();

}
function lineT84(){
    if (anistat4 == true) {
        var reqT84 = requestAnimationFrame(lineT84);
    }
    if (xdt84 > -423) {
        cancelAnimationFrame(reqT84);
        console.log(xdt84,ydt84,zdt84);
        anistat4 = false;
    }
    xdt84 = xdt84 + 0.085;
    ydt84 = ydt84 + 0.145;
    zdt84 = zdt84 - 0.41;
    l84.push(new THREE.Vector3(-440, -74, -66));
    l84.push(new THREE.Vector3(xdt84, ydt84, zdt84));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l84);
    const line84 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line84);
    l84.pop();
    l84.pop();
}
function lineT54(){
    if (anistat5 == true) {
        var reqT54 = requestAnimationFrame(lineT54);
    }
    if (xdt54 < -423) {
        cancelAnimationFrame(reqT54);
        anistat5 = false;
    }
    xdt54 = xdt54 - 0.65;
    ydt54 = ydt54 + 0.6;
    zdt54 = zdt54 + 1.25;
    l54.push(new THREE.Vector3(-410, -57, -173));
    l54.push(new THREE.Vector3(xdt54, ydt54, zdt54));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l54);
    const line54 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line54);
    l54.pop();
    l54.pop();
}
function lineT89(){
    if (anistat6 == true) {
        var reqT89 = requestAnimationFrame(lineT89);
    }
    if (xdt89 > -433) {
        cancelAnimationFrame(reqT89);
        console.log(xdt89,ydt89,zdt89);
        anistat6 = false;
    }
    xdt89 = xdt89 + 0.35;
    ydt89 = ydt89 - 2.4;
    zdt89 = zdt89 + 2.2;
    l89.push(new THREE.Vector3(-440, -74, -66));
    l89.push(new THREE.Vector3(xdt89, ydt89, zdt89));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l89);
    const line89 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line89);
    l89.pop();
    l89.pop();
}
function lineT65(){
    if (anistat7 == true) {
        var reqT65 = requestAnimationFrame(lineT65);
    }
    if (xdt65 < -410) {
        cancelAnimationFrame(reqT65);
        console.log(xdt65,ydt65,zdt65);
        anistat7 = false;
    }
    xdt65 = xdt65 - 0.25;
    ydt65 = ydt65 + 1.35;
    zdt65 = zdt65 + 0.15;
    l65.push(new THREE.Vector3(-405, -84, -176));
    l65.push(new THREE.Vector3(xdt65, ydt65, zdt65));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l65);
    const line65 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line65);
    l65.pop();
    l65.pop();
}
function lineT96(){
    if (anistat8 == true) {
        var reqT96 = requestAnimationFrame(lineT96);
    }
    if (xdt96 > -405) {
        cancelAnimationFrame(reqT96);
        console.log(xdt96,ydt96,zdt96);
        anistat8 = false;
    }
    xdt96 = xdt96 + 1.4;
    ydt96 = ydt96 + 1.9;
    zdt96 = zdt96 - 7.7;
    l96.push(new THREE.Vector3(-433, -122, -22));
    l96.push(new THREE.Vector3(xdt96, ydt96, zdt96));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l96);
    const line96 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line96);
    l96.pop();
    l96.pop();
}
