// src/App.js
import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png'; // Importa la imagen del logo correctamente

function App() {
  const [isUser, setIsUser] = useState(true);

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Inicio de Sesión</h2>
        <div className="toggle-buttons">
          <button className={isUser ? 'active' : ''} onClick={() => setIsUser(true)}>
            Usuario
          </button>
          <button className={!isUser ? 'active' : ''} onClick={() => setIsUser(false)}>
            Administrador
          </button>
        </div>
        <form>
          <div className="input-group">
            <label>Número de Empleado</label>
            <input type="text" placeholder="Usuario" />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input type="password" placeholder="Contraseña" />
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="forgot-password">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
      <div className="login-image">
        <img src={logo} alt="Logo" /> {/* Usa la variable logo como src */}
      </div>
    </div>
  );
}

export default App;
