import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import PedirAusencia from './components/PedirAusencia';
import AusenciasBajasVac from './components/AusenciasBajasVac';
import Contactos from './components/Contactos';
import Nominas from './components/Nominas';
import Horarios from './components/Horarios';
import Header from './components/Header';
import Prueba from './components/Prueba';
import Notificaciones from './components/Notificaciones';
import Footer from './components/Footer';
import CrearNotificacion from './components/CrearNotificacion';

function App() {
    const [empleados, setEmpleados] = useState([]);
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

        const fetchNotificaciones = async () => {
            const responseNoticias = await fetch('http://localhost:8080/notificaciones');
            const noticiasData = await responseNoticias.json();
    
            setNotificaciones(noticiasData/*formattedNoticiasData*/);
        };


        fetchEmpleados();
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
                    <Route path="/contactos" element={<Contactos empleados={empleados}/>} />
                    <Route path="/nominas" element={<Nominas empleados={empleados}/>} />
                    <Route path="/horarios" element={<Horarios empleados={empleados}/>} />
                    <Route path="/notificaciones" element={<Notificaciones notificaciones={notificaciones}/>} />
                    <Route path="/crearnotificacion" element={<CrearNotificacion/>} />
                    <Route path="/prueba" element={<Prueba/>} />
                </Routes>
            </div>
            <Footer/>   
           
                {/* <div style={{backgroundColor: '#B0C4DE',
                        backgroundRepeat: 'no-repeat'}}> */}
            {/* <Footer/> */}
            {/* </div> */}
          
        </div>

    );
}

export default App;