import React from 'react';
import { Link } from 'react-router-dom';

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

    /*const empleados = props.empleados.map((empleado) => {
        return <li>{empleado.nombre}</li>
    }) */

    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
            <button className="btn btn-primary" style={{margin:50, height:100, width:600}} onClick={handleHorarios}>Control de horarios</button>
            <button className="btn btn-primary" style={{margin:50, height:100, width:600}} onClick={handleAusencias}>Control de ausencias</button>
            <button className="btn btn-primary" style={{margin:50, height:100, width:600}} onClick={handleNominas}>Gestión de nómina</button>
            <button className="btn btn-primary" style={{margin:50, height:100, width:600}} onClick={handleContactos}>Contactos</button>
        </div>
    )
}

export default Home;