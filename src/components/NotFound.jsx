import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <div>
        <h1>404 - Pagina Non Trovata</h1>
        <p>Spiacenti, la pagina che stai cercando non esiste.</p>
        <Link to="/">Torna alla Home</Link>
      </div>
    </main>
  );
}

export default NotFound;