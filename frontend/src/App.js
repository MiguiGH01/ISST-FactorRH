import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/interfaces/Login';
import Home from './components/interfaces/Home';
import PedirAusencia from './components/ausencias/PedirAusencia';
import AusenciasBajasVac from './components/ausencias/AusenciasBajasVac';
import Contactos from './components/contactos/Contactos';
import Nominas from './components/Nominas';
import Horarios from './components/Horarios';
import Header from './components/interfaces/Header';
import Notificaciones from './components/Notificaciones/Notificaciones';
import Footer from './components/interfaces/Footer';
import CrearNotificacion from './components/Notificaciones/CrearNotificacion';
import Liner from './components/interfaces/Liner';
import CrearTrabajador from './components/contactos/CrearTrabajador';

function App() {
    const [empleados, setEmpleados] = useState([]);
    const [empleados2, setEmpleados2] = useState([]);
    const [notificaciones, setNotificaciones] = useState([]);

    useEffect(() => {
        const formatDate = (isoDateString) => {
            const date = new Date(isoDateString);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        };
    
        const fetchEmpleados = async () => {
            const responseEmpleados = await fetch('http://localhost:8080/empleados');
            const empleadosData = await responseEmpleados.json();
    
            setEmpleados(empleadosData/*formattedNoticiasData*/);
        };

        const fetchEmpleados2 = async () => {
            const responseEmpleados2 = await fetch('http://localhost:8080/empleadosv2');
            const empleados2Data = await responseEmpleados2.json();
    
            setEmpleados2(empleados2Data/*formattedNoticiasData*/);
        };

        const fetchNotificaciones = async () => {
            const responseNoticias = await fetch('http://localhost:8080/notificaciones');
            const noticiasData = await responseNoticias.json();
    
            setNotificaciones(noticiasData/*formattedNoticiasData*/);
        };


        fetchEmpleados();
        fetchEmpleados2();
        fetchNotificaciones();

    }, []);


    return (
        <div style={{
            backgroundColor: '#F5FFFA',
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            height:"88vh"}}>

                   
                    
            <div class="contenedor-flexbox">
                <Routes>
                    <Route path="/" element={<Login empleados={empleados}/>}></Route>
                    <Route path="/home" element={<Home empleados={empleados}/>} />
                    <Route path="/bajasyausencias" element={<AusenciasBajasVac empleados={empleados}/>} />
                    <Route path="/pedirausencia" element={<PedirAusencia empleados={empleados}/>} />
                    <Route path="/contactos" element={<Contactos empleados={empleados} empleados2={empleados2}/>} />
                    <Route path="/nominas" element={<Nominas empleados={empleados}/>} />
                    <Route path="/horarios" element={<Horarios empleados={empleados}/>} />
                    <Route path="/notificaciones" element={<Notificaciones notificaciones={notificaciones}/>} />
                    <Route path="/publicarnotificacion" element={<CrearNotificacion/>} />
                    <Route path="/crearTrabajador"element={<CrearTrabajador/>} />
                </Routes>
            </div>
             
           
                {/* <div style={{backgroundColor: '#B0C4DE',
                        backgroundRepeat: 'no-repeat'}}> */}
            {/* <Footer/> */}
            {/* </div> */}

            
            <Footer/>
            
            
          
        </div>
        

    );
}

export default App;