import React from 'react'
import { Link } from "react-router-dom";
const ChangePasswordPage = () => {
    return (<> <h1>Modifier Password</h1>
    <Link to="/acount">retourner a mon compte </Link>

     <form >
        <div className="form-group"><label>Old password</label> <input className="form-control "  type="password" name="oldpassword" /></div><br/>
        <div className="form-group"><label>New Password</label>  <input className="form-control "  type="password" name="pnewpassword" /></div><br/>
        <div className="form-group"><label>Confirm New Password</label>   <input className="form-control " type="password" name="confirmPassword" /></div><br/>
         <button type="submit" className="btn btn-success">Confirm</button>
        </form>
    </> );
}
 
export default ChangePasswordPage;