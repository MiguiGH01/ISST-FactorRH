import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Container, Col, Row, Card } from "react-bootstrap";
import Liner from "../Interfaces/Liner";
import Contactos from './Contactos';
import { useParams } from 'react-router-dom';



const EditarEmpleado = (props) => {
    
    const { idEmpleado } = useParams();
    const idEmpleadoNumero = parseInt(idEmpleado, 10);
    const empleadoList = props.empleados2;
    const empleado = empleadoList.find(empleado => empleado.id === idEmpleadoNumero);

    
    const [nombreCompleto, setNombreCompleto] = useState(empleado.nombreCompleto);
    const [numeroTelefono, setNumeroTelefono] = useState(empleado.numeroTelefono);
    const [correoElectronico, setCorreoElectronico] = useState(empleado.correoElectronico);
    const [password, setPassword]= useState(empleado.password);
    const [rec, setRec] = useState(empleado.rec);
    const [departamento, setDepartamento] = useState(empleado.departamento);
    const [puesto, setPuesto] = useState(empleado.puesto); 

    const handleEditarTrabador = async (e) => {
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
                method: 'PUT',
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

            window.location.href = '/contactos';
        }
    };
    
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
                                <MDBInput wrapperClass='mb-4 w-100' placeholder='Nombre Completo' defaultValue={nombreCompleto} id='nombreCompleto' type='text' onChange={(event) => setNombreCompleto(event.target.value)}/>
                                <MDBInput wrapperClass='mb-4 w-100' placeholder='Número Teléfono' defaultValue={numeroTelefono} id='numeroTelefono' type='text' onChange={(event) => setNumeroTelefono(event.target.value)}/>
                                </div>
                                <div class="col-1">
                                        <p> <small>Permisos:</small></p>
                                        <input wrapperClass='mb-4 w-100' type='checkbox' defaultValue={rec} id='puesto' style={{width:"70%", height:"30%"}}/>
                                </div>
                            </div>
                            <MDBInput wrapperClass='mb-4 w-100' placeholder='Correo Electrónico' defaultValue={correoElectronico} id='correoElectronico' type='email' onChange={(event) => setCorreoElectronico(event.target.value)}></MDBInput>              
                            <MDBInput wrapperClass='mb-4 w-100' placeholder='Contraseña' defaultValue={password} id='password' onChange={(event) => setPassword(event.target.value)}/>
                            <MDBInput wrapperClass='mb-4 w-100' placeholder='Departamento' defaultValue={departamento} id='departamento' onChange={(event) => setDepartamento(event.target.value)} />
                            <MDBInput wrapperClass='mb-4 w-100' placeholder='Puesto' defaultValue={puesto} id='puesto' onChange={(event) => setPuesto(event.target.value)}/>
                        </form>
                        <button type="submit" className="btn btn-primary" onClick={handleEditarTrabador}>Editar datos empleado </button>

                    </MDBCardBody>
                    </MDBCard>

                </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>

    )
}



export default EditarEmpleado;