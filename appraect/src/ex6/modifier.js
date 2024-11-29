import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { modifier } from "./action";
export default function Modifier() {
    const {id}= useParams()
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const articles = useSelector(data => data.article);
    const article = articles.find((data) => data.id === parseInt(id));
    const [nom, setnom] = useState(article.nom); 
    const [prix, setprix] = useState(article.prix);
    
    return (
        <div>
            <h1 >modifier un article</h1>
            <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    dispatch(modifier({id : article.id, nom: nom, prix: prix}));
                    navigation('/');
                }}>
                <input type={"number"}  value={article.id}/>
                <input type="text"  value={nom} onChange={(e) => setnom(e.target.value)} />
                <input type="number"  value={prix} onChange={(e) => setprix(e.target.value)} />
                <button  >modifier</button>
            </form>
        </div>
    );
}