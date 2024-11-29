import { useSelector, useDispatch } from "react-redux";
import { ajouter } from "./action";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Ajouter() {
    const lastid = useSelector(data => data.article.length + 1);
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const [nom, setnom] = useState('');
    const [prix, setprix] = useState('');
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                dispatch(ajouter({ id: lastid, nom: nom, prix: prix}))
                navigation('/')
            }}
            >
                <input type={"number"}  value={lastid} />
                <input type="text" onChange={(e) => setnom(e.target.value)} />
                <input type="number"  onChange={(e) => setprix(e.target.value)} />
                <button >ajouter</button>
            </form>
        </div>
    );
}