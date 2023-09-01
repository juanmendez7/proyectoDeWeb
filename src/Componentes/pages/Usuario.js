// Usuario.js
import React, { useState } from 'react';

const Usuario = () => {
  const [nombre, setNombre] = useState('');
  const [fotoUrl, setFotoUrl] = useState('');
  
  const containerStyle = {
    backgroundColor: 'blue',
    padding: '20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '5px',
    marginBottom: '10px',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: 'blue' }}>Perfil de Usuario</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="URL de la Foto"
        value={fotoUrl}
        onChange={(e) => setFotoUrl(e.target.value)}
        style={inputStyle}
      />
      <img src={fotoUrl} alt="Foto de Perfil" style={imageStyle} />
      <p style={{ color: 'blue' }}>Nombre: {nombre}</p>
    </div>
  );
};

export default Usuario;
