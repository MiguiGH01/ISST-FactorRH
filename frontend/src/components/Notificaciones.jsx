import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Liner from "./Liner";


const Notificaciones = (props) => {
    
const notificacionesList = props.notificaciones;
    return (
        <div class="contenedor-flexbox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
               <Col>
                <Row>
                <Liner/>
                </Row>
                <Row>
                <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto", textAlign: "center"}}>
            <h2>NOTIFICACIONES:</h2>
            <Container>
                {notificacionesList.slice().reverse().map((notificacionItem) => (
                    <Col className="my-2">
                        <Card className="flex-fill">
                            <Card.Body>
                                <Card.Title>ID:{notificacionItem.id}</Card.Title>
                                <Card.Text>
                                    <Col key={notificacionItem.id}>
                                        Titulo:{notificacionItem.titulo}
                                    </Col>
                                    <Col key={notificacionItem.id}>
                                        Descripcion:{notificacionItem.descripcion}                    
                                    </Col>
                                </Card.Text>
                            </Card.Body> 
                        </Card>
                    </Col>
                ))}
            
            </Container>
            </div>
            </Row>
            </Col>
        </div>
    );
};

export default Notificaciones;

