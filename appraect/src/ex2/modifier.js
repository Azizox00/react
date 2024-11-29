import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { modifier } from "./action";
export default function Modifier() {
    const {id}= useParams()
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const contacts = useSelector(data => data.contacts);
    const contact = contacts.find((data) => data.id === parseInt(id));
    const [nom, setnom] = useState(contact.nom); 
    const [telephone, setelephone] = useState(contact.telephone);
    const [email, setemail] = useState(contact.email);
    return (
        <div>
            <h1 >modifier contact</h1>
            <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    dispatch(modifier({id : contact.id,nom : nom,telephone : telephone,email : email}));
                    navigation('/');

                }}>
                <input type={"number"}  value={contact.id} />
                <input type="text"  value={nom} onChange={(e) => setnom(e.target.value)} />
                <input type="text"  value={telephone} onChange={(e) => setelephone(e.target.value)} />
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
                <button  >modifier</button>
            </form>
        </div>
    );
}