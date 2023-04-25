import React from 'react';
import { useParams } from 'react-router-dom';
import Liner from "../Interfaces/Liner";
import Card from 'react-bootstrap/Card';
import { Container, Col, Row, Button } from "react-bootstrap";

const AusenciasEmpleados = (props) => {
    const { idBaja } = useParams(); // Accede a la ID desde props.match.params

    const idBajaNumero = parseInt(idBaja, 10);

    const empleadoList = props.empleados2;

    const empleado = props.empleados2.find(empleado => empleado.id === idBajaNumero);

    if (!empleado) {
        return <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>Empleado no encontrado</div>;
      }

    return (
    <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>
        <Row>
            <Liner/>
        </Row>
        <Row style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>
            <h2><b>{empleado.nombreCompleto}</b></h2> 
        </Row>
        <Row style={{ display: 'flex', flexWrap: 'wrap', overflowY: "auto", overflowX: "hidden" }}>
            <hr className="my-4"/>
            {empleado.horarios.map((horario, index) => (
            <div key={horario.id} style={{ flexBasis: '20%', padding: '1%'}}>
                    <Card key={horario.id} >
                        <Card.Body>
                                <div class='row' style={{marginLeft:"4vw"}}>
                                    <h4 style={{fontFamily:"fantasy"}}>{horario.fecha}</h4>
                                </div>
                                
                        </Card.Body> 
                    </Card>
                </div>
            ))}
        </Row>
    </div>
    )

}

export default AusenciasEmpleados;