const initialState ={
    article :[
        
    ]
}
const reducer5 =(State = initialState,action)=>{
    switch (action.type) {
        case 'ajouter':
            return {...State,article:[...State.article,action.payload]}
        case 'supprimer':
            return {...State,article:[...State.article.filter((art)=> art.id !== action.payload)]}
        case 'modifier':
            return {...State,article:State.article.map((art)=>art.id === action.payload.id ? {...art,...action.payload}:art)}
        default:
            return State
    }
}
export default reducer5