import { Container, Col, Row, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useState, useContext } from "react";
import { FixedSizeList as List } from "react-window";
import Liner from "../Interfaces/Liner";
import { Link,  } from 'react-router-dom';
import { LoginContext } from '../../App';


const Contactos = (props) => {
const trabajadorList = props.empleados;
const empleadosList = props.empleados2;
const [userLogged, setUserLogged] = useContext(LoginContext);

let rec;

try {
    rec = userLogged && JSON.parse(userLogged).rec; 
} catch (error) {
    console.log(`Error parsing JSON: ${error}`);
  }



    // Estado para almacenar el filtro actua
    const [filtro, setFiltro] = useState("");

    // Función para actualizar el filtro
    const handleFilterChange = (event) => {
        setFiltro(event.target.value);
    };

    // Función que crea empleados
    const handleCrearTrabajador = () => {
        window.location.href = '/crearTrabajador';
    }

    // Función que elimina empleados
    const eliminarEmpleado = async (id) => {
        const requestOptions = {
          method: 'DELETE',
        };
        await fetch(`http://localhost:8080/empleadosv2/${id}`, requestOptions);

        window.location.href = '/contactos';
      };

   /* // Función de filtrado
    const filteredItems = trabajadorList.filter((item) =>
        item.nombre.toLowerCase().includes(filtro.toLowerCase()) || item.email.toLowerCase().includes(filtro.toLowerCase()) 
    );
*/
    // Función de filtrado  v2
    const filteredEmpleados = empleadosList.filter((item) =>
    item.nombreCompleto.toLowerCase().includes(filtro.toLowerCase()) || item.correoElectronico.toLowerCase().includes(filtro.toLowerCase()) 
    );


    

    return (
    <div class="contenedor-flexbox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
        {rec 
        ? 
        <div class="contenedor-flexbox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>        
            <Row>
                <Liner/>
            </Row>
            <Row>
                <h2 id="catálogo" style={{justifyContent: "center", alignContent: "center", display: "flex"}}>Contactos de nuestros empleados</h2>
                <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
                    <div className="formulario">
                        <Row className="g-2 text-center" border="success">
                            <Col md >
                                <button type="submit" className="btn btn-primary" style={{marginBottom:"1vh"}} onClick={handleCrearTrabajador}> Añadir empleado</button>
                                <div className="funciones">
                                <input  type="text" id="filtro" placeholder="Filtrar por nombre o correo" value={filtro} onChange={handleFilterChange}
                                    style={{alignItems:'right', width: '30rem', marginBottom:"1vh"}}></input>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Row>
            <Row>
                <div id="productosresultados" style={{ height: "58vh", overflowY: "auto", overflowX: "hidden" }}>
                    {filteredEmpleados.slice().reverse().map((empleadosItem) => (
                        <Col md>
                            <Row className="my-2">
                                <Card className="flex-fill">
                                    <Card.Body>
                                        <div class="row">
                                                {empleadosItem.rec ? <h2>{empleadosItem.nombreCompleto} ⭐</h2> : <h2>{empleadosItem.nombreCompleto }</h2>}
                                                <hr className="my-4" />
                                                <div class="col-5">
                                                    <p><b>Correo Electrónico:</b> {empleadosItem.correoElectronico}</p>
                                                    <p><b>Telefono:</b> {empleadosItem.numeroTelefono}</p>
                                                </div>
                                                <div class="col-5">
                                                    <p><b>Departamento:</b> {empleadosItem.departamento}</p>
                                                    <p><b>Puesto:</b> {empleadosItem.puesto}</p>
                                                </div>
                                                <div class="col-1">    
                                                    <Link to={`/editarEmpleado/${empleadosItem.id}`}>
                                                        <button className="btn btn-primary" style={{marginBottom:"1vh"}}>Editar datos empleado</button>
                                                    </Link>
                                                </div>
                                                <div class="col-1">
                                                    <button className="btn btn-danger" style={{marginBottom:"1vh"}} onClick={() => eliminarEmpleado(empleadosItem.id)}>Eliminar datos empleado</button>
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
            <Liner/>
        </Row>
        <Row>
            <h2 id="catálogo" style={{justifyContent: "center", alignContent: "center", display: "flex"}}>Contactos de nuestros empleados</h2>
            <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
                <div className="formulario">
                    <Row className="g-2 text-center" border="success">
                        <Col md >
                            <div className="funciones">
                            <input  type="text" id="filtro" placeholder="Filtrar por nombre o correo" value={filtro} onChange={handleFilterChange}
                                style={{alignItems:'right', width: '30rem', marginBottom:"1vh"}}></input>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Row>
        <Row>
            <div id="productosresultados" style={{ height: "64vh", overflowY: "auto", overflowX: "hidden" }}>
                {filteredEmpleados.slice().reverse().map((empleadosItem) => (
                    <Col md>
                        <Row className="my-2">
                            <Card className="flex-fill">
                                <Card.Body>
                                    <div class="row">
                                            {empleadosItem.rec ? <h2>{empleadosItem.nombreCompleto} ⭐</h2> : <h2>{empleadosItem.nombreCompleto }</h2>}
                                            <hr className="my-4" />
                                            <div class="col-6">
                                                <p><b>Correo Electrónico:</b> {empleadosItem.correoElectronico}</p>
                                                <p><b>Telefono:</b> {empleadosItem.numeroTelefono}</p>
                                            </div>
                                            <div class="col-6">
                                                <p><b>Departamento:</b> {empleadosItem.departamento}</p>
                                                <p><b>Puesto:</b> {empleadosItem.puesto}</p>
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
            
                

    )
}
export default Contactos;
 
