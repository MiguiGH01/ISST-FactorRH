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

function App() {
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        const formatDate = (isoDateString) => {
            const date = new Date(isoDateString);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        };
    
        const fetchEmpleados = async () => {
            const response = await fetch('http://localhost:8080/empleados');
            const empleadosData = await response.json();
    
            // Format the date for each fetched item
            // const formattedNoticiasData = noticiasData.map((noticiaItem) => {
            //    return {
            //        ...noticiaItem,
            //        fechaCreacion: formatDate(noticiaItem.fechaCreacion),
            //    };
            //});
    
            setEmpleados(empleadosData/*formattedNoticiasData*/);
        };

        /*
        const fetchSugerencias = async () => {
            const response = await fetch('http://localhost:8080/sugerencias');
            const sugerenciasData = await response.json();
    
            // Format the date for each fetched item
            const formattedSugerenciasData = sugerenciasData.map((sugerenciaItem) => {
                return {
                    ...sugerenciaItem,
                    fechaCreacion: formatDate(sugerenciaItem.fechaCreacion),
                };
            });
    
            setSugerenciaslist(formattedSugerenciasData);
        };



        const fetchComentario = async () => {
            const response = await fetch('http://localhost:8080/sugerencia/1/');
            const comentarioData = await response.json();
    
            // Format the date for each fetched item
            const formattedComentarioData = comentarioData.map((comenatrioItem) => {
                return {
                    ...comenatrioItem
                };
            });
    
            setComentariolist(formattedComentarioData);
        };
        */
        fetchEmpleados();

        //fetchSugerencias();

        //fetchComentario();
    
        /* Para refrescar periódicamente
        const intervalNoticias = setInterval(fetchNoticias, 10000);
        const intervalSuerencias = setInterval(fetchSugerencias, 10000);
        const intervalComentario = setInterval(fetchSugerencias, 10000);
        return () => {
            clearInterval(intervalNoticias);
            clearInterval(intervalSuerencias);
            clearInterval(intervalComentario);
        };
        */
    }, []);


    return (
        <div>
            {/*<Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>tuComunidad</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/noticias">Noticias</Nav.Link>
                                <Nav.Link href="/sugerencias">Sugerencias</Nav.Link>
                                <Nav.Link href="/contacto">Contactos</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>*/}

            <div class="contenedor-flexbox">
                <Routes>
                    <Route path="/" element={<Login empleados={empleados}/>}></Route>
                    <Route path="/home" element={<Home empleados={empleados}/>} />
                    <Route path="/bajasyausencias" element={<AusenciasBajasVac empleados={empleados}/>} />
                    <Route path="/pedirausencia" element={<PedirAusencia empleados={empleados}/>} />
                    <Route path="/contactos" element={<Contactos empleados={empleados}/>} />
                    <Route path="/nominas" element={<Nominas empleados={empleados}/>} />
                    <Route path="/horarios" element={<Horarios empleados={empleados}/>} />
                </Routes>
            </div>
        </div>

    );
}

export default App;