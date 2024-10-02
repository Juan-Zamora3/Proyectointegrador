// src/Asistencias.jsx
import React, { useState } from 'react';
import './Asistencias.css'; // Asegúrate de que este archivo CSS exista

function Asistencias() {
  const [showCourses, setShowCourses] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    { id: 1, name: 'Juan Pérez', area: 'Matemáticas' },
    { id: 2, name: 'Ana García', area: 'Ciencias' },
    // Agrega más estudiantes según sea necesario
  ];

  const handleDoubleClick = (student) => {
    setSelectedStudent(student); // Establecer el estudiante seleccionado
    setShowCourses(true); // Mostrar los cursos del estudiante
  };

  const handleBackToAsistencias = () => {
    setShowCourses(false); // Volver a la vista de asistencias
    setSelectedStudent(null); // Resetear el estudiante seleccionado
  };

  return (
    <div className="asistencias-container">
      {!showCourses ? (
        <>
          <h2 className="title-asistencias">Asistencias</h2>
          <input type="text" placeholder="Buscar..." className="search-input" />
          <table>
            <thead>
              <tr>
                <th>ID Alumno</th>
                <th>Nombre</th>
                <th>Área</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} onDoubleClick={() => handleDoubleClick(student)}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <CoursesOfStudent student={selectedStudent} onBack={handleBackToAsistencias} />
      )}
    </div>
  );
}

function CoursesOfStudent({ student, onBack }) {
  return (
    <div className="courses-container">
      <h2 className="title-courses">Cursos de {student.name}</h2>
      <button onClick={onBack} className="back-button">Regresar a Asistencias</button>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Curso</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes mapear los cursos a los que ha asistido el estudiante */}
            <tr>
              <td>Curso 1</td>
              <td>01/01/2024</td>
            </tr>
            <tr>
              <td>Curso 2</td>
              <td>02/01/2024</td>
            </tr>
            {/* Agrega más filas según sea necesario */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Asistencias;
