import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import Liner from "../Interfaces/Liner";

const AusenciasBajasVac = (props) => {
    const trabajadorList = props.empleados;

    const [estadoVac, setEstadoVac] = useState('');
    const [estadoBaj, setEstadBaj] = useState('');
    const [estadoAus, setEstadoAus] = useState('');
    const [filtro, setFiltro] = useState("");

    const handleAumentarVac = (trabajadorItem) => {
        setEstadoVac(trabajadorItem.vacaciones++);
    }

    const handleAumentarBaj = (trabajadorItem) => {
        setEstadBaj(trabajadorItem.bajas++);
       
    }

    const handleAumentarAus = (trabajadorItem) => {
        setEstadoAus(trabajadorItem.ausencias++);
    }
    const handleDisminuirVac = (trabajadorItem) => {
        setEstadoVac(trabajadorItem.vacaciones--);
    }

    const handleDisminuirBaj = (trabajadorItem) => {
        setEstadBaj(trabajadorItem.bajas--);
       
    }

    const handleDisminuirAus = (trabajadorItem) => {
        setEstadoAus(trabajadorItem.ausencias--);
    }
    
         // Función para actualizar el filtro
 const handleFilterChange = (event) => {
        setFiltro(event.target.value);
 };
    
    // Función de filtrado  v2
    const filteredEmpleados = trabajadorList.filter((item) =>
    item.nombre.toLowerCase().includes(filtro.toLowerCase()) || item.email.toLowerCase().includes(filtro.toLowerCase()) 
    );

    return (

        <div class="contenedor-flexbox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
            
            <Col>
                <Row>
                    <Liner/>
                </Row>
                <Row>
                    <h2 style={{justifyContent: "center", alignContent: "center", display: "flex"}}>Control de ausencias, bajas y vacaciones</h2>
                    <div className="funciones" style={{justifyContent: "center", alignContent: "center", display: "flex"}}>
                                <input  type="text" id="filtro" placeholder="Filtrar por nombre o correo" value={filtro} onChange={handleFilterChange}
                                    style={{alignItems:'right', width: '30rem', marginBottom:"1vh"}}></input>
                                </div>
                </Row>
                <Row>
                    <div id="productosresultados" style={{ height: "68vh", overflowY: "auto", overflowX: "hidden" }}>
                        {filteredEmpleados.slice().reverse().map((trabajadorItem) => (
                            <Row className="my-2">
                                <Card className="flex-fill">
                                    <Card.Body>
                                        <div>
                                            <Col>
                                                <h2>Nombre: {trabajadorItem.nombre}</h2>
                                            </Col>
                                        </div>
                                        <div>
                                            <Col>
                                                <p>
                                                Ausencias:{trabajadorItem.ausencias}
                                                <button className="btn btn-primary" onClick={() => handleDisminuirAus(trabajadorItem)} style={{marginLeft: "50px", alignContent: "right", justifyContent: "right", textAlign: "right"}}>-1</button>
                                                <button className="btn btn-primary" onClick={() => handleAumentarAus(trabajadorItem)} style={{marginLeft: "50px", alignContent: "right"}}>+1</button>

                                                </p>
                                            </Col>
                                        </div>
                                        <div>
                                            <Col>
                                                <p>
                                                Bajas:{trabajadorItem.bajas}
                                                <button className="btn btn-primary" onClick={() => handleDisminuirBaj(trabajadorItem)} style={{marginLeft: "79px"}}>-1</button>
                                                <button className="btn btn-primary" onClick={() => handleAumentarBaj(trabajadorItem)} style={{marginLeft: "50px"}}>+1</button>
                                                </p>
                                            </Col>
                                        </div>
                                        <div>
                                            <Col>
                                                <p>
                                                Vacaciones:{trabajadorItem.vacaciones}
                                                <button className="btn btn-primary" onClick={() => handleDisminuirVac(trabajadorItem)} style={{marginLeft: "33px"}}>-1</button>
                                                <button className="btn btn-primary" onClick={() => handleAumentarVac(trabajadorItem)} style={{marginLeft: "50px"}}>+1</button>
                                                </p>
                                                </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Row>
                        ))}
                    </div>
                </Row>
            </Col>
        </div>
    );
};

export default AusenciasBajasVac;