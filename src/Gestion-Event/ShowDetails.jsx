import { useParams ,Link} from "react-router-dom";

import NavBar from "./NavBar";

export default function ShowDetails({ events }){
    const {id} = useParams()
    const eventDetails = events[id-1]


  return (
    <>
      <NavBar />
      <div>
        <center>
          <h1>Details d'événement</h1>
          </center>

          <b>Nom :</b>
          <span>   {eventDetails.name}</span><br /><br />
          <b>Date : </b>
          <span>{eventDetails.date}</span><br /><br />
          <b>Descrispantion :</b>
          <span>{eventDetails.description}</span><br /><br />
          <b>Lieu :</b>
          <span>{eventDetails.location}</span><br /><br />
          <b>Lien :</b>
          <span><a href={eventDetails.url}>{eventDetails.url} </a></span><br /><br />
          <button><Link to={"/"}>Retour à la Liste</Link></button>
      </div>{" "}
    </>
  );
}
