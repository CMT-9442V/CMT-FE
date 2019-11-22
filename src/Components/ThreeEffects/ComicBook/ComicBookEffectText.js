import React,{useEffect,useRef} from 'react'
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader.js';
import fontJSON from '../fonts/fontJSON.json'
import Sound from 'react-sound'
import ns3 from '../../assets/audio/ns3.wav'
import ns2 from '../../assets/audio/ns2.mp3'
import ns1 from '../../assets/audio/ns1.mp3'
import tv_static from '../../assets/audio/tv_static.mp3'
import radio_static from '../../assets/audio/radio_static.mp3'
import flatwoods from '../../assets/audio/flatwoods.mp3'
import glitched_tones from '../../assets/audio/glitched_tones.mp3'

export default function ComicBookEffectText(props) {
    useEffect(() => {
        var camera, scene, renderer, composer;
        var object, light;
        const textvar = props.text
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
            //==================BG====================//
            let loader = new THREE.TextureLoader();
            const bgTexture = loader.load(props.background_url);
            scene.background = bgTexture;
            //==================Text===================//
           loader = new THREE.FontLoader();
            var font =loader.parse(fontJSON)
            var geometry = new THREE.TextGeometry(textvar,{font:font, size: 45, height: 10, material: 0, bevelThickness: 1, extrudeMaterial:10})
            var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );
            var mesh = new THREE.Mesh(geometry,material)
            object.add(mesh)
    //=======================Light==========================//
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
            // var wildGlitchOption = document.getElementById( 'Comic' );
            // wildGlitchOption.addEventListener( 'change', Options);
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

            composer.render();
        }
        var elem = document.getElementById('Comic');
elem.parentNode.removeChild(elem);
    }, [props])
    return (
        <div>
            <div id = "Channel-Div">{props.channel}</div>
            <div id = "Comic"></div>
            <div>
                {props.audio==="tv_static" ? (
                     <Sound
                     url={tv_static}
                     playStatus={Sound.status.PLAYING}
                     loop
                     />  
                ) : props.audio==="radio_static" ? (
                    <Sound
                     url={radio_static}
                     playStatus={Sound.status.PLAYING}
                     loop
                     />  
                ) : props.audio==="glitched_tones" ? (
                    <Sound
                     url={glitched_tones}
                     playStatus={Sound.status.PLAYING}
                     loop
                     />  
                ) : props.audio==="flatwoods" ? (
                    <Sound
                     url={flatwoods}
                     playStatus={Sound.status.PLAYING}
                     loop
                     />  
                ) : props.audio==="ns1" ? (
                    <Sound
                     url={ns1}
                     playStatus={Sound.status.PLAYING}
                     loop
                     />  
                ) : props.audio==="ns2" ? (
                    <Sound
                     url={ns2}
                     playStatus={Sound.status.PLAYING}
                     loop
                     />  
                ) : props.audio==="ns3" ? (
                    <Sound
                     url={ns3}
                     playStatus={Sound.status.PLAYING}
                     loop
                     />  
                ) : null}
            </div>
        </div>
    )
}
