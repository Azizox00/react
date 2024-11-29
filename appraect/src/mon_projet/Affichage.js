import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
export default function Affichage(props) {
  const [afficha, setafficha] = useState(false); 
  useEffect(() => {
    const timer = setTimeout(() => setafficha(true), 1000); 
    return () => clearTimeout(timer); 
  }, []);
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card shadow-lg border-0 h-100 animate__animated animate__fadeIn"
        style={{ transition: "transform 0.2s" }}
      >
        <img
          style={{ width: "100%", height: "300px" }}
          src={props.product.image}
          className="card-img-top"
          alt={"erruer connexion"}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold text-truncate">
            {props.product.name}
          </h5>
          <p className="card-text text-muted">
            <span className="badge bg-info me-2">{props.product.gender}</span>
            Voiced By: <span className="text-secondary">{props.product.voicedBy}</span>
          </p>
          <Link to={`/caractere/${props.product.id}`} className="btn btn-primary btn-sm mt-3 animate__animated animate__pulse animate__infinite">  Plus d'info</Link>
        </div>
      </div>
    </div>
  );
}
