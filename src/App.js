import React from 'react';
import {Route} from 'react-router-dom'
import Home from './Components/Intro/Main';
import MainChannelRenderer from './Components/Channels/MainChannelRenderer'
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Start from './Components/TestBE/TestGet'
import CreepyLightText from './Components/ThreeEffects/CreepyLight/CreepyLightText';


function App() {
  return (

    <div className="App">

      <Route exact path = "/" component={Home}/>
      <Route exact path = "/Game" component={MainChannelRenderer}/>
      <Route exact path= "/Login" component={Login}/>
      <Route exact path = "/Signup" component={Signup}/>
      
    </div>

  );
}

export default App;
