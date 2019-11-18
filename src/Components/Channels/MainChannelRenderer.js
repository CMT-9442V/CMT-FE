import React,{useState} from 'react'
import DefaultTextGlitch from '../ThreeEffects/DefaultGlitch/DefaultTextGlitch'
import DefaultGlitch from '../ThreeEffects/DefaultGlitch/DefaultGlitch'

export default function MainChannelRenderer() {
const [state, setstate] = useState([
    {
        text:"testing props text",
        glitchtype :"DefaultTextGlitch"
        
    }
])
console.log(state)
console.log(state[0].text,"state.text")
console.log(state.glitchtype)
if(state[0].glitchtype === "DefaultTextGlitch"){
    return (
        <div>
            <DefaultTextGlitch text={state[0].text}/>
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
