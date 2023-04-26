import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {Row} from "react-bootstrap";
import Liner from "../Interfaces/Liner";

const PedirAusencia = () => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();


   
    const handleSubmit = async (e) => {
        e.preventDefault();
    }



    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"auto"}}>
               <Row>
                <Liner/>
                </Row>
            <h2>Crear nueva ausencia</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titulo">Fecha de la Ausencia:</label>
                <div>
                <textarea />
                </div>

                <label htmlFor="descripcion">Motivo de la ausencia:</label>
                <textarea
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                
                <button type="submit">Submit</button>
                <Link to={"/sugerencias"}><button>Cancelar</button></Link>
            </form>
        </div>
    );
};

export default PedirAusencia;