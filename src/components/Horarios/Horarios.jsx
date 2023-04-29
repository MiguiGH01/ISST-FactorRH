import { Container, Col, Row, Button, Form } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Liner from '../Interfaces/Liner';
import { Link, useNavigation } from 'react-router-dom';
import { LoginContext } from '../../App';
import { useEffect, useState, useContext } from "react";
import HorariosEmpleados from "./HorariosEmpleados";


const Horarios = (props) => {

    const empleadoList = props.empleados;

        // Estado para almacenar el filtro actua
    const [filtro, setFiltro] = useState("");
    const [userLogged, setUserLogged] = useContext(LoginContext);

    let rec;
    let id;
    let horarios;
    let nombreCompleto;

    try {
        rec = userLogged && JSON.parse(userLogged).rec; 
        id = userLogged && JSON.parse(userLogged).id; 
        horarios = userLogged && JSON.parse(userLogged).horarios; 
        nombreCompleto = userLogged && JSON.parse(userLogged).nombreCompleto; 
    } catch (error) {
        window.location.href = '/';
        console.log(`Error parsing JSON: ${error}`);
      }


    const handleCrearTrabajador = () => {
        window.location.href = '/horarios/';
    };

     // Función para actualizar el filtro
     const handleFilterChange = (event) => {
        setFiltro(event.target.value);
    };

    //Función de filtrado  v2
    const filteredEmpleados = empleadoList.filter((item) =>
        item.nombreCompleto.toLowerCase().includes(filtro.toLowerCase()) || item.correoElectronico.toLowerCase().includes(filtro.toLowerCase()) 
    );

    
    useEffect(() =>{
        console.log(horarios)
      }, [horarios]);


    return (
        <div class="contenedor-flexbox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
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
                    
                        <div className="funciones" style={{justifyContent: "center", alignContent: "center", display: "flex", margin: 2}}>
                            <input  type="text" id="filtro" placeholder="Filtrar por nombre o correo" value={filtro} onChange={handleFilterChange}
                                style={{alignItems:'right', width: '30rem', marginBottom:"1vh"}}></input>
                            <Link to={`/horarios/${id}`} style={{marginLeft: "1vw"}}>
                                <button className="btn btn-primary" style={{marginBottom:"1vh"}}>Ver tu horario</button>
                            </Link>
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
            :
            <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>
                <Row>
                    <Liner/>
                </Row>
                <Row style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>
                    <h2><b>{nombreCompleto}</b></h2> 
                </Row>
                <Row style={{ display: 'flex', flexWrap: 'wrap', overflowY: "auto", overflowX: "hidden" }}>
                    <hr className="my-4"/>
                    {horarios.map((horario, index) => (
                    <div key={horario.id} style={{ flexBasis: '20%', padding: '1%'}}>
                            <Card key={horario.id} >
                                <Card.Body>
                                        <div class='row' style={{marginLeft:"4vw"}}>
                                            <h4 style={{fontFamily:"fantasy"}}>{horario.fecha}</h4>
                                        </div>
                                        <div class="row">
                                            <div class="col-8">
                                            <p><b>Entrada:</b>  </p>
                                            <p><b>Entrada Definida:</b></p>
                                            <p><b>Salida:</b></p>
                                            <p><b>Salida Definida:</b></p>
                                            <p><b>Diferencia Tiempo:</b></p>
                                        </div>
                                        <div class="col-4">
                                            <p>{horario.horaEntrada}</p>
                                            <p>{horario.horaDefEntrada}</p>
                                            <p>{horario.horaSalida}</p>
                                            <p>{horario.horaDefSalida}</p>
                                            <p>00:00:00</p>
                                        </div>
                                    </div>
                                </Card.Body> 
                            </Card>
                        </div>
                    ))}
                </Row>
            </div>
            }
        </div>)
}

export default Horarios;