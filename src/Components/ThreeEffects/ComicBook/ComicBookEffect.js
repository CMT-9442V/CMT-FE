import React,{useEffect,useRef} from 'react'
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader.js';
import './ComicBook.css'
export default function ComicBookEffect(props) {
    useEffect(() => {
        var camera, scene, renderer, composer;
        var object, light;
        // const textvar = props.text
        init();
        animate();
        function Options() {
            var wildGlitch = document.getElementById( 'Comic' );
            
        }
        function init() {
            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            //
            camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
            camera.position.z = 400;
            scene = new THREE.Scene();
            scene.fog = new THREE.Fog( 0x000000, 1, 1000 );
            object = new THREE.Object3D();
            scene.add( object );
            //==================Text===================//
            // var loader = new THREE.FontLoader();
            // var font =loader.parse(fontJSON)
            // var geometry = new THREE.TextGeometry(textvar,{font:font, size: 160, height: 10, material: 0, bevelThickness: 1, extrudeMaterial:10})
            // var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );
            // var mesh = new THREE.Mesh(geometry,material)
            // object.add(mesh)
            var geometry = new THREE.SphereBufferGeometry( 1, 1, 1 );
            var material = new THREE.MeshPhongMaterial( { color: 0xC5E763, flatShading: true } );
            for ( var i = 0; i < 100; i ++ ) {
                var mesh = new THREE.Mesh( geometry, material );
                mesh.position.set( Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5 ).normalize();
                mesh.position.multiplyScalar( Math.random() * 400 );
                mesh.rotation.set( Math.random() * 2, Math.random() * 2, Math.random() * 2 );
                mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50;
                object.add( mesh );
            }
            //=============BG======================//
            let loader = new THREE.TextureLoader();
            const bgTexture = loader.load("https://threejsfundamentals.org/threejs/resources/images/daikanyama.jpg");
            scene.background = bgTexture;
            //===========Light=====================//
            scene.add( new THREE.AmbientLight( 0x222222 ) );
            light = new THREE.DirectionalLight( 0xffffff );
            light.position.set( 1, 1, 1 );
            scene.add( light );
            // postprocessing
            composer = new EffectComposer( renderer );
            composer.addPass( new RenderPass( scene, camera ) );
            var effect = new ShaderPass( DotScreenShader );
            effect.uniforms[ 'scale' ].value = 4;
            composer.addPass( effect );
            var effect = new ShaderPass( RGBShiftShader );
            effect.uniforms[ 'amount' ].value = 0.0015;
            composer.addPass( effect );
            window.addEventListener( 'resize', onWindowResize, false );
            var wildGlitchOption = document.getElementById( 'Comic' );
            wildGlitchOption.addEventListener( 'change', Options);
            window.addEventListener( 'resize', onWindowResize, false );
        }
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
            composer.setSize( window.innerWidth, window.innerHeight );
        }
        function animate() {
            requestAnimationFrame( animate );
            object.rotation.x += 0.005;
            object.rotation.y += 0.01;
            composer.render();
        }
    }, [props])
    return (
        <div>
            <div id="Channel-Div">{props.channel}</div>
            <div id = "Comic"></div>
        </div>
    )
}
