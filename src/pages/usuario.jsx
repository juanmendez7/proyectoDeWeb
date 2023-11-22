import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './estilos/usuario.css';

const Usuario = () => {
  const [showInicioDevuelta, setInicioDevuelta] = useState(false);
  const email = useSelector(state => state.auth.email); // Ajusta la ruta de acceso al correo electrónico en tu estado de Redux

  const handleInicioBackClick = () => {
    setInicioDevuelta(true);
  };

  if (showInicioDevuelta) {
    return <Navigate to="/ecoaventura" />;
  }

  return (
    <div className="frame5">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="chat" />
          <div className="fondo-azul" />
          <img className="decoracion" />
          <img className="img" />
          <div className="verde-arriba" />
          <img className="decoracion-2" />
          <img className="decoracion-3" />
          <img className="foto-usuario" />
          <button className="casa" onClick={handleInicioBackClick} />
          <div className="fondo-inicio" />
          <div className="text-wrapper">Inicio</div>
          <img className="titulo-ecoedventures" />
          <div className="fondo-usuario" />
          <div className="div">{email}</div> {/* Muestra el correo electrónico */}
          <img className="mensajes" />
        </div>
      </div>
    </div>
  );
};

export default Usuario;



