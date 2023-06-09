import React , { useState } from 'react';
import axios from 'axios';


const RegisterPage = ({ history })=> {
    const [user,setUser]=useState({
        firstName:"",lastName:"",email:"",password:""})
        const handlChange = ({currentTarget}) =>{
            const { name, value} = currentTarget;
            setUser({...user, [name]: value})
            }
            const handlSubmit = async event => {
                event.preventDefault();
               
                try {
                    const response= await axios.post("https://localhost:8000/api/users", user);
                    console.log(response);
                    history.replaceState('/login')
                    
                } catch (error) {
                    console.log(error.response);
                   
                }
               
            }
    return ( <> <h1>Inscription</h1> 
        <form onSubmit={handlSubmit}>
        <div className="form-group"><label>firstName</label> <input className="form-control " onChange={handlChange} value={user.firstName} type="text" name="firstName" /></div><br/>
        <div className="form-group"><label>lastName</label>  <input className="form-control " onChange={handlChange} value={user.lastName} type="text" name="lastName" /></div><br/>
        <div className="form-group"><label>Email</label>   <input className="form-control " onChange={handlChange} value={user.email}type="email" name="email" /></div><br/>
        <div className="form-group"><label>Password</label> <input className="form-control " onChange={handlChange} value={user.password}type="password" name="password" /></div><br/>
         <button type="submit" className="btn btn-success">s'inscrire</button>
        </form>
        </>);
}
 
export default RegisterPage;