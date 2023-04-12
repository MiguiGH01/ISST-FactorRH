import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Container, Col, Row, Card } from "react-bootstrap";
import Liner from "../interfaces/Liner";
import Contactos from './Contactos';


const EditarEmpleado = (props) => {
    
    const empleado = props.empleados;

    

    const [id, setId] = useState('');
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [numeroTelefono, setNumeroTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [password, setPassword]= useState('');
    const [rec, setRec] = useState(false);
    const [departamento, setDepartamento] = useState('');
    const [puesto, setPuesto] = useState('');
    
    return (
        
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
            <MDBContainer style={{ marginTop: "2vh", width: "80vw", height: "56vh"}}>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto justify-content-center'>
                    <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                        <h2 className="fw-bold mb-2 text-center">Gestionar empleado</h2>
                        <br></br>
                        <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
                            <div class="row">
                                <div class="col-11">
                                <MDBInput wrapperClass='mb-4 w-100' placeholder='Nombre Completo' id=''  type='text' />
                                <MDBInput wrapperClass='mb-4 w-100' placeholder='Número Teléfono' id='numeroTelefono'  type='text' />
                                </div>
                                <div class="col-1">
                                        <p> <small>Permisos:</small></p>
                                        <input wrapperClass='mb-4 w-100' type='checkbox'  id='puesto' style={{width:"70%", height:"30%"}}/>
                                </div>
                            </div>
                            <MDBInput wrapperClass='mb-4 w-100' placeholder='Correo Electrónico' id='correoElectronico'/>
                            <MDBInput wrapperClass='mb-4 w-100' placeholder='Contraseña' id='password' />
                            <MDBInput wrapperClass='mb-4 w-100' placeholder='Departamento' id='departamento'  />
                            <MDBInput wrapperClass='mb-4 w-100' placeholder='Puesto' id='puesto' />
                        </form>
                        <button type="submit" className="btn btn-primary" >Editar datos empleado</button>

                    </MDBCardBody>
                    </MDBCard>

                </MDBCol>
                </MDBRow>

                    
                   


            </MDBContainer>
        </div>

    )
}



export default EditarEmpleado;