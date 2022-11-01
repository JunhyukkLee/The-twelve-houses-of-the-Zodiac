import { scene } from "../main.js";

let anistat1 = true;
let anistat2 = true;
let anistat3 = true;
let anistat4 = true;


const LineMaterial = new THREE.LineBasicMaterial({ color: '#d0ed0e' });
const l12 = [];
const l52 = [];
const l43 = [];
const l32 = [];


var xdt12 = -260, ydt12 = 35, zdt12 = -365;
var xdt52 = -340, ydt52 = 5, zdt52 = -295;
var xdt43 = -340, ydt43 = 135, zdt43 = -260;
var xdt32 = -330, ydt32 = 85, zdt32 = -290;

export function lineCancer() {

    lineT12();
    lineT52();
    lineT43();
    lineT32();
}
function lineT12(){
    if (anistat1 == true) {
        var reqT12 = requestAnimationFrame(lineT12);
    }
    if (xdt12 < -325) {
        cancelAnimationFrame(reqT12);
        anistat1 = false;
    }
    xdt12 = xdt12 - 0.65;
    ydt12 = ydt12 + 0.3;
    zdt12 = zdt12 + 0.6;
    l12.push(new THREE.Vector3(-260, 35, -365));
    l12.push(new THREE.Vector3(xdt12, ydt12, zdt12));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l12);
    const line12 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line12);
    l12.pop();
    l12.pop();
}
function lineT52(){
    if (anistat2 == true) {
        var reqT52 = requestAnimationFrame(lineT52);
    }
    if (xdt52 > -325) {
        cancelAnimationFrame(reqT52);
        anistat2 = false;
    }
    xdt52 = xdt52 + 0.15;
    ydt52 = ydt52 + 0.6;
    zdt52 = zdt52 - 0.1;
    l52.push(new THREE.Vector3(-340, 5, -295));
    l52.push(new THREE.Vector3(xdt52, ydt52, zdt52));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l52);
    const line52 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line52);
    l52.pop();
    l52.pop();
}
function lineT43(){

    if (anistat3 == true) {
        var reqT43 = requestAnimationFrame(lineT43);
    }
    if (xdt43 > -330) {
        cancelAnimationFrame(reqT43);
        anistat3 = false;
    }
    xdt43 = xdt43 + 0.1;
    ydt43 = ydt43 - 0.5;
    zdt43 = zdt43 - 0.3;
    l43.push(new THREE.Vector3(-340, 135, -260));
    l43.push(new THREE.Vector3(xdt43, ydt43, zdt43));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l43);
    const line43 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line43);
    l43.pop();
    l43.pop();

}
function lineT32(){
    if (anistat4 == true) {
        var reqT32 = requestAnimationFrame(lineT32);
    }
    if (xdt32 > -325) {
        cancelAnimationFrame(reqT32);
        console.log(xdt32,ydt32,zdt32);
        anistat4 = false;
    }
    xdt32 = xdt32 + 0.05;
    ydt32 = ydt32 - 0.2;
    zdt32 = zdt32 - 0.15;
    l32.push(new THREE.Vector3(-330, 85, -290));
    l32.push(new THREE.Vector3(xdt32, ydt32, zdt32));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l32);
    const line32 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line32);
    l32.pop();
    l32.pop();
}
