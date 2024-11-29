import { useDispatch, useSelector } from "react-redux";
import { supprimer } from "./action";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const [nom, setNom] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector((data) => data.contacts);
    const listeContacts = contacts.filter((contact) =>contact.nom.includes(nom));
    return (
        <>
            <div>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                </form>
            </div>
            </div>
            <div >
                {listeContacts.map((contact,i) => (
                    <ul key={i}>
                        <li>{contact.nom}</li>
                        <li>{contact.telephone}</li>
                        <li>{contact.email}</li>
                        <li>
                            <button onClick={() => dispatch(supprimer(contact.id))} >supprimer</button>
                            <Link to={`/ex2/modifier/${contact.id}`} >modifier</Link>
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
}
