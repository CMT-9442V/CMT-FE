import React,{useEffect,useState} from 'react'
import axios from 'axios'
export default function TestGet() {
const [state,setState] = useState([])
    useEffect(() => {
        axios.get(`https://ourtvgame.herokuapp.com/api/adv/channels`)
        .then((res) => {
            let data = (res.data);
            console.log(data)
            // let arr = []
            // let array= arr.push(data)
        //  let  newData = array.map(key =>{
        //         return (<div>key</div>)
        //     })

            setState(data)
            // let newData = data.map( key => {
            //     return(<div><p></p></div>)
            // });
            // setState(newData)
        }).catch((err) => {
            console.error(err)
        })
        },[])
    return (
        <div>
            
        </div>
    )
}
