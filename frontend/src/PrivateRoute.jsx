import React, {useContext, useEffect, useState} from 'react';
import {Outlet, Navigate} from 'react-router-dom'


import { LoginContext } from './App';

const PrivateRoute = ({children, ...rest}) => {
    // const storedUserLogged = localStorage.getItem('userLogged');
    const [userLogged, setUserLogged] = useContext(LoginContext)

    useEffect(() => {
        console.log("Usuario en local: " + userLogged);
      }, [userLogged]);


    return(
        userLogged !== "undefined" ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoute