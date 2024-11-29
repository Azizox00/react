import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Ajouter from "./ajouter";
import Modifier from "./modifier";
export default function App5() {
    return(
        <div>
            <BrowserRouter>
            <nav >
                <Link to="/" >Home</Link>
                <Link to="/ajouter" >Ajouter</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ajouter" element={<Ajouter />} />
                <Route path="/modifier/:id" element={<Modifier />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}