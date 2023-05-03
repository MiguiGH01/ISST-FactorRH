import { useParams } from 'react-router-dom';
import Liner from "../Interfaces/Liner";
import Card from 'react-bootstrap/Card';
import { Container, Col, Row, Button } from "react-bootstrap";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import axios from 'axios';

const NominaEmpleados = (props) => {
    const { idNomina } = useParams(); // Accede a la ID desde props.match.params

    const idNominaNumero = parseInt(idNomina, 10);
    const empleado = props.empleados2.find(empleado => empleado.id === idNominaNumero);


    const crearNomina = async (pdfFile) => {
       
            const formData = new FormData();
            formData.append('pdf', pdfFile);
        
            const response = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
                
            };
        
            await fetch('http://localhost:8080/nominas/upload-pdf', response);

        return {
            success: true,
            message: 'Archivo PDF subido exitosamente',
            data: response.data
        };

      
    }
    
    const handleCrearNomina = async (event) => {
      
        // Obtener archivo PDF del evento
        const pdfFile = event.target.files[0];
      
        // Subir archivo PDF al servidor
        const res = await crearNomina(pdfFile);
      
        // Hacer algo con la respuesta del servidor
        if (res.success) {
          console.log(res.data);
        } else {
          console.error(res.message);
        }
        
       };

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

        <form onSubmit={handleCrearNomina} >
      <label >
        Selecciona un archivo PDF:
        <input type="file" accept="application/pdf" onChange={crearNomina}/>
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
                                                <p><b>Nominas de mes:</b> {empleadosItem.nominas}</p>
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



/*
  const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: formData,
            ...nominaItem
          };
          const json = await requestOptions.json();
          console.log(json);
        
        
        await fetch('http://localhost:8080/empleadosv2', requestOptions);

        window.location.href = '/home';
        
        setFile('');


  {empleado.rec ?  <button type="submit"> Subir nómina</button>: <div></div>}


<Row style={{ display: 'flex', flexWrap: 'wrap', overflowY: "auto", overflowX: "hidden" }}>
            <hr className="my-4"/>
            {empleado.horarios.map((horario, index) => (
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
        
        const handleCrearNomina = async (e) => {
        e.preventDefault();
        if (nombreCompleto.trim() && numeroTelefono.trim() && correoElectronico.trim() && password.trim() && departamento.trim() && puesto.trim()) {
            

            const empleadoItem = {
                nombreCompleto,
                numeroTelefono,
                correoElectronico,
                password,
                rec,
                departamento,
                puesto
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...empleadoItem
                }),
            };
            
            await fetch('http://localhost:8080/empleadosv2', requestOptions);

            setNombreCompleto('');
            setNumeroTelefono('');
            setCorreoElectronico('');
            setPassword('');
            setRec(false);
            setDepartamento('');
            setPuesto('');

            window.location.href = '/nominas';
        }
    };




      const idNominaNumero = parseInt(idNomina, 10);
 
    const empleadoList = props.empleados2;

    const empleado = props.empleados2.find(empleado => empleado.id === idNominaNumero);

*/