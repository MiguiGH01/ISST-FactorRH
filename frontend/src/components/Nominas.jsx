import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const Nominas = (props) => {
    const trabajadorList = props.empleados
    return (
        <div class="contenedor-flexbox">
            <h2>Nómina de empleados</h2>
            <Container>
                {trabajadorList.slice().reverse().map((trabajadorItem) => (
                    <Row className="my-2">
                         <Col key={trabajadorItem.email}>
                            {trabajadorItem.nombre}
                        </Col>
                        <Col key={trabajadorItem.email}>
                            Nomina de empleado:{trabajadorItem.nomina}
                        </Col>
                    

                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default Nominas;