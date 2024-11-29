const initialState ={
    note :[
      
    ]
}

const reducer4 = (state = initialState, action) => {
    switch (action.type) {
        case 'ajouter':
            return {...state,note:[...state.note,action.payload]}
        case 'supprimer':
            return {...state,note:[...state.note.filter((note) => note.id !== action.payload)]}
        case 'modifier':
            return {...state,note:state.note.map((note) => note.id === action.payload.id ? {...note, ...action.payload} : note)}
        case 'important':
            return {...state,note:state.note.map((note) => note.id === action.payload ? {...note, important: !note.important} : note)}
        default:
            return state
    }
}
export default reducer4