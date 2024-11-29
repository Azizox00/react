const initialState ={
    utilisateur :[
       
    ]
}
const reducer5 =(State = initialState,action)=>{
    switch (action.type) {
        case 'ajouter':
            return {...State,utilisateur:[...State.utilisateur,action.payload]}
        case 'supprimer':
            return {...State,utilisateur:[...State.utilisateur.filter((ut)=> ut.id !== action.payload)]}
        case 'modifier':
            return {...State,utilisateur:State.utilisateur.map((ut)=>ut.id === action.payload.id ? {...ut,...action.payload}:ut)}
        default:
            return State
    }
}
export default reducer5