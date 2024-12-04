import React, { useState } from 'react';
import './App.css'; // Aquí se define el fondo
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import FondoAPP from './assets/FondoAPP.png'; // Importa la imagen de fondo
import { db } from './firebaseConfig'; // Importa la referencia a Firestore
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Para interactuar con Firestore

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Para registrar el nombre del usuario
  const [isRegister, setIsRegister] = useState(false); // Alterna entre login y registro
  const [alert, setAlert] = useState(''); // Almacena la alerta que se mostrará
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para redirigir

  // Manejar el cambio de valores en los campos de input
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    setAlert(''); // Limpiar cualquier alerta anterior
    setError(''); // Limpiar cualquier error anterior
  };

  // Manejar la redirección a la página de Cuentas
  const handleMenuClick = (menu) => {
    console.log(`Menu seleccionado: ${menu}`);
    if (menu === 'Cuentas') {
      navigate('/cuentas'); // Redirige a la página de Cuentas
    }
  };

  // Manejar el ingreso de usuarios (login manual)
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAlert('Por favor, completa todos los campos.');
      return;
    }

    try {
      // Buscar el usuario en la colección "Usuarios"
      const userDoc = await getDoc(doc(db, 'Usuarios', email));
      if (userDoc.exists() && userDoc.data().password === password) {
        console.log('Usuario encontrado:', userDoc.data());
        // Guardar datos del usuario en localStorage
        localStorage.setItem('user', JSON.stringify({ name: userDoc.data().name, email }));
        setAlert('');
        navigate('/home'); // Redirige a la página principal
      } else {
        setError('Credenciales incorrectas.');
      }
    } catch (error) {
      setError('Error al acceder a los datos del usuario.');
    }
  };

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${FondoAPP})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="login-container">
        <div className="login-form">
          <h2>{isRegister ? 'Registro de Usuario' : 'Inicio de Sesión'}</h2>
          {alert && <div className="alert">{alert}</div>}
          {error && <p className="error">{error}</p>}

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Correo Electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                placeholder="Correo Electrónico"
                required
              />
            </div>
            <div className="input-group">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
                placeholder="Contraseña"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="toggle-form">
            <p>¿No tienes cuenta?</p>
            <button onClick={() => handleMenuClick('Cuentas')}>
              Registrarse
            </button>
          </div>
        </div>
        <div className="login-image">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Login;
