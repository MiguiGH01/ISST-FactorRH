import React from 'react';
import { useParams } from 'react-router-dom';
import Liner from "../Interfaces/Liner";
import Card from 'react-bootstrap/Card';
import { Container, Col, Row, Button } from "react-bootstrap";
import FormularioAusencia from './FormularioAusencia';
import { Link, useNavigation } from 'react-router-dom';


const AusenciasEmpleados = (props) => {
    const { idBaja } = useParams(); // Accede a la ID desde props.match.params

    const idBajaNumero = parseInt(idBaja, 10);

    const empleadoList = props.empleados2;

    const empleado = props.empleados2.find(empleado => empleado.id === idBajaNumero);

    if (!empleado) {
        return <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>Empleado no encontrado</div>;
    }

    const handleGenerarSolicitud = () => {
        window.location.href = '/generarSolicitud/:idEmpleado';
    }

    const controlCategoria = (ausencia) => {
        if (ausencia.baj == true) {
            return <p><b>Categoria:</b> Baja</p>;
        } else if (ausencia.vac == true) {
            return <p><b>Categoria:</b> Vacaciones</p>;
        } else {
            return <p><b>Categoria:</b> Ausencia</p>;
        }
    }

    return (
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
            <Row>
                <Liner />
            </Row>
            <Row style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
                <h2><b>{empleado.nombreCompleto}</b></h2>
            </Row>
            <Row>
                <div id="productosresultados" style={{ height: "64vh", overflowY: "auto", overflowX: "hidden" }}>
                    {empleado.ausencias.map((ausencia, index) => (
                        <Col md>
                            <Row className="my-2">
                                <Card className="flex-fill">
                                    <Card.Body>
                                        <div class="row">
                                            <><h2>{ausencia.titulo}</h2><hr className="my-4" /><div class="col-3">
                                                <p><b>Fecha inicio:</b> {ausencia.fechaInicio}</p>
                                            </div>
                                                <div class="col-3">
                                                    <p><b>Fecha fin:</b> {ausencia.fechaFin}</p>
                                                </div>
                                                <div class="col-3">
                                                    {controlCategoria(ausencia)}
                                                </div>
                                                <p><b>Descripción:</b> </p>
                                                <Card.Text>
                                                    {ausencia.descripcion}
                                                </Card.Text></>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                    ))}
                </div>
            </Row>
        </div>
    )
}

export default AusenciasEmpleados;