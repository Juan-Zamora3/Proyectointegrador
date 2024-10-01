// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/home">Cursos</Link></li>
            <li><Link to="/listas">Listas</Link></li>
            <li><Link to="/asistencias">Asistencias</Link></li>
            <li><Link to="/graficas">Gráficas</Link></li>
            <li><Link to="/reportes">Reportes</Link></li>
            <li><Link to="/constancias">Constancias</Link></li>
            <li><Link to="/personal">Personal</Link></li>
          </ul>
        </nav>
        <div className="settings">
          <Link to="/">Cerrar Sesión</Link>
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
