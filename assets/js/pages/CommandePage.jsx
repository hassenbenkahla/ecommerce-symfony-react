import React , { useState , useEffect} from 'react';
import axios from "axios"
import { Link } from "react-router-dom";
const CommandePage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
     //fetch address
     const fetchOrders = async () => {
      if (orders.length > 0) {
          return; // Les adresses sont déjà récupérées, retourner sans effectuer une nouvelle requête
        }
      try {
          const data = await axios.get("https://localhost:8000/api/orders").then(response => response.data["hydra:member"]);
          setOrders(data);
          setIsLoading(false);
      } catch (error) {
          console.log(error.response)
      }
  }
  useEffect(()=>{
    fetchOrders();
    
},[]);
    return ( <><h1>Mes commandes</h1>
        c'est dans cet espace que vous allez pouvez gérer vos commande <br/>
<Link to="/acount"> retour</Link>



<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">passée le</th>
      <th scope="col">livreur</th>
      <th scope="col">délivré a </th>
      <th scope="col">total</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {isLoading ? (
              <p >Loading...</p>
            ) : (orders.map((order)=> (

  <tr key={order.id}  className="table-active">
     
      <td>{order.createdAt}</td>
            <td>nom {order.carrierName} ,prix: {order.carrierPrice} DT</td> 
            <td>{order.delivery}</td>
     <td>{order.total}</td>
      <td><a href="">Voir ma commande</a></td>
 
        
    </tr>
    ))
    )}

  </tbody>
</table>
</> );
}
 
export default CommandePage;