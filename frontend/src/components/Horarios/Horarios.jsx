import { Container, Col, Row, Button, Form } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Liner from '../Interfaces/Liner';
import { Link, useNavigation } from 'react-router-dom';
import { LoginContext } from '../../App';
import { useState, useContext } from "react";


const Horarios = (props) => {

    const empleadoList = props.empleados;

        // Estado para almacenar el filtro actua
    const [filtro, setFiltro] = useState("");
    const [userLogged, setUserLogged] = useContext(LoginContext);

    const empleadoLoggedId = userLogged ? JSON.parse(userLogged).rec : false;

    const rec = userLogged ? JSON.parse(userLogged).rec : false;


    const handleCrearTrabajador = () => {
        window.location.href = '/horarios/';
    };

     // Función para actualizar el filtro
     const handleFilterChange = (event) => {
        setFiltro(event.target.value);
    };

    // Función de filtrado  v2
    const filteredEmpleados = empleadoList.filter((item) =>
        item.id === empleadoLoggedId || item.nombreCompleto.toLowerCase().includes(filtro.toLowerCase()) || item.correoElectronico.toLowerCase().includes(filtro.toLowerCase()) 
    );


    // const handleRedireccionar = () => {
    //     const id = 123; // Prop que quieres pasar a la nueva ruta
    //     history.push(`/horarios/${id}`); // Redirecciona a la ruta con la prop id como parte de la URL
    //   }


    return (
        <div>
            {rec
            ?
            <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>
                <Col>
                    <Row>
                        <Liner />
                    </Row>
                    <Col md>
                    <Row>
                        <h2 style={{justifyContent: "center", alignContent: "center", display: "flex"}}>Horarios de empleados</h2>
                    
                        <div className="funciones" style={{justifyContent: "center", alignContent: "center", display: "flex"}}>
                            <input  type="text" id="filtro" placeholder="Filtrar por nombre o correo" value={filtro} onChange={handleFilterChange}
                                style={{alignItems:'right', width: '30rem', marginBottom:"1vh"}}></input>
                        </div>
                            
                    </Row>
                    </Col>   
                    <Row>
                        <div id="productosresultados" style={{ height: "62vh", overflowY: "auto", overflowX: "hidden" }}>
                            {filteredEmpleados.slice().reverse().map((horario) => (
                                <Row className="my-2">
                                <Card className="flex-fill">
                                    <Card.Body> 
                                        <div class="row">  
                                            <div class="col-11" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}> 
                                            <h2>{horario.fecha}</h2>
                                            </div>
                                            <div class="col-1">
                                            <Link to={`/horarios/${horario.id}`}>
                                                <button className="btn btn-primary" style={{marginBottom:"1vh"}}>Ver horario</button>
                                            </Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                
                                </Row>                     
                            ))}
                        </div>     
                    </Row>
                </Col>
            </div>
            :
            <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>
                <Col>
                    <Row>
                        <Liner />
                    </Row>
                    <Col md>
                    <Row>
                        <h2 style={{justifyContent: "center", alignContent: "center", display: "flex"}}>Tus horarios</h2>                            
                    </Row>
                    </Col>   
                    <Row>
                        <div id="productosresultados" style={{ height: "62vh", overflowY: "auto", overflowX: "hidden" }}>
                            {filteredEmpleados.slice().reverse().map((empleadosItem) => (
                                <Row className="my-2">
                                <Card className="flex-fill">
                                    <Card.Body> 
                                        <div class="row">  
                                            <div class="col-11" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}> 
                                            {empleadosItem.rec ? <h2>{empleadosItem.nombreCompleto} ⭐</h2> : <h2>{empleadosItem.nombreCompleto }</h2>}
                                            </div>
                                            <div class="col-1">
                                            <Link to={`/horarios/${empleadosItem.id}`}>
                                                <button className="btn btn-primary" style={{marginBottom:"1vh"}}>Ver horario</button>
                                            </Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                
                                </Row>                     
                            ))}
                        </div>     
                    </Row>
                </Col>
            </div>
            }
        </div>)
}

export default Horarios;