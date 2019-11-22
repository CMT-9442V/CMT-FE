import React, {useState} from 'react';
import {Route} from 'react-router-dom'
import Home from './Components/Intro/Main';
import MainChannelRenderer from './Components/Channels/MainChannelRenderer'
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Start from './Components/TestBE/TestGet'
import CreepyLightText from './Components/ThreeEffects/CreepyLight/CreepyLightText';
import Map from './Components/map/Map';


function App() {

  const [test, setTest] = useState("a");

  const change = e => {
    e.preventDefault();
    // e = e || window.event;
    // console.log("app.js", e.key);
    // console.log("app.js", e.target);
    setTest(e.key);
  };


  return (

    <div
      onClick={e => {
        change(e);
      }}
      className="App"
      tabIndex="1"
    >

      {/* <Route exact path = "/" component={Map}/> */}
      <Route exact path = "/" component={Home}/>
      <Route exact path="/Map" component={Map}/>
      <Route exact path = "/Game" component={MainChannelRenderer}/>
      <Route exact path= "/Login" component={Login}/>
      <Route exact path = "/Signup" component={Signup}/>
      
    </div>

  );
}

export default App;
