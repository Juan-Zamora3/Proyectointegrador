// src/Attendance.jsx
import React from 'react';
import './Attendance.css'; // Asegúrate de tener este archivo CSS

function Attendance({ onBack }) {
  return (
    <div className="attendance-container">
      <h2 className="title-attendance">Asistencia</h2>
      <button onClick={onBack} className="back-button">Regresar a Listas</button>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Asistencia </th> 
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Área</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes mapear los registros de asistencia desde un estado o una prop */}
            <tr>
              <td><input type="checkbox" /></td>
              <td>Juan</td>
              <td>Zamora</td>
              <td>García</td>
              <td>Estudiante</td>
            </tr>
            {/* Agregar más filas según sea necesario */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
