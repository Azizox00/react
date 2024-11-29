import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { supprimercaractere } from "./Action";

export default function Mycaractere() {
  const dispatch = useDispatch();
  const mycaracteress = useSelector((data) => data.mycaracteres);
  return (
    <div className="container-fluid py-4">
      <h1 className="text-center mb-4">My Characters</h1>
      <div className="table-responsive">
        <table className="table table-hover table-striped table-bordered">
          <thead className="table-dark text-center">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Note</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mycaracteress.length > 0 ? (
              mycaracteress.map((mycaractere, i) => (<tr key={i} className="text-center align-middle"><td>
                <img className="img-fluid rounded"src={mycaractere.image}  alt="Erreur de connexion" 
                style={{ maxWidth: "100px" }} /> </td><td>{mycaractere.name}</td><td>{mycaractere.note}</td><td>        <button          className="btn btn-danger btn-sm"          onClick={() => dispatch(supprimercaractere(mycaractere.id))}        >          Supprimer        </button>      </td>    </tr>  ))) : (  <tr>    <td colSpan="4" className="text-center text-muted">      No characters available.    </td>  </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
