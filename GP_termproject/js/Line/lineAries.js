import { scene } from "../planet.js";
let anistat1 = true;
let anistat2 = true;
let anistat3 = true;



const LineMaterial = new THREE.LineBasicMaterial({ color: '#d0ed0e' });
const l12 = [];
const l23 = [];
const l34 = [];

var xdt12 = 165, ydt12 = 265, zdt12 = -325;
var xdt23 = 265, ydt23 = 240, zdt23 = -270;
var xdt34 = 310, ydt34 = 220, zdt34 = -240;

export function lineAries() {

    lineT12();
    lineT23();
    lineT34();

}
function lineT12(){
    if (anistat1 == true) {
        var reqT12 = requestAnimationFrame(lineT12);
    }
    if (xdt12 > 265) {
        cancelAnimationFrame(reqT12);
        anistat1 = false;
    }
    xdt12 = xdt12 + 1;
    ydt12 = ydt12 - 0.25;
    zdt12 = zdt12 + 0.55;
    l12.push(new THREE.Vector3(165, 265, -325));
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
    if (xdt23 > 310) {
        cancelAnimationFrame(reqT23);
        anistat2 = false;
    }
    xdt23 = xdt23 + 0.45;
    ydt23 = ydt23 - 0.2;
    zdt23 = zdt23 + 0.3;
    l23.push(new THREE.Vector3(265, 240, -270));
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
    if (xdt34 > 325) {
        cancelAnimationFrame(reqT34);
        anistat3 = false;
    }
    xdt34 = xdt34 + 0.15;
    ydt34 = ydt34 - 0.35;
    zdt34 = zdt34 - 0.1;
    l34.push(new THREE.Vector3(310, 220, -240));
    l34.push(new THREE.Vector3(xdt34, ydt34, zdt34));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l34);
    const line34 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line34);
    l34.pop();
    l34.pop();
}