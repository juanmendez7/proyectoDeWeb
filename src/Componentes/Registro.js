import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';



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
    <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>
      <h2>Registrarse</h2>
      <form>
        {/* Campos de usuario, correo electrónico y contraseña */}
        <button onClick={handleAcabarRegistroClick}>Acabar Registro</button>
      </form>
    </div>
  );
};

export default Registro;



