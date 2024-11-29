
export const ajouter =(utilisateur) => {
    return{type:'ajouter',payload:utilisateur}
}

export const supprimer = (id) => {
    return {type:'supprimer',payload:id}
}

export const modifier = (utilisateur) => {
    return {type:'modifier',payload:utilisateur}
}