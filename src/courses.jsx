import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Courses.css';
import NuevoCurso from './NuevoCurso';

function Courses() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);
  const [editName, setEditName] = useState('');

  const fetchCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Cursos'));
      const loadedCourses = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log('Cursos cargados desde Firebase:', loadedCourses);
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
    setEditName(course.cursoNombre);
  };

  const handleSaveEdit = async () => {
    if (editingCourse) {
      try {
        await updateDoc(doc(db, 'Cursos', editingCourse.id), { Nombre: editName });
        fetchCourses();
        setEditingCourse(null);
      } catch (error) {
        console.error('Error al actualizar el curso:', error);
      }
    }
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

  return (
    <div className="courses-container">
      <h2 className="title-courses">Cursos</h2>

      {showAddForm ? (
        <NuevoCurso />
      ) : (
        <>
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
                {courses.length === 0 ? (
                  <tr>
                    <td colSpan="3">No se encontraron cursos.</td>
                  </tr>
                ) : (
                  courses.map((course) => (
                    <tr key={course.id}>
                      <td>
                        {editingCourse && editingCourse.id === course.id ? (
                          <input
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                          />
                        ) : (
                          course.cursoNombre || 'Sin nombre'
                        )}
                      </td>
                      <td>
                        {course.FechaInicio ? new Date(course.Fecha.seconds * 1000).toLocaleDateString() : 'N/A'}
                      </td>
                      <td>
                        {editingCourse && editingCourse.id === course.id ? (
                          <button onClick={handleSaveEdit} className="save-button">
                            Guardar
                          </button>
                        ) : (
                          <>
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
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Courses;
