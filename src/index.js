const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );



const geometry_cyl = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material_cyl = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cylinder = new THREE.Mesh( geometry_cyl, material_cyl );
scene.add( cylinder );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();