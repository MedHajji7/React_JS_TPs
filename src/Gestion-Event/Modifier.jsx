import { useParams ,useNavigate } from "react-router-dom"
import React,{useState,useEffect} from "react"
import LiveClock from "./LiveClock";
import NavBar from "./NavBar"

export default function Modifier({events,setEvents}){
    const {id} = useParams()
    const navigate = useNavigate()

    const event = events[id-1]
    console.log(id)
    const [name ,setName] = useState('')
    const [dateTime ,setDateTime] = useState('')
    const [description ,setDescription] = useState('')
    const [lieu ,setLieu] = useState('')
    const [lien ,setLien] = useState('')
    
    useEffect(()=>{
       if(event){
        setName(event.name)
        setDateTime(event.date)
        setDescription(event.description)
        setLieu(event.location)
        setLien(event.url)
       }
    },[event]
    )
    const onEdit =(index, updatedEvent)=> {
        const newEvents = [...events]
        newEvents[index-1] = updatedEvent
        setEvents(newEvents)
        navigate("/")
    }


    const handelSubmit =(e)=> {
        e.preventDefault()
         
        const updatedEvent = {
            id : parseInt(id-1),
            name : name,
            date : dateTime,
            description : description,
            location : lieu,
            url : lien
        }
        onEdit(parseInt(id),updatedEvent)

        //console.log(parseInt(id))
        

    }


    return(<div>
    <NavBar />
    <LiveClock />
        <h1 style={{marginLeft:'5%'}}>Modifier Event</h1>

        <form onSubmit={handelSubmit} style={{marginLeft:'5%' , border:'solid '}}>
             <label>Nom de l'évenements</label><br/>
             <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
             <label>Date et heure</label><br/>
             <input type="datetime-local" value={dateTime} onChange={(e)=>{setDateTime(e.target.value)}} /><br/><br/>
             <label>Description</label><br/>
             <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} /><br/><br/>
             <label>Lieu</label><br/>
             <input type="text" value={lieu} onChange={(e)=>{setLieu(e.target.value)}} /><br/><br/>
             <label>Lien URL</label><br/>
             <input type="text" value={lien} onChange={(e)=>{setLien(e.target.value)}} /><br/><br/>
             <button type="submit">Modifier</button>
            </form>
    </div>)
}