import { scene } from "../main.js";
let anistat1 = true;
let anistat2 = true;
let anistat3 = true;
let anistat4 = true;
let anistat5 = true;
let anistat6 = true;


const LineMaterial = new THREE.LineBasicMaterial({ color: '#d0ed0e' });
const t27 = [];
const t19 = [];
const t98 = [];
const t87 = [];
const t107=[];
const t1210 = [];
var xdt27 = 24, ydt27 = 236, zdt27 = -385;
var xdt19 = 0, ydt19 = 195, zdt19 = -407;
var xdt98 = 64, ydt98 = 151, zdt98 = -419;
var xdt87 = 82, ydt87 = 152, zdt87 = -418;
var xdt107 = 119, ydt107 = 127, zdt107 = -416;
var xdt1210 = 175, ydt1210 = 100, zdt1210 = -404;
export function lineTaurus() {
    /*point1=new THREE.Vector3(0,195,-407);
    point2=new THREE.Vector3(24,236, -385);
    point7=new THREE.Vector3(95,147, -417);
    point8=new THREE.Vector3(82,152, -418);
    point9=new THREE.Vector3(64,151, -419);
    point10=new THREE.Vector3(119,127, -416);
    point12=new THREE.Vector3(175,100, -404);*/

    //2-7
    lineT27();
    lineT19();
    lineT98();
    lineT87();
    lineT107();
    lineT1210();
}
function lineT27(){
    if (anistat1 == true) {
        var reqT27 = requestAnimationFrame(lineT27);
    }
    if (xdt27 > 95) {
        cancelAnimationFrame(reqT27);
        anistat1 = false;
    }
    xdt27 = xdt27 + 0.35;
    ydt27 = ydt27 - 0.45;
    zdt27 = zdt27 - 0.15;
    t27.push(new THREE.Vector3(24, 236, -385));
    t27.push(new THREE.Vector3(xdt27, ydt27, zdt27));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(t27);
    const line27 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line27);
    t27.pop();
    t27.pop();
}
function lineT19(){
    if (anistat2 == true) {
        var reqT19 = requestAnimationFrame(lineT19);
    }
    if (xdt19 > 64) {
        cancelAnimationFrame(reqT19);
        anistat2 = false;
    }
    xdt19 = xdt19 + 0.32;
    ydt19 = ydt19 - 0.22;
    zdt19 = zdt19 - 0.06;
    t19.push(new THREE.Vector3(0,195,-407));
    t19.push(new THREE.Vector3(xdt19, ydt19, zdt19));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(t19);
    const line19 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line19);
    t19.pop();
    t19.pop();
}
function lineT98(){

    if (anistat3 == true) {
        var reqT98 = requestAnimationFrame(lineT98);
    }
    if (xdt98 > 82) {
        cancelAnimationFrame(reqT98);
        anistat3 = false;
    }
    xdt98 = xdt98 + 0.09;
    ydt98 = ydt98 + 0.05;
    zdt98 = zdt98 + 0.05;
    t98.push(new THREE.Vector3(64,151, -419));
    t98.push(new THREE.Vector3(xdt98, ydt98, zdt98));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(t98);
    const line98 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line98);
    t98.pop();
    t98.pop();

}
function lineT87(){
    if (anistat4 == true) {
        var reqT87 = requestAnimationFrame(lineT87);
    }
    if (xdt87 > 95) {
        cancelAnimationFrame(reqT87);
        anistat4 = false;
    }
    xdt87 = xdt87 + 0.35;
    ydt87 = ydt87 - 0.25;
    zdt87 = zdt87 + 0.05;
    t87.push(new THREE.Vector3(82,152, -418));
    t87.push(new THREE.Vector3(xdt87, ydt87, zdt87));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(t87);
    const line87 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line87);
    t87.pop();
    t87.pop();
}
function lineT107(){
    if (anistat5 == true) {
        var reqT107 = requestAnimationFrame(lineT107);
    }
    if (xdt107 < 95) {
        cancelAnimationFrame(reqT107);
        anistat5 = false;
    }
    xdt107 = xdt107 - 0.12;
    ydt107 = ydt107 + 0.1;
    zdt107 = zdt107 - 0.05;
    t107.push(new THREE.Vector3(119,127, -416));
    t107.push(new THREE.Vector3(xdt107, ydt107, zdt107));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(t107);
    const line107 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line107);
    t107.pop();
    t107.pop();
}
function lineT1210(){

    if (anistat6 == true) {
        var reqT1210 = requestAnimationFrame(lineT1210);
    }
    if (xdt1210 < 119) {
        cancelAnimationFrame(reqT1210);
        anistat6 = false;
    }
    xdt1210 = xdt1210 - 0.28;
    ydt1210 = ydt1210 + 0.135;
    zdt1210 = zdt1210 - 0.06;
    t1210.push(new THREE.Vector3(175,100, -404));
    t1210.push(new THREE.Vector3(xdt1210, ydt1210, zdt1210));
    const LineGeometry3 = new THREE.BufferGeometry().setFromPoints(t1210);
    const line1210 = new THREE.Line(LineGeometry3, LineMaterial);
    scene.add(line1210);
    t1210.pop();
    t1210.pop();
}
