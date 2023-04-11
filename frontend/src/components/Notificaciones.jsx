import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Liner from "./Liner";
import CrearNotificacion from "./CrearNotificacion";

const Notificaciones = (props) => {

    const handleCrearNotificacion = () => {
        window.location.href = '/CrearNotificacion';
    }

    const notificacionesList = props.notificaciones;
    return (
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
            <Col>
                <Row>
                    <Liner />
                </Row>
                <Row>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto", textAlign: "center" }}>
                        <h2>NOTIFICACIONES:</h2>
                        <Container>
                            <button type="submit" className="btn btn-secondary" style={{ marginBottom: "1vh" }} onClick={handleCrearNotificacion}> Crear Notificacion</button>
                            {notificacionesList.slice().reverse().map((notificacionItem) => (
                                <Col className="my-2">
                                    <Card className="flex-fill">
                                        <Card.Body>
                                            <Card.Title>{notificacionItem.titulo}</Card.Title>
                                            <Card.Text>
                                                <Col key={notificacionItem.id}>
                                                    {notificacionItem.descripcion}
                                                </Col>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            ))}

                        </Container>
                        <CrearNotificacion />
                    </div>
                </Row>
            </Col>
        </div>
    );
};

export default Notificaciones;

