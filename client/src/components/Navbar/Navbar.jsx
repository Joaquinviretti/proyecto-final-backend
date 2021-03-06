import { NavLink } from 'react-router-dom'
import "./navbar.scss"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">Navbar</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/products"}
                className="nav-link">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/products/add"}
                className="nav-link">Add Product</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav >

  );
}

export default Navbar;