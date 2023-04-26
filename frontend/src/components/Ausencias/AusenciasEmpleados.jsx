import React from 'react';
import { useParams } from 'react-router-dom';
import Liner from "../Interfaces/Liner";
import Card from 'react-bootstrap/Card';
import { Container, Col, Row, Button } from "react-bootstrap";
import FormularioAusencia from './FormularioAusencia';

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
            {empleado.ausencias.map((ausencia, index) => (
            <div key={ausencia.id} style={{ flexBasis: '20%', padding: '1%'}}>
                    <Card key={ausencia.id} >
                        <Card.Body>
                        
                                <div class="row">
                                    <div class="col-8">
                                    <p><b>Fecha inicio:</b>  </p>
                                    <p><b>Fecha fin:</b></p>
                                    <p><b>Titulo:</b></p>
                                    <p><b>descripcion:</b></p>
                                    <p><b>tipo de aus:</b></p>
                                </div>
                                <div class="col-4">
                                    <p>{ausencia.fechaInicio}</p>
                                    <p>{ausencia.fechaFin}</p>
                                    <p>{ausencia.titulo}</p>
                                    <p>{ausencia.descripcion}</p>
                                    <p>{ausencia.aus}</p>
                                </div>
                            </div>
                                
                        </Card.Body> 
                    </Card>
                </div>
            ))}
        </Row>
        <FormularioAusencia/>
    </div>
    )

}

export default AusenciasEmpleados;