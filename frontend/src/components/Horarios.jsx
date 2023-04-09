import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const Horarios = (props) => {
    const trabajadorList = props.empleados
    return (
        <div class="contenedor-flexbox">
            <h2>Horarios de empleados</h2>
            <Container>
                {trabajadorList.slice().reverse().map((trabajadorItem) => (
                    <Row className="my-2">
                        <Col key={trabajadorItem.email}>
                            Horario de entrada:{trabajadorItem.hora_entrada}
                        </Col>
                        <Col key={trabajadorItem.email}>
                            Horario de salida:{trabajadorItem.hora_salida}
                        </Col>
                        <Col key={trabajadorItem.email}>
                            Vacaciones:{trabajadorItem.vacaciones}
                        </Col>

                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default Horarios;