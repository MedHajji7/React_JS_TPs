import { useEffect, useState } from "react"



export default function LiveClock(){
     
        const [time,setTime] = useState(new Date())

        useEffect(()=>{
          const intervalClock =
             setInterval(()=>{
                setTime(new Date())
             },1000)

             return ()=> clearInterval(intervalClock)
        },[])

    return(<>
        <center><span> <h2>Horloge en temps réel : {time.toLocaleTimeString()}</h2></span></center>
        <hr />
    </>)
}