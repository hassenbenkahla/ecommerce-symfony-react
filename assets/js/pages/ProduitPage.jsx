import React , { useState , useEffect} from 'react';
import axios from "axios"
import { Link } from "react-router-dom";

const ProduitPage = (props) => {
    const [products, setProducts] = useState([]);
    const { id } = props.match.params;
    const fetchProduit = async id => {
        try {
            const data = await axios.get("https://localhost:8000/api/products/" + id).then(response => response.data);
            setProducts(data);
            
        } catch (error) {
            console.log(error.response)
        }
    }
    useEffect(() => {
        
        fetchProduit(id);
    }, [id]);

    const addToCart = (event) => {
        // Récupérer les produits du panier du localStorage
        event.preventDefault();
        const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
    
        const existingProductIndex = cartItems.findIndex(
            (item) => item.id === products.id
          );
        
          if (existingProductIndex !== -1) {
            // Si le produit existe déjà dans le panier, mettre à jour la quantité
            cartItems[existingProductIndex].quantity += 1;
          } else {
            // Sinon, ajouter le produit au panier avec une quantité de 1
            const newProduct = {
              id: products.id,
              title: products.name,
              img:products.illustration,
              price: products.price,
              quantity: 1,
            };
            cartItems.push(newProduct);
          }
    
        // Mettre à jour le panier dans le localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      };
    return (<>
     <h1>mon produit</h1>
        
<div className="row">

<div className="col-md-4">

<div  className="product-item text-center">
<img src={`uploads/${products.illustration}`}  className="img-fluid"/>
<h1>{products.title}</h1>
<h5>{products.subtitle}</h5>
<h4>{products.price}</h4>
<p> {products.description}</p>
</div>
</div>

</div>
<form onSubmit={addToCart}>
<button type="submit" className="btn btn-primary"  >ajouter au panier </button>
</form>
</>);
}
 
export default ProduitPage;