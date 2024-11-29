import Home from "./home";
import Ajouter from "./ajouter";
import Modifier from "./modifier";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App6() {
    return (
        <div>
            <BrowserRouter>
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/ajouter" >Ajouter</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ajouter" element={<Ajouter/>} />
                <Route path="/modifier/:id" element={<Modifier />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
}
