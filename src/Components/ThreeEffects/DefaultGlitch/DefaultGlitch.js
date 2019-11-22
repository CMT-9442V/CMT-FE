import React,{useEffect,useRef} from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js'
import {GlitchPass} from 'three/examples/jsm/postprocessing/GlitchPass.js'
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import Sound from 'react-sound'
import ns3 from '../../assets/audio/ns3.wav'
import ns2 from '../../assets/audio/ns2.mp3'
import ns1 from '../../assets/audio/ns1.mp3'
import tv_static from '../../assets/audio/tv_static.mp3'
import radio_static from '../../assets/audio/radio_static.mp3'
import flatwoods from '../../assets/audio/flatwoods.mp3'
import glitched_tones from '../../assets/audio/glitched_tones.mp3'
import "./Glitch.css"

export default function DefaultGlitch(props) {
    const GlitchRef = useRef()
    useEffect(() => {
//==================THREEJS Stuff===================//
var camera, scene, renderer, composer;
var object, light;
var glitchPass;
// let background = props.background.toString()
// console.log(typeof props.background)

init();
animate();
function updateOptions() {
    var wildGlitch = document.getElementById( 'wildGlitch' );
    glitchPass.goWild = wildGlitch.checked;
}
function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    //
    camera = new THREE.PerspectiveCamera( 150, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 400;
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0x000000, 1, 1000 );
    object = new THREE.Object3D();
    scene.add( object );

    //============Box Geometry=================//

    function generateGeometry( objectType, numObjects ) {
        function applyVertexColors( geometry, color ) {
            var position = geometry.attributes.position;
            var colors = [];
            for ( var i = 0; i < position.count; i ++ ) {
                colors.push( color.r, color.g, color.b );
            }
            geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
        }
        var geometries = [];
        var matrix = new THREE.Matrix4();
        var position = new THREE.Vector3();
        var rotation = new THREE.Euler();
        var quaternion = new THREE.Quaternion();
        var scale = new THREE.Vector3();
        var color = new THREE.Color();
        for ( var i = 0; i < numObjects; i ++ ) {
            position.x = Math.random() * 10000 - 5000;
            position.y = Math.random() * 6000 - 3000;
            position.z = Math.random() * 8000 - 4000;
            rotation.x = Math.random() * 2 * Math.PI;
            rotation.y = Math.random() * 2 * Math.PI;
            rotation.z = Math.random() * 2 * Math.PI;
            quaternion.setFromEuler( rotation );
            scale.x = Math.random() * 200 + 100;
            var geometry;
            if ( objectType === 'cube' ) {
                geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
                geometry = geometry.toNonIndexed(); // merging needs consistent buffer geometries
                scale.y = Math.random() * 200 + 100;
                scale.z = Math.random() * 200 + 100;
                color.setRGB( 0, 0, 0.1 + 0.9 * Math.random() );
            } else if ( objectType === 'sphere' ) {
                geometry = new THREE.IcosahedronBufferGeometry( 1, 1 );
                scale.y = scale.z = scale.x;
                color.setRGB( 0.1 + 0.9 * Math.random(), 0, 0 );
            }
            // give the geom's vertices a random color, to be displayed
            applyVertexColors( geometry, color );
            matrix.compose( position, quaternion, scale );
            geometry.applyMatrix( matrix );
            geometries.push( geometry );
        }
        return BufferGeometryUtils.mergeBufferGeometries( geometries );
    }

    let loader = new THREE.TextureLoader();
    const bgTexture = loader.load(props.background);
    scene.background = bgTexture;
    //===============Light ====================//
    scene.add( new THREE.AmbientLight( 0x222222 ) );
    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    scene.add( light );
    // postprocessing
    composer = new EffectComposer( renderer );
    composer.addPass( new RenderPass( scene, camera ) );
    glitchPass = new GlitchPass();
    composer.addPass( glitchPass );
    //
    window.addEventListener( 'resize', onWindowResize, false );
    var wildGlitchOption = document.getElementById( 'wildGlitch' );
    wildGlitchOption.addEventListener( 'change', updateOptions );
    updateOptions();
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

    return () => {
        document.body.removeChild( renderer.domElement );
    };

    }, [GlitchRef])
    return (
        <div>
<div id = "Channel-Div">{props.channel}</div>
            <div ref={GlitchRef} id ="wildGlitch"></div>
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
