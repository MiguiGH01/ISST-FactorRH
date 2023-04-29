import React, {useContext, useEffect, useState} from 'react';
import {Outlet, Navigate} from 'react-router-dom'


import { LoginContext } from './App';

const PrivateRoute = ({children, ...rest}) => {
    const storedUserLogged = localStorage.getItem('userLogged');

    useEffect(() => {
        console.log("Usuario en local: " + storedUserLogged);
        const timeoutId = setTimeout(() => {}, 5000); // espera 5 segundos
        let bool = storedUserLogged !== "undefined"
        return () => clearTimeout(timeoutId); // limpia el timeout cuando se desmonte el componente
      }, [storedUserLogged]);


    return(
        storedUserLogged !== "undefined" ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoute