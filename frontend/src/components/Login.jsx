import React from 'react';
import { Text } from 'react';
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import App from '../App';


const Login = (props) => {

  const trabajadorList = props.empleados;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');




  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a un backend o un servicio de autenticación

    const usuarioCorrecto = trabajadorList.find((trabajadorItem) => {
      return (trabajadorItem.email == username && trabajadorItem.contraseña == password);
    });

    if (usuarioCorrecto) {
      // Si la autenticación es exitosa, redirigir al usuario a la página de inicio
      window.location.href = "/home" /*<Route path="../" element={<App />}> </Route>*/;
    } else {
      // Si la autenticación falla, mostrar un mensaje de error
      setError('Usuario o contraseña incorrectos');
    }

  };

  const empleados = props.empleados;

  const mapa = empleados.map((empleado) => {
    return <li>{empleado.nombre}</li>
  }
  )

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto", width: "40vw" }}>
      <MDBContainer style={{ marginTop: "10vh" }}>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>

            <MDBCard className='bg-white my-5 mx-auto justify-content-center'>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                <h2 className="fw-bold mb-2 text-center">Inicia sesión</h2>
                <br></br>

                <MDBInput wrapperClass='mb-4 w-100' label='Correo' id='username' value={username} onChange={(event) => setUsername(event.target.value)} type='email' size="lg" />
                <MDBInput wrapperClass='mb-4 w-100' label='Contraseña' id='password' value={password} type='password' onChange={(event) => setPassword(event.target.value)} size="lg" />

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}> Iniciar sesión </button>

                <hr className="my-4" />

                {error && <div style={{ textAlign: "center" }}>{error}</div>}

              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>
  )
}

export default Login;