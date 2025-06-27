// Create the scene
const scene = new THREE.Scene();

// Create the camera (perspective camera)
const camera = new THREE.PerspectiveCamera(
    75, // FOV
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping
    1000 // Far clipping
);

// Create the renderer and add it to the page
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a geometry (cube)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create a material (colorful)
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

// Create the mesh (geometry + material)
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add light so the cube is visible
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Set camera position
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Handle resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation
animate();

























