import React,{useEffect,useRef} from 'react'
import * as THREE from 'three';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { GodRaysFakeSunShader, GodRaysDepthMaskShader, GodRaysCombineShader, GodRaysGenerateShader } from 'three/examples/jsm/shaders/GodRaysShader.js';
import fontJSON from '../fonts/fontJSON.json'
import "./CreepyLight.css"
import Sound from 'react-sound'
import ns3 from '../../assets/audio/ns3.wav'
import ns2 from '../../assets/audio/ns2.mp3'
import ns1 from '../../assets/audio/ns1.mp3'
import tv_static from '../../assets/audio/tv_static.mp3'
import radio_static from '../../assets/audio/radio_static.mp3'
import flatwoods from '../../assets/audio/flatwoods.mp3'
import glitched_tones from '../../assets/audio/glitched_tones.mp3'

//Got Geometry from docs
export default function CreepyLightText(props) {
const ref = useRef()
useEffect(() => {

    var container, stats;
    var camera, scene, renderer, materialDepth;
    var sphereMesh;
    var textvar = props.text
    var sunPosition = new THREE.Vector3( 0, 1000, - 1000 );
    var screenSpacePosition = new THREE.Vector3();
    var mouseX = 0, mouseY = 0;
    var postprocessing = { enabled: true };
    var orbitRadius = 200;
    var bgColor = 0x000511;
    var sunColor = 0xffee00;
    // Use a smaller size for some of the god-ray render targets for better performance.
    var godrayRenderTargetResolutionMultiplier = 1.0 / 4.0;
    init();
    animate();
    function init() {
        container = document.createElement( 'div' );
        document.body.appendChild( container );
        //
        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 3000 );
        camera.position.z = 200;
        scene = new THREE.Scene();
        //
        materialDepth = new THREE.MeshDepthMaterial();
        var materialScene = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        // text
        var loader = new THREE.FontLoader();
        var font =loader.parse(fontJSON)
        var geometry = new THREE.TextGeometry(textvar,{font:font, size: 160, height: 10, material: 0, bevelThickness: 1, extrudeMaterial:10})
        var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );
        var mesh = new THREE.Mesh(geometry,material)
        scene.add(mesh)
        // sphere
        var geo = new THREE.SphereBufferGeometry( 1, 20, 10 );
        sphereMesh = new THREE.Mesh( geo, materialScene );
        sphereMesh.scale.multiplyScalar( 20 );
        scene.add( sphereMesh );
        //
        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor( 0xffffff );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );
        renderer.autoClear = false;
        //

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );
        window.addEventListener( 'resize', onWindowResize, false );
        //
        initPostprocessing( window.innerWidth, window.innerHeight );
    }
    //
    function onDocumentMouseMove( event ) {
        mouseX = event.clientX - window.innerWidth / 2;
        mouseY = event.clientY - window.innerHeight / 2;
    }
    function onDocumentTouchStart( event ) {
        if ( event.touches.length === 1 ) {
            event.preventDefault();
            mouseX = event.touches[ 0 ].pageX - window.innerWidth / 2;
            mouseY = event.touches[ 0 ].pageY - window.innerHeight / 2;
        }
    }
    function onDocumentTouchMove( event ) {
        if ( event.touches.length === 1 ) {
            event.preventDefault();
            mouseX = event.touches[ 0 ].pageX - window.innerWidth / 2;
            mouseY = event.touches[ 0 ].pageY - window.innerHeight / 2;
        }
    }
    //
    function onWindowResize() {
        var renderTargetWidth = window.innerWidth;
        var renderTargetHeight = window.innerHeight;
        camera.aspect = renderTargetWidth / renderTargetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( renderTargetWidth, renderTargetHeight );
        postprocessing.rtTextureColors.setSize( renderTargetWidth, renderTargetHeight );
        postprocessing.rtTextureDepth.setSize( renderTargetWidth, renderTargetHeight );
        postprocessing.rtTextureDepthMask.setSize( renderTargetWidth, renderTargetHeight );
        var adjustedWidth = renderTargetWidth * godrayRenderTargetResolutionMultiplier;
        var adjustedHeight = renderTargetHeight * godrayRenderTargetResolutionMultiplier;
        postprocessing.rtTextureGodRays1.setSize( adjustedWidth, adjustedHeight );
        postprocessing.rtTextureGodRays2.setSize( adjustedWidth, adjustedHeight );
    }
    function initPostprocessing( renderTargetWidth, renderTargetHeight ) {
        postprocessing.scene = new THREE.Scene();
        postprocessing.camera = new THREE.OrthographicCamera( - 0.5, 0.5, 0.5, - 0.5, - 10000, 10000 );
        postprocessing.camera.position.z = 100;
        postprocessing.scene.add( postprocessing.camera );
        var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };
        postprocessing.rtTextureColors = new THREE.WebGLRenderTarget( renderTargetWidth, renderTargetHeight, pars );
        // Switching the depth formats to luminance from rgb doesn't seem to work. I didn't
        // investigate further for now.
        // pars.format = LuminanceFormat;
        // I would have this quarter size and use it as one of the ping-pong render
        // targets but the aliasing causes some temporal flickering
        postprocessing.rtTextureDepth = new THREE.WebGLRenderTarget( renderTargetWidth, renderTargetHeight, pars );
        postprocessing.rtTextureDepthMask = new THREE.WebGLRenderTarget( renderTargetWidth, renderTargetHeight, pars );
        // The ping-pong render targets can use an adjusted resolution to minimize cost
        var adjustedWidth = renderTargetWidth * godrayRenderTargetResolutionMultiplier;
        var adjustedHeight = renderTargetHeight * godrayRenderTargetResolutionMultiplier;
        postprocessing.rtTextureGodRays1 = new THREE.WebGLRenderTarget( adjustedWidth, adjustedHeight, pars );
        postprocessing.rtTextureGodRays2 = new THREE.WebGLRenderTarget( adjustedWidth, adjustedHeight, pars );
        // god-ray shaders
        var godraysMaskShader = GodRaysDepthMaskShader;
        postprocessing.godrayMaskUniforms = THREE.UniformsUtils.clone( godraysMaskShader.uniforms );
        postprocessing.materialGodraysDepthMask = new THREE.ShaderMaterial( {
            uniforms: postprocessing.godrayMaskUniforms,
            vertexShader: godraysMaskShader.vertexShader,
            fragmentShader: godraysMaskShader.fragmentShader
        } );
        var godraysGenShader = GodRaysGenerateShader;
        postprocessing.godrayGenUniforms = THREE.UniformsUtils.clone( godraysGenShader.uniforms );
        postprocessing.materialGodraysGenerate = new THREE.ShaderMaterial( {
            uniforms: postprocessing.godrayGenUniforms,
            vertexShader: godraysGenShader.vertexShader,
            fragmentShader: godraysGenShader.fragmentShader
        } );
        var godraysCombineShader = GodRaysCombineShader;
        postprocessing.godrayCombineUniforms = THREE.UniformsUtils.clone( godraysCombineShader.uniforms );
        postprocessing.materialGodraysCombine = new THREE.ShaderMaterial( {
            uniforms: postprocessing.godrayCombineUniforms,
            vertexShader: godraysCombineShader.vertexShader,
            fragmentShader: godraysCombineShader.fragmentShader
        } );
        var godraysFakeSunShader = GodRaysFakeSunShader;
        postprocessing.godraysFakeSunUniforms = THREE.UniformsUtils.clone( godraysFakeSunShader.uniforms );
        postprocessing.materialGodraysFakeSun = new THREE.ShaderMaterial( {
            uniforms: postprocessing.godraysFakeSunUniforms,
            vertexShader: godraysFakeSunShader.vertexShader,
            fragmentShader: godraysFakeSunShader.fragmentShader
        } );
        postprocessing.godraysFakeSunUniforms.bgColor.value.setHex( bgColor );
        postprocessing.godraysFakeSunUniforms.sunColor.value.setHex( sunColor );
        postprocessing.godrayCombineUniforms.fGodRayIntensity.value = 0.75;
        postprocessing.quad = new THREE.Mesh(
            new THREE.PlaneBufferGeometry( 1.0, 1.0 ),
            postprocessing.materialGodraysGenerate
        );
        postprocessing.quad.position.z = - 9900;
        postprocessing.scene.add( postprocessing.quad );
    }
    function animate() {
        requestAnimationFrame( animate, renderer.domElement );

        render();

    }
    function getStepSize( filterLen, tapsPerPass, pass ) {
        return filterLen * Math.pow( tapsPerPass, - pass );
    }
    function filterGodRays( inputTex, renderTarget, stepSize ) {
        postprocessing.scene.overrideMaterial = postprocessing.materialGodraysGenerate;
        postprocessing.godrayGenUniforms[ "fStepSize" ].value = stepSize;
        postprocessing.godrayGenUniforms[ "tInput" ].value = inputTex;
        renderer.setRenderTarget( renderTarget );
        renderer.render( postprocessing.scene, postprocessing.camera );
        postprocessing.scene.overrideMaterial = null;
    }
    function render() {
        var time = Date.now() / 4000;
        sphereMesh.position.x = orbitRadius * Math.cos( time );
        sphereMesh.position.z = orbitRadius * Math.sin( time ) - 100;
        camera.position.x += ( mouseX - camera.position.x ) * 0.036;
        camera.position.y += ( - ( mouseY ) - camera.position.y ) * 0.036;
        camera.lookAt( scene.position );
        if ( postprocessing.enabled ) {
            // Find the screenspace position of the sun
            screenSpacePosition.copy( sunPosition ).project( camera );
            screenSpacePosition.x = ( screenSpacePosition.x + 1 ) / 2;
            screenSpacePosition.y = ( screenSpacePosition.y + 1 ) / 2;
            // Give it to the god-ray and sun shaders
            postprocessing.godrayGenUniforms[ "vSunPositionScreenSpace" ].value.x = screenSpacePosition.x;
            postprocessing.godrayGenUniforms[ "vSunPositionScreenSpace" ].value.y = screenSpacePosition.y;
            postprocessing.godraysFakeSunUniforms[ "vSunPositionScreenSpace" ].value.x = screenSpacePosition.x;
            postprocessing.godraysFakeSunUniforms[ "vSunPositionScreenSpace" ].value.y = screenSpacePosition.y;
            // -- Draw sky and sun --
            // Clear colors and depths, will clear to sky color
            renderer.setRenderTarget( postprocessing.rtTextureColors );
            renderer.clear( true, true, false );
            // Sun render. Runs a shader that gives a brightness based on the screen
            // space distance to the sun. Not very efficient, so i make a scissor
            // rectangle around the suns position to avoid rendering surrounding pixels.
            var sunsqH = 0.74 * window.innerHeight; // 0.74 depends on extent of sun from shader
            var sunsqW = 0.74 * window.innerHeight; // both depend on height because sun is aspect-corrected
            screenSpacePosition.x *= window.innerWidth;
            screenSpacePosition.y *= window.innerHeight;
            renderer.setScissor( screenSpacePosition.x - sunsqW / 2, screenSpacePosition.y - sunsqH / 2, sunsqW, sunsqH );
            renderer.setScissorTest( true );
            postprocessing.godraysFakeSunUniforms[ "fAspect" ].value = window.innerWidth / window.innerHeight;
            postprocessing.scene.overrideMaterial = postprocessing.materialGodraysFakeSun;
            renderer.setRenderTarget( postprocessing.rtTextureColors );
            renderer.render( postprocessing.scene, postprocessing.camera );
            renderer.setScissorTest( false );
            // -- Draw scene objects --
            // Colors
            scene.overrideMaterial = null;
            renderer.setRenderTarget( postprocessing.rtTextureColors );
            renderer.render( scene, camera );
            // Depth
            scene.overrideMaterial = materialDepth;
            renderer.setRenderTarget( postprocessing.rtTextureDepth );
            renderer.clear();
            renderer.render( scene, camera );
            //
            postprocessing.godrayMaskUniforms[ "tInput" ].value = postprocessing.rtTextureDepth.texture;
            postprocessing.scene.overrideMaterial = postprocessing.materialGodraysDepthMask;
            renderer.setRenderTarget( postprocessing.rtTextureDepthMask );
            renderer.render( postprocessing.scene, postprocessing.camera );
            // -- Render god-rays --
            // Maximum length of god-rays (in texture space [0,1]X[0,1])
            var filterLen = 1.0;
            // Samples taken by filter
            var TAPS_PER_PASS = 6.0;
            // Pass order could equivalently be 3,2,1 (instead of 1,2,3), which
            // would start with a small filter support and grow to large. however
            // the large-to-small order produces less objectionable aliasing artifacts that
            // appear as a glimmer along the length of the beams
            // pass 1 - render into first ping-pong target
            filterGodRays( postprocessing.rtTextureDepthMask.texture, postprocessing.rtTextureGodRays2, getStepSize( filterLen, TAPS_PER_PASS, 1.0 ) );
            // pass 2 - render into second ping-pong target
            filterGodRays( postprocessing.rtTextureGodRays2.texture, postprocessing.rtTextureGodRays1, getStepSize( filterLen, TAPS_PER_PASS, 2.0 ) );
            // pass 3 - 1st RT
            filterGodRays( postprocessing.rtTextureGodRays1.texture, postprocessing.rtTextureGodRays2, getStepSize( filterLen, TAPS_PER_PASS, 3.0 ) );
            // final pass - composite god-rays onto colors
            postprocessing.godrayCombineUniforms[ "tColors" ].value = postprocessing.rtTextureColors.texture;
            postprocessing.godrayCombineUniforms[ "tGodRays" ].value = postprocessing.rtTextureGodRays2.texture;
            postprocessing.scene.overrideMaterial = postprocessing.materialGodraysCombine;
            renderer.setRenderTarget( null );
            renderer.render( postprocessing.scene, postprocessing.camera );
            postprocessing.scene.overrideMaterial = null;
        } else {
            renderer.setRenderTarget( null );
            renderer.clear();
            renderer.render( scene, camera );
        }
    }
    return () => {
        document.body.removeChild( renderer.domElement );
    };
}, [ref])
return (
    <div>
<div id = "Channel-Div">{props.channel}</div>
        <div ref= {ref} id="info">
    
        </div>    
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
