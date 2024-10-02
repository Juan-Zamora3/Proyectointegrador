// src/Lists.jsx
import React, { useState } from 'react';
import './Lists.css'; // Asegúrate de tener este archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'; // Icono de búsqueda

function Lists() {
    const [showAttendance, setShowAttendance] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const courses = [
        { id: 1, name: 'Curso 1', date: '01/01/2024' },
        { id: 2, name: 'Curso 2', date: '02/01/2024' },
        // Agrega más cursos según sea necesario
    ];

    const handleDoubleClick = (course) => {
        setSelectedCourse(course); // Establecer el curso seleccionado
        setShowAttendance(true); // Mostrar la ventana de asistencia
    };

    const handleBackToLists = () => {
        setShowAttendance(false); // Volver a la vista de listas
        setSelectedCourse(null); // Resetear el curso seleccionado
    };

    return (
        <div className="lists-container">
            {!showAttendance ? (
                <>
                    <h2 className="title-lists">Listas</h2>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="search-button">
                            <FontAwesomeIcon icon={faSearchPlus} /> Buscar
                        </button>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Lista de Cursos</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses
                                    .filter(course => 
                                        course.name.toLowerCase().includes(searchTerm.toLowerCase())
                                    )
                                    .map((course) => (
                                        <tr key={course.id} onDoubleClick={() => handleDoubleClick(course)}>
                                            <td>{course.name}</td>
                                            <td>{course.date}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <Attendance course={selectedCourse} onBack={handleBackToLists} />
            )}
        </div>
    );
}

function Attendance({ course, onBack }) {
    return (
        <div className="attendance-container">
            <h2 className="title-attendance">Asistencia de {course.name}</h2>
            <button onClick={onBack} className="back-button">Regresar a Listas</button>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Seleccionar</th>
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
                            <td>Pérez</td>
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

export default Lists;
