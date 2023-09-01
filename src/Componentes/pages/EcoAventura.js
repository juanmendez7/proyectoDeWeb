import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EcoAventura = () => {
  const [showMinijuegos, setShowMinijuegos] = useState(false);
  const [showLecturas, setShowLecturas] = useState(false);
  const [showVideos, setShowVideos] = useState(false);

  const containerStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    position: 'relative',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '5px 10px',
    backgroundColor: 'red',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  };

  const homeButtonStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    padding: '5px 10px',
    backgroundColor: '#d2b48c', // Color café claro
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  };

  const buttonContainerStyle = {
    marginTop: '20px',
  };

  const buttonStyle = {
    marginRight: '10px',
    padding: '5px 10px',
    backgroundColor: 'green',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  };

  return (
    <div style={containerStyle}>
      <Link to="/inicio" style={closeButtonStyle}>
        Cerrar Sesión
      </Link>
      <Link to="#" style={homeButtonStyle} onClick={() => { setShowMinijuegos(false); setShowLecturas(false); setShowVideos(false); }}>
        CASA
      </Link>
      <h1>EcoEDVentures</h1>
      <div style={buttonContainerStyle}>
        <button onClick={() => { setShowMinijuegos(true); setShowLecturas(false); setShowVideos(false); }} style={buttonStyle}>
          MINIJUEGOS GRATUITOS
        </button>
        <button onClick={() => { setShowMinijuegos(false); setShowLecturas(true); setShowVideos(false); }} style={buttonStyle}>
          LECTURAS EDUCATIVAS
        </button>
        <button onClick={() => { setShowMinijuegos(false); setShowLecturas(false); setShowVideos(true); }} style={buttonStyle}>
          VIDEOS INTERACTIVOS
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {showMinijuegos ? (
          <>
            <h2>¡JUEGA AHORA!</h2>
            <p>Divertidos juegos que enseñan conceptos sobre el cambio climático mientras entretienen.</p>
          </>
        ) : showLecturas ? (
          <>
            <h2>¡LEE Y APRENDE!</h2>
            <p>Lecturas adaptadas que utilizan un enfoque lúdico para transmitir información esencial.</p>
          </>
        ) : showVideos ? (
          <>
            <h2>¡VIDEOS ENTRETENIDOS!</h2>
            <p>Videos visuales que explican la problemática del cambio climático de manera cautivadora.</p>
          </>
        ) : (
          <>
            <h2>Objetivo General</h2>
            <p>
              El objetivo general de "EcoEdVentures" es fomentar la conciencia, el conocimiento y la acción en niños en relación con el cambio climático.
              A través de una experiencia educativa interactiva, participativa y divertida, se busca no solo informar, sino también inspirar y empoderar a los niños para que sean agentes de cambio en la lucha contra el cambio climático.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default EcoAventura;




















