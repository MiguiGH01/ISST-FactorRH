import { Container, Col, Row, Button, Form } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import Liner from './interfaces/Liner';



const Horarios = (props) => {
    const trabajadorList = props.empleados

    return (
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" , overflowY: "auto", overflowX: "hidden"}}>
            <Col>
                <Row>
                    <Liner />
                </Row>
                <Row>
                    <h2>Horarios de empleados</h2>
                            
                        {trabajadorList.slice().reverse().map((trabajadorItem) => (
                            <Row className="my-2">
                            <Card className="flex-fill">
                                <Card.Body> 
                                    <div class="row">  
                                        <div class="col-11"> 
                                            <Col key={trabajadorItem.email}>
                                                <h2>Nombre: {trabajadorItem.nombre}</h2>
                                            </Col>
                                            <Col key={trabajadorItem.email}>
                                                <p>Horario de entrada:{trabajadorItem.hora_entrada}</p>
                                            </Col>
                                            <Col key={trabajadorItem.email}>
                                                <p>Horario de salida:{trabajadorItem.hora_salida}</p>
                                            </Col>
                                        </div>
                                        <div class="col-1">
                                            <button type="submit" className="btn btn-primary" style={{marginBottom:"1vh"}}> Editar horario</button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            
                            </Row>
                            
                        ))}
                        
                </Row>
            </Col>
        </div>)
}

export default Horarios;