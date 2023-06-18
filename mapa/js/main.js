import * as THREE from '../three/build/three.module.js'
import {Scene} from '../three/src/scenes/Scene.js'
import {PerspectiveCamera} from '../three/src/cameras/PerspectiveCamera.js'
import {WebGLRenderer} from '../three/src/renderers/WebGLRenderer.js'
import {AxesHelper} from '../three/src/helpers/AxesHelper.js'
import {TrackballControls} from 'https://cdn.skypack.dev/three@0.131.2/examples/jsm/controls/TrackballControls.js'
import { FlyControls } from 'https://cdn.skypack.dev/three@0.131.2/examples/jsm/controls/FlyControls.js';

function criarSala(altura, largura, profundidade, cor) {
  const salaTamanho = new THREE.BoxGeometry(altura, largura, profundidade);
  const salaCor = new THREE.MeshBasicMaterial({ color: cor });
  const sala = new THREE.Mesh(sala1Tamanho, sala1Material);
  sala1.rotation.x -= 0;
  sala1.position.set(2.1, -0.01, 1.97)
  scene.add(sala1);
}


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.x = 10
camera.position.y = 10
camera.position.z = 30
camera.lookAt(new THREE.Vector3(0, 0, 0))

const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(0x778899, 1)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const flyControls = new FlyControls(camera, renderer.domElement)
flyControls.movementSpeed = 0.1
flyControls.domElement = renderer.domElement
flyControls.autoForward = false
flyControls.dragToLook = true

document.body.appendChild(renderer.domElement);

//Linhas xyz
let linhas = new THREE.AxesHelper(20);
scene.add(linhas);

//Chão
const geometry = new THREE.PlaneGeometry(9, 3)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }) // Cor verde
const rectangle = new THREE.Mesh(geometry, material)
rectangle.rotation.x = -1.6
scene.add(rectangle)

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

function animate() {
  requestAnimationFrame(animate);

  flyControls.update(1);

  renderer.render(scene, camera);
}

animate()