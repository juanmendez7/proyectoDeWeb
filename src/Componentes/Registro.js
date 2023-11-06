import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./registro.css"



const Registro = ({ onAcabarRegistro }) => {
  const [registroCompleto, setRegistroCompleto] = useState(false);

  const handleAcabarRegistroClick = () => {
    // Simulación de lógica de registro exitoso
    setRegistroCompleto(true);
    onAcabarRegistro(); // Llamar a la función de App.js
  };

  if (registroCompleto) {
    return <Navigate to="/ecoaventura" />;
  }

  return (
    <div className='container'>
      <div className="background-image4"> </div>
      <div className="login-box">
      <h2>Registrarse</h2>
      <br/>
      <br/>
      <form>
        {/* Campos de usuario, correo electrónico y contraseña */}
        <input type="text" placeholder="Ingresa correo electronico" />
        <br/>
        <input type="text" placeholder="Ingresa tu nombre de usuario" />
        <br/>
        <input type="text" placeholder="Ingresa contraseña" />
        <br/>
        <input type="text" placeholder="Repita su contraseña" />
        <br/>
        <button onClick={handleAcabarRegistroClick}>Acabar Registro</button>
      </form>
      </div>
    </div>
  );
};

export default Registro;



