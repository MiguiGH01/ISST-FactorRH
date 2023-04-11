import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";

const CrearNotificacion = () => {
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleCrearNotificacion = () => {
        window.location.href = '/CrearNotificacion';
    }


    return (
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
            <Col>
                <Row>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto", textAlign: "center" }}>
                        <h2>Crear notificación:</h2>
                        <Container>

                            <Col className="my-2">
                                <Card className="flex-fill" style={{ margin: 15, height: 300, width: 1000 }}>
                                    <Card.Body>
                                        <Card.Title>Titulo:
                                            <input ></input>
                                        </Card.Title>
                                        <Card.Text>
                                            <Col >
                                                Descripcion:
                                            </Col>
                                            <input style={{ margin: 15, height: 100, width: 800 }}></input>
                                            <Col >
                                                ID:
                                            </Col>
                                            <input ></input>
                                        </Card.Text>
                                        <button type="submit" className="btn btn-secondary" style={{ marginBottom: "1vh" }} onClick={handleCrearNotificacion}> Publicar Notificacion</button>

                                    </Card.Body>
                                </Card>
                            </Col>


                        </Container>
                    </div>
                </Row>
            </Col>
        </div>

    )
}



export default CrearNotificacion;