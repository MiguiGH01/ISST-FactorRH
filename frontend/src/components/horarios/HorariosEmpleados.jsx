import React from 'react';
import { useParams } from 'react-router-dom';

const HorariosEmpleados = (props) => {
    const { idHorario } = useParams(); // Accede a la ID desde props.match.params

    const idHorarioNumero = parseInt(idHorario, 10);

    const empleadoList = props.empleados2;

    const empleado = props.empleados2.find(empleado => empleado.id === idHorarioNumero);

    if (!empleado) {
        return <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>Empleado no encontrado</div>;
      }

    return (
    <div class="contenedor-flexbox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto"}}>
        <p>Nombre: {empleado.nombreCompleto}</p>
        <p>ID URL: {idHorario}</p>
        {empleado.horarios.map((horario) => (
                    <p>{horario.fecha}</p>
        ))}
    </div>
    )

}

export default HorariosEmpleados;