import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ajoutercaractere from "./Action";
import { useDispatch } from "react-redux";
export default function Caractere(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [ratings, setRatings] = useState({voix:0,comedie: 0,beaute:0});
  const { id } = useParams();
  useEffect(() => {
    const result = props.caracteres.find((p) => p.id === parseInt(id));
    setCharacter(result);
  }, [id, props.caracteres]);
  const noteFinale = (
    (ratings.voix + ratings.comedie + ratings.beaute) / 3
  ).toFixed(1);
  const handleRatingChange = (e) => {
    const { name, value } = e.target;
    setRatings({ ...ratings, [name]: parseInt(value) });
  };
  const handleConfirm = () => {
dispatch(ajoutercaractere({id:id,name:character.name,image:character.image,note:noteFinale}));
 navigate("/") };
  if (!character) {
    return <div>Chargement...</div>;
  }
  return (
    <div className="container my-4">
      <div className="card shadow-lg">
        <div className="card-header bg-dark text-light">
          <h3 className="text-center">{character.name}</h3>
        </div>
        <div className="card-body">
<div className="row">
  <div className="col-md-4 text-center">
    <img
      className="img-fluid rounded"
      src={character.image}
      alt="Erreur de connexion"
      style={{ maxWidth: "200px" }}
    />
  </div>
  <div className="col-md-8">
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
                    <th>Attribut</th>
                    <th>Valeur</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Genre</td>
                    <td>{character.gender}</td>
                  </tr>
                  <tr>
                    <td>Cheveux</td>
                    <td>{character.hair}</td>
                  </tr>
                  <tr>
                    <td>Occupation</td>
                    <td>{character.occupation}</td>
                  </tr>
                  <tr>
                    <td>Premier épisode</td>
                    <td>{character.firstEpisode}</td>
                  </tr>
                  <tr>
                    <td>Voix par</td>
                    <td>{character.voicedBy}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4">
            <h4>Évaluez ce personnage</h4>
            <form className="row g-3">
              <div className="col-md-4">
                <label htmlFor="voix" className="form-label">
                  Voix (sur 10)
                </label>
                <input
                  type="number"
                  id="voix"
                  name="voix"
                  className="form-control"
                  min="0"
                  max="10"
                  value={ratings.voix}
                  onChange={handleRatingChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="comedie" className="form-label">
                  Comédie (sur 10)
                </label>
                <input
                  type="number"
                  id="comedie"
                  name="comedie"
                  className="form-control"
                  min="0"
                  max="10"
                  value={ratings.comedie}
                  onChange={handleRatingChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="beaute" className="form-label">
                  Beauté (sur 10)
                </label>
                <input
                  type="number"
                  id="beaute"
                  name="beaute"
                  className="form-control"
                  min="0"
                  max="10"
                  value={ratings.beaute}
                  onChange={handleRatingChange}
                />
              </div>
            </form>
          </div>
          <div className="mt-4 text-center">
            <h4>Note Finale</h4>
            <p className="fs-4 fw-bold">{noteFinale}/10</p>
            <button className="btn btn-success" onClick={handleConfirm}>
              Confirmer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
