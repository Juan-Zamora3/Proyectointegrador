// src/Login.jsx
import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import { auth, db } from './firebaseConfig'; // Importa auth y db para la autenticación y Firestore
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // Para autenticación
import { doc, setDoc } from 'firebase/firestore'; // Para guardar en Firestore

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Para registrar el nombre del usuario
  const [isRegister, setIsRegister] = useState(false); // Alterna entre login y registro
  const [error, setError] = useState('');
  const [alert, setAlert] = useState(''); // Almacena la alerta que se mostrará
  const navigate = useNavigate();  // Hook para redirigir

  // Manejar el cambio de valores en los campos de input
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    setAlert(''); // Limpiar cualquier alerta anterior
    setError(''); // Limpiar cualquier error anterior
  };

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
        handleFirebaseError(error.code);
      });
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Usuario registrado:', user);

      // Guarda los datos del usuario en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email
      });

      setAlert(''); // Limpia cualquier alerta anterior
      navigate("/home");  // Redirige a la página principal después del registro
    } catch (error) {
      handleFirebaseError(error.code);
    }
  };

  // Manejar los errores de Firebase
  const handleFirebaseError = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        setError('El correo ya está en uso. Por favor, usa otro o inicia sesión.');
        break;
      case 'auth/invalid-email':
        setError('El formato del correo es inválido.');
        break;
      case 'auth/wrong-password':
        setError('La contraseña es incorrecta.');
        break;
      case 'auth/user-not-found':
        setError('No se encontró una cuenta con este correo.');
        break;
      default:
        setError('Error inesperado. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isRegister ? 'Registro de Usuario' : 'Inicio de Sesión'}</h2>
        {/* Mostrar alerta en caso de error o campos vacíos */}
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
