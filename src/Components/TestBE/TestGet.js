import React,{useEffect,useState} from 'react'

export default function TestGet() {
const [state,setState] = useState()
    useEffect(() => {
        
        axios.get(``)
        .then((res) => {
            let data = (res.data);
            console.log(data)

    
            let newData = data.map( key => {

                return(<div><p></p></div>)

            });
            setState(newData)
            

        }).catch((err) => {
            console.error(err)
        })

        },[])
    return (
        <div>
            {state}
        </div>
    )
}
