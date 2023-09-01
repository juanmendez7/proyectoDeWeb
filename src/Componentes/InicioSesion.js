import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const InicioSesion = ({ onIniciarSesion, onRegistrarse }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleIniciarSesionClick = () => {
    // Simulación de lógica de autenticación exitosa
    setLoggedIn(true);
    onIniciarSesion(); // Llamar a la función de App.js
  };

  if (loggedIn) {
    return <Navigate to="/ecoaventura" />;
  }

  return (
    <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>
      <h2>Iniciar Sesión</h2>
      <form>
        {/* Campos de usuario y contraseña */}
        <button onClick={handleIniciarSesionClick}>Iniciar Sesión</button>
      </form>
      <button onClick={onRegistrarse}>Registrarse</button>
    </div>
  );
};

export default InicioSesion;



