import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { supprimer } from "./action";
import { useState } from "react";
export default function Home() {
    const dispatch = useDispatch();
    const articles = useSelector(data => data.article);
    const totale = articles.reduce((totale, article) => totale += parseInt(article.prix) , 0);
    const [codeReduction, setCodeReduction] = useState("");
    const [montantReduit, setMontantReduit] = useState(totale);

    const codesValidations = { 
        "S15": 15,   
        "S30": 30   
    };

    function reduction(e) {
        e.preventDefault();
        const reduction = codesValidations[codeReduction.toUpperCase()];
        if (reduction) {
            const montant = (totale * reduction) / 100;
            setMontantReduit(montant);
        } else {
            alert("Code de réduction incorrect");
            setMontantReduit(0);
        }
    };
    return (
        <>
        <div >
            <div>
                <form onSubmit={reduction}>
                    <input type="text"  value={codeReduction}onChange={(e) => setCodeReduction(e.target.value)}/>
                    <button type="submit">Taper</button>
                </form>
            </div>
            <table  border={1}  >
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>prix</th>
                    <th>quantite</th>
                    <th colSpan={2}>actions</th>
                </tr>
                {articles.map((article,i) => (
                    <tr key={i}>
                        <td>{article.id}</td>
                        <td>{article.nom}</td>
                        <td>{article.prix}</td>
                        <td>
                            <button onClick={() => dispatch(supprimer(article.id))} >supprimer</button>
                        </td>
                        <td>   
                            <Link to={`/modifier/${article.id}`}  >modifier</Link>
                        </td>
                    </tr>
                ))}
                <tr >
                    <td colSpan={6}> le totale : {montantReduit}</td>
                </tr>
            </table>
        </div>
        </>
    );
}