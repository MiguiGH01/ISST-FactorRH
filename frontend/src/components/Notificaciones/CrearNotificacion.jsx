import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Container, Col, Row, Card } from "react-bootstrap";



const CrearNotificacion = () => {
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

   

    const handlePublicarNotificacion = async (e) => {
        e.preventDefault();
        
        if (titulo.trim() && descripcion.trim()) {
            

            const notificacionItem = {
                id,
                titulo,
                descripcion
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...notificacionItem
                }),
            };
            
            await fetch('http://localhost:8080/notificaciones', requestOptions);
            setId('');
            setTitulo('');
            setDescripcion('');
            window.location.href = '/notificaciones';
        }
    };


    return (
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
            <Col>
                <Row>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto", textAlign: "center" }}>
                        <h2>Crear notificación:</h2>
                        <Container>

                            <Col className="my-2">
                                <Card className="flex-fill" style={{ margin: 15, height: 350, width: 1000 }}>
                                    <Card.Body>
                                        <Card.Title>Titulo:
                                            <input
                                                type="text"
                                                id="titulo"
                                                value={titulo}
                                                onChange={(e) => setTitulo(e.target.value)}
                                            />
                                        </Card.Title>
                                        <Card.Text>
                                            <Col >
                                                Descripcion:
                                            </Col>
                                            <input 
                                                id="descripcion"
                                                value={descripcion}
                                                onChange={(e) => setDescripcion(e.target.value)}
                                                style={{ margin: 15, height: 100, width: 800 }}
                                                />
                                            <Col >
                                                ID:
                                            </Col>
                                            <input
                                                type="text"
                                                id="id"
                                                value={id}
                                                onChange={(e) => setId(e.target.value)}
                                            />
                                        </Card.Text>
                                        <button type="submit" className="btn btn-secondary" style={{ marginBottom: "1vh" }} onClick={handlePublicarNotificacion}> Publicar Notificacion</button>

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