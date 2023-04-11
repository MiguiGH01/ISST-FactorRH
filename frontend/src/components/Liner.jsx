import React from 'react';
import { Row, Col } from 'react-bootstrap'

const Liner = (props) => {


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

    const handleIMG = () => {
        window.location.href = '/home';
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
            <Row>
                <img className="logo" style={{ display: "flex", justifyContent: "left", alignContent: "centre", height: "90px", width: "100px" }} src={process.env.PUBLIC_URL + "logo192.png"} onClick={handleIMG} alt="logo" />
                <button className="btn btn-primary" style={{ margin: 15, height: 50, width: 250 }} onClick={handleHorarios}>Control de horarios</button>
                <button className="btn btn-primary" style={{ margin: 15, height: 50, width: 250 }} onClick={handleAusencias}>Control de ausencias</button>
                <button className="btn btn-primary" style={{ margin: 15, height: 50, width: 250 }} onClick={handleNominas}>Gestión de nómina</button>
                <button className="btn btn-primary" style={{ margin: 15, height: 50, width: 250 }} onClick={handleContactos}>Contactos</button>
                <button className="btn btn-primary" style={{ margin: 15, height: 50, width: 250 }} onClick={handleNotificaciones}>Notificaciones</button>
            </Row>
        </div>
    );
}

export default Liner;