import React from 'react'
import {Navigate} from 'react-router-dom'
import auth from '../auth'
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
   
    const {user,isAuthenticated} = useAuth0();
    const { logout } = useAuth0();

       if(!isAuthenticated)
       return <Navigate to="/"/>

        return (
        isAuthenticated &&(
            <div className="d-flex">
        
            <div>
            <img src={user.picture} alt={user.name} width="120" />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.email_verified}</p>
            <p>{user.sub}</p>
          </div>
          <button type="button"  className="btn  btn-outline-danger " onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out</button>
          </div>
    )
    );
    
}
