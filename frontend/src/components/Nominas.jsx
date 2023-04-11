import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Liner from './interfaces/Liner';

const Nominas = (props) => {
    const trabajadorList = props.empleados;

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
                                        <h2>{trabajadorItem.nombre}</h2>
                                        <hr className="my-4" />
                                        <p><b>Nomina de empleado:</b> {trabajadorItem.nomina}</p>
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