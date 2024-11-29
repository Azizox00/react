import {useEffect,useState} from 'react'
import axios from 'axios'
import Home from './Home'
import Men from './Men'
import Women from './Women'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Nav from './Nav'
import Mycaractere from './Mycaractere'
import Notefound from './Notefound'
import Caractere from './Caractere'
export default function App22() {
    const [caracteres,setcaracteres]=useState([])
    useEffect(()=>{
        axios.get('https://bobsburgers-api.herokuapp.com/characters/')
        .then(res=>setcaracteres(res.data))
    },[])
  return (
    <>
        <BrowserRouter>
        <Nav /> 
            <Routes>
                <Route path='/' element={<Home caracteres={caracteres} />} />
                <Route path='/men' element={<Men caracteres={caracteres} />} />
                <Route path='/women' element={<Women caracteres={caracteres} />} />
                <Route path='*' element={<Notefound />} />
                <Route path='/mycaractere' element={<Mycaractere />} />
                <Route path='/caractere/:id' element={<Caractere caracteres={caracteres} />} />
            </Routes>
            
        </BrowserRouter>
    </>
  )
}
