if (window.innerWidth === 0) {
	window.innerWidth = parent.innerWidth;
	window.innerHeight = parent.innerHeight;
}

var camera, scene, renderer;
var geometry, material, mesh;

// Inicializa a cena e o renderizador
function Init() {
	camera = new THREE.PerspectiveCamera(
		75, window.innerWidth / window.innerHeight, 2, 1000);
	camera.position.z = 400;

	scene = new THREE.Scene();
	geometry = new THREE.IcosahedronGeometry(100, 1);
	material = new THREE.MeshBasicMaterial({
		color: 0xff3399,
		wireframe: true,
		wireframeLinewidth: 3
	});

	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	renderer = new THREE.CanvasRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
}

// Anima a cena
function Animate() {
	// Solicita ao navegador que refresque a cena em um intervalo regular
	requestAnimationFrame(Animate);

	// Incrementa a rotação do icosaedro
	mesh.rotation.x += 0.03;

	// Renderiza a cena com a rotação atualizada
	renderer.render(scene, camera);
}

// Inicializa a animação
Init();
Animate();
