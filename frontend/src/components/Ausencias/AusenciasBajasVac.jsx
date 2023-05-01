import { Container, Col, Row, Button, Form } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useEffect, useState, useContext } from "react";
import Liner from '../Interfaces/Liner';
import { Link, useNavigation, Navigate } from 'react-router-dom';
import { LoginContext } from '../../App';


const AusenciasBajasVac = (props) => {
    
    const empleadoList = props.empleados;

    // Estado para almacenar el filtro actua
    const [filtro, setFiltro] = useState("");
    const [userLogged, setUserLogged] = useContext(LoginContext);

    let rec;
    let id;
    let ausencias;

    try {
        rec = userLogged && JSON.parse(userLogged).rec; 
        id = userLogged && JSON.parse(userLogged).id; 
        ausencias = userLogged && JSON.parse(userLogged).ausencias; 
    } catch (error) {
        console.log(`Error parsing JSON: ${error}`);
      }


 // Función para actualizar el filtro
    const handleFilterChange = (event) => {
      setFiltro(event.target.value);
    };

    // Función de filtrado  v2
    const filteredEmpleados = empleadoList.filter((item) =>
    item.nombreCompleto.toLowerCase().includes(filtro.toLowerCase()) || item.correoElectronico.toLowerCase().includes(filtro.toLowerCase()) 
    );
   

  
    
        


    return (

        <div class="contenedor-flexbox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
            {rec
            ?
            
           <Col>
                <Row>
                    <Liner />
                </Row>
                <Col md>
                <Row>
                    <h2 style={{justifyContent: "center", alignContent: "center", display: "flex"}}>Control de ausencias, bajas y vacaciones de los trabajadores</h2>
                   
                    <div className="funciones" style={{justifyContent: "center", alignContent: "center", display: "flex"}}>
                         <input  type="text" id="filtro" placeholder="Filtrar por nombre o correo" value={filtro} onChange={handleFilterChange}
                             style={{alignItems:'right', width: '30rem', marginBottom:"1vh"}}></input>
                    </div>
                           
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
                                        <Link to={`/bajasyausencias/${empleadosItem.id}`}>
                                            <button className="btn btn-primary" style={{marginBottom:"1vh"}}>Ver</button>
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
            : 
            <Navigate to={`/bajasyausencias/${id}`}/>
           }
        </div>
    );
};

export default AusenciasBajasVac;