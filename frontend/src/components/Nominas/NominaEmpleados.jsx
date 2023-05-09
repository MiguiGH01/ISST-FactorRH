import { useParams } from 'react-router-dom';
import Liner from "../Interfaces/Liner";
import Card from 'react-bootstrap/Card';
import { Container, Col, Row, Button } from "react-bootstrap";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import {useEffect} from 'react'

const NominaEmpleados =  (props) => {
    const { idNomina } = useParams(); // Accede a la ID desde props.match.params

    const idNominaNumero = parseInt(idNomina, 10);
    const empleado = props.empleados2.find(empleado => empleado.id === idNominaNumero);
    
    const [file, setPdf] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

    try{
        const formData = new FormData();
        formData.append('idEmpleado', empleado.id);
        formData.append('file', file);

        console.log(file);
        console.log(empleado.id);

        const response = await fetch (`http://localhost:8080/nominas/upload-pdf`,{
          method: 'POST',
          body: formData
         });
         console.log(response);

     } catch (error) {
     console.log('No tira');
     alert(error.message);
         }

    }
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
        </Row>
        <Col md>
                <div >
                    <Row className="my-2">
                        <Card className="flex-fill">
                            <Card.Body>
                                    <div class="row">
                                        <h2>{empleado.nombreCompleto}</h2>
                                        <hr className="my-4" />
                                        <div class="col-3">
                                            <p><b>Puesto:</b> {empleado.puesto}</p>
                                        </div>
                                        <div class="col-3">
                                            <p><b>Departamento:</b> {empleado.departamento}</p>
                                        </div>
                                        <p><b>Descripción:</b> </p>
                                        <Card.Text>
                                        </Card.Text>
                                    </div>
                            </Card.Body>
                        </Card>
                    </Row>
                </div>
            </Col>
        <Row>
       
     
        <form onSubmit={handleSubmit} >
      <label >
        Selecciona un archivo PDF:
        <input type="file" accept="application/pdf" onChange={handlePdfChange} />
      </label>
      <button type="submit" className="btn btn-primary btn-block"> Subir nómina</button>
         </form>

     </Row>
    
     <div>
     {empleado.nominas.map((empleadosItem) => (
                    <Col md>
                        <Row className="my-2">
                            <Card className="flex-fill">
                                <Card.Body>
                                    <div class="row" key={empleadosItem.id}>
                                            <hr className="my-4" />
                                            <div class="col-6">
                                                <p><b>Nominas de mes:</b> {empleadosItem.nominas.id}</p>
                                            </div>
                                        </div>
                                </Card.Body> 
                            </Card>
                        </Row>
                    </Col>   
     ))};

    </div>

         
    </div>
    );

}

export default NominaEmpleados;


