import React,{useEffect,useRef} from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js'
import {GlitchPass} from 'three/examples/jsm/postprocessing/GlitchPass.js'
import fontJSON from '../fonts/fontJSON.json'

export default function DefaultTextGlitch() {
    const GlitchRef = useRef()
    useEffect(() => {
//==================THREEJS Stuff===================//
var camera, scene, renderer, composer;
var object, light;
var glitchPass;
let textvar = "YEET"
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

    //============Font Geometry=================//

    var loader = new THREE.FontLoader();
    var font =loader.parse(fontJSON)
    var geometry = new THREE.TextGeometry(textvar,{font:font, size: 160, height: 10, material: 0, bevelThickness: 1, extrudeMaterial:10})
    var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );
    var mesh = new THREE.Mesh(geometry,material)
    object.add(mesh)
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
    }, [GlitchRef])
    return (
        <div>
            <div ref={GlitchRef} id ="wildGlitch"></div>
        </div>
    )
}
