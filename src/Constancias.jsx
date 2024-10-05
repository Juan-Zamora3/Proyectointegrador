// src/Constancias.jsx
import React, { useState } from 'react';
import './Constancias.css'; // Asegúrate de tener este archivo para los estilos

const Constancias = () => {
  const [cursoSeleccionado, setCursoSeleccionado] = useState('');
  const [listaSeleccionada, setListaSeleccionada] = useState([]);
  const [nombreCompleto, setNombreCompleto] = useState('');
  
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setListaSeleccionada((prev) => 
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleImprimir = () => {
    // Lógica para imprimir
    console.log({
      cursoSeleccionado,
      listaSeleccionada,
      nombreCompleto,
    });
  };

  return (
    <div className="constancias-container">
      <div className="form-section">
        <h2>Constancias</h2>
        
        <label>Seleccionar Curso</label>
        <select value={cursoSeleccionado} onChange={(e) => setCursoSeleccionado(e.target.value)}>
          <option value="">Seleccione un curso</option>
          <option value="Curso 1">Curso 1</option>
          <option value="Curso 2">Curso 2</option>
          {/* Agrega más opciones según sea necesario */}
        </select>
        
        <label>Nombre</label>
        <input
          type="text"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          placeholder="Nombre completo"
        />
        
        <label>Listas</label>
        <div className="listas">
          <label>
            <input
              type="checkbox"
              value="Academia de Sistemas"
              onChange={handleCheckboxChange}
            />
            Academia de Sistemas
          </label>
          <label>
            <input
              type="checkbox"
              value="Academia de Administración"
              onChange={handleCheckboxChange}
            />
            Academia de Administración
          </label>
          {/* Agrega más checkboxes según sea necesario */}
        </div>
        
        <div className="actions">
          <button className="cancel-button">Cancelar</button>
          <button className="create-button" onClick={handleImprimir}>Imprimir</button>
        </div>
      </div>
      
      <div className="preview-section">
        <h3>Vista Previa</h3>
        <img src="./image.png" alt="Vista Previa de Constancia" className="preview-image" />
        {/* Aquí puedes agregar más detalles de vista previa según sea necesario */}
      </div>
    </div>
  );
};

export default Constancias;
