import {useState } from "react"
import { useNavigate } from "react-router-dom"
import LiveClock from "./LiveClock";
import NavBar from "./NavBar"
export default function Ajouter({setEvents,LastId}) {
      const [name ,setName] = useState('')
      const [dateTime ,setDateTime] = useState('')
      const [description ,setDescription] = useState('')
      const [lieu ,setLieu] = useState('')
      const [lien ,setLien] = useState('')
      const navigate = useNavigate()

      console.log(name)
      const handelSubmit =(e)=> {
         e.preventDefault()
         const newEvent = {
            id : LastId+1,
            name : name,
            date : dateTime,
            description : description,
            location : lieu,
            url : lien
         }
         setEvents(prevEvents => [...prevEvents,newEvent])
         navigate("/")
      }
    
    return (
        <div>
            <NavBar />
            <LiveClock />
            
            <h1 style={{marginLeft:'5%'}}>Ajouter un événements</h1>

            <form onSubmit={handelSubmit} style={{marginLeft:'5%',border:'solid'}}>
             <label>Nom de l'évenements</label><br/>
             <input type="text" onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
             <label>Date et heure</label><br/>
             <input type="datetime-local" onChange={(e)=>{setDateTime(e.target.value)}} /><br/><br/>
             <label>Description</label><br/>
             <input type="text" onChange={(e)=>{setDescription(e.target.value)}} /><br/><br/>
             <label>Lieu</label><br/>
             <input type="text" onChange={(e)=>{setLieu(e.target.value)}} /><br/><br/>
             <label>Lien URL</label><br/>
             <input type="text" onChange={(e)=>{setLien(e.target.value)}} /><br/><br/>
             <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}