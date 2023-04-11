import { Container, Col, Row, Button, Form } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import Liner from './Liner';



const Horarios = (props) => {
    const trabajadorList = props.empleados

    return (
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
            <Col>
                <Row>
                    <Liner />
                </Row>
                <Row>
                    <h2>Horarios de empleados</h2>
                    <Container>
                        {trabajadorList.slice().reverse().map((trabajadorItem) => (
                            <Row className="my-2">
                                <Col key={trabajadorItem.email}>
                                    {trabajadorItem.nombre}
                                </Col>
                                <Col key={trabajadorItem.email}>
                                    Horario de entrada:{trabajadorItem.hora_entrada}
                                </Col>
                                <Col key={trabajadorItem.email}>
                                    Horario de salida:{trabajadorItem.hora_salida}
                                </Col>


                            </Row>
                        ))}
                    </Container>
                </Row>
            </Col>
        </div>)
}

export default Horarios;