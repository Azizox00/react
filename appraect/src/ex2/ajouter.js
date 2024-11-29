import { useSelector, useDispatch } from "react-redux";
import { ajouter } from "./action";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Ajouter() {
    const lastid = useSelector(data => data.contacts.length + 1);
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const [nom, setnom] = useState('');
    const [telephone, settelephone] = useState('');
    const [email, setemail] = useState('');
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                dispatch(ajouter({ id: lastid, nom: nom, telephone: telephone, email: email }))
                navigation('/')
            }}
            >
                <input type={"number"}  value={lastid} />
                <input type="text" onChange={(e) => setnom(e.target.value)} />
                <input type="text"  onChange={(e) => settelephone(e.target.value)} />
                <input type="email"  onChange={(e) => setemail(e.target.value)} />
                <button >ajouter</button>
            </form>
        </div>
    );
}