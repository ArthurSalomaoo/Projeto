// Criar a cena
const scene = new THREE.Scene();

// Criar a câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Criar o renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x778899, 1);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Linhas xyz
let linhas = new THREE.AxisHelper(20);
scene.add(linhas);

//Chão
const geometry = new THREE.PlaneGeometry(9, 3);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Cor verde
const rectangle = new THREE.Mesh(geometry, material);
rectangle.rotation.x -= 1;
scene.add(rectangle);

//Lamac
let lamacprofundidade = 0.78;
let lamaclargura = 2.5;
let lamacaltura = 0.4;
const lamacTamanho = new THREE.BoxGeometry(lamaclargura, lamacprofundidade, lamacaltura);
const lamacMaterial = new THREE.MeshBasicMaterial({ color: 0x9973FB });
const lamac = new THREE.Mesh(lamacTamanho, lamacMaterial);
lamac.rotation.x -= 1;
lamac.position.set(2.1, -0.01, 1.97)
scene.add(lamac);

//Sala1
let sala1Profundidade = 0.78;
let sala1Largura = 2.5;
let sala1Altura = 0.4;
const sala1Tamanho = new THREE.BoxGeometry(sala1Largura, sala1Profundidade, sala1Altura);
const sala1Material = new THREE.MeshBasicMaterial({ color: 0x5584FF });
const sala1 = new THREE.Mesh(sala1Tamanho, sala1Material);
sala1.rotation.x -= 1;
sala1.position.set(-0.46, -0.01, 1.97)
scene.add(sala1);

// Posicionando a câmera
camera.position.z = 5;
camera.position.x = 0;
camera.position.y = 0.9;

renderer.render(scene, camera);
