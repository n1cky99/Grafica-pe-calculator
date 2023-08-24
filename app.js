import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
let scene, camera, controls, renderer, sphere, sphere1, sphere2, sphere3, sphere4, sphere5, sphere6, sphere7, sphere8, sphere1pivot, sphere2pivot, sphere3pivot, sphere4pivot, sphere5pivot, sphere6pivot, sphere7pivot, sphere8pivot;

function init() {
    scene = new THREE.Scene();

    camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,100000000);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
    controls = new OrbitControls(camera, renderer.domElement);

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    scene.background = cubeTextureLoader.load([
        'stars.jpg',
        'stars.jpg',
        'stars.jpg',
        'stars.jpg',
        'stars.jpg',
        'stars.jpg'
    ]);

    const geometry = new THREE.SphereGeometry( 60, 30, 30 );

    //const material = new THREE.MeshStandardMaterial( {color: 0xff0000} );
    //cube = new THREE.Mesh( geometry, material );

    const texture = new THREE.TextureLoader().load('soare.jpg');
    const material = new THREE.MeshBasicMaterial( {map: texture} );
    sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    sphere.position.x = 0;

    const pointLight = new THREE.PointLight( 0xFFFFFF, 2, 300 );
    scene.add( pointLight );

    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );
    
    const geometry11 = new THREE.TorusGeometry( 72.2, 0.055, 2, 400);

    const material11 = new THREE.MeshBasicMaterial({
        color: 0xffffff
        });
    
    const ring1 = new THREE.Mesh( geometry11, material11 );
    ring1.rotation.x = -0.5 * Math.PI;
    sphere.add(ring1);

    const geometry12 = new THREE.TorusGeometry( 87.6, 0.055, 2, 400);

    const material12 = new THREE.MeshBasicMaterial({
        color: 0xffffff
        });
    
    const ring2 = new THREE.Mesh( geometry12, material12 );
    ring2.rotation.x = -0.5 * Math.PI;
    sphere.add(ring2);

    const geometry13 = new THREE.TorusGeometry( 104.6, 0.055, 2, 400);

    const material13 = new THREE.MeshBasicMaterial({
        color: 0xffffff
        });
    
    const ring3 = new THREE.Mesh( geometry13, material13 );
    ring3.rotation.x = -0.5 * Math.PI;
    sphere.add(ring3);

    const geometry14 = new THREE.TorusGeometry( 121.6, 0.055, 2, 400);

    const material14 = new THREE.MeshBasicMaterial({
        color: 0xffffff
        });
    
    const ring4 = new THREE.Mesh( geometry14, material14 );
    ring4.rotation.x = -0.5 * Math.PI;
    sphere.add(ring4);

    const geometry15 = new THREE.TorusGeometry( 144.6, 0.055, 2, 400);

    const material15 = new THREE.MeshBasicMaterial({
        color: 0xffffff
        });
    
    const ring5 = new THREE.Mesh( geometry15, material15 );
    ring5.rotation.x = -0.5 * Math.PI;
    sphere.add(ring5);

    const geometry16 = new THREE.TorusGeometry( 182.6, 0.055, 2, 400);

    const material16 = new THREE.MeshBasicMaterial({
        color: 0xffffff
        });
    
    const ring6 = new THREE.Mesh( geometry16, material16 );
    ring6.rotation.x = -0.5 * Math.PI;
    sphere.add(ring6);

    const geometry17 = new THREE.TorusGeometry( 220.6, 0.055, 2, 400);

    const material17 = new THREE.MeshBasicMaterial({
        color: 0xffffff
        });
    
    const ring7 = new THREE.Mesh( geometry17, material17 );
    ring7.rotation.x = -0.5 * Math.PI;
    sphere.add(ring7);

    const geometry18 = new THREE.TorusGeometry( 244.6, 0.055, 2, 400);

    const material18 = new THREE.MeshBasicMaterial({
        color: 0xffffff
        });
    
    const ring8 = new THREE.Mesh( geometry18, material18 );
    ring8.rotation.x = -0.5 * Math.PI;
    sphere.add(ring8);

    sphere1pivot = new THREE.Group();
	sphere.add( sphere1pivot );

    const geometry1 = new THREE.SphereGeometry( 3.2, 30, 30 );

    //const material = new THREE.MeshStandardMaterial( {color: 0xff0000} );
    //cube = new THREE.Mesh( geometry, material );

    const texture1 = new THREE.TextureLoader().load('mercury.jpg');
    const material1 = new THREE.MeshStandardMaterial( {map: texture1} );

    sphere1 = new THREE.Mesh( geometry1, material1 );
    sphere.add( sphere1 );
    sphere1.position.x = 72;
    sphere1pivot.add(sphere1);

    const geometry2 = new THREE.SphereGeometry( 5.8, 30, 30 );

    //const material = new THREE.MeshStandardMaterial( {color: 0xff0000} );
    //cube = new THREE.Mesh( geometry, material );

    const texture2 = new THREE.TextureLoader().load('venus.jpg');
    const material2 = new THREE.MeshStandardMaterial( {map: texture2} );

    sphere2pivot = new THREE.Group();
    sphere.add( sphere2pivot );

    sphere2 = new THREE.Mesh( geometry2, material2 );
    sphere.add( sphere2 );
    sphere2.position.x = 88;
    sphere2pivot.add(sphere2);

    const geometry3 = new THREE.SphereGeometry( 6, 30, 30 );

    //const material = new THREE.MeshStandardMaterial( {color: 0xff0000} );
    //cube = new THREE.Mesh( geometry, material );

    const texture3 = new THREE.TextureLoader().load('earth.jpg');
    const material3 = new THREE.MeshStandardMaterial( {map: texture3} );

    sphere3pivot = new THREE.Group();
    sphere.add( sphere3pivot );

    sphere3 = new THREE.Mesh( geometry3, material3 );
    sphere.add( sphere3 );
    sphere3.position.x = 106;
    sphere3pivot.add(sphere3);

    const geometry4 = new THREE.SphereGeometry( 4, 30, 30 );

    //const material = new THREE.MeshStandardMaterial( {color: 0xff0000} );
    //cube = new THREE.Mesh( geometry, material );

    const texture4 = new THREE.TextureLoader().load('mars.jpg');
    const material4 = new THREE.MeshStandardMaterial( {map: texture4} );

    sphere4pivot = new THREE.Group();
    sphere.add( sphere4pivot );

    sphere4 = new THREE.Mesh( geometry4, material4 );
    sphere.add( sphere4 );
    sphere4.position.x = 122;
    sphere4pivot.add(sphere4);

    const geometry5 = new THREE.SphereGeometry( 12, 30, 30 );

    //const material = new THREE.MeshStandardMaterial( {color: 0xff0000} );
    //cube = new THREE.Mesh( geometry, material );

    const texture5 = new THREE.TextureLoader().load('jupiter.jpg');
    const material5 = new THREE.MeshStandardMaterial( {map: texture5} );

    sphere5pivot = new THREE.Group();
    sphere.add( sphere5pivot );

    sphere5 = new THREE.Mesh( geometry5, material5 );
    sphere.add( sphere5 );
    sphere5.position.x = 144;
    sphere5pivot.add(sphere5);

    const geometry6 = new THREE.SphereGeometry( 10, 30, 30 );

    //const material = new THREE.MeshStandardMaterial( {color: 0xff0000} );
    //cube = new THREE.Mesh( geometry, material );

    const texture6 = new THREE.TextureLoader().load('saturn.jpg');
    const material6 = new THREE.MeshStandardMaterial( {map: texture6} );

    sphere6pivot = new THREE.Group();
    sphere.add( sphere6pivot );

    sphere6 = new THREE.Mesh( geometry6, material6 );
    sphere.add( sphere6 );
    sphere6.position.x = 182;
    sphere6pivot.add(sphere6);

    const geometry9 = new THREE.RingGeometry( 10, 20, 32 );
    const material9 = new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('saturn ring.png'), side: THREE.DoubleSide } );
    const mesh = new THREE.Mesh( geometry9, material9 );
    mesh.rotation.x = -0.5 * Math.PI;
    sphere6.add( mesh );

    const geometry7 = new THREE.SphereGeometry( 7, 30, 30 );

    //const material = new THREE.MeshStandardMaterial( {color: 0xff0000} );
    //cube = new THREE.Mesh( geometry, material );

    const texture7 = new THREE.TextureLoader().load('uranus.jpg');
    const material7 = new THREE.MeshStandardMaterial( {map: texture7} );

    sphere7pivot = new THREE.Group();
    sphere.add( sphere7pivot );

    sphere7 = new THREE.Mesh( geometry7, material7 );
    sphere.add( sphere7 );
    sphere7.position.x = 220;
    sphere7pivot.add(sphere7);

    const geometry10 = new THREE.RingGeometry( 7, 12, 32 );
    const material10 = new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('uranus ring.png'), side: THREE.DoubleSide } );
    const mesh2 = new THREE.Mesh( geometry10, material10 );
    mesh2.rotation.x = -0.5 * Math.PI;
    sphere7.add( mesh2 );

    const geometry8 = new THREE.SphereGeometry( 7, 30, 30 );

    //const material = new THREE.MeshStandardMaterial( {color: 0xff0000} );
    //cube = new THREE.Mesh( geometry, material );

    const texture8 = new THREE.TextureLoader().load('neptune.jpg');
    const material8 = new THREE.MeshStandardMaterial( {map: texture8} );

    sphere8pivot = new THREE.Group();
    sphere.add( sphere8pivot );

    sphere8 = new THREE.Mesh( geometry8, material8 );
    sphere.add( sphere8 );
    sphere8.position.x = 244;
    sphere8pivot.add(sphere8);

    camera.position.x = 0;
    camera.position.y = 100;
    camera.position.z = 400;

    controls.update();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.y += 0.004;
    sphere1.rotation.y += 0.004;
    sphere2.rotation.y += 0.002;
    sphere3.rotation.y += 0.02;
    sphere4.rotation.y += 0.018;
    sphere5.rotation.y += 0.04;
    sphere6.rotation.y += 0.055;
    sphere7.rotation.y += 0.03;
    sphere8.rotation.y += 0.032;

    sphere1pivot.rotation.y += 0.04;
    sphere2pivot.rotation.y +=0.015;
    sphere3pivot.rotation.y +=0.01;
    sphere4pivot.rotation.y +=0.008;
    sphere5pivot.rotation.y +=0.002;
    sphere6pivot.rotation.y +=0.0009;
    sphere7pivot.rotation.y +=0.0004;
    sphere8pivot.rotation.y +=0.0001;

    controls.update();
    
    renderer.render(scene, camera);
}

// se apeleaza functia onWindowResize() cand facem resize la pagina
window.addEventListener('resize', onWindowResize, false); 

init();
animate();