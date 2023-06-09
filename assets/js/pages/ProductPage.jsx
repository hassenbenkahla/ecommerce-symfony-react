import React, {useState ,  useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";

const ProductPage = (props) => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const fetchProduct = async () => {
        try {
            const data = await axios.get("https://localhost:8000/api/products").then(response => response.data["hydra:member"]);
            setProducts(data);
            
        } catch (error) {
            console.log(error.response)
        }
    }
    //au chargement du composant on va chercher les customers
    useEffect(() => {
        
        fetchProduct();
    }, []);
    const handleSearch = event =>{ 
        const value = event.currentTarget.value;
        setSearch(value);
    }
    
    return (<> 
    <h1>Nos produits</h1> 
    <div className="form-group">
        <input type="text" onChange={handleSearch} value={search}className="form-control" placeholder="Rechercher ..."/>
    </div>
    <div class="row m-4">
        {products.map(product => <div key={product.id} className=" product-item text-center col-md-4">
        <Link to={`/showproduit/${product.id}`}><img src={`uploads/${product.illustration}`}  className="img-fluid"/></Link>
<h5>{product.title}</h5>
<h6>{product.subtitle}</h6>
<h6>{product.price}</h6>
</div> )}
</div>
</>
);
}
export default ProductPage;