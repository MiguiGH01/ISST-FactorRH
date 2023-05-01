import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTextArea} from 'mdb-react-ui-kit';
import { Container, Col, Row, Card } from "react-bootstrap";



const CrearNotificacion = () => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

   

    const handlePublicarNotificacion = async (e) => {
        e.preventDefault();
        
        if (titulo.trim() && descripcion.trim()) {
            

            const notificacionItem = {
                titulo,
                descripcion
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...notificacionItem
                }),
            };
            
            await fetch('http://localhost:8080/notificaciones', requestOptions);
            setTitulo('');
            setDescripcion('');
            window.location.href = '/notificaciones';
        }
    };


    return (
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
             <MDBContainer style={{ marginTop: "2vh", width: "80vw", height: "56vh"}}>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto justify-content-center'>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Crear notificación</h2>
                            <br></br>
                            <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
                                <MDBInput wrapperClass='mb-4 w-100' placeholder='Título' id='correoElectronico' value={titulo} onChange={(event) => setTitulo(event.target.value)} type='text'/>
                                <MDBTextArea wrapperClass='mb-4 w-100' placeholder='Descripción' id='descripcion' value={descripcion} onChange={(event) => setDescripcion(event.target.value)} type='text' rows={13} style={{ resize: "none" }}/>
                            </form>
                            <button type="submit" className="btn btn-primary" onClick={handlePublicarNotificacion}>Publicar Notificacion</button>

                        </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>

    )
}



export default CrearNotificacion;