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
        let backgroundstr = props.background_url
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
            //==============BG========================//
            const loader = new THREE.TextureLoader();
            const bgTexture = loader.load(backgroundstr);
            scene.background = bgTexture;

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
        return () => {
            document.body.removeChild( renderer.domElement );
        };
    }, [props])
    return (
        <div>
            <div id="Channel-Div">{props.channel}</div>
            <div id = "Comic"></div>
        </div>
    )
}
