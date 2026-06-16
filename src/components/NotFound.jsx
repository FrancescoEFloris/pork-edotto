import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="m-5">
      <div className="text-center">
        <h1 className="text-center fs-1"><span className="fw-bold fs-1">404 </span>- Pagina Non Trovata</h1>
        <p>Spiacenti, la pagina che stai cercando non esiste.</p>
        <Link to="/" className="btn btn-dark">Torna alla Home</Link>
      </div>
    </main>
  );
}

export default NotFound;