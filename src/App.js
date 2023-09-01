import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import InicioSesion from './Componentes/InicioSesion';
import Registro from './Componentes/Registro';
import EcoAventura from './Componentes/pages/EcoAventura';

const App = () => {
  const [isIniciarSesion, setIsIniciarSesion] = useState(true);

  const handleIniciarSesion = () => {
    console.log('Iniciando sesión...');
    setIsIniciarSesion(false);
  };

  const handleAcabarRegistro = () => {
    console.log('Registro completado.');
    setIsIniciarSesion(false);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/inicio" element={<InicioSesion onIniciarSesion={handleIniciarSesion} onRegistrarse={() => setIsIniciarSesion(false)} />} />
          <Route path="/registro" element={<Registro onAcabarRegistro={handleAcabarRegistro} />} />
          <Route path="/ecoaventura" element={<EcoAventura />} />
          <Route path="/" element={<Navigate to="/inicio" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;










//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  //);
//}

//export default App;
