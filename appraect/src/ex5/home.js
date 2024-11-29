import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { supprimer} from "./action";
export default function Home() {
    const dispatch = useDispatch();
    const utilisateurs = useSelector((data) => data.utilisateur);
    return (
        <>
            <div >
                    <table  border={1} >
   <tr>
       <th>id</th>
       <th>nom</th>
       <th>nomUtilisateur</th>
       <th>email</th>
       <th colSpan={2}>actions</th>
   </tr>
   {utilisateurs.map((utilisateur,i) => (
       <tr key={i}>
           <td>{utilisateur.id}</td>
           <td>{utilisateur.nom}</td>
           <td>{utilisateur.nomUtilisateur}</td>
           <td>{utilisateur.email}</td>
           <td>
               <button onClick={() => dispatch(supprimer(utilisateur.id))} >supprimer</button>
           </td>
           <td>
               <Link to={`/modifier/${utilisateur.id}`} >modifier</Link>
           </td>
       </tr>
 ))}
             </table>
            </div>
        </>
    );
}
