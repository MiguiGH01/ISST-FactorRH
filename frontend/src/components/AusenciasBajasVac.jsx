import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const AusenciasBajasVac = (props) => {
    const trabajadorList = props.empleados
    return (
        <div class="contenedor-flexbox">
            <h2>Control de ausencias, bajas y vacaciones</h2>
            <Container>
                {trabajadorList.slice().reverse().map((trabajadorItem) => (
                    <Row className="my-2">
                         <Col key={trabajadorItem.email}>
                            {trabajadorItem.nombre}
                        </Col>
                        <Col key={trabajadorItem.email}>
                            Ausencias:{trabajadorItem.ausencias}
                        </Col>
                        <Col key={trabajadorItem.email}>
                            Bajas:{trabajadorItem.bajas}
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

export default AusenciasBajasVac;