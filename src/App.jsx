import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx'; // Página de inicio de sesión
import HomePage from './HomePage.jsx'; // Página principal
import Courses from './courses.jsx'; // Página de Cursos
import Cuentas from './Cuentas.jsx'; // Página de Cuentas

function App() {
  return (
    <Router basename="/Proyectointegrador"> {/* Asegúrate de usar el basename correcto para GitHub Pages */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Página de inicio de sesión */}
        <Route path="/home" element={<HomePage />} /> {/* Página principal */}
        <Route path="/cursos" element={<Courses />} /> {/* Página de Cursos */}
        <Route path="/cuentas" element={<Cuentas />} /> {/* Página de Cuentas */}
      </Routes>
    </Router>
  );
}

export default App;
