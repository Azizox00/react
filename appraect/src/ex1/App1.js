import Ajouter from "./Ajouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homme1 from "./Homme1";
import Modifier from "./Modifier";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
export default function App1() {
    return(
        <BrowserRouter>
        <Link to={"/"}>Homme</Link>
        <Link to={"/Ajouter"}>Ajouter</Link>
        <Routes>
            <Route path="/" element={<Homme1/>}/>
            <Route path="/Ajouter" element={<Ajouter/>}/>
            <Route path="/tach/:id" element={<Modifier/>}/>
        </Routes>
        </BrowserRouter>
    )
}