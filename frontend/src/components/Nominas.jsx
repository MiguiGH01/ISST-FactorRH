import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Liner from './Liner';

const Nominas = (props) => {
    const trabajadorList = props.empleados
    return (
        <div class="contenedor-flexbox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
            <div>
                <Col>
                <Row>
                <Liner/>
                </Row>
                <Row>
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
                </Row>
                </Col>
            
            </div>
            
        </div>
    );
};

export default Nominas;