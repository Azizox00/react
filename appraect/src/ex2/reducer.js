const initialState = {
    contacts:[
       ]   
}

 const reducer2 = (state = initialState, action) => {
    switch (action.type) {
        case 'ajouter':
            return {...state,contacts:[...state.contacts,action.payload]};
        case 'supprimer':
            return {...state,contacts:[...state.contacts.filter((contact) => contact.id !== action.payload)]};
        case 'modifier':
            return {...state,contacts:state.contacts.map((contact) => 
                contact.id === action.payload.id ? {...contact, ...action.payload} : contact)}
        default:
            return state;
    }
}

export default reducer2