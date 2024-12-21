import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <center>
        <h1>Gestionnaire d'évenements</h1>
      </center>
      <nav>
        <center>
          <Link to={"/"} style={{ marginRight: "2%" }}>
            {" "}
            Listes des événements{" "}
          </Link>
          <Link to={"/add"}> Ajouter un événement</Link>
        </center>
      </nav>
      <hr />
    </>
  );
}
