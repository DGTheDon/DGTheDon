let scene, camera, renderer;
let geometry, material, mesh;
let textAnimation = true;

function setup() {
  const canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  canvas.parent('canvas');

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 400;

  geometry = new THREE.TextGeometry('Hello, World!', {
    font: 'Arial',
    size: 80,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelOffset: 0,
    bevelSegments: 5
  });

  material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas').appendChild(renderer.domElement);
}

function draw() {
  background(0);
  if (textAnimation) {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
  }
  renderer.render(scene, camera);
}

function mousePressed() {
  textAnimation = !textAnimation;
}

// Run the animation
new p5();
