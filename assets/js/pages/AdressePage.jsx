import React , { useState , useEffect} from 'react';
import axios from "axios"
import { Link } from "react-router-dom";
const AdressePage = () => {
  const [addresses, setAdresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
     //fetch address
     const fetchAdress = async () => {
      if (addresses.length > 0) {
          return; // Les adresses sont déjà récupérées, retourner sans effectuer une nouvelle requête
        }
      try {
          const data = await axios.get("https://localhost:8000/api/addresses").then(response => response.data["hydra:member"]);
          setAdresses(data);
          setIsLoading(false);
      } catch (error) {
          console.log(error.response)
      }
  }
  useEffect(()=>{
    fetchAdress();
    
},[]);
    return ( <> 
    <a href="#" ><button className="btn btn-info">Ajouter une adresse</button></a>
<h1>Mes adresse </h1>
<Link to="/acount"> retour</Link>
{isLoading ? (
              <p >Loading...</p>
            ) : (
              addresses.map((address) => (
  
  <div key={address.id} className="card-body">
  <h4>{address.name}</h4>
  
               
            
    <p className="card-text">{address.city} </p>
    <p className="card-text">{address.phone} </p> 
    <a href="#" className="btn btn-primary"> Modifier</a>|<a href="#" className="btn btn-danger"> supprimer</a>
  </div> ))
            )}

</>);
}
 
export default AdressePage;