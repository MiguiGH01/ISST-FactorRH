import { Container, Col, Row, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import { FixedSizeList as List } from "react-window";
import Liner from "../interfaces/Liner";

const Contactos = (props) => {
const trabajadorList = props.empleados;

    // Estado para almacenar el filtro actua
    const [filtro, setFiltro] = useState("");

    // Función para actualizar el filtro
    const handleFilterChange = (event) => {
        setFiltro(event.target.value);
    };

    const handleCrearTrabajador = () => {
        window.location.href = '/crearTrabajador';
    }

    // Función de filtrado
    const filteredItems = trabajadorList.filter((item) =>
        item.nombre.toLowerCase().includes(filtro.toLowerCase()) || item.email.toLowerCase().includes(filtro.toLowerCase()) 
    );

    return (
        <div class="contenedor-flexbox" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
            <Row>
                <Liner/>
            </Row>
            <h2 id="catálogo" style={{justifyContent: "center", alignContent: "center", display: "flex"}}>Contactos de nuestros trabajadores</h2>
            <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
                <Container >
                <div className="formulario">
                <Row className="g-2 text-center" border="success" style={{}}>
                    <Col md >
                        <button type="submit" className="btn btn-secondary" style={{marginBottom:"1vh"}} onClick={handleCrearTrabajador}> Añadir trabajador</button>
                        <div className="funciones">
                        <input  type="text" id="filtro" placeholder="Filtrar por nombre" value={filtro} onChange={handleFilterChange}
                            style={{alignItems:'right', width: '30rem', marginBottom:"1vh"}}></input>
                        </div>
                    </Col>
                 </Row>
                </div>
                </Container>
            </div>

            <ul>
                <div id="productosresultados" style={{ height: "56vh", overflowY: "auto", overflowX: "hidden" }}>
            {filteredItems.slice().reverse().map((trabajadorItem) => (
                <Row className="my-2">
                    <Card className="flex-fill">
                        <Card.Body>
                            <div class="row">
                                    <div class="col-11">
                                        <h2>Nombre: {trabajadorItem.nombre}</h2>
                                        <p>Email: {trabajadorItem.email}</p>
                                        <p>Teléfono: {trabajadorItem.telefono}</p>
                                    </div>
                                    <div class="col-1">
                                    <button type="submit" className="btn btn-success" style={{marginBottom:"1vh", marginTop:"4vh"}}> Editar trabajador</button>
                                    </div>
                                </div>
                        </Card.Body> 
                    </Card>
                </Row>
            ))}
                </div>
                </ul>
         </div>

    )
}
export default Contactos;
 
