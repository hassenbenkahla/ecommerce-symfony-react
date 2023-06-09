import React from 'react'
import { Link } from "react-router-dom";

const AcountPage = () => {
    return (<> <h1>Mon compte</h1>
        <p>bienvenu dans votre compte</p> 
        <Link to="/changepassword"  className="btn btn-info m-4">Changer mot de passe </Link>  <br/>
        <Link to="/addresse"  className="btn btn-info m-4">gérer mes adresse  </Link>  <br/>
        <Link to="/mescommandes"  className="btn btn-info m-4">Mes commande  </Link>  <br/>


</>);

        
}
 
export default AcountPage;