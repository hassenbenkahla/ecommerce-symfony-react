/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import React from 'react';
import ReactDOM from "react-dom";
// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import Navbar from "./js/components/Navbar"
import HomePage from "./js/pages/HomePage"
import ProductPage from "./js/pages/ProductPage"
import ProduitPage from "./js/pages/ProduitPage"
import Panier from "./js/pages/Panier"
import RecapPage from "./js/pages/RecapPage"
import RegisterPage from "./js/pages/RegisterPage"
import LoginPage from "./js/pages/LoginPage"
import AcountPage from "./js/pages/AcountPage"
import AdressePage from "./js/pages/AdressePage"
import CommandePage from "./js/pages/CommandePage"
import ChangePasswordPage from "./js/pages/ChangePasswordPage"


import { HashRouter, Switch, Route } from "react-router-dom"
// start the Stimulus application
import './bootstrap';
const App = () =>{
    return <HashRouter>
     <Navbar />
     <div className="container">
         <Switch> 
           <Route path="/login" component={LoginPage} /> 
           <Route path="/register" component={RegisterPage} /> 
           <Route path="/acount" component={AcountPage} /> 
           <Route path="/addresse" component={AdressePage} /> 
           <Route path="/mescommandes" component={CommandePage} />
           <Route path="/changepassword" component={ChangePasswordPage} />
            <Route path="/produit" component={ProductPage} />
            <Route path="/showproduit/:id" component={ProduitPage}/>
           <Route path="/monpanier" component={Panier} /> 
           <Route path="/recapcommande" component={RecapPage} /> 
            <Route path="/" component={HomePage}/>           
         </Switch>
     </div>
     </HashRouter>
}
const rootElement = document.querySelector('#app');
ReactDOM.render(<App/>,rootElement);