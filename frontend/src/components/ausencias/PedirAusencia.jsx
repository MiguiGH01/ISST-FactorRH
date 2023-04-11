import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {Row} from "react-bootstrap";
import Liner from "../interfaces/Liner";

const PedirAusencia = () => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();


   
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
        /*
      if (date.trim() && descripcion.trim()) {
            const sugerenciasItem = {
                date,
                descripcion,
                // TODO: cambiar cuando se establezca sesiones de usuario
                userId: 1,
                fechaCreacion: new Date().toISOString(),
                
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...ausenciasItem
                }),
            };
            
            await fetch('http://localhost:8080/sugerencias', requestOptions);
            setTitulo('');
            setDescripcion('');
            navigate('/sugerencias')
        }
    };
    */



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