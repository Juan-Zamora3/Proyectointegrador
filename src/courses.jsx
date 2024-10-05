import React, { useState } from 'react';
import './Courses.css'; // Mantén el estilo de Cursos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import NuevoCurso from './NuevoCurso'; // Importa el nuevo componente

const Courses = () => {
  const [nuevoCursoVisible, setNuevoCursoVisible] = useState(false);

  return (
    <div className="courses-container">
      {!nuevoCursoVisible ? (
        <>
          <h1 className="title-courses">Cursos</h1>
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Buscar curso" />
            <button className="search-button">
              <FontAwesomeIcon icon={faSearchPlus} /> Buscar
            </button>
          </div>
          <div className="main-content">
            <div className="actions-container">
              <button className="action-button" onClick={() => setNuevoCursoVisible(true)}>
                <FontAwesomeIcon icon={faPlus} className="fa-icon" /> Agregar
              </button>
              <button className="action-button">
                <FontAwesomeIcon icon={faEdit} className="fa-icon" /> Editar
              </button>
              <button className="action-button">
                <FontAwesomeIcon icon={faTrash} className="fa-icon" /> Eliminar
              </button>
              <button className="action-button">
                <FontAwesomeIcon icon={faEye} className="fa-icon" /> Visualizar
              </button>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID curso</th>
                    <th>Nombre</th>
                    <th>Asesor</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Curso 1</td>
                    <td>Asesor 1</td>
                    <td>01/01/2024</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Curso 2</td>
                    <td>Asesor 2</td>
                    <td>02/01/2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <NuevoCurso />
      )}
    </div>
  );
};

export default Courses;
