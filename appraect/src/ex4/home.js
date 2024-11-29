import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { supprimer, important } from "./action";
import { useState } from "react";

export default function Home() {
    const dispatch = useDispatch();
    const notes = useSelector((data) => data.note);
    const [filter, setFilter] = useState("toutes");

    const filternotes = notes.filter((note) => {
        if (filter === "important") {
            return note.important;
        } else if (filter === "non important") {
            return !note.important; }  });
    return (
        <section>
            <div >
                <h2>Liste des Notes</h2>
                <div>
                    <label>
                        <input type="radio"name="state"value="toutes"onChange={(e) => setFilter(e.target.value)}/>Toutes
                    </label>
                    <label >
                        <input type="radio" name="state" value="important" onChange={(e) => setFilter(e.target.value)}/>Important
                    </label>
                    <label >
                        <input type="radio" name="state" value="non important" onChange={(e) => setFilter(e.target.value)}/>Non Important
                    </label>
                </div>
                {filternotes.length === 0 ? (
                    <p>Null</p>
                ) : (
                    <table  border={1} >
                            <tr>
                                <th>id</th>
                                <th>titre</th>
                                <th>contenu</th>
                                <th>important</th>
                                <th colSpan={2}>actions</th>
                            </tr>
                            {filternotes.map((note,i) => (
                                <tr key={i}>
                                    <td>{note.id}</td>
                                    <td>{note.titre}</td>
                                    <td>{note.contenu}</td>
                                    <td>
                                    <button onClick={() => dispatch(important(note.id))} style={{color: note.important ? "green" : "red"}}>
                                        {note.important ? "Oui" : "Non"}</button>
                                    </td>
                                    <td>
                                        <button onClick={() => dispatch(supprimer(note.id))} >supprimer</button>
                                    </td>
                                    <td>
                                        <Link to={`/modifier/${note.id}`}  >modifier</Link>
                                    </td>
                                </tr>
                            ))}
                    </table>
                )}
            </div>
        </section>
    );
}
