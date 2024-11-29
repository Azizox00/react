import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { modifier } from "./Slicetodos";
export default function Modifier() {
    const {id}=useParams()
    const  dispatch=useDispatch()
    const tach=useSelector(data=>data.taches.taches.find((tach)=>{
        return tach.id===parseInt(id)
    }))
    const [nom,setnom]=useState(tach.nom)
    const [description,setdescription]=useState(tach.description)
    const [statue,setstatue]=useState(tach.statue)
    function modifiertach(e) {
        e.preventDefault()
           const taches={id:parseInt(id),nom:nom,description:description,statue:statue}
           dispatch(modifier(taches))
    }
    return(
        <form onSubmit={modifiertach}>
        ID:    <input type="number" value={id} /><br/>
        NOM:    <input type="text"  value={nom} onChange={(e)=>setnom(e.target.value)} /><br/>
        DESCRIPTION:    <input type="text"  value={description} onChange={(e)=>setdescription(e.target.value)} /><br/>
        STATUE:  <input type="text" value={statue} onChange={(e)=>setstatue(e.target.value)} /><br/>
            <button>modifier</button>
        </form>
    )
}