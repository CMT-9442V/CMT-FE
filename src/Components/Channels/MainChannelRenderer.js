import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import DefaultTextGlitch from '../ThreeEffects/DefaultGlitch/DefaultTextGlitch'
import DefaultGlitch from '../ThreeEffects/DefaultGlitch/DefaultGlitch'
import ComicBookEffect from '../ThreeEffects/ComicBook/ComicBookEffect'
import ComicBookEffectText from '../ThreeEffects/ComicBook/ComicBookEffectText'
import CreepyLightText from '../ThreeEffects/CreepyLight/CreepyLightText'
import ComicBookNoGeo from '../ThreeEffects/ComicBook/ComicBookNoGeo'
import Start from '../Start/Start'
export default function MainChannelRenderer() {
    const [state,setState] = useState({glitchtype:"loading"})
    useEffect(() => {
Axios.get("https://ourtvgame.herokuapp.com/api/adv/initialize")
.then((res) => {

    setState(res.data)

}).catch((err) => {
    console.error(err)
})

    }, [])
    /*
    audio: "glitched_tones"
background: "https://i.imgur.com/WU4JRaN.jpgsomeUrl"
channel: 0
error_msg: ""
geometry: "100"
glitchtype: "static"
id: 1
text: """"*/
    console.log(state)
if(state.glitchtype==="loading"){
    console.log("state is loading...")
    return(
        <div>
          <DefaultGlitch />  
        </div>
    )
}else if(state.glitchtype === "static"){
    console.log("state.glitchtype is loaded")
    return(
        <div>
            <DefaultGlitch background={state.background}/>
        </div>
    )
}

// const [state, setstate] = useState([
//     {
//         channel:"000",
//         background_url:"https://threejsfundamentals.org/threejs/resources/images/daikanyama.jpg",
//         text:"spooky",
//         glitchtype :"DefaultTextGlitch",
//         requried_mp3s:"Mp3"
//     },
//     {
//         channel:"001",
//         background_url:"some url",
//         text:"testing props text",
//         glitchtype :"DefaultTextGlitch",
//         requried_mp3s:"Mp3"
//     },
//     {
//         channel:"002",
//         background_url:"some url",
//         text:"testing props text",
//         glitchtype :"DefaultGlitch",
//         requried_mp3s:"Mp3"
//     }
// ])
// console.log(state)
// console.log(state[0].text,"state.text")
// console.log(state.glitchtype)
// return(
//     <div>
//         test
//     </div>
// )
// if(state[0].glitchtype === "DefaultTextGlitch"){
//     return (
//         <div>
          
//             <DefaultTextGlitch text={state[0].text} channel={state[0].channel} background_url={state[0].background_url}/>
//         </div>
//         )
// }else if(state[0].glitchtype === "static"){
//     return (
//         <div>
            
//             <DefaultGlitch/>
//         </div>
//         )
// }else if (state[0].glitchtype === "ComicBook"){
//     return (
//     <div>
//  <ComicBookEffect text={state[0].text} channel={state[0].channel} background_url={state[0].background_url}/>
//     </div>)
// }else if(state[0].glitchtype ==="None"){
//     return (
//         <div>
//             <Start/>
//         </div>
//     )
// }else if(state[0].glitchtype ==="ComicBookText"){
//     return(
//         <div>
//             <ComicBookEffectText text={state[0].text} channel={state[0].channel}  background_url={state[0].background_url}/>
//         </div>
//     )
// }else if(state[0].glitchtype === "CreepyLightText"){
//     return(
//         <div>
//             <CreepyLightText text={state[0].text} channel={state[0].channel} background_url={state[0].background_url}/>
//         </div>
//     )
// }else if (state[0].glitchtype === "ComicNoGeo"){
//     console.log(state[0].background_url,"Background URL")
//     return(
//         <div>
//             <ComicBookNoGeo text={state[0].text} channel={state[0].channel} background_url={state[0].background_url}/>
//         </div>

//     )
// }
}
