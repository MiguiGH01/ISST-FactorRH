import React from 'react';
import { Text } from 'react';
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
    if (username === 'usuario' && password === 'contraseña') {
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
        <div>
        {mapa}
        <h2>Holaaaa</h2>


        <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary"> Iniciar sesión </button>
      {error && <div>{error}</div>}
    </form>
        </div>
    )
}

export default Login;