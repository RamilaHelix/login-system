import {useNavigate} from 'react-router-dom'
import React from 'react'
import auth from '../auth'

export default function Login() {

let userEmail =undefined;
let userPassword="";
const navigate = useNavigate();
    function submit(event){
        event.preventDefault();

     userEmail =  event.target.email.value;
     userPassword = event.target.password.value;

    
        if(!userEmail || !userPassword)
                return
        else {
            // if(localStorage.getItem("users") ===null)
            //     alert("not found")
            alert('ban');
          auth.login(userEmail);
          navigate('/profile');
        }
    }

    return (
        <form className="mt-5 container" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}
