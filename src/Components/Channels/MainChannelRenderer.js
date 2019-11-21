import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import DefaultTextGlitch from '../ThreeEffects/DefaultGlitch/DefaultTextGlitch'
import DefaultGlitch from '../ThreeEffects/DefaultGlitch/DefaultGlitch'
import ComicBookEffect from '../ThreeEffects/ComicBook/ComicBookEffect'
import ComicBookEffectText from '../ThreeEffects/ComicBook/ComicBookEffectText'
import CreepyLightText from '../ThreeEffects/CreepyLight/CreepyLightText'
import ComicBookNoGeo from '../ThreeEffects/ComicBook/ComicBookNoGeo'
export default function MainChannelRenderer() {
    const [state,setState] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
Axios.get("https://ourtvgame.herokuapp.com/api/adv/initialize")
.then((res) => {

    setState(res.data)
    setLoading(true)
}).catch((err) => {
    console.error(err)
})

    }, [])

    console.log(state)

if(loading===false){
    return(
        <div>
            Loading
        </div>
    )
}else if(state.glitchtype==="static"){
    return(
        <div>

            <DefaultGlitch background={state.background} text={state.text} channel={state.id} />
        </div>
    )
}else if(state.glitchtype ==="DefaultTextGlitch"){
return (
    <div>
        <DefaultTextGlitch background={state.background} text={state.text} channel={state.id}/>
    </div>
)
}else if (state.glitchtype === "ComicBook"){
    return(
        <div>
            <ComicBookEffect background={state.background} text={state.text} channel={state.id}/>
        </div>
    )
}else if(state.glitchtype === "ComicNoGeo"){
    return (
        <div>
            <ComicBookNoGeo background={state.background} text={state.text} channel={state.id}/>
        </div>
    )
}else if(state.glitchtype === "ComicBookText"){
    return (
        <div>
            <ComicBookEffectText background={state.background} text={state.text} channel={state.id}/>
        </div>
    )
}else if(state.glitchtype === "CreepyLightText"){
    return(
        <div>
            <CreepyLightText background={state.background} text={state.text} channel={state.id}/>
        </div>

    )
}

}



