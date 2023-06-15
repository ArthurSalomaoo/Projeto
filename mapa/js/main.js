import * as THREE from './three/src/Three.js'
import {Scene} from './three/src/scenes/Scene.js'
import {PerspectiveCamera} from './three/src/cameras/PerspectiveCamera.js'
import {WebGLRenderer} from './three/src/renderers/WebGLRenderer.js'
import {AxesHelper} from './three/src/helpers/AxesHelper.js'
import {TrackballControls} from 'https://cdn.skypack.dev/three@0.131.2/examples/jsm/controls/TrackballControls.js'

// Criar a cena
const scene = new THREE.Scene();

// Criar a câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
// Criar o renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x778899, 1);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const controls = new TrackballControls(camera, renderer.domElement);

//Linhas xyz
let linhas = new THREE.AxesHelper(20);
scene.add(linhas);

//Chão
const geometry = new THREE.PlaneGeometry(9, 3);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Cor verde
const rectangle = new THREE.Mesh(geometry, material);
rectangle.rotation.x = -1.6;
scene.add(rectangle);

//banheiro masculino
let banheiroMasculino1Profundidade = 0.78;
let banheiroMasculino1Largura = 2.5;
let banheiroMasculino1Altura = 0.4;
const banheiroMasculino1Tamanho = new THREE.BoxGeometry(banheiroMasculino1Largura, banheiroMasculino1Profundidade, banheiroMasculino1Altura);
const banheiroMasculino1Material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const banheiroMasculino1 = new THREE.Mesh(banheiroMasculino1Tamanho, banheiroMasculino1Material);
banheiroMasculino1.rotation.x -= 0;
banheiroMasculino1.position.set(0, 0, 0)
scene.add(banheiroMasculino1);


//Sala1
let sala1Profundidade = 0.78;
let sala1Largura = 2.5;
let sala1Altura = 0.4;
const sala1Tamanho = new THREE.BoxGeometry(sala1Largura, sala1Profundidade, sala1Altura);
const sala1Material = new THREE.MeshBasicMaterial({ color: 0x9973FB });
const sala1 = new THREE.Mesh(sala1Tamanho, sala1Material);
sala1.rotation.x -= 0;
sala1.position.set(2.1, -0.01, 1.97)
scene.add(sala1);

//Sala2
let sala2Profundidade = 0.78;
let sala2Largura = 2.5;
let sala2Altura = 0.4;
const sala2Tamanho = new THREE.BoxGeometry(sala2Largura, sala2Profundidade, sala2Altura);
const sala2Material = new THREE.MeshBasicMaterial({ color: 0x5584FF });
const sala2 = new THREE.Mesh(sala2Tamanho, sala2Material);
sala2.rotation.x -= 0;
sala2.position.set(-0.46, -0.01, 1.97)
scene.add(sala2);

//Sala3
let sala3Profundidade = 0.5;
let sala3Largura = 2.5;
let sala3Altura = 1;
const sala3Tamanho = new THREE.BoxGeometry(sala3Largura, sala3Profundidade, sala3Altura);
const sala3Material = new THREE.MeshBasicMaterial({ color: 0x55840F });
const sala3 = new THREE.Mesh(sala3Tamanho, sala3Material);
sala3.rotation.x -= 0;
sala3.position.set(-3, 0.3, 1)
scene.add(sala3);

// Posicionando a câmera
camera.position.z = 5;
camera.position.x = 0;
camera.position.y = 0;

controls.rotateSpeed = 3; // Ajuste o valor para aumentar a velocidade de rotação
function animate() {
    requestAnimationFrame(animate);
    
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  renderer.render(scene, camera);

renderer.render(scene, camera);
