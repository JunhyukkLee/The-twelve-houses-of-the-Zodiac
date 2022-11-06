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
const l45 = [];
const l16=[];
const l26 = [];
const l67=[];
const l78 = [];
var xdt12 = -342, ydt12 = 45, zdt12 = 290;
var xdt23 = -272, ydt23 = 60, zdt23 = 350;
var xdt34 = -279, ydt34 = 0, zdt34 = 350;
var xdt45 = -270, ydt45 = -30, zdt45 = 360;
var xdt16 = -342, ydt16 = 45, zdt16 = 290;
var xdt26 = -272, ydt26 = 60, zdt26 = 350;
var xdt67 = -342, ydt67 = -40, zdt67 = 280;
var xdt78 = -322, ydt78 = -100, zdt78 = 297;
export function lineLibra() {

    lineT12();
    lineT23();
    lineT34();
    lineT45();
    lineT16();
    lineT26();
    lineT67();
    lineT78();
}
function lineT12(){
    if (anistat1 == true) {
        var reqT12 = requestAnimationFrame(lineT12);
    }
    if (xdt12 > -272) {
        cancelAnimationFrame(reqT12);
        anistat1 = false;
    }
    xdt12 = xdt12 + 0.7;
    ydt12 = ydt12 + 0.15;
    zdt12 = zdt12 + 0.6;
    l12.push(new THREE.Vector3(-342, 45, 290));
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
    if (xdt23 < -279) {
        cancelAnimationFrame(reqT23);
        anistat2 = false;
    }
    xdt23 = xdt23 - 0.07;
    ydt23 = ydt23 - 0.6;

    l23.push(new THREE.Vector3(-272, 60, 350));
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
    if (xdt34 > -270) {
        cancelAnimationFrame(reqT34);
        anistat3 = false;
    }
    xdt34 = xdt34 + 0.09;
    ydt34 = ydt34 - 0.3;
    zdt34 = zdt34 + 0.1;
    l34.push(new THREE.Vector3(-279, 0, 350));
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
    if (xdt45 > -246) {
        cancelAnimationFrame(reqT45);
      
        anistat4 = false;
    }
    xdt45 = xdt45 + 0.24;
    ydt45 = ydt45 - 0.1;
    zdt45 = zdt45 + 0.1;
    l45.push(new THREE.Vector3(-270, -30, 360));
    l45.push(new THREE.Vector3(xdt45, ydt45, zdt45));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l45);
    const line45 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line45);
    l45.pop();
    l45.pop();
}
function lineT16(){
    if (anistat5 == true) {
        var reqT16 = requestAnimationFrame(lineT16);
    }
    if (ydt16 < -40) {
        cancelAnimationFrame(reqT16);
        anistat5 = false;
    }

    ydt16 = ydt16 - 0.85;
    zdt16 = zdt16 - 0.1;
    l16.push(new THREE.Vector3(-342, 45, 290));
    l16.push(new THREE.Vector3(xdt16, ydt16, zdt16));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l16);
    const line16 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line16);
    l16.pop();
    l16.pop();
}
function lineT26(){
    if (anistat6 == true) {
        var reqT26 = requestAnimationFrame(lineT26);
    }
    if (xdt26 < -342) {
        cancelAnimationFrame(reqT26);
       
        anistat6 = false;
    }
    xdt26 = xdt26 - 0.7;
    ydt26 = ydt26 - 1;
    zdt26 = zdt26 - 0.7;
    l26.push(new THREE.Vector3(-272, 60, 350));
    l26.push(new THREE.Vector3(xdt26, ydt26, zdt26));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l26);
    const line26 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line26);
    l26.pop();
    l26.pop();
}
function lineT67(){
    if (anistat7 == true) {
        var reqT67 = requestAnimationFrame(lineT67);
    }
    if (xdt67 > -322) {
        cancelAnimationFrame(reqT67);
       
        anistat7 = false;
    }
    xdt67 = xdt67 + 0.2;
    ydt67 = ydt67 - 0.6;
    zdt67 = zdt67 + 0.17;
    l67.push(new THREE.Vector3(-342, -40, 280));
    l67.push(new THREE.Vector3(xdt67, ydt67, zdt67));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l67);
    const line67 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line67);
    l67.pop();
    l67.pop();
}
function lineT78(){
    if (anistat8 == true) {
        var reqT78 = requestAnimationFrame(lineT78);
    }
    if (xdt78 < -332) {
        cancelAnimationFrame(reqT78);
       
        anistat8 = false;
    }
    xdt78 = xdt78 - 0.1;
    ydt78 = ydt78 - 0.2;
    zdt78 = zdt78 - 0.17;
    l78.push(new THREE.Vector3(-322, -100, 297));
    l78.push(new THREE.Vector3(xdt78, ydt78, zdt78));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(l78);
    const line78 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line78);
    l78.pop();
    l78.pop();
}
