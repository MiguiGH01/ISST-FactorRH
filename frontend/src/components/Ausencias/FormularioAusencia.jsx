import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTextArea} from 'mdb-react-ui-kit';
import { Container, Col, Row, Card } from "react-bootstrap";



const FormularioAusencia = () => {
    const [fechaInicio,setFechaInicio] = useState('');
    const [fechaFin,setFechaFin] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [aus, setAus] = useState(false);
    const [vac, setVac] = useState(false);
    const [baj, setBaj] = useState(false);


    const handlePublicarSolicitud = async (e) => {
        e.preventDefault();
        
        if (fechaInicio.trim() && fechaFin.triim() && titulo.trim() && descripcion.trim() && (aus.trim() || vac.trim() || baj.trim())) {
            

            const solicitudItem = {
                fechaInicio,
                fechaFin,
                titulo,
                descripcion,
                aus,
                vac,
                baj
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...solicitudItem
                }),
            };
            
            await fetch('http://localhost:8080/bajasyausencias/${empleadosItem.id}', requestOptions);
            setFechaInicio('');
            setFechaFin('');
            setTitulo('');
            setDescripcion('');
            setAus('');
            setBaj('');
            setVac('');
            window.location.href = '/bajasyausencias/${empleadosItem.id}';
        }
    };


    return (
        <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto" }}>
             <MDBContainer style={{ marginTop: "2vh", width: "80vw", height: "56vh"}}>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto justify-content-center'>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Crear solicitud</h2>
                            <br></br>
                            <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
                                <div>
                                <MDBInput wrapperClass='mb-4 w-100' placeholder='Fecha inicio' id='fechaInicio' value={fechaInicio} onChange={(event) => setFechaInicio(event.target.value)} type='text'/>
                                <MDBInput wrapperClass='mb-4 w-100' placeholder='Fecha fin' id='fechaFin' value={fechaFin} onChange={(event) => setFechaFin(event.target.value)} type='text'/> 
                                </div>
                                <MDBInput wrapperClass='mb-4 w-100' placeholder='Título' id='correoElectronico' value={titulo} onChange={(event) => setTitulo(event.target.value)} type='text'/>
                                <MDBTextArea wrapperClass='mb-4 w-100' placeholder='Descripción' id='descripcion' value={descripcion} onChange={(event) => setDescripcion(event.target.value)} type='text' rows={4} style={{ resize: "none" }}/>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center",  margin: "auto" }}>
                                    <MDBCheckbox labelClass="mr-3" label='Baja' id='checkAusencia' value={baj} onChange={(event) => setBaj(event.target.value)}/>
                                    <MDBCheckbox labelClass="mr-3" label='Ausencia' id='checkAusencia' value={aus} onChange={(event) => setAus(event.target.value)}/>
                                    <MDBCheckbox labelClass="mr-3" label='Vacaciones' id='checkAusencia' value={vac} onChange={(event) => setVac(event.target.value)}/>                                   
                                </div>
                            </form>
                            <button type="submit" className="btn btn-primary" onClick={handlePublicarSolicitud}>Generar solicitud</button>

                        </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>

    )
}



export default FormularioAusencia;