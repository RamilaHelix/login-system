import React from 'react'
import {Navigate} from 'react-router-dom'
import auth from '../auth'
export default function Profile() {
    console.log(auth.isAutheticated())

    if(!auth.isAutheticated())
    {
        return <Navigate to="/"/>
    }

    return (
        <div>
            Hello,  {auth.getuser()}
        </div>
    )
}
