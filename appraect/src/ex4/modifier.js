import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { modifier } from "./action";
export default function Modifier() {
    const {id}= useParams()
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const notes = useSelector(data => data.note);
    const note = notes.find((note) => note.id === parseInt(id));
    const [titre, settitre] = useState(note.titre);
    const [contenu, setcontenu] = useState(note.contenu);
    return (
        <div>
            <h1 >mise a jour note</h1>
            <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    dispatch(modifier({id : note.id, titre: titre, contenu: contenu}));
                    navigation('/');
                }}>
                <input type={"number"}  value={note.id}  />
                <input type="text" value={titre} onChange={(e) => settitre(e.target.value)} />
                <input type="text" value={contenu} onChange={(e) => setcontenu(e.target.value)} />
                <button  >modifier</button>
            </form>
        </div>
    );
}