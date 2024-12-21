import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import LiveClock from "./LiveClock";
export default function Home({ events ,setEvents}) {




    const onDelete =(e)=>{
        const id =e.target.value
        const eventsAfter =  events.filter((event)=> {
           return event.id !== parseInt(id)
        })
        setEvents(eventsAfter)
    }

  return (
    <div>


      <NavBar />
      <div><LiveClock /></div>

      <div>
        <h3>Liste des événements</h3>
        <table border={"1"}>
          <thead>
            <tr>
              <th>Nom de lévénements</th>
              <th>Date</th>
              <th colSpan={"3"}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event,index) => {
              return (
                <tr key={index}>
                  <td>{event.date}</td>
                  <td>{event.name}</td>
                  <td>
                    <button>
                      <Link to={`/details/${event.id}`}>Details</Link>
                    </button>
                  </td>
                  <td>
                    <button>
                      <Link to={`/edit/${event.id}`}>Modifier</Link>
                    </button>
                  </td>
                  <td>
                    <button onClick={onDelete} value={event.id}>
                    Supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
