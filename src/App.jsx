// src/App.js
import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import { auth, db } from './firebaseConfig'; // Importa auth y db desde tu configuración
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // Para autenticación
import { doc, setDoc } from 'firebase/firestore'; // Para guardar en Firestore

function App() {
  const [isUser, setIsUser] = useState(true);
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Para el registro
  const [error, setError] = useState('');

  // Maneja el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuario logueado:', userCredential.user);
      })
      .catch((error) => {
        setError('Error al iniciar sesión: ' + error.message);
      });
  };

  // Maneja el registro de nuevos usuarios
  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Guarda los datos del usuario en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email
      });

      console.log('Usuario registrado:', user);
    } catch (error) {
      setError('Error al registrarse: ' + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isLogin ? 'Inicio de Sesión' : 'Registro de Usuario'}</h2>
        <div className="toggle-buttons">
          <button className={isUser ? 'active' : ''} onClick={() => setIsUser(true)}>
            Usuario
          </button>
          <button className={!isUser ? 'active' : ''} onClick={() => setIsUser(false)}>
            Administrador
          </button>
        </div>

        {isLogin ? (
          // Formulario de inicio de sesión
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Correo Electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo Electrónico"
                required
              />
            </div>
            <div className="input-group">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="login-button">Login</button>
            <div className="forgot-password">
              <a href="#" onClick={() => setIsLogin(false)}>¿No tienes una cuenta? Regístrate</a>
            </div>
          </form>
        ) : (
          // Formulario de registro
          <form onSubmit={handleRegister}>
            <div className="input-group">
              <label>Nombre Completo</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre Completo"
                required
              />
            </div>
            <div className="input-group">
              <label>Correo Electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo Electrónico"
                required
              />
            </div>
            <div className="input-group">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="login-button">Registrarse</button>
            <div className="forgot-password">
              <a href="#" onClick={() => setIsLogin(true)}>¿Ya tienes una cuenta? Inicia sesión</a>
            </div>
          </form>
        )}
      </div>
      <div className="login-image">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default App;
