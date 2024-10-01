// src/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faList, faCheckSquare, faChartBar, faFileAlt, faFileContract, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css'; // Estilos para el sidebar y el contenido

function HomePage() {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile">
          <img src="https://via.placeholder.com/50" alt="Avatar" className="avatar" />
          <h4>Nombre de Usuario</h4>
          <p>correo@ejemplo.com</p>
        </div>
        <nav>
          <ul>
            <li><Link to="/home"><FontAwesomeIcon icon={faBook} /><span>Cursos</span></Link></li>
            <li><Link to="/listas"><FontAwesomeIcon icon={faList} /><span>Listas</span></Link></li>
            <li><Link to="/asistencias"><FontAwesomeIcon icon={faCheckSquare} /><span>Asistencias</span></Link></li>
            <li><Link to="/graficas"><FontAwesomeIcon icon={faChartBar} /><span>Gráficas</span></Link></li>
            <li><Link to="/reportes"><FontAwesomeIcon icon={faFileAlt} /><span>Reportes</span></Link></li>
            <li><Link to="/constancias"><FontAwesomeIcon icon={faFileContract} /><span>Constancias</span></Link></li>
            <li><Link to="/personal"><FontAwesomeIcon icon={faUsers} /><span>Personal</span></Link></li>
          </ul>
        </nav>
        <div className="settings">
          <Link to="/"><FontAwesomeIcon icon={faSignOutAlt} /><span>Cerrar Sesión</span></Link>
        </div>
      </aside>
      <main className="main-content">
        <h1>Bienvenido al Panel</h1>
        <p>Aquí puedes ver el contenido seleccionado desde el menú.</p>
      </main>
    </div>
  );
}

export default HomePage;
