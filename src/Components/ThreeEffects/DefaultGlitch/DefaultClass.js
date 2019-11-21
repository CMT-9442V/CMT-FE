import React, { Component } from 'react'
// import React,{useEffect,useRef} from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js'
import {GlitchPass} from 'three/examples/jsm/postprocessing/GlitchPass.js'
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import "./Glitch.css"


// export default function DefaultGlitch(props) {
//     const GlitchRef = useRef()
//     useEffect(() => {
// //==================THREEJS Stuff===================//
// var camera, scene, renderer, composer;
// var object, light;
// var glitchPass;

// init();
// animate();
// function updateOptions() {
//     var wildGlitch = document.getElementById( 'wildGlitch' );
//     glitchPass.goWild = wildGlitch.checked;
// }
// function init() {
//     renderer = new THREE.WebGLRenderer();
//     renderer.setPixelRatio( window.devicePixelRatio );
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     document.body.appendChild( renderer.domElement );
//     //
//     camera = new THREE.PerspectiveCamera( 150, window.innerWidth / window.innerHeight, 1, 1000 );
//     camera.position.z = 400;
//     scene = new THREE.Scene();
//     scene.fog = new THREE.Fog( 0x000000, 1, 1000 );
//     object = new THREE.Object3D();
//     scene.add( object );



//     let loader = new THREE.TextureLoader();
//     const bgTexture = loader.load(props.background);
//     scene.background = bgTexture;
//     //===============Light ====================//
//     scene.add( new THREE.AmbientLight( 0x222222 ) );
//     light = new THREE.DirectionalLight( 0xffffff );
//     light.position.set( 1, 1, 1 );
//     scene.add( light );
//     // postprocessing
//     composer = new EffectComposer( renderer );
//     composer.addPass( new RenderPass( scene, camera ) );
//     glitchPass = new GlitchPass();
//     composer.addPass( glitchPass );
//     //
//     window.addEventListener( 'resize', onWindowResize, false );
//     var wildGlitchOption = document.getElementById( 'wildGlitch' );
//     wildGlitchOption.addEventListener( 'change', updateOptions );
//     updateOptions();
// }
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     composer.setSize( window.innerWidth, window.innerHeight );
// }
// function animate() {
//     requestAnimationFrame( animate );
//     composer.render();
// }
//     }, [GlitchRef])
//     return (
//         <div>
// <div id = "Channel-Div">{props.channel}</div>
//             <div ref={GlitchRef} id ="wildGlitch"></div>
//         </div>
//     )
// }

// export default class DefaultClass extends Component {
//     componentDidMount() {
    
//         this.sceneSetup();
//         this.addCustomSceneObjects();
//         this.startAnimationLoop();
//     }
//     sceneSetup = () => {
//         const width = this.el.clientWidth;
//         const height = this.el.clientHeight;
    
//         this.scene = new THREE.Scene();
//         this.camera = new THREE.PerspectiveCamera(
//             75, // fov = field of view
//             width / height, // aspect ratio
//             0.1, // near plane
//             1000 // far plane
//         );
        
//         // set some distance from a cube that is located at z = 0
//         this.camera.position.z = 5;
    
//         this.renderer = new THREE.WebGLRenderer();
//         this.renderer.setSize( width, height );
//         this.el.appendChild( this.renderer.domElement ); // mount using React ref
//     };
//     addCustomSceneObjects  = () => {
//         //========Scene===============//
//         const geometry = new THREE.BoxGeometry(2, 2, 2);
//         const material = new THREE.MeshPhongMaterial( {
//             color: 0x156289,
//             emissive: 0x072534,
//             side: THREE.DoubleSide,
//             flatShading: true
//         } );
//         this.cube = new THREE.Mesh( geometry, material );
//         this.scene.add( this.cube );
//         //================BG============//
//         const background = "https://raw.githubusercontent.com/CMT-9442V/CMT-FE/master/src/Components/assets/images/nosignal8.jpg"
//         let loader = new THREE.TextureLoader();
//         const bgTexture = loader.load(background);
//         this.scene.background = bgTexture;
//         //==============================//
//     };
//     startAnimationLoop = () => {
//         this.renderer.render( this.scene, this.camera );
//         this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
//     };
//     render() {

//                 return <div ref={ref => (this.el = ref)} />;

//     }
// }

// export default class DefaultClass extends Component {
//     componentDidMount(){
//         const background = "https://raw.githubusercontent.com/CMT-9442V/CMT-FE/master/src/Components/assets/images/nosignal8.jpg"
//         // this.init()
//         // this.animate()
//              function updateOptions() {
//                 var wildGlitch = document.getElementById( 'wildGlitch' );
//                 this.glitchPass.goWild = wildGlitch.checked;
//             }
//         const width = this.el.clientWidth
//         const height = this.el.clientHeight
//     //  const init =() =>{
//          //============Renderer=======================//
//     this.renderer = new THREE.WebGLRenderer();
//     this.renderer.setPixelRatio( window.devicePixelRatio );
//     this.renderer.setSize( width,height );
//     document.body.appendChild( this.renderer.domElement );
//     this.el.appendChild(this.renderer.domElement)
// //==============Camera and Scene==================//
//     this.camera = new THREE.PerspectiveCamera( 150, window.innerWidth / window.innerHeight, 1, 1000 );
//     this.camera.position.z = 400;
//     this.scene = new THREE.Scene();
//     this.scene.fog = new THREE.Fog( 0x000000, 1, 1000 );
//     this.object = new THREE.Object3D();
//     this.scene.add( this.object );
// //===============Background =====================//
//     let loader = new THREE.TextureLoader();
//     const bgTexture = loader.load(background);
//     this.scene.background = bgTexture;
// //===============Light===========================//
//     this.scene.add( new THREE.AmbientLight( 0x222222 ) );
//     this.light = new THREE.DirectionalLight( 0xffffff );
//     this.light.position.set( 1, 1, 1 );
//     this.scene.add( this.light );
// //==============Postprocessing=====================//
//     this.composer = new EffectComposer( this.renderer );
//     this.composer.addPass( new RenderPass( this.scene, this.camera ) );
//     this.glitchPass = new GlitchPass();
//     this.composer.addPass( this.glitchPass );
// //==============Making the Scene Responsive==========//
// function onWindowResize() {
//     this.camera.aspect = width/ height;
//     this.camera.updateProjectionMatrix();
//     this.renderer.setSize(width,height);
//     this.composer.setSize( width,height );
// }
// //============Listeners===========================//
//     window.addEventListener( 'resize', onWindowResize, false );
//  //===============start animation===================//
//     this.start()


//       }
//     componentWillUnmount(){
//         this.stop()
//         this.el.removeChild(this.renderer.domElement)
//       }
//     start = () => {
//         if (!this.frameId) {
//           this.frameId = requestAnimationFrame(this.animate)

//         }
//       }
//     stop = () => {
//         cancelAnimationFrame(this.frameId)
//       }
//     animate = () => {
//         this.composer.render();
//        this.renderScene()
//        this.frameId = window.requestAnimationFrame(this.animate)
//      }
//     renderScene = () => {
//       this.renderer.render(this.scene, this.camera)
//     }
//     render(){
//         return(
//         //   <div
//         //     style={{ width: '100vh', height: '100vh' }}
//         //     // ref={(mount) => { this.mount = mount }}

//         //   />
//          <div ref={ref => (this.el = ref)} />

//         )
//       }
//     }
