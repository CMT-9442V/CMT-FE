import React,{useEffect,useRef} from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js'
import {GlitchPass} from 'three/examples/jsm/postprocessing/GlitchPass.js'


export default function DefaultCirclesGlitch() {
    const GlitchRef = useRef()
    useEffect(() => {
//==================THREEJS Stuff===================//
var camera, scene, renderer, composer;
var object, light;
var glitchPass;

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

    var geometry = new THREE.CircleGeometry( 5, 32);
    for ( var i = 0; i < 100; i ++ ) {
        var material = new THREE.MeshPhongMaterial( { color: 0xffffff * Math.random(), flatShading: true } );
        var mesh = new THREE.Mesh( geometry, material );
        mesh.position.set( Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5 )
        mesh.position.multiplyScalar( Math.random() * 400 );
        mesh.rotation.set( Math.random() * 2, Math.random() * 2, Math.random() * 2 );
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50;
        object.add( mesh );
    }

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
    }, [GlitchRef])
    return (
        <div>
            <div ref={GlitchRef} id ="wildGlitch"></div>
        </div>
    )
}
