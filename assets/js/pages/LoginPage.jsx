import React ,{ useState }from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
const LoginPage = () => {
    const [credentials,setCredentials] = useState({
        username: "",password:""
    });
    const [error,setError]=useState("");
    const handlChange =(event) =>{
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;
        setCredentials({...credentials, [name]: value });
    }
    const handlSubmit = async event => {event.preventDefault();
        try {  
        const token=   await axios.post('https://localhost:8000/api/login_check', credentials)
           .then(response => response.data.token);
           setError("");
           localStorage.setItem("authToken", token);
           axios.defaults.headers["Authorization"]="Bearer " + token ;
        } catch (error) {
            
            setError("aucun compte nbe posséde cette adresse ou alors les information ne correspond pas")
        }

   };
    return (<> <h1>Login</h1> 
    <form onSubmit={handlSubmit} >
    <div className="form-group"><label>username</label> <input value={credentials.username} onChange={handlChange} className="form-control " type="email" name="username" /></div><br/>
    <div className="form-group"><label>password</label> <input value={credentials.password} onChange={handlChange} className="form-control " type="password" name="password" /></div><br/>
    <button type="submit" className="btn btn-success">je me connecte</button>
    </form>
    <hr/>
    <Link to="/register" className="btn btn-primary"> créer une compte</Link>
       </> );
}
 
export default LoginPage;