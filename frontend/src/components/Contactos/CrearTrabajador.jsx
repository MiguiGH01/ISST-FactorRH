import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Container, Col, Row, Card } from "react-bootstrap";
import Liner from "../Interfaces/Liner";


const CrearTrabajador = () => {
    const [id, setId] = useState('');
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [numeroTelefono, setNumeroTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [password, setPassword]= useState('');
    const [rec, setRec] = useState(false);
    const [departamento, setDepartamento] = useState('');
    const [puesto, setPuesto] = useState('');

    //const handlePublicarNotificacion = () => {
   //     window.location.href = '/notificaciones';
    //}

    const handleCrearTrabador = async (e) => {
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

            window.location.href = '/contactos';
        }
    };

    const handleCheckboxChange = (event) => {
        setRec(event.target.checked); // Actualiza el estado con el valor de la casilla de verificación
      }


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
                                <MDBInput wrapperClass='mb-4 w-100' placeholder='Nombre Completo' id='nombreCompleto' value={nombreCompleto} onChange={(event) => setNombreCompleto(event.target.value)} type='text' />
                                <MDBInput wrapperClass='mb-4 w-100' placeholder='Número Teléfono' id='numeroTelefono' value={numeroTelefono} onChange={(event) => setNumeroTelefono(event.target.value)} type='text' />
                                </div>
                                <div class="col-1">
                                        <p> <small>Permisos:</small></p>
                                        <input wrapperClass='mb-4 w-100' type='checkbox'  id='puesto' checked={rec} onChange={handleCheckboxChange} style={{width:"70%", height:"30%"}}/>
                                </div>
                            </div>
                            <MDBInput wrapperClass='mb-4 w-100' placeholder='Correo Electrónico' id='correoElectronico' value={correoElectronico} onChange={(event) => setCorreoElectronico(event.target.value)} type='email'/>
                            <MDBInput wrapperClass='mb-4 w-100' placeholder='Contraseña' id='password' value={password} type='password' onChange={(event) => setPassword(event.target.value)}/>
                            <MDBInput wrapperClass='mb-4 w-100' placeholder='Departamento' id='departamento' value={departamento} onChange={(event) => setDepartamento(event.target.value)} type='text' />
                            <MDBInput wrapperClass='mb-4 w-100' placeholder='Puesto' id='puesto' value={puesto} onChange={(event) => setPuesto(event.target.value)} type='text'/>
                        </form>
                        <button type="submit" className="btn btn-primary" onClick={handleCrearTrabador}>Añadir empleado</button>

                    </MDBCardBody>
                    </MDBCard>

                </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>

    )
}



export default CrearTrabajador;