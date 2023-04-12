import { Container, Col, Row, Button, Form } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import Liner from '../interfaces/Liner';
import { Link, useNavigation } from 'react-router-dom';


const Horarios = (props) => {
    const empleadoList = props.empleados;

    const handleCrearTrabajador = () => {
        window.location.href = '/horarios/';
    }

    // const handleRedireccionar = () => {
    //     const id = 123; // Prop que quieres pasar a la nueva ruta
    //     history.push(`/horarios/${id}`); // Redirecciona a la ruta con la prop id como parte de la URL
    //   }

    return (
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>
            <Col>
                <Row>
                    <Liner />
                </Row>
                <Row>
                    <h2 style={{justifyContent: "center", alignContent: "center", display: "flex"}}>Horarios de empleados</h2>
                </Row>
                <Row>
                    <div id="productosresultados" style={{ height: "68vh", overflowY: "auto", overflowX: "hidden" }}>
                        {empleadoList.slice().reverse().map((empleadosItem) => (
                            <Row className="my-2">
                            <Card className="flex-fill">
                                <Card.Body> 
                                    <div class="row">  
                                        <div class="col-11" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}> 
                                        {empleadosItem.rec ? <h2>{empleadosItem.nombreCompleto} ⭐</h2> : <h2>{empleadosItem.nombreCompleto }</h2>}
                                        </div>
                                        <div class="col-1">
                                        <Link to={`/horarios/${empleadosItem.id}`}>
                                            <button className="btn btn-primary" style={{marginBottom:"1vh"}}>Ver horario</button>
                                        </Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            
                            </Row>                     
                        ))}
                    </div>     
                </Row>
            </Col>
        </div>)
}

export default Horarios;