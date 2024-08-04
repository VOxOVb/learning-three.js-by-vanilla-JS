import * as THREE from "three";

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xeeeeee, 1.0); //only supply a color attribute of 0xeeeeee mean as #eee
renderer.shadowMap.enabled = true; //shadow between objects
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
    45, //fov set 60 ~ 90 in game usually
    window.innerWidth / window.innerHeight, //aspect
    0.1, //near with camera
    100 //far with camera
)
camera.position.set(10, 10, 10)
camera.lookAt(scene.position) // focus

let pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, -10);
scene.add(pointLight);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({
    color: 0x0000ff
});
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, 0);
scene.add(cube);

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

function render() {
    requestAnimationFrame(render);
    animate();
    renderer.render(scene, camera);
}

render();

// 確保 main.js 正確加載
console.log("main.js loaded");

// 檢查視窗大小
console.log("Window size:", window.innerWidth, window.innerHeight);

// 檢查 camera 和 scene 的設置
console.log("Camera position:", camera.position);
console.log("Scene children:", scene.children);

// 檢查 cube 的材質和幾何體
console.log("Cube material:", material);
console.log("Cube geometry:", geometry);
console.log("Cube position:", cube.position);
