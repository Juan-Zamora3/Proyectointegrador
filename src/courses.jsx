import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Courses.css';
import NuevoCurso from './NuevoCurso';


function Courses() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

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
    setSelectedCourse(null); // Oculta detalles al editar
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

  const handleVisualizar = (course) => {
    setSelectedCourse(course); // Muestra los detalles del curso seleccionado
    setShowAddForm(false); // Asegúrate de ocultar el formulario
  };

  const handleActualizarCurso = (id, updatedData) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, ...updatedData } : course
      )
    );
    handleCancelar();
  };

  const filteredCourses = courses.filter((course) =>
    course.cursoNombre?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses-container">
      {showAddForm ? (
        <NuevoCurso
          cursoSeleccionado={editingCourse}
          onActualizarCurso={handleActualizarCurso}
          onCancelar={handleCancelar}
        />
      ) : (
        <>
          <div className="courses-left">
            <div className="header-container">
              <input
                type="text"
                placeholder="Buscar curso..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <div class="InputContainer">
                <input
                  placeholder="Buscar curso"
                  name="text"
                  type="text"
                  value={searchTerm}
                  className="search-input"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <label class="labelforsearch" for="input">
                  <svg class="searchIcon" viewBox="0 0 512 512">
                    <path
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                    ></path>
                  </svg>
                </label>
              </div>
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
        </>
      )}
    </div>
  );
}

export default Courses;
