import { useDispatch, useSelector } from "react-redux";
import { supprimer } from "./Slicetodos";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Homme1() {
  const tach = useSelector((data) => data.taches.taches);
  const dispatch = useDispatch();
  const [statue, setStatue] = useState("");

  const filtertache = () => {
    if (statue === "complete") {
      return tach.filter((t) => t.statue === "complete");
    }
    if (statue === "en cours") {
      return tach.filter((t) => t.statue === "en cours");
    }
    return tach; 
  };

  return (
    <>
      <form>
        Statue des taches:
        <label>ALL  <input type="radio" name="e" value="all" onChange={(e) => setStatue(e.target.value)}  /> </label>
        <label>  COMPLETE <input type="radio" name="e" value="complete" onChange={(e) => setStatue(e.target.value)}  /></label>
        <label> EN COURS <input   type="radio"   name="e"   value="en cours"   onChange={(e) => setStatue(e.target.value)} />
        </label>
        <br />
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>nom</th>
            <th>description</th>
            <th>statue</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtertache().map((t, i) => (
            <tr key={i}>
              <td>{t.id}</td>
              <td>{t.nom}</td>
              <td>{t.description}</td>
              <td>{t.statue}</td>
              <td>
                <button onClick={() => dispatch(supprimer(t.id))}>delete</button>
                <button>
                  <Link to={`/tach/${t.id}`}>modifier</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
