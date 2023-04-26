import React, { useEffect, useState, createContext } from 'react';
import { Route, Routes, Redirect} from 'react-router-dom';
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
import NominasEmpleados from './components/Nominas/NominaEmpleados';
import AusenciasEmpleados from './components/Ausencias/AusenciasEmpleados';

export const LoginContext = createContext();

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [empleados, setEmpleados] = useState([]);
    const [empleados2, setEmpleados2] = useState([]);
    const [notificaciones, setNotificaciones] = useState([]);
    const [userLogged, setUserLogged] = useState()

    useEffect(() => {
        const storedUserLogged = localStorage.getItem('userLogged');
        if (storedUserLogged !== null) {
            setUserLogged(storedUserLogged);
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
          const empleadosData = await responseEmpleados.json();
          const empleados2Data = await responseEmpleados2.json();
          const noticiasData = await responseNoticias.json();
          setEmpleados(empleadosData);
          setEmpleados2(empleados2Data);
          setNotificaciones(noticiasData);
          setIsLoading(false);
        };
        fetchData();
      }, []);
    
      if (isLoading) {
        return <div>Loading...</div>;
      }


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
                        <Route path="/pedirausencia" element={<PedirAusencia empleados={empleados}/>} />
                        <Route path="/contactos" element={<Contactos empleados2={empleados2}/>} />
                        <Route path="/nominas" element={<Nominas empleados={empleados2}/>} />
                        <Route path="/nominas/:idNomina" element={<NominasEmpleados empleados2={empleados2}/>} />
                        <Route path="/horarios" element={<Horarios empleados={empleados2}/>} />
                        <Route path="/horarios/:idHorario" element={<HorariosEmpleados empleados2={empleados2}/>} />
                        <Route path="/bajasyausencias/:idBaja" element={<AusenciasEmpleados empleados2={empleados2}/>} />
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
        </LoginContext.Provider>

    );
}

export default App;