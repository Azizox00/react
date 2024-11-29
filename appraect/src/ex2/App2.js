import Home from "./home";
import Ajouter from "./ajouter";
import Modifier from "./modifier";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App2() {
    return (
        <div>
            <BrowserRouter>
            <nav >
                <Link to="/">Home</Link>
                <Link to="/ex2/ajouter" >Ajouter</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ex2/ajouter" element={<Ajouter />} />
                <Route path="/ex2/modifier/:id" element={<Modifier />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
}
