import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const Contactos = (props) => {
    const trabajadorList = props.empleados
    return (
        <div class="contenedor-flexbox">
            <h2>Contactos:</h2>
            <Container>
                {trabajadorList.slice().reverse().map((trabajadorItem) => (
                    <Row className="my-2">
                        <Col key={trabajadorItem.email}>
                            Nombre:{trabajadorItem.nombre}
                        </Col>
                        <Col key={trabajadorItem.email}>
                            Email:{trabajadorItem.email}
                        </Col>
                        <Col key={trabajadorItem.email}>
                            Teléfono:{trabajadorItem.telefono}
                        </Col>

                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default Contactos;