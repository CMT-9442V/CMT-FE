import React from 'react';
import './App.css';
import DefaultStars from './Components/ThreeEffects/DefaultGlitch/DefaultStars'
import DefaultGlitch from './Components/ThreeEffects/DefaultGlitch/DefaultGlitch'
import DefaultTextGlitch from './Components/ThreeEffects/DefaultGlitch/DefaultTextGlitch';
import MainChannelRenderer from './Components/Channels/MainChannelRenderer';
// import Tree from './Components/ThreeEffects/Geometries/Tree';


function App() {
  return (
    <div className="App">
{/* <DefaultStars/> */}
{/* <Tree/> */}
<MainChannelRenderer/>
    </div>
  );
}

export default App;
