import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import FondoAPP from './assets/FondoAPP.png';

// Credenciales administrativas predefinidas
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123',
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [alert, setAlert] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    setAlert('');
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAlert('Por favor, completa todos los campos.');
      return;
    }

    // Validar credenciales de usuario
    if (email === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      setAlert('');
      navigate('/home'); // Redirige a la página principal
    } else {
      setError('Credenciales incorrectas.');
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (!adminUsername || !adminPassword) {
      setAlert('Por favor, completa todos los campos.');
      return;
    }

    // Validar credenciales administrativas
    if (
      adminUsername === ADMIN_CREDENTIALS.username &&
      adminPassword === ADMIN_CREDENTIALS.password
    ) {
      setIsAdminModalOpen(false);
      navigate('/cuentas'); // Redirige a la sección de "Cuentas"
    } else {
      setError('Credenciales administrativas incorrectas.');
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
          <h2>Inicio de Sesión</h2>
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
            <p>¿Necesitas acceso administrativo?</p>
            <button onClick={() => setIsAdminModalOpen(true)}>Acceso Administrativo</button>
          </div>
        </div>
        <div className="login-image">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      {isAdminModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>PARA ACCEDER NECESITAS CUENTA ADMINISTRATIVA</h2>
            {alert && <div className="alert">{alert}</div>}
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleAdminLogin}>
              <div className="input-group">
                <label>Usuario</label>
                <input
                  type="text"
                  value={adminUsername}
                  onChange={(e) => handleInputChange(e, setAdminUsername)}
                  placeholder="Ingresa tu usuario"
                  required
                />
              </div>
              <div className="input-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => handleInputChange(e, setAdminPassword)}
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>
              <button type="submit" className="login-button">
                Iniciar sesión
              </button>
            </form>
            <button className="close-modal" onClick={() => setIsAdminModalOpen(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
