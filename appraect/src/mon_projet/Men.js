import Affichage from "./Affichage"

export default function Men(props) {
    return (
        <div className="row">
         {
             props.caracteres.filter((product)=>
                product.gender=="Male").map((product,i)=>{
             return(
                 <Affichage product={product} key={i} />
             )
         })
         }
        </div>
       )
}
