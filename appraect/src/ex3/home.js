import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { supprimer } from "./action";
export default function Home() {
    const dispatch = useDispatch();
    const produits = useSelector(data => data.produits);
    const totale = produits.reduce((totale, produit) => totale += produit.prix * produit.quantite, 0);
    return (
        <>
        <div >
            <table  border={1}>
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>prix</th>
                    <th>quantite</th>
                    <th colSpan={2}>actions</th>
                </tr>
                {produits.map((produit,i) => (
                    <tr key={i}>
                        <td>{produit.id}</td>
                        <td>{produit.nom}</td>
                        <td>{produit.prix}</td>
                        <td>{produit.quantite}</td>
                        <td>
                            <button onClick={() => dispatch(supprimer(produit.id))} >supprimer</button>
                        </td>
                        <td>   
                            <Link to={`/modifier/${produit.id}`} style={{marginLeft:"10px"} } >modifier</Link>
                        </td>
                    </tr>
                ))}
                <tr >
                    <td colSpan={6}> totale de l'inventaire : {totale}</td>
                </tr>
            </table>
        </div>
        </>
    );
}