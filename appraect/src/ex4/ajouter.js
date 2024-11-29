import { useSelector, useDispatch } from "react-redux";
import { ajouter } from "./action";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Ajouter() {
    const lastid = useSelector(data => data.note.length + 1);
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const [titre, settitre] = useState('');
    const [contenu, setcontenu] = useState('');
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                dispatch(ajouter({ id: lastid, titre: titre, contenu: contenu }))
                navigation('/')
            }}
            >
                <input type={"number"}  value={lastid} />
                <input type="text" onChange={(e) => settitre(e.target.value)} />
                <input type="number"  onChange={(e) => setcontenu(e.target.value)} />
                <button >ajouter</button>
            </form>
        </div>
    );
}