// src/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faList, faCheckSquare, faChartBar, faFileAlt, faFileContract, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Courses from './courses';
import Lists from './Lists';
import Asistencias from './Asistencias';
import Constancias from './Constancias';
import Reportes from './Reportes';
import Graficas from './Graficas';
import './HomePage.css';

function HomePage() {
  const [selectedMenu, setSelectedMenu] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recuperar datos del usuario desde localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile">
          <img src="https://via.placeholder.com/50" alt="Avatar de Usuario" className="avatar" />
          <h4>{user ? user.name : 'Administrador'}</h4>
          <p>{user ? user.email : 'Administrador@gmail.com'}</p>
        </div>
        <nav>
          <ul>
            <li onClick={() => handleMenuClick('Cursos')}>
              <Link to="">
                <FontAwesomeIcon icon={faBook} /><span>Cursos</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Listas')}>
              <Link to="">
                <FontAwesomeIcon icon={faList} /><span>Listas</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Asistencias')}>
              <Link to="">
                <FontAwesomeIcon icon={faCheckSquare} /><span>Personal</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Graficas')}>
              <Link to="">
                <FontAwesomeIcon icon={faChartBar} /><span>Gráficas</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Reportes')}>
              <Link to="">
                <FontAwesomeIcon icon={faFileAlt} /><span>Reportes</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Constancias')}>
              <Link to="">
                <FontAwesomeIcon icon={faFileContract} /><span>Constancias</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="settings">
          <Link to="/" onClick={() => localStorage.removeItem('user')}>
            <FontAwesomeIcon icon={faSignOutAlt} /><span>Cerrar Sesión</span>
          </Link>
        </div>
      </aside>
      <main className="main-content">
        {selectedMenu === 'Cursos' && <Courses />}
        {selectedMenu === 'Listas' && <Lists />}
        {selectedMenu === 'Asistencias' && <Asistencias />}
        {selectedMenu === 'Graficas' && <p>Contenido para Gráficas</p>}
        {selectedMenu === 'Reportes' && <Reportes />}
        {selectedMenu === 'Constancias' && <Constancias />}
        {selectedMenu === 'Graficas' && <Graficas />}
      </main>
    </div>
  );
}

export default HomePage;
