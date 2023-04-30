import React, {useContext, useEffect, useState} from 'react';
import './../../App.css';
import logo from './../../assets/Frame 1.svg';
import { LoginContext } from '../../App';
import { Link, Navigate  } from 'react-router-dom';

const Home = (props) => {
    const [userLogged, setUserLogged] = useContext(LoginContext);

    let nombreCompleto;

    try {
        nombreCompleto = userLogged && JSON.parse(userLogged).nombreCompleto; 
    } catch (error) {
        console.log(`Error parsing JSON: ${error}`);
      }
    

    const handleHorarios = () => {
        window.location.href = '/horarios';
    }

    const handleAusencias = () => {
        window.location.href = '/bajasyausencias';
    }        

    const handleNominas = () => {
        window.location.href = '/nominas';
    }

    const handleContactos = () => {
        window.location.href = '/contactos';
    }

    const handleNotificaciones = () => {
        window.location.href = '/notificaciones';
    }

    const logout = () => {
        setUserLogged()
    }

    useEffect(() =>{
        console.log(userLogged)
      }, [userLogged]);

    return (

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
            {userLogged !== "undefined" ?
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
                <img className="logo" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto", width: "150px", height: "150px" }} src={logo}/>
                <h1 style={{ textAlign: "center" }}>Bienvenido {nombreCompleto}</h1>
                <h6 style={{ textAlign: "center" }}>¿No eres tú?, pincha <Link to="/" onClick={logout}>aquí</Link></h6>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "space-around", margin: "auto" }}>

                    <button className="btn btn-primary" style={{ height: "10vh", width: "50vw", marginBottom: "1vh", marginTop: "2vh" }} onClick={handleHorarios}>Control de horarios</button>
                    <button className="btn btn-primary" style={{ height: "10vh", width: "50vw", marginBottom: "1vh" }} onClick={handleAusencias}>Control de ausencias</button>
                    <button className="btn btn-primary" style={{ height: "10vh", width: "50vw", marginBottom: "1vh" }} onClick={handleNominas}>Gestión de nómina</button>
                    <button className="btn btn-primary" style={{ height: "10vh", width: "50vw", marginBottom: "1vh" }} onClick={handleContactos}>Contactos</button>
                    <button className="btn btn-primary" style={{ height: "10vh", width: "50vw", marginBottom: "1vh" }} onClick={handleNotificaciones}>Notificaciones</button>
                </div>   
            </div>   
            :
            <Navigate to={`/`}/>
            }
        </div>

    )
}

export default Home;