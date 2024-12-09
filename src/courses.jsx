import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
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
  const [todasLasListas, setTodasLasListas] = useState([]); // Todas las listas disponibles
  const [formattedListas, setFormattedListas] = useState(''); // Listas legibles del curso seleccionado

  // Cargar cursos desde Firestore
  const fetchCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Cursos'));
      const loadedCourses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(loadedCourses);
    } catch (error) {
      console.error('Error al cargar los cursos:', error);
    }
  };

  // Cargar todas las listas desde Firestore
  const fetchListas = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Listas'));
      const loadedListas = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().Nombre,
      }));
      setTodasLasListas(loadedListas);
    } catch (error) {
      console.error('Error al cargar las listas:', error);
    }
  };

  // Asociar listas de IDs del curso con sus nombres
  const formatListas = (listasIds) => {
    if (!listasIds || listasIds.length === 0) return 'Sin listas asociadas';
    return listasIds
      .map((id) => todasLasListas.find((lista) => lista.id === id)?.name || 'Lista no encontrada')
      .join(', ');
  };

  useEffect(() => {
    fetchCourses();
    fetchListas(); // Cargar todas las listas al inicio
  }, []);

  useEffect(() => {
    if (selectedCourse?.listas) {
      setFormattedListas(formatListas(selectedCourse.listas));
    }
  }, [selectedCourse, todasLasListas]);

  const handleEdit = (course) => {
    setEditingCourse(course);
    setShowAddForm(true);
    setSelectedCourse(null);
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
    setSelectedCourse(course);
    setShowAddForm(false);
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

          {/* Modal con fondo borroso */}
          {selectedCourse && (
            <div className="overlay">
              <div className="modal">
                <h2>Detalles del curso</h2>
                <p><strong>Nombre:</strong> {selectedCourse.cursoNombre}</p>
                <p><strong>Asesor:</strong> {selectedCourse.asesor}</p>
                <p><strong>Fecha:</strong> {selectedCourse.fechaInicio}</p>
                <p><strong>Listas:</strong> {formattedListas}</p>
                <div className="modal-buttons">
                  <button onClick={() => setSelectedCourse(null)}>Cerrar</button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Courses;
