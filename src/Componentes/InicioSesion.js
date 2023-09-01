import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const InicioSesion = ({ onIniciarSesion, onRegistrarse }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registerIn, setRegisterIn] = useState(false);

  const handleIniciarSesionClick = () => {
    // Simulación de lógica de autenticación exitosa
    setLoggedIn(true);
    onIniciarSesion(); // Llamar a la función de App.js
  };

  const handleRegistrarseClick = () => {
    setRegisterIn(true);
    onRegistrarse();
  }

  if (loggedIn) {
    return <Navigate to="/ecoaventura" />;
  } else if(registerIn){
    return <Navigate to = "/registro"/>
  }

  return (
    <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>
      <h2>Iniciar Sesión</h2>
      <form>
        {/* Campos de usuario y contraseña */}
        <button onClick={handleIniciarSesionClick}>Iniciar Sesión</button>
      </form>
      <button onClick={handleRegistrarseClick}>Registrarse</button>
    </div>
  );
};

export default InicioSesion;



