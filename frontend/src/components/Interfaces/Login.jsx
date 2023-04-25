import React, {useEffect } from 'react';
import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { useState, useContext } from 'react';
import { LoginContext } from '../../App';
import { Navigate } from "react-router-dom";


const Login = (props) => {

  const trabajadorList = props.empleados2;

  const [username, setUsername] = useState('');
  const [cont, setCont] = useState('');
  const [error, setError] = useState('');
  const [userLogged, setUserLogged] = useContext(LoginContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a un backend o un servicio de autenticación

    const esUsuarioCorrecto = trabajadorList.find((trabajadorItem) => {
      return (trabajadorItem.correoElectronico === username && trabajadorItem.password === cont );//&& trabajadorItem.rec == true
    });

    const usuarioCorrecto = trabajadorList.find((trabajadorItem) => {
      if (trabajadorItem.correoElectronico === username && trabajadorItem.password === cont) {
        return trabajadorItem;
      }
    });

    if (esUsuarioCorrecto) {
      // Si la autenticación es exitosa, redirigir al usuario a la página de inicio
      setUserLogged(JSON.stringify(usuarioCorrecto))
      window.location.href = "/home"
    } else {
      // Si la autenticación falla, mostrar un mensaje de error
      setError('Usuario o contraseña incorrectos');
    }
    
  };

  useEffect(() =>{
    console.log(userLogged)
  }, [userLogged]);

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", margin: "auto", width: "40vw" }}>
      <MDBContainer style={{ marginTop: "10vh" }}>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>

            <MDBCard className='bg-white my-5 mx-auto justify-content-center'>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                <h2 className="fw-bold mb-2 text-center">Inicia sesión</h2>
                <br></br>
                <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Correo' id='formControl' value={username} onChange={(event) => setUsername(event.target.value)} type='email' size="lg" />
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Contraseña' id='formControlDefault' value={cont} type='password' onChange={(event) => setCont(event.target.value)} size="lg" />

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}> Iniciar sesión </button>
                </form>
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