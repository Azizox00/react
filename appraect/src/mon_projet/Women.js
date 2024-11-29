import Affichage from "./Affichage"

export default function Women(props) {
    return (
        <div className="row">
         {
             props.caracteres.filter((product)=>product.gender=="Female").map((product,i)=>{
             return(
                 <Affichage product={product} key={i} />
             )
         })
         }
        </div>
       )
}
