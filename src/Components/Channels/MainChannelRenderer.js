import React,{useState} from 'react'
import DefaultTextGlitch from '../ThreeEffects/DefaultGlitch/DefaultTextGlitch'
import DefaultGlitch from '../ThreeEffects/DefaultGlitch/DefaultGlitch'

export default function MainChannelRenderer() {
const [state, setstate] = useState([
    {
        channel:"000",
        background_url:"https://imgur.com/gallery/Bn6E1R0",
        text:"bars",
        glitchtype :"DefaultTextGlitch",
        requried_mp3s:"Mp3"
    },
    {
        channel:"001",
        background_url:"some url",
        text:"testing props text",
        glitchtype :"DefaultTextGlitch",
        requried_mp3s:"Mp3"
    },
    {
        channel:"002",
        background_url:"some url",
        text:"testing props text",
        glitchtype :"DefaultGlitch",
        requried_mp3s:"Mp3"
    }
])
console.log(state)
console.log(state[0].text,"state.text")
console.log(state.glitchtype)
if(state[0].glitchtype === "DefaultTextGlitch"){
    return (
        <div>
            <DefaultTextGlitch text={state[0].text} channel={state[0].channel} background_url={state[0].background_url}/>
        </div>
        )
}else if(state[0].glitchtype === "DefaultGlitch"){
    return (
        <div>
            <DefaultGlitch/>
        </div>
        )
}else{
    return (<div>End</div>)
}
/*


channel 1 font text channel num 
chan2
chan3

<DefaultGlitch text={"Look behind you"} >






*/





    // if(channel === "1"){
    //     return (
    //         <div>

    //         </div>
    //     )
    // }elif
    // return (
    //     <div>
            
    //     </div>
    // )
}
