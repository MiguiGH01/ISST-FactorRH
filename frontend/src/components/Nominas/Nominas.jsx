import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Liner from '../Interfaces/Liner';
import { useState } from "react";
import { Link, useNavigation } from 'react-router-dom';

const Nominas = (props) => {

    const empleadoList = props.empleados;
    
    // Estado para almacenar el filtro actua
    const [filtro, setFiltro] = useState("");

   
      // Función para actualizar el filtro
      const handleFilterChange = (event) => {
        setFiltro(event.target.value);
    };


    const filteredEmpleados = empleadoList.filter((item) =>
    item.nombreCompleto.toLowerCase().includes(filtro.toLowerCase()) || item.correoElectronico.toLowerCase().includes(filtro.toLowerCase()) 
    );


     /* 
    const [nominas, setNominas] = useState(empleadoList.map(trabajador => trabajador.nomina));

    const sueldoCompleta = 2000;
    const sueldoMedia = 1000;

    const handleJornadaCompleta = (trabajadorItem) => {
        trabajadorItem.nomina = sueldoCompleta;
        setNominas(sueldoCompleta);
    }
*/
/*
    const handleJornadaMedia = (trabajadorItem) => {
        trabajadorItem.nomina = sueldoMedia
        setNominas(sueldoMedia);
    }*/

    return (
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
            <Row>
                <Liner />
            </Row>
            <Col>
            <Row>
                <h2 style={{justifyContent: "center", alignContent: "center", display: "flex"}}>Nómina de empleados</h2>
                <div className="funciones" style={{justifyContent: "center", alignContent: "center", display: "flex"}}>
                    <input  type="text" id="filtro" placeholder="Filtrar por nombre o correo" value={filtro} onChange={handleFilterChange}
                    style={{alignItems:'right', width: '30rem', marginBottom:"1vh"}}></input>
                </div>
            </Row>
            </Col>
            <Row>
                <div id="productosresultados" style={{ height: "68vh", overflowY: "auto", overflowX: "hidden" }}>
                    {filteredEmpleados.slice().reverse().map((empleadosItem) => (
                        <Col md >
                            <Row className="my-2" >
                                <Card className="flex-fill">
                                <Card.Body> 
                                    <div class="row">  
                                        <div class="col-11" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}> 
                                        {empleadosItem.rec ? <h2>{empleadosItem.nombreCompleto} ⭐</h2> : <h2>{empleadosItem.nombreCompleto }</h2>}
                                        </div>
                                        <div class="col-1">
                                        <Link to={`/nominas/${empleadosItem.id}`}>
                                            <button className="btn btn-primary" style={{marginBottom:"1vh"}}>Ver nómina</button>
                                        </Link>
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
    );
};

export default Nominas;


                /* <Card.Body>
                                        <h2>Nombre: {empleadosItem.nombre}</h2>
                                        <hr className="my-4" />
                                        <p><b>Nomina de empleado:</b> {empleadosItem.nomina} </p>
                                        <p><button className="btn btn-primary" onClick={() => handleJornadaCompleta(empleadosItem)} style={{marginLeft: "10px", alignContent: "right", justifyContent: "right", textAlign: "right"}}>Jornada Completa</button>
                                            <button className="btn btn-primary" onClick={() => handleJornadaMedia(empleadosItem)} style={{marginLeft: "10px", alignContent: "right"}}>Media Jornada</button></p>
                                    </Card.Body> */