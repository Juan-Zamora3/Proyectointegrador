import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faList, faUserCheck, faChartPie, faFileAlt, faAward, faSignOutAlt, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Courses from './courses';
import Lists from './Lists';
import Asistencia from './Asistencia';
import Personal from './personal'; // Componente reutilizado como "Personal"
import Constancias from './Constancias';
import Reportes from './Reportes';
import Graficas from './Graficas';
import Cuentas from './Cuentas';
import './HomePage.css';

function HomePage() {
  const [selectedMenu, setSelectedMenu] = useState('Cursos');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Cambiar de 'Cuentas' a 'user'
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm('¿Estás seguro de que deseas cerrar sesión?');
    if (confirmLogout) {
      localStorage.removeItem('user');
      window.location.href = '/';
    }
  };

  return (
    <div className="container">
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
            <li onClick={() => handleMenuClick('Personal')}>
              <Link to="#">
                <FontAwesomeIcon icon={faUserTie} />
                <span>Personal</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Listas')}>
              <Link to="#">
                <FontAwesomeIcon icon={faList} />
                <span>Listas</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Graficas')}>
              <Link to="#">
                <FontAwesomeIcon icon={faChartPie} />
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
                <FontAwesomeIcon icon={faAward} />
                <span>Constancias</span>
              </Link>
            </li>
            <li onClick={() => handleMenuClick('Asistencias')}>
              <Link to="#">
                <FontAwesomeIcon icon={faUserCheck} />
                <span>Asistencias</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="linea-settings"></div>
        <nav className="navegacion">
          <ul>
            <li onClick={() => handleMenuClick('Cuentas')}>
              <Link to="#">
                <FontAwesomeIcon icon={faUsers} />
                <span>Cuentas</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li onClick={handleLogout}>
              <Link to="#" >
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Cerrar Sesión</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="content-wrapper">
        <div className="banner">
          <h1 className="titulo-banner">{selectedMenu || ''}</h1>
        </div>
        <main className="main-content">
          <div className="content">
            {selectedMenu === 'Cursos' && <Courses />}
            {selectedMenu === 'Personal' && <Personal />} {/* Cambiado aquí */}
            {selectedMenu === 'Listas' && <Lists />}
            {selectedMenu === 'Asistencias' && <Asistencia />}
            {selectedMenu === 'Graficas' && <Graficas />}
            {selectedMenu === 'Reportes' && <Reportes />}
            {selectedMenu === 'Constancias' && <Constancias />}
            {selectedMenu === 'Cuentas' && <Cuentas />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
