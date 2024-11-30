import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faList, faCheckSquare, faChartBar, faFileAlt, faFileContract, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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
      {/* Sidebar adaptado */}
      <aside className="barra-lateral">
        <div className="usuario">
          <img
            src="https://7touchgroup.com/wp-content/uploads/2021/10/conocias-las-caracteristicas-de-un-empresario-exitoso.png"
            alt="Avatar de Usuario"
          />
          <div className="info-usuario">
            <div className="nombre-email">
              <span className="nombre">{user ? user.name : 'Administrador'}</span>
              <span className="email">{user ? user.email : 'admin@gmail.com'}</span>
            </div>
          </div>
        </div>
        <nav className="navegacion">
          <ul>
            <li onClick={() => handleMenuClick('Cursos')}>
              <Link to="#">
                <FontAwesomeIcon icon={faBook} />
                <span>Cursos</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Listas')}>
              <Link to="#">
                <FontAwesomeIcon icon={faList} />
                <span>Listas</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Asistencias')}>
              <Link to="#">
                <FontAwesomeIcon icon={faCheckSquare} />
                <span>Personal</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Graficas')}>
              <Link to="#">
                <FontAwesomeIcon icon={faChartBar} />
                <span>Gráficas</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Reportes')}>
              <Link to="#">
                <FontAwesomeIcon icon={faFileAlt} />
                <span>Reportes</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Constancias')}>
              <Link to="#">
                <FontAwesomeIcon icon={faFileContract} />
                <span>Constancias</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="linea-settings"></div>
        <div className="settings">
          <Link to="/" onClick={() => localStorage.removeItem('user')}>
            <FontAwesomeIcon icon={faSignOutAlt} /><span>Cerrar Sesión</span>
          </Link>
        </div>
      </aside>
      <div className="content-wrapper">
        <div className="banner">
          <h1>{selectedMenu || 'Inicio'}</h1>
        </div>
        <main className="main-content">
          <div className="content">
            {selectedMenu === 'Cursos' && <Courses />}
            {selectedMenu === 'Listas' && <Lists />}
            {selectedMenu === 'Asistencias' && <Asistencias />}
            {selectedMenu === 'Graficas' && <Graficas />}
            {selectedMenu === 'Reportes' && <Reportes />}
            {selectedMenu === 'Constancias' && <Constancias />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
