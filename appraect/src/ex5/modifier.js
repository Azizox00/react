import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { modifier } from "./action";
export default function Modifier() {
    const {id}= useParams()
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const utilisateurs = useSelector(data => data.utilisateur);
    const utilisateur = utilisateurs.find((utilisateur) => utilisateur.id === parseInt(id));
    const [nom, setnom] = useState(utilisateur.nom);
    const [nomUtilisateur, setnomUtilisateur] = useState(utilisateur.nomUtilisateur);
    const [email, setemail] = useState(utilisateur.email);
    return (
        <div>
            <h1 >modifier utilisateur</h1>
            <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    dispatch(modifier({id : utilisateur.id, nom: nom, nomUtilisateur: nomUtilisateur, email: email}));
                    navigation('/');
                }}>
                <input type={"number"}  value={utilisateur.id}  readOnly/>
                <input type="text"  value={nom} onChange={(e) => setnom(e.target.value)} />
                <input type="text" value={nomUtilisateur} onChange={(e) => setnomUtilisateur(e.target.value)} />
                <input type="email"  value={email} onChange={(e) => setemail(e.target.value)} />
                <button  >modifier</button>
            </form>
        </div>
    );
}