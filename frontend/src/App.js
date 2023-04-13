import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigation } from 'react-router-dom';
import './App.css';
import PedirAusencia from './components/Ausencias/PedirAusencia';
import AusenciasBajasVac from './components/Ausencias/AusenciasBajasVac';
import Contactos from './components/Contactos/Contactos';
import CrearTrabajador from './components/Contactos/CrearTrabajador';
import EditarEmpleado from './components/Contactos/EditarEmpleado';
import Horarios from './components/Horarios/Horarios';
import HorariosEmpleados from './components/Horarios/HorariosEmpleados';
import Nominas from './components/Nominas/Nominas';
import Login from './components/Interfaces/Login';
import Home from './components/Interfaces/Home';
import Footer from './components/Interfaces/Footer';
import Notificaciones from './components/Notificaciones/Notificaciones';
import CrearNotificacion from './components/Notificaciones/CrearNotificacion';


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
                    <Route path="/" element={<Login empleados2={empleados2}/>}></Route>
                    <Route path="/home" element={<Home empleados={empleados}/>} />
                    <Route path="/bajasyausencias" element={<AusenciasBajasVac empleados={empleados}/>} />
                    <Route path="/pedirausencia" element={<PedirAusencia empleados={empleados}/>} />
                    <Route path="/contactos" element={<Contactos empleados={empleados} empleados2={empleados2}/>} />
                    <Route path="/nominas" element={<Nominas empleados={empleados}/>} />
                    <Route path="/horarios" element={<Horarios empleados={empleados2}/>} />
                    <Route path="/horarios/:idHorario" element={<HorariosEmpleados empleados2={empleados2}/>} />
                    <Route path="/notificaciones" element={<Notificaciones notificaciones={notificaciones}/>} />
                    <Route path="/publicarnotificacion" element={<CrearNotificacion/>} />
                    <Route path="/crearTrabajador"element={<CrearTrabajador/>} />
                    <Route path="/editarEmpleado/:idEmpleado" element={<EditarEmpleado empleados2={empleados2}/>} />
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