import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import Liner from "./Liner"

const AusenciasBajasVac = (props) => {
    const trabajadorList = props.empleados;

    const [estadoVac, setEstadoVac] = useState(props.empleados.vacaciones);
    const [estadoBaj, setEstadBaj] = useState(props.empleados.bajas);
    const [estadoAus, setEstadoAus] = useState(props.empleados.ausencias);
    

    const handleAumentarVac = (trabajador) => {
        setEstadoVac(estadoVac + 1);
        trabajador.vacaciones++;
    }

    const handleAumentarBaj = (trabajador) => {
        setEstadBaj(estadoBaj + 1);
        trabajador.bajas++;
    }

    const handleAumentarAus = (trabajador) => {
        props.empleados.ausencias = props.empleados.ausencias + 1;
        trabajador.ausencias++;
    }
    
    return (
        <div class="contenedor-flexbox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
            <Col>
            <Row>
                <Liner/>
                </Row>
                <Row>
            <h2>Control de ausencias, bajas y vacaciones</h2>
            <Container>
                {trabajadorList.slice().reverse().map((trabajadorItem) => (
                    <Row className="my-2">
                        <Col>
                            {trabajadorItem.nombre}
                        </Col>
                        <Col>
                            Ausencias:{trabajadorItem.ausencias}
                        </Col>
                        <Col>
                            <button onClick={() => handleAumentarAus(trabajadorItem)}>+1</button>
                        </Col>
                        <Col>
                            Bajas:{trabajadorItem.bajas}
                        </Col>
                        <Col>
                            <button onClick={() => handleAumentarBaj(trabajadorItem)}>+1</button>
                        </Col>
                        <Col>
                            Vacaciones:{trabajadorItem.vacaciones}
                        </Col>
                        <Col>
                            <button onClick={() => handleAumentarVac(trabajadorItem)}>+1</button>
                        </Col>
                        

                    </Row>
                ))}
            </Container>
            </Row>
            </Col>
        </div>
    );
};

export default AusenciasBajasVac;