import React from 'react';
import {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Liner from "../Interfaces/Liner";
import Card from 'react-bootstrap/Card';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Horarios.css';
import { LoginContext } from '../../App';
import { Container, Col, Row, Button } from "react-bootstrap";

const HorariosEmpleados = (props) => {
    const { idHorario } = useParams(); // Accede a la ID desde props.match.params
    const [horaEntrada, setHoraEntrada] = useState("");
    const [fecha, setFecha] = useState("");
    const [horaSalida, setHoraSalida] = useState("");
    const [minutosPau, setMinutosPau] = useState(0);
    const [userLogged, setUserLogged] = useContext(LoginContext);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showPopup, setShowPopup] = useState(false);


    const idHorarioNumero = parseInt(idHorario, 10);

    const empleado = props.empleados2.find(empleado => empleado.id === idHorarioNumero);

    let rec;

    try {
        rec = userLogged && JSON.parse(userLogged).rec; 
    } catch (error) {
        console.log(`Error parsing JSON: ${error}`);
    }

    const handleCrearTrabajador = async (e) => {
        e.preventDefault();

        const nuevoTrabajador = {
          fecha: "2023-05-09",
          horaEntrada: "00:00:00",
          horaSalida: "00:00:00",
          minutosPau: 0,
          minutosExt: 0,
          minutosTot: 0
        };

        console.log(nuevoTrabajador)
      
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nuevoTrabajador),
        };
        console.log(requestOptions)
      
        const response = await fetch(`http://localhost:8080/empleadosv2/${idHorarioNumero}/horarios`, requestOptions);
    };

    const handleEditarTrabador = async (e, id) => {
        e.preventDefault();           
            const horarioItem = {
                fecha,
                horaEntrada,
                horaSalida,
                minutosPau
            };

            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...horarioItem
                }),
            };

            await fetch(`http://localhost:8080/horarios/${id}`, requestOptions);

            window.location.href = `/horarios/${idHorarioNumero}`

    };

    function Popup({ onClose }) {
        return (
            <div className="popup" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: "30vh", width: "30vw"}}>
                <h2>Seleccione las fechas</h2>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                    <DatePicker
                        style={{ marginTop: "2vh" }}
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </div>
                <button onClick={onClose}>Añadir</button>
            </div>
        );
    }

    function convertirFecha(fechaString) {
        const partesFecha = fechaString.split('-');
        const fecha = new Date(partesFecha[0], partesFecha[1] - 1, partesFecha[2]);
        const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric' };
        const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
        return fechaFormateada;
    }

    function convertirMinutosAHoras(minutos) {
        if (minutos < 0) {
            const horas = Math.floor(-minutos / 60);
            const minutosRestantes = Math.floor(-minutos % 60);
        
            const tiempoFormateado = `-${horas.toString()}h ${minutosRestantes.toString().padStart(2, '0')}min`;
            return tiempoFormateado;

        } else {
            const horas = Math.floor(minutos / 60);
            const minutosRestantes = Math.floor(minutos % 60);
        
            const tiempoFormateado = `${horas.toString()}h ${minutosRestantes.toString().padStart(2, '0')}min`;
            return tiempoFormateado;
        }
    }

    function convertirFormatoHora(horaCompleta) {
        const fecha = new Date(`1970-01-01T${horaCompleta}`);
        const [horas, minutos, segundos] = horaCompleta.split(':');
        if (horas == 0) {
            return `00:${minutos}`;
        } else {
            return fecha.toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute:'2-digit'});
        }
    }   

    function convertirHoraLong(horaCompleta) {
        const fecha = new Date(`1970-01-01T${horaCompleta}:00`);
        const [horas, minutos] = horaCompleta.split(':');
        if (horas == 0) {
            return parseInt(minutos);
        } else {
            const total =  parseInt(horas*60) + parseInt(minutos)
            return total;
        }
    }

    function convertirFormatoHoraLong(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = Math.floor(totalMinutes) % 60;
        const seconds = 0;
      
        if (hours === 0) {
          return `00:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
          return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
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
            <div className="funciones" style={{justifyContent: "center", alignContent: "center", display: "flex", margin: 2}}>      
                <h2><b>{empleado.nombreCompleto}</b></h2> 
                <button onClick={(e) => handleCrearTrabajador(e)}></button>
                {rec && <button className="btn btn-primary btn-block" style= {{marginLeft:"1vw"}} onClick={() => setShowPopup(true)}>Añadir horarios</button>}
            </div>
        </Row>
        { showPopup ? <Popup onClose={(e) => {setShowPopup(false); handleCrearTrabajador(e) }}/> : <Row>
            <div id="productosresultados" style={{ height: "68vh", overflowY: "auto", overflowX: "hidden" }}>
            {empleado.horarios.map((horario, index) => (
                <Col  key={index}>
                <div className="my-1">
                    <Card>
                    <Card.Body>
                        <div class="row">
                            <div className="d-flex justify-content-center align-items-center mb-2">
                            <h3 id="catálogo"><b>{convertirFecha(horario.fecha)}</b></h3>
                            </div>
                                <hr className="my-2" />
                                <div className="col-4">
                                        <p style={{marginTop:"1.2vh"}}><b>Entrada: </b>{<input type='time' style={{width:76}} pattern="\d{2}:\d{2}" defaultValue={convertirFormatoHora(horario.horaEntrada)} onChange={(event) => {setHoraEntrada(event.target.value); setFecha(horario.fecha)}}/>}</p>
                                </div>
                                <div className="col-4">
                                        <p style={{marginTop:"1.2vh"}} ><b>Salida: </b>{<input type='time' style={{width:76}} pattern="\d{2}:\d{2}" defaultValue={convertirFormatoHora(horario.horaSalida)} onChange={(event) => {setHoraSalida(event.target.value); setFecha(horario.fecha)}}/>}</p>
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-primary btn-block" style={{marginTop:"0.8vh"}} onClick={(e) => {handleEditarTrabador(e, horario.id)}}>Registrar hora</button>
                                </div>
                            </div>
                        <hr className="my-2" style={{width:"90%", margin:"auto", border: "none", borderTop: "2px dashed black"}}/>
                            <div class="row">
                                <div className="col-4">
                                        <p style={{marginTop:"1.2vh"}}><b>Tiempo Total: </b>{convertirMinutosAHoras(horario.minutosTot)}</p>
                                </div>
                                <div className="col-4">
                                        <p style={{marginTop:"1.2vh"}} ><b>Tiempo Extra: </b>{convertirMinutosAHoras(horario.minutosExt)}</p>                                
                                </div>
                                <div className="col-4">
                                        <p style={{marginTop:"1.2vh"}} ><b>Tiempo Pausado: </b>{<input type='time' style={{width:76}} pattern="\d{2}:\d{2}" defaultValue={convertirFormatoHora(convertirFormatoHoraLong(horario.minutosPau))} onChange={(event) => {setMinutosPau(convertirHoraLong(event.target.value)); setFecha(horario.fecha)}}/>}</p>

                                </div>
                            </div>
                    </Card.Body> 
                    </Card>
                </div>
                </Col>
            ))}
            </div>
        </Row>}
    </div>
    )

}

export default HorariosEmpleados;