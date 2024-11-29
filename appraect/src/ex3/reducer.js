const initialstate = {
    produits: [
       
    ]
}

const reducer3 = (state = initialstate, action) => {
    switch (action.type) {
        case 'ajouter':
            return {...state,produits:[...state.produits,action.payload]}
        case 'supprimer':
            return {...state,produits:[...state.produits.filter((produit)=> produit.id !== action.payload)]}
        case 'modifier':
            return {...state,produits:state.produits.map((produit)=> produit.id === action.payload.id ? {...produit, ...action.payload} : produit)}
        default:
            return state
    }
};
export default reducer3;