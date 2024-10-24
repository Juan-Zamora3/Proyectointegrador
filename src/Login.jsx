// src/Login.jsx
import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import { db } from './firebaseConfig'; // Importa la referencia a Firestore
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Para interactuar con Firestore

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Para registrar el nombre del usuario
  const [isRegister, setIsRegister] = useState(false); // Alterna entre login y registro
  const [alert, setAlert] = useState(''); // Almacena la alerta que se mostrará
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Hook para redirigir

  // Manejar el cambio de valores en los campos de input
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    setAlert(''); // Limpiar cualquier alerta anterior
    setError(''); // Limpiar cualquier error anterior
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
        navigate("/home");  // Redirige a la página principal
      } else {
        setError('Credenciales incorrectas.');
      }
    } catch (error) {
      setError('Error al acceder a los datos del usuario.');
    }
  };

  // Manejar el registro de usuario
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setAlert('Por favor, completa todos los campos.');
      return;
    }

    if (password.length < 6) {
      setAlert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      // Verificar si el correo ya está registrado
      const userDoc = await getDoc(doc(db, 'Usuarios', email));
      if (userDoc.exists()) {
        setAlert('El correo ya está en uso. Por favor, usa otro o inicia sesión.');
        return;
      }

      // Guarda los datos del usuario en la colección "Usuarios"
      await setDoc(doc(db, 'Usuarios', email), {
        name: name,
        email: email,
        password: password
      });

      console.log('Usuario registrado:', { name, email });
      // Guardar datos del usuario en localStorage
      localStorage.setItem('user', JSON.stringify({ name, email }));
      setAlert('');
      navigate("/home");  // Redirige a la página principal después del registro
    } catch (error) {
      setError('Error al registrar el usuario.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isRegister ? 'Registro de Usuario' : 'Inicio de Sesión'}</h2>
        {alert && <div className="alert">{alert}</div>}
        {error && <p className="error">{error}</p>}

        <form onSubmit={isRegister ? handleRegister : handleLogin}>
          {isRegister && (
            <div className="input-group">
              <label>Nombre Completo</label>
              <input
                type="text"
                value={name}
                onChange={(e) => handleInputChange(e, setName)}
                placeholder="Nombre Completo"
                required
              />
            </div>
          )}
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
