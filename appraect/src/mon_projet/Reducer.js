const initialstate={
    mycaracteres:[{
        id:1,name:"Dottie Minerva",image:"https://bobsburgers-api.herokuapp.com/images/characters/1.jpg",note:5
    }]
}
const Reducer=(state=initialstate,action)=>{
    switch(action.type){
        case "Ajouter":
            return {...state,mycaracteres:[...state.mycaracteres,action.payload]}
        case "Supprimer":
            return {...state,mycaracteres:[...state.mycaracteres.filter((pan)=>{
                return pan.id!=parseInt(action.payload)
            })]}    
    default:
        return state
    }}
    export default Reducer