import React,{useRef,useEffect} from 'react'

export default function StaticGlitch() {
    const StaticRef = useRef()
    useEffect(() => {
 
    }, [StaticRef])
    return (
        <div>
            <div ref = {StaticRef}></div>
        </div>
    )
}
