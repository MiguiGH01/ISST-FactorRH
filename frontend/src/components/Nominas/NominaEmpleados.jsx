import { useParams } from 'react-router-dom';
import Liner from "../Interfaces/Liner";
import Card from 'react-bootstrap/Card';
import { Container, Col, Row, Button } from "react-bootstrap";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { LoginContext } from '../../App';
import { Document, Page } from "react-pdf";




const NominaEmpleados =  (props) => {
    const { idNomina } = useParams(); // Accede a la ID desde props.match.params
    const [userLogged, setUserLogged] = useContext(LoginContext);
    const idNominaNumero = parseInt(idNomina, 10);
    const empleado = props.empleados2.find(empleado => empleado.id === idNominaNumero);
    
    const [pdf, setPdf] = useState(null);

    let rec;

    try {
        rec = userLogged && JSON.parse(userLogged).rec; 
    } catch (error) {
        console.log(`Error parsing JSON: ${error}`);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('file', pdf);
    
        const requestOptions = {
            method: "POST",
            body: formData,
        };
    
        const response = await fetch(`http://localhost:8080/empleadosv2/${idNomina}/nominas`, requestOptions);
    
        if (response.ok) {
            const data = await response.json();
            console.log(data); 
            window.location.href = `/nominas/${idNomina}`
        } else {
            console.error('Error al subir el archivo PDF');
        }
    };

    const handlePdfChange = (event) => {
      setPdf(event.target.files[0]);
    }
      
    if (!empleado) {
        return <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>Empleado no encontrado</div>;
      }
 
    return (
    <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>
        <Row>
            <Liner/>
        </Row>
        <Row style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>
            
            <h2><b>{empleado.nombreCompleto}</b></h2> 
        
            {rec &&
                <form onSubmit={handleSubmit} >
                    <label >
                        Selecciona nómina: 
                        <input type="file" accept="application/pdf" onChange={handlePdfChange} />
                    </label>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", marginTop: "1vh"}}>
                        <button type="submit" className="btn btn-primary btn-block"> Subir nómina</button>
                    </div>
                </form>
            }
        </Row>
        <div id="productosresultados" style={{ height: "59vh", overflowY: "auto", overflowX: "hidden" }}>
            {empleado.nominas.map((nomina) => (
                <Col >
                    <div className="my-1">
                        <Card>
                            <Card.Body>
                                <div class="row" key={nomina.id}>
                                        <div class="col-10">
                                            <p><b>Nominas de mes: Mayo</b></p>
                                        </div>
                                        <div class="col-2">
                                            <button  type="submit"  className="btn btn-primary btn-block">Descargar nómina</button>
                                        </div>
                                    </div>
                            </Card.Body> 
                        </Card>
                    </div>
                </Col>   
            ))}
    </div>

         
    </div>
    )

}

export default NominaEmpleados;


