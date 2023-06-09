import React , { useState , useEffect} from 'react';
import axios from "axios"
import Modal from 'react-modal';

const RecapPage = () => {
    const [addresses, setAdresses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [livreurs, setLivreurs] = useState([]);
    const [selectedLivreurs, setSelectedLivreurs] = useState('');
    const [total, setTotal] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
    useEffect(()=>{
        fetchAdress();
        fetchLivreur();
        calculateTotal()
    },[cartItems]);
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
    const calculateTotal = () => {
      let totalPrice = 0;
      cartItems.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
      setTotal(totalPrice);
    };
    //fetch livreur
    const fetchLivreur = async () => {
        if (livreurs.length > 0) {
            return; // Les adresses sont déjà récupérées, retourner sans effectuer une nouvelle requête
          }
        try {
            const data = await axios.get("https://localhost:8000/api/carriers").then(response => response.data["hydra:member"]);
            setLivreurs(data);
            setIsLoading(false);
       
        } catch (error) {
            console.log(error.response)
        }
    }
    const handleAddressChange = (event) => {
        setSelectedAddress(event.target.value);
      };
      const handleLivreurChange = (event) => {
        setSelectedLivreurs(event.target.value);
      };
    return (<> 
        <h1>je passe ma commande</h1>
<div className="row">
<div className="col-md-6">
<h2> choisir mon adresse de livraison</h2><br />
<div className="form-group">
<select className="form-select" value={selectedAddress} onChange={handleAddressChange}>
            <option value="">Sélectionner une adresse</option>
            {isLoading ? (
              <option disabled>Loading...</option>
            ) : (
              addresses.map((address) => (
                <option key={address.id} value={address.id}>
                  {address.name}, {address.city}, {address.phone}
                </option>
              ))
            )}
          </select>
          </div>
<hr/>
<h2> choisir mon livreur</h2>
<div className="form-group">
<select className="form-select" value={selectedLivreurs} onChange={handleLivreurChange}>
            <option value="">Sélectionner une livreur</option>
            {isLoading ? (
              <option disabled>Loading...</option>
            ) : (
                livreurs.map((livreur) => (
                <option key={livreur.id} value={livreur.id}>
                 Nom: {livreur.name}, prix: {livreur.price} DT
                </option>
              ))
            )}
          </select>
</div>
</div>
<div className="col-md-6">
<b> Récape de ma commande</b>
<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Produit</th>
      <th scope="col">Title</th>
      <th scope="col">Quantité</th>
      <th scope="col">Prix</th>
      </tr>
  </thead>
  <tbody>
  {cartItems.map((item)=> <tr className="table-active">
      <th scope="row"><img src={`uploads/${item.img}`}  height="75px"/></th>
      <td>{item.title}</td>

     <td>  X{item.quantity}</td> 
      <td>{item.price}</td>
    </tr>)}
    </tbody>
</table>
<p> sous-Total :{total} DT</p>
<b> Total : {total} DT + prix de livraison</b>

</div>
</div>
<button type="submit" className="btn btn-success" id="checkout-button" onClick={() => setIsModalOpen(true)}>Chekout </button>
<Modal isOpen={isModalOpen}>
  <h2>La commande a été passée avec succès!!!!!</h2>
  <h4>Merci!!</h4>
  <button className=" btn btn-danger"onClick={() => setIsModalOpen(false)}>Fermer</button>
</Modal>

</>);
}
 
export default RecapPage;