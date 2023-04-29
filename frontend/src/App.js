import React, { useEffect, useState, createContext } from 'react';
import { Route, Routes, Redirect} from 'react-router-dom';
import './App.css';
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
import NominasEmpleados from './components/Nominas/NominaEmpleados';
import AusenciasEmpleados from './components/Ausencias/AusenciasEmpleados';
import FormularioAusencia from './components/Ausencias/FormularioAusencia';

export const LoginContext = createContext();

function App() {
    const [empleados2, setEmpleados2] = useState([]);
    const [notificaciones, setNotificaciones] = useState([]);
    const [userLogged, setUserLogged] = useState(null)

    useEffect(() => {
        const storedUserLogged = localStorage.getItem('userLogged');
        if (storedUserLogged !== null) {
            setUserLogged(storedUserLogged);
        } else {
          setUserLogged(null)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('userLogged', userLogged);
    }, [userLogged]);   

    useEffect(() => {
        const fetchData = async () => {
          const responseEmpleados = await fetch('http://localhost:8080/empleados');
          const responseEmpleados2 = await fetch('http://localhost:8080/empleadosv2');
          const responseNoticias = await fetch('http://localhost:8080/notificaciones');
          const empleados2Data = await responseEmpleados2.json();
          const noticiasData = await responseNoticias.json();
          setEmpleados2(empleados2Data);
          setNotificaciones(noticiasData);
        };
        fetchData();
      }, []);

      useEffect(() => {
        const timeoutId = setTimeout(() => {
          setUserLogged()
        }, 1200000);
      
        return () => {
          clearTimeout(timeoutId);
        }
      }, []);

      useEffect(() => {
        let timer = setTimeout(() => {
          if (!userLogged && window.location.pathname !== '/') {
            window.location.href = '/';
          }
        }, 1000);
      
        return () => {
          clearTimeout(timer);
        };
      }, [userLogged]);
      


    return (
        <LoginContext.Provider value={[userLogged, setUserLogged]}> 
            <div style={{
                backgroundColor: '#F5FFFA',
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                height:"88vh"}}>

                <div class="contenedor-flexbox">
                    <Routes>
                        <Route path="/" element={<Login empleados2={empleados2} />}></Route>
                        <Route path="/home" element={<Home empleados2={empleados2}/>}></Route>
                        <Route path="/bajasyausencias" element={<AusenciasBajasVac empleados={empleados2}/>} />
                        <Route path="/contactos" element={<Contactos empleados2={empleados2}/>} />
                        <Route path="/nominas" element={<Nominas empleados={empleados2}/>} />
                        <Route path="/nominas/:idNomina" element={<NominasEmpleados empleados2={empleados2}/>} />
                        <Route path="/horarios" element={<Horarios empleados={empleados2}/>} />
                        <Route path="/horarios/:idHorario" element={<HorariosEmpleados empleados2={empleados2}/>} />
                        <Route path="/bajasyausencias/:idBaja" element={<AusenciasEmpleados empleados2={empleados2}/>} />
                        <Route path="/notificaciones" element={<Notificaciones notificaciones={notificaciones} empleados2={empleados2}/>} />
                        <Route path="/publicarnotificacion" element={<CrearNotificacion/>} />
                        <Route path="/crearTrabajador"element={<CrearTrabajador/>} />
                        <Route path="/generarSolicitud/:idEmpleado "element={<FormularioAusencia empleados2={empleados2}/>} />
                        <Route path="/editarEmpleado/:idEmpleado" element={<EditarEmpleado empleados2={empleados2}/>} />
                    </Routes>
                </div>
              
                    {/* <div style={{backgroundColor: '#B0C4DE',
                            backgroundRepeat: 'no-repeat'}}> */}
                {/* <Footer/> */}
                {/* </div> */}

                
                <Footer/>
                            
            </div>
        </LoginContext.Provider>

    );
}

export default App;