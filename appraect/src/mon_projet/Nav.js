import { Link } from "react-router-dom"
import { FaHamburger } from "react-icons/fa"
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="navbar-brand" to="#">
          <FaHamburger className="fs-2" /> 
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/men">Men</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/women">Women</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mycaractere">My caractere <i class="bi bi-cart-check"></i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
