import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Ajouter from "./Ajouter";
import Modifier from "./Modifier";
import ShowDetails from "./ShowDetails";

export default function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Nouvel An",
      date: "2025-01-01T00:00:00",
      description: "Célébration de la nouvelle année.",
      location: "Partout dans le monde",
      url: "https://www.example.com/nouvel-an",
    },
    {
      id: 2,
      name: "Anniversaire de Marie",
      date: "2024-12-25T12:00:00",
      description: "Fête pour célébrer l'anniversaire de Marie.",
      location: "Chez Marie, 123 Rue de Paris, France",
      url: "https://www.example.com/anniversaire-marie",
    },
    {
      id: 3,
      name: "Fête de la Musique",
      date: "2025-06-21T18:00:00",
      description: "Concerts et performances musicales en plein air.",
      location: "Dans les rues de Paris, France",
      url: "https://www.example.com/fete-musique",
    },
    {
      id: 4,
      name: "Festival du Film de Cannes",
      date: "2025-05-15T10:00:00",
      description: "Projection des meilleurs films du monde.",
      location: "Cannes, France",
      url: "https://www.example.com/festival-film-cannes",
    },
    {
      id: 5,
      name: "Salon de l'Auto de Genève",
      date: "2025-03-03T09:00:00",
      description:
        "Exposition des derniers modèles de voitures et technologies automobiles.",
      location: "Palexpo, Genève, Suisse",
      url: "https://www.example.com/salon-auto-geneve",
    },
  ]);

  const LastId = events.length
  //console.log(LastId)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home events={events} setEvents={setEvents} />} />
          <Route path="/add" element={<Ajouter setEvents={setEvents} LastId={LastId}/>}></Route>
          <Route
            path="/edit/:id"
            element={<Modifier events={events} setEvents={setEvents} />}
          />
          <Route
            path="/details/:id"
            element={<ShowDetails events={events} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
