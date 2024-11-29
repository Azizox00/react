
export const ajouter =(article) => {
    return{type:'ajouter',payload:article}
}

export const supprimer = (id) => {
    return {type:'supprimer',payload:id}
}

export const modifier = (article) => {
    return {type:'modifier',payload:article}
}