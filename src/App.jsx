// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx'; // Página de inicio de sesión
import HomePage from './HomePage.jsx'; // Página principal

function App() {
  return (
    <Router basename="/Proyectointegrador"> {/* Asegúrate de usar el basename correcto para GitHub Pages */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Página de inicio de sesión */}
        <Route path="/home" element={<HomePage />} /> {/* Página principal */}
      </Routes>
    </Router>
  );
}

export default App;
