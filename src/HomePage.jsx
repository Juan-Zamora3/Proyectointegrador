// src/HomePage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faList, faCheckSquare, faChartBar, faFileAlt, faFileContract, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Courses from './courses'; // Importa el componente Courses
import Lists from './Lists'; // Importa el nuevo componente Lists
import Asistencias from './Asistencias'; // Importa el componente Asistencias
import './HomePage.css'; // Estilos para el sidebar y el contenido

function HomePage() {
  const [selectedMenu, setSelectedMenu] = useState('');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile">
          <img src="https://via.placeholder.com/50" alt="Avatar de Usuario" className="avatar" />
          <h4>Nombre de Usuario</h4>
          <p>correo@ejemplo.com</p>
        </div>
        <nav>
          <ul>
            <li onClick={() => handleMenuClick('Cursos')}>
              <Link to="" aria-label="">
                <FontAwesomeIcon icon={faBook} /><span>Cursos</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Listas')}>
              <Link to="" aria-label="">
                <FontAwesomeIcon icon={faList} /><span>Listas</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Asistencias')}>
              <Link to="" aria-label="">
                <FontAwesomeIcon icon={faCheckSquare} /><span>Asistencias</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Graficas')}>
              <Link to="" aria-label="">
                <FontAwesomeIcon icon={faChartBar} /><span>Gráficas</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Reportes')}>
              <Link to="" aria-label="">
                <FontAwesomeIcon icon={faFileAlt} /><span>Reportes</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Constancias')}>
              <Link to="" aria-label="">
                <FontAwesomeIcon icon={faFileContract} /><span>Constancias</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Personal')}>
              <Link to="" aria-label="">
                <FontAwesomeIcon icon={faUsers} /><span>Personal</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="settings">
          <Link to="/" aria-label="Cerrar Sesión">
            <FontAwesomeIcon icon={faSignOutAlt} /><span>Cerrar Sesión</span>
          </Link>
        </div>
      </aside>
      <main className="main-content">
        {/* Eliminar el h1 de bienvenida */}
        {selectedMenu === 'Cursos' && <Courses />} {/* Usa el componente Courses */}
        {selectedMenu === 'Listas' && <Lists />} {/* Usa el nuevo componente Lists */}
        {selectedMenu === 'Asistencias' && <Asistencias />} {/* Usa el componente Asistencias */}
        {selectedMenu === 'Graficas' && <p>Contenido para Gráficas</p>}
        {selectedMenu === 'Reportes' && <p>Contenido para Reportes</p>}
        {selectedMenu === 'Constancias' && <p>Contenido para Constancias</p>}
        {selectedMenu === 'Personal' && <p>Contenido para Personal</p>}
      </main>
    </div>
  );
}

export default HomePage;
