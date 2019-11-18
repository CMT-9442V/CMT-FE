import React,{useRef,useEffect} from 'react'

export default function StaticGlitch() {
    const StaticRef = useRef()
    return (
        <div>
            <div ref = {StaticRef}></div>
        </div>
    )
}
