import React from 'react';
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const handleLogout = () => {
    // Supprimer le token du stockage local
    localStorage.removeItem("authToken");
    // Effectuer d'autres actions de déconnexion si nécessaire
  };
    return ( 
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">e-commerce By hassen</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item active">
        <Link to="/produit" className="nav-link">nos produit</Link>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">qui somme nous</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item active">
          <Link to="/monpanier"><img src="../../img/shopping-cart.png"/></Link>
        </li>
        
        </ul>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
        <Link to="/acount" className="nav-link" className="btn btn-success">Mon Compte</Link>
        </li>
        <li className="nav-item active">
        <Link to="/login" className="btn btn-danger" onClick={handleLogout}>Déconnexion</Link>
        </li>
        <li className="nav-item active">
        <Link to="/login" className="nav-link" className="btn btn-success">Connexion</Link>
        </li>
        <li className="nav-item active">
        <Link to="/register" className="nav-link" className="btn btn-info">Inscription</Link>
        </li>        
        </ul>
  </div>
  </div>
</nav>
     );
}
export default Navbar;