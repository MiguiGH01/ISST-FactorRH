import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';


const Footer = (props) => {  


  const empleados = props.empleados;

    const handleHorarios = () => {
        window.location.href = '/horarios';
    }

    const handleAusencias = () => {
        window.location.href = '/bajasyausencias';
    }

    const handleNominas = () => {
        window.location.href = '/nominas';
    }
    
    const handleContactos = () => {
        window.location.href = '/contactos';
    }

    const handleNotificaciones = () => {
        window.location.href = '/notificaciones';
    }

  return (
    <div style={{position: 'absolute', bottom: '0', left: '0', right:'0', backgroundColor: '#B0C4DE', padding: '10px',textAlign: 'center', alignContent: 'center',  }}>
         
          <h4>Contacta con el administrador para cualquier urgencia</h4>
            <h6>Email: admin@factor.rh</h6>
            <h6>Teléfono: +34 911340874</h6>
    </div>
  );
}

export default Footer;


//textAlign: 'center', alignContent: 'center', backgroundColor: '#B0C4DE', padding:"0.3%", bottom: 0, position:"absolute", width:"100%", height:"12vh"