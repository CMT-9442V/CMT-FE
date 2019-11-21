import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import DefaultTextGlitch from '../ThreeEffects/DefaultGlitch/DefaultTextGlitch'
import DefaultGlitch from '../ThreeEffects/DefaultGlitch/DefaultGlitch'
import ComicBookEffect from '../ThreeEffects/ComicBook/ComicBookEffect'
import ComicBookEffectText from '../ThreeEffects/ComicBook/ComicBookEffectText'
import CreepyLightText from '../ThreeEffects/CreepyLight/CreepyLightText'
import ComicBookNoGeo from '../ThreeEffects/ComicBook/ComicBookNoGeo'
import styled from 'styled-components'
import './mcr.css'

const Div = styled.div`
z-index:69;
position: absolute;
right:0;
left:0;
width:100vw;
height:100vh;
border:10px;
`
// haha lol
export default function MainChannelRenderer() {
    const [state,setState] = useState({})
    const [loading, setLoading] = useState(false)
    
    const [move, setMove] = useState(undefined)


    useEffect(() => {
        Axios.get("https://ourtvgame.herokuapp.com/api/adv/initialize")
            .then((res) => {

                setState(res.data)
                setLoading(true)
            })
            .catch((err) => {
                console.error(err)
            })
            Axios.post("move",state)
            .then((res) => {
                setState(res.data)
                
                setLoading(true)
            })
        // Axios
        // .get("https://ourtvgame.herokuapp.com/api/adv/channels")
        // .then( res => {
        //     // console.log(res.data)
        //     setState(res.data[0])
        //     setLoading(true)
            
        // })
        // .catch(err => {
        //     console.log(err);
        //  })

    }, [])
    console.log(state,"hey im a state mate")
    useEffect(() => {
        setState({})
        if(move !== undefined){
        let values = {"direction":move,"id":state.channel}
        console.log(values,"this is values")
        Axios.post("https://ourtvgame.herokuapp.com/api/adv/move",values)
            .then((res) => {
                setState(res.data)
                setLoading(true)
                setMove(undefined)
            }).catch((err) => {
                console.error(err)
            })
        }
    // return () => {
    //     setState({})
    // };
    }, [move])
   
    const KeyHandler = (e) => {
        console.log("renderer", e.key)
        if(e.key === "ArrowUp"){
            setMove("u")
        }else if(e.key === "ArrowDown"){
            setMove("d")
        }

        console.log(move)
    // var keynum = getKey(e);
    //         if(keynum === UP) {
    //             //Move selection up
    //             setMove(
    //                 "u"
    //             )
    //             console.log(move,"this is out fsjoia;fjk;")
    //         }
            
    //         if(keynum === DOWN) {
    //             //Move selection down
    //             setMove(
    //                 "d"
    //             )
    //         }
            

}

    console.log(state, "Here is state")

    return(
        <div>
        {state.glitchtype==="static" ? (
            <div class={state.glitchtype!=="static" && "hidden"}>
            <Div onKeyDown={e => {KeyHandler(e)}} tabIndex="1">
                <DefaultGlitch background={state.background} text={state.text} channel={state.channel} audio={state.audio} />
            </Div>
            </div>
        ) :  state.glitchtype==="DefaultTextGlitch" ? (
            <div class={state.glitchtype!=="DefaultTextGlitch" && "hidden"}>
        <Div
            onKeyDown={e => {
              KeyHandler(e);
            }}
            tabIndex="1"
          >
              <DefaultTextGlitch background={state.background} text={state.text} channel={state.id} audio={state.audio}/>
          </Div></div>) : state.glitchtype === "ComicBook" ? (
              <div class={state.glitchtype!=="ComicBook" && "hidden"}>
                <Div
                      onKeyDown={e => {
                          KeyHandler(e);
                      }}
                      tabIndex="1"
                  >
                      <ComicBookEffect background={state.background} text={state.text} channel={state.id} audio={state.audio}/>
                  </Div>
                  </div>
          ) : state.glitchtype === "ComicNoGeo" ? (
            <div class={state.glitchtype!=="ComicNoGeo" && "hidden"}>
            <Div
            onKeyDown={e => {
                KeyHandler(e);
            }}
            tabIndex="1"
        >
            <ComicBookNoGeo background={state.background} text={state.text} channel={state.id} audio={state.audio}/>
        </Div>
        </div>
          ) :  state.glitchtype === "ComicBookText" ? (
            <div class={state.glitchtype!=="ComicBookText" && "hidden"}>
            <Div
            onKeyDown={e => {
                KeyHandler(e);
            }}
            tabIndex="1"
        >
            <ComicBookEffectText background={state.background} text={state.text} channel={state.id} audio={state.audio}/>
        </Div>
        </div>
          ) : state.glitchtype === "CreepyLightText" ? (
            <div class={state.glitchtype!=="CreepyLightText" && "hidden"}>
            <Div
            onKeyDown={e => {
                KeyHandler(e);
            }}
            tabIndex="1"
        >
            <CreepyLightText background={state.background} text={state.text} channel={state.id} audio={state.audio}/>
        </Div>
        </div>
          ) : null}
        </div>
    )

}



