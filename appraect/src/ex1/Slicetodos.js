import { configureStore,createSlice } from "@reduxjs/toolkit";
const tachesSlice=createSlice({
    name:"taches",
    initialState:{
        taches:[
            {id:1,nom:"realisation",description:"realiser un shema fonctionel",statue:"en cours"},
            {id:2,nom:"codage",description:"front end",statue:"complete"}
        ]
    },
    reducers:{
        ajouter:(state,action)=>{
            return {...state,taches:[...state.taches,action.payload ]}
        },
        supprimer:(state,action)=>{
            return {...state,taches:[...state.taches.filter((tache)=>{
                return tache.id!==action.payload
            })]}
        },
        modifier:(state,action)=>{
           const tache=state.taches.find((t)=>{
            return t.id===action.payload.id
           })
           if(tache){
            tache.nom=action.payload.nom
            tache.description=action.payload.description
            tache.statue=action.payload.statue
           }
           return state
        }
    }
})
export const {ajouter,supprimer,modifier}=tachesSlice.actions
const store=configureStore({
    reducer:{
        taches:tachesSlice.reducer
    }
})
export default store