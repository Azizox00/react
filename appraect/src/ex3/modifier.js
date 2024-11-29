import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { modifier } from "./action";
export default function Modifier() {
    const {id}= useParams()
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const produits = useSelector(data => data.produits);
    const produit = produits.find((data) => data.id === parseInt(id));
    const [nom, setnom] = useState(produit.nom); 
    const [prix, setprix] = useState(produit.prix);
    const [quantite, setquantite] = useState(produit.quantite);
    console.log(produit);
    return (
        <div>
            <h1 >modifier produit</h1>
            <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    dispatch(modifier({id : produit.id, nom: nom, prix: prix, quantite: quantite}));
                    navigation('/');
                }}>
                <input type={"number"}  value={produit.id}  />
                <input type="text"  value={nom} onChange={(e) => setnom(e.target.value)} />
                <input type="number" value={prix} onChange={(e) => setprix(e.target.value)} />
                <input type="number"value={quantite} onChange={(e) => setquantite(e.target.value)} />
                <button >modifier</button>
            </form>
        </div>
    );
}