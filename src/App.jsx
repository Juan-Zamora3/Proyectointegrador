import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import { auth } from './firebaseConfig'; // Importa auth desde tu configuración
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // Para autenticación

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false); // Controla si está en modo login o registro
  const [error, setError] = useState('');
  const [alert, setAlert] = useState(''); // Almacena la alerta que se mostrará
  const navigate = useNavigate();  // Hook para redirigir

  // Manejar el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAlert('Por favor, completa todos los campos.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuario logueado:', userCredential.user);
        setAlert(''); // Limpia cualquier alerta anterior
        navigate("/home");  // Redirige a la página principal después del login
      })
      .catch((error) => {
        setError('Error al iniciar sesión: ' + error.message);
      });
  };

  // Manejar el registro de usuario
  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAlert('Por favor, completa todos los campos.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuario registrado:', userCredential.user);
        setAlert(''); // Limpia cualquier alerta anterior
        navigate("/home");  // Redirige a la página principal después del registro
      })
      .catch((error) => {
        setError('Error al registrarse: ' + error.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isRegister ? 'Registro de Usuario' : 'Inicio de Sesión'}</h2>
        {/* Mostrar alerta en caso de error o campos vacíos */}
        {alert && <div className="alert">{alert}</div>}
        {error && <p className="error">{error}</p>}

        <form onSubmit={isRegister ? handleRegister : handleLogin}>
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
          <button type="submit" className="login-button">
            {isRegister ? 'Registrarse' : 'Login'}
          </button>
        </form>
        <div className="toggle-form">
          <p>{isRegister ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}</p>
          <button onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Inicia sesión' : 'Regístrate'}
          </button>
        </div>
      </div>
      <div className="login-image">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Login;
