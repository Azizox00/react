export default function ajoutercaractere(caractere){
       return{ type:"Ajouter",payload:caractere}
}
export function supprimercaractere(caractere){
       return{ type:"Supprimer",payload:caractere}
}