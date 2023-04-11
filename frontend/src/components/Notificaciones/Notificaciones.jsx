import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CrearNotificacion from "./CrearNotificacion";
import Liner from "../interfaces/Liner";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

const Notificaciones = (props) => {
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    
    const notificacionesList = props.notificaciones;


    const handlerEliminarNotificacion = async (e) => {
    

        const notificacionItem = {
            id,
            titulo,
            descripcion
        };

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...notificacionItem.id
            }),
        };
        
        await fetch('http://localhost:8080/notificaciones', requestOptions);
        setId('');
        setTitulo('');
        setDescripcion('');
        window.location.href = '/notificaciones';
    }


    return (
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
            <Col>
                <Row>
                    <Liner />
                </Row>
                <Row>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto", textAlign: "center" }}>
                        <h2>NOTIFICACIONES:</h2>
                        <Container>
                            {notificacionesList.slice().reverse().map((notificacionItem) => (
                                <Col className="my-2" >
                                    <Card className="flex-fill">
                                        <Card.Body>
                                            <Card.Title>{notificacionItem.titulo}</Card.Title>
                                            <Card.Text>
                                                <Col key={notificacionItem.id}>
                                                    {notificacionItem.descripcion}
                                                </Col>
                                                
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            ))}

                        </Container>
                        <CrearNotificacion />
                    </div>
                </Row>
            </Col>
        </div>
    );
};

export default Notificaciones;

