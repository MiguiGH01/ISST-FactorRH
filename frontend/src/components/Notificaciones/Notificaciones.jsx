import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CrearNotificacion from "./CrearNotificacion";
import Liner from "../Interfaces/Liner";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { LoginContext } from '../../App';

const Notificaciones = (props) => {
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [userLogged, setUserLogged] = useContext(LoginContext);
    const notificacionesList = props.notificaciones;

    let rec;

    try {
        rec = userLogged && JSON.parse(userLogged).rec; 
    } catch (error) {
        console.log(`Error parsing JSON: ${error}`);
    }

    const handleCrearNoticia = () => {
        window.location.href = '/publicarnotificacion';
    }

    // Función que elimina empleados
    const eliminarNotificacion = async (id) => {
        const requestOptions = {
            method: 'DELETE',
        };
        await fetch(`http://localhost:8080/notificaciones/${id}`, requestOptions);

        window.location.href = '/notificaciones';
        };

    return (
        <div class="contenedor-flexbox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
        {rec 
        ? 
        <div class="contenedor-flexbox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
            
                <Row>
                    <Liner />
                </Row>
                {/* <CrearNotificacion />   */}
                <Row>    
                    <h2 style={{justifyContent: "center", alignContent: "center", display: "flex"}}>NOTIFICACIONES:</h2>                                     
                    <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
                        <div className="formulario">
                            <Row className="g-2 text-center" border="success">
                                <Col md >
                                    <button type="submit" className="btn btn-primary" style={{marginBottom:"1vh"}} onClick={handleCrearNoticia}> Añadir notificación</button>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div id="noticias" style={{ height: "62vh", overflowY: "auto", overflowX: "hidden" }}>
                        {notificacionesList.slice().reverse().map((notificacionItem) => (
                            <Col md >
                                <Row className="my-2" >
                                    <Card className="flex-lg-fill">
                                        <Card.Body>
                                            <div class="row">
                                                <h2>{notificacionItem.titulo}</h2>
                                                <hr className="my-4" />
                                                <div class="col-11">
                                                    {notificacionItem.descripcion}
                                                </div>
                                                <div class="col-1">
                                                    <button className="btn btn-danger" style={{marginBottom:"1vh"}} onClick={() => eliminarNotificacion(notificacionItem.id)}>Eliminar notificación</button>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Row>
                            </Col>
                        ))}
                    </div>
                </Row>
               
            
        </div>
        :
        <div class="contenedor-flexbox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
            
        <Row>
            <Liner />
        </Row>
        {/* <VerNotificacion />   */}
        <Row>    
            <h2 style={{justifyContent: "center", alignContent: "center", display: "flex"}}>NOTIFICACIONES:</h2>                                     
            <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
                <div className="formulario">
             
                </div>
            </div>
        </Row>
        <Row>
            <div id="noticias" style={{ height: "62vh", overflowY: "auto", overflowX: "hidden" }}>
                {notificacionesList.slice().reverse().map((notificacionItem) => (
                    <Col md >
                        <Row className="my-2" >
                            <Card className="flex-lg-fill">
                                <Card.Body>
                                    <div class="row">
                                        <h2>{notificacionItem.titulo}</h2>
                                        <hr className="my-4" />
                                        <div class="col-11">
                                            {notificacionItem.descripcion}
                                        </div>
                                        
                                    </div>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                ))}
            </div>
        </Row>
       
        </div>
        }
</div>

    );
};

export default Notificaciones;

