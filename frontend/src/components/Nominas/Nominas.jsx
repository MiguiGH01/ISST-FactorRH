import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Liner from '../Interfaces/Liner';
import { useState } from "react";

const Nominas = (props) => {
    const trabajadorList = props.empleados;

    const [nominas, setNominas] = useState(trabajadorList.map(trabajador => trabajador.nomina))
    
    const sueldoCompleta = 2000;
    const sueldoMedia = 1000;

    const handleJornadaCompleta = (trabajadorItem) => {
        trabajadorItem.nomina = sueldoCompleta;
        setNominas(sueldoCompleta);
    }

    const handleJornadaMedia = (trabajadorItem) => {
        trabajadorItem.nomina = sueldoMedia
        setNominas(sueldoMedia);
    }

    return (
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
            <Row>
                <Liner />
            </Row>
            <Row>
                <h2 style={{justifyContent: "center", alignContent: "center", display: "flex"}}>Nómina de empleados</h2>
            </Row>
            <Row>
                <div id="productosresultados" style={{ height: "68vh", overflowY: "auto", overflowX: "hidden" }}>
                    {trabajadorList.slice().reverse().map((trabajadorItem) => (
                        <Col md >
                            <Row className="my-2" >
                                <Card className="flex-fill">
                                    <Card.Body>
                                        <h2>Nombre: {trabajadorItem.nombre}</h2>
                                        <hr className="my-4" />
                                        <p><b>Nomina de empleado:</b> {trabajadorItem.nomina} </p>
                                        <p><button className="btn btn-primary" onClick={() => handleJornadaCompleta(trabajadorItem)} style={{marginLeft: "10px", alignContent: "right", justifyContent: "right", textAlign: "right"}}>Jornada Completa</button>
                                            <button className="btn btn-primary" onClick={() => handleJornadaMedia(trabajadorItem)} style={{marginLeft: "10px", alignContent: "right"}}>Media Jornada</button></p>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                    ))}
                </div>
            </Row>
        </div>
    );
};

export default Nominas;