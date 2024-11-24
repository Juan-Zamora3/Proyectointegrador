import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import { faSearchPlus, faPlus, faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
=======
import { faSearchPlus, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
>>>>>>> 5a1d3bb48d63da3fe4ef0f8ca938935001d4bb7a
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Courses.css';
import NuevoCurso from './NuevoCurso';

function Courses() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);
<<<<<<< HEAD
  const [selectedCourse, setSelectedCourse] = useState(null);
=======
>>>>>>> 5a1d3bb48d63da3fe4ef0f8ca938935001d4bb7a

  const fetchCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Cursos'));
      const loadedCourses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setCourses(loadedCourses);
    } catch (error) {
      console.error('Error al cargar los cursos:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleEdit = (course) => {
    setEditingCourse(course);
    setShowAddForm(true); // Muestra el formulario de edición
<<<<<<< HEAD
    setSelectedCourse(null); // Oculta detalles al editar
=======
>>>>>>> 5a1d3bb48d63da3fe4ef0f8ca938935001d4bb7a
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este curso?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'Cursos', id));
        fetchCourses();
      } catch (error) {
        console.error('Error al eliminar el curso:', error);
      }
    }
  };

  const handleCancelar = () => {
    setShowAddForm(false);
    setEditingCourse(null);
  };

<<<<<<< HEAD
  const handleVisualizar = (course) => {
    setSelectedCourse(course); // Muestra los detalles del curso seleccionado
    setShowAddForm(false); // Asegúrate de ocultar el formulario
  };

=======
>>>>>>> 5a1d3bb48d63da3fe4ef0f8ca938935001d4bb7a
  const handleActualizarCurso = (id, updatedData) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, ...updatedData } : course
      )
    );
    handleCancelar();
  };

<<<<<<< HEAD
=======
  // Filtrar cursos según el término de búsqueda
>>>>>>> 5a1d3bb48d63da3fe4ef0f8ca938935001d4bb7a
  const filteredCourses = courses.filter((course) =>
    course.cursoNombre?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses-container">
<<<<<<< HEAD
=======
      <h2 className="title-courses">Cursos</h2>

>>>>>>> 5a1d3bb48d63da3fe4ef0f8ca938935001d4bb7a
      {showAddForm ? (
        <NuevoCurso
          cursoSeleccionado={editingCourse}
          onActualizarCurso={handleActualizarCurso}
          onCancelar={handleCancelar}
        />
      ) : (
        <>
<<<<<<< HEAD
          <div className="courses-left">
            <h2 className="title-courses">Cursos</h2>
            <div className="header-container">
              <input
                type="text"
                placeholder="Buscar curso..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-button">
                <FontAwesomeIcon icon={faSearchPlus} /> Buscar
              </button>
              <button onClick={() => setShowAddForm(true)} className="add-course-button">
                <FontAwesomeIcon icon={faPlus} /> Agregar Curso
              </button>
            </div>
            <div className="courses-section">
              {filteredCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <h3>{course.cursoNombre}</h3>
                  <p>{course.fechaInicio}</p>
                  <div className="course-actions">
                    <button onClick={() => handleVisualizar(course)}>
                      <FontAwesomeIcon icon={faEye} /> Ver
                    </button>
                    <button onClick={() => handleEdit(course)}>
                      <FontAwesomeIcon icon={faEdit} /> Editar
                    </button>
                    <button onClick={() => handleDelete(course.id)}>
                      <FontAwesomeIcon icon={faTrash} /> Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="courses-right">
            {selectedCourse ? (
              <div className="course-details">
                <h3>Detalles del Curso</h3>
                <p><strong>Nombre:</strong> {selectedCourse.cursoNombre}</p>
                <p><strong>Fecha Inicio:</strong> {selectedCourse.fechaInicio}</p>
                <p><strong>Fecha Fin:</strong> {selectedCourse.fechaFin}</p>
                <p><strong>Descripción:</strong> {selectedCourse.descripcion || 'No disponible'}</p>
                <p><strong>Listas:</strong> {selectedCourse.listas?.join(', ') || 'Ninguna'}</p>
              </div>
            ) : (
              <div className="course-details">
                <h3>Detalles del Curso</h3>
                <p>Selecciona un curso para ver sus detalles.</p>
              </div>
            )}
=======
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar curso..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-button">
              <FontAwesomeIcon icon={faSearchPlus} /> Buscar
            </button>
          </div>

          <div className="add-course-container">
            <button onClick={() => setShowAddForm(true)} className="add-course-button">
              <FontAwesomeIcon icon={faPlus} /> Agregar Curso
            </button>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.length === 0 ? (
                  <tr>
                    <td colSpan="3">No se encontraron cursos.</td>
                  </tr>
                ) : (
                  filteredCourses.map((course) => (
                    <tr key={course.id}>
                      <td>{course.cursoNombre || 'Sin nombre'}</td>
                      <td>{course.fechaInicio || 'N/A'}</td>
                      <td>
                        <button
                          className="edit-button"
                          onClick={() => handleEdit(course)}
                        >
                          <FontAwesomeIcon icon={faEdit} /> Editar
                        </button>
                        <button
                          className="delete-button"
                          onClick={() => handleDelete(course.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} /> Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
>>>>>>> 5a1d3bb48d63da3fe4ef0f8ca938935001d4bb7a
          </div>
        </>
      )}
    </div>
  );
}

export default Courses;
