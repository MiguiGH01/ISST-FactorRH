import React from 'react';
import './../../App.css';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import logo from './../../assets/Frame 1.svg';

const Home = (props) => {
    const empleados = props.empleados;

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

    /*const empleados = props.empleados.map((empleado) => {
        return <li>{empleado.nombre}</li>
    }) */

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>

            <img className="logo" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto", width: "150px", height: "150px" }} src={logo}/>

            <h1 style={{ textAlign: "center" }}>Bienvenido a la página principal</h1>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "space-around", margin: "auto" }}>

                <button className="btn btn-primary" style={{ height: "10vh", width: "50vw", marginBottom: "2vh", marginTop: "2vh" }} onClick={handleHorarios}>Control de horarios</button>
                <button className="btn btn-primary" style={{ height: "10vh", width: "50vw", marginBottom: "2vh" }} onClick={handleAusencias}>Control de ausencias</button>
                <button className="btn btn-primary" style={{ height: "10vh", width: "50vw", marginBottom: "2vh" }} onClick={handleNominas}>Gestión de nómina</button>
                <button className="btn btn-primary" style={{ height: "10vh", width: "50vw", marginBottom: "2vh" }} onClick={handleContactos}>Contactos</button>
                <button className="btn btn-primary" style={{ height: "10vh", width: "50vw", marginBottom: "2vh" }} onClick={handleNotificaciones}>Notificaciones</button>

            </div>
        </div>
    )
}

export default Home;