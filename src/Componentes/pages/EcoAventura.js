import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mandoImage from '../../Imagen/mando.png';
import Libro2Image from '../../Imagen/Libro2.png';
import camaraImage from '../../Imagen/camara.png';

const EcoAventura = () => {
  const [showMinijuegos, setShowMinijuegos] = useState(false);
  const [showLecturas, setShowLecturas] = useState(false);
  const [showVideos, setShowVideos] = useState(false);

  const containerStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    position: 'relative',
    minHeight: '100vh', // Asegura que el contenedor ocupe al menos el 100% de la altura de la pantalla
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
    marginTop: '50px', // Separación desde la parte superior
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const buttonStyle = {
    margin: '40px 100px', // Mayor separación vertical, misma separación horizontal
    padding: '10px 20px', // Aumentamos el padding para hacer los botones más grandes
    backgroundColor: 'green',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  };

  const imageStyle = {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(-622%, -680%)',
    width: '60px',
    
  };
  const imageStyle2 = {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(55%, -680%)',
    width: '60px',
    
  };
  const imageStyle3 = {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(730%, -680%)',
    width: '60px',
    
  };

  const titleStyle = {
    marginBottom: '30px', // Aumentamos el margen inferior del título
  };

  return (
    <div style={containerStyle}>
      <Link to="/inicio" style={closeButtonStyle}>
        Cerrar Sesión
      </Link>
      <Link to="#" style={homeButtonStyle} onClick={() => { setShowMinijuegos(false); setShowLecturas(false); setShowVideos(false); }}>
        CASA
      </Link>
      <h1 style={titleStyle}>EcoEDVentures</h1>
      <img src={mandoImage} alt="Mando" style={imageStyle} />
      <img src={Libro2Image} alt="Libro2" style={imageStyle2} />
      <img src={camaraImage} alt="camara" style={imageStyle3} />
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





















