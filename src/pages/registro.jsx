import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './estilos/registro.css';
import { useForm } from '../hooks/useForm';
import { registerAuth } from '../store/slices/auth/Thunks';

const Registro = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  
  const [redireccionarInicioSesion, setRedireccionarInicioSesion] = useState(false);
  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    const registroExitoso = localStorage.getItem('registroExitoso');
    if (registroExitoso) {
      setMessage('Registro exitoso. Los datos han sido guardados.');
      localStorage.removeItem('registroExitoso'); // Elimina el mensaje después de mostrarlo una vez
    }
  }, []);

  const handleAcabarRegistroClick = async () => {
    if (!email || !password) {
      setMessage('Por favor, complete todos los campos.');
      return;
    }

    if (!email.includes('@')) {
      setMessage('El correo electrónico debe contener "@"');
      return;
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      await dispatch(registerAuth(email, password));
      localStorage.setItem('registroExitoso', 'true'); // Guarda el estado de registro exitoso en localStorage
      window.location.reload(); // Recarga la página para mostrar el mensaje
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage('Este correo electrónico ya está en uso. Por favor, utiliza otro.');
      } else {
        setMessage('Error en el registro. Hubo un problema al llevar a cabo el registro. Por favor, intenta nuevamente.');
      }
    }
  };

  return (
    <div className="container">
      <div className="background-image4"> </div>
      <div className="login-box">
        <h1>ECOEDVENTURES</h1>
        <h2>¡EDUCACION DEL CAMBIO CLIMATICO!</h2>
        <br />
        <br />
        {message && (
          <p style={{ color: message.includes('éxito') ? 'green' : 'red' }}>{message}</p>
        )}
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            name="email"
            type="text"
            placeholder="Ingresa correo electrónico"
            onChange={(event) => onInputChange(event)}
            value={email}
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Ingresa contraseña"
            onChange={(event) => onInputChange(event)}
            value={password}
          />
          <br />
          <button onClick={handleAcabarRegistroClick}>Acabar Registro</button>
          <br />
          <button onClick={() => setRedireccionarInicioSesion(true)}>¿Ya tienes una cuenta?</button>
        </form>
        {redireccionarInicioSesion && <Navigate to="/inicio" />}
      </div>
    </div>
  );
};

export default Registro;















