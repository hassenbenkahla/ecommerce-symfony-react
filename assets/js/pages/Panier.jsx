import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Panier = () => {
  const [total, setTotal] = useState(0);
    const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
    useEffect(()=>{calculateTotal();},[cartItems]);
    const calculateTotal = () => {
      let totalPrice = 0;
      cartItems.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
      setTotal(totalPrice);
    };
    const decrementQuantity = (itemId) => {
      
        const updatedCartItems = cartItems.map((item) => {
          if (item.id === itemId) {
            // Décrémentez la quantité du produit
            item.quantity = Math.max(item.quantity - 1, 0);
          }
          return item;
        });
    
        // Mettez à jour le panier dans le localStorage
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        calculateTotal();
     
      };
      const addToCart = (products) => {
        // Récupérer les produits du panier du localStorage
        event.preventDefault();
        const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
    
        const existingProductIndex = cartItems.findIndex(
            (item) => item.id === products.id
          );
        
          if (existingProductIndex !== -1) {
            // Si le produit existe déjà dans le panier, mettre à jour la quantité
            cartItems[existingProductIndex].quantity += 1;
          }
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          calculateTotal();
          window.location.reload();
      };
      const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        calculateTotal();
        window.location.reload();
      };

    return ( <> <h1>Mon panier</h1>
<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Produit</th>
      <th scope="col">Title</th>
      <th scope="col">Quantité</th>
      <th scope="col">Prix</th>
      <th scope="col">TOtal</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {cartItems.map((item)=><tr className="table-active">
      <th scope="row">
      <img src={`uploads/${item.img}`}  height="75px"/>
      </th>
      <td>{item.title}
      </td>
     <td>  <button className="btn btn-info" onClick={() => addToCart(item)}> + </button>X{item.quantity}<button  className="btn btn-info"  onClick={() => decrementQuantity(item.id)}> - </button></td> 
      <td>{item.price}</td>
      <td>{item.price}X {item.quantity}</td>
        <td><button  onClick={() => removeFromCart(item.id)} className="btn btn-danger">supprimer</button></td>
    </tr>)}

  </tbody>
</table>
<hr />
<div>
<p> nombre total des produit : {cartItems.length}</p>
<p> total de mon panier {total}</p>
<Link to="/recapcommande" className="btn btn-success btn-block">Valider mon panier</Link>
</div>
 </> );
}
 
export default Panier;