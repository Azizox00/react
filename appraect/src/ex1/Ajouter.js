import { useState } from "react";
import { ajouter } from "./Slicetodos";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Ajouter() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [id,setid]=useState(0)
    const [nom,setnom]=useState("")
    const [description,setdescription]=useState("")
    const [statue,setstatue]=useState("")
    function ajoutertache(e) {
        e.preventDefault()
        const taches={id:parseInt(id),nom:nom,description:description,statue:statue}
        dispatch(ajouter(taches))
        navigate("/")
    }
    return(
        <form onSubmit={ajoutertache}>
        ID:    <input type="number" onChange={(e)=>setid(e.target.value)} /><br/>
        NOM:    <input type="text" onChange={(e)=>setnom(e.target.value)} /><br/>
        DESCRIPTION:    <input type="text" onChange={(e)=>setdescription(e.target.value)} /><br/>
        STATUE:  <input type="text" onChange={(e)=>setstatue(e.target.value)} /><br/>
            <button>ajouter</button>
        </form>
    )
}