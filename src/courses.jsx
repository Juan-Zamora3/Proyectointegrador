import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'; // Eliminamos faPlus ya que el ícono se reemplazará
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore'; 
import { db } from './firebaseConfig';
import NuevoCurso from './NuevoCurso'; 

const Courses = () => {
  const [cursos, setCursos] = useState([]);
  const [menuVisible, setMenuVisible] = useState(null); 
  const [searchTerm, setSearchTerm] = useState('');
  const [nuevoCursoVisible, setNuevoCursoVisible] = useState(false); 
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null); 

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'cursos'), (snapshot) => {
      const cursosObtenidos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCursos(cursosObtenidos);
    });

    return () => unsubscribe();
  }, []);

  // Agrupar cursos por academia
  const academiasAgrupadas = cursos.reduce((acc, curso) => {
    const { academia } = curso;
    if (!acc[academia]) {
      acc[academia] = [];
    }
    acc[academia].push(curso);
    return acc;
  }, {});

  // Filtrar los cursos basados en el término de búsqueda
  const cursosFiltrados = Object.keys(academiasAgrupadas).reduce((acc, academia) => {
    const cursosFiltradosPorAcademia = academiasAgrupadas[academia].filter((curso) =>
      curso.cursoNombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (cursosFiltradosPorAcademia.length > 0) {
      acc[academia] = cursosFiltradosPorAcademia;
    }
    return acc;
  }, {});

  const toggleMenu = (courseId) => {
    setMenuVisible(menuVisible === courseId ? null : courseId); 
  };

  const eliminarCurso = async (cursoId) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este curso?");
    if (confirmacion) {
      try {
        await deleteDoc(doc(db, 'cursos', cursoId));
        alert('Curso eliminado correctamente');
      } catch (error) {
        console.error("Error eliminando el curso: ", error);
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Courses.css';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);
  const [editName, setEditName] = useState('');

  // Cargar cursos desde Firebase
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
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
      }
    }
  };

<<<<<<< HEAD
  const editarCurso = (curso) => {
    setCursoSeleccionado(curso); 
    setNuevoCursoVisible(true); 
  };

  const handleActualizarCurso = () => {
    setCursoSeleccionado(null);
    setNuevoCursoVisible(false); 
  };

  const handleSearch = (e) => {
    e.preventDefault();
=======
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
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
  };

  return (
    <div className="courses-container">
<<<<<<< HEAD
      {!nuevoCursoVisible ? (
        <>
          {/* Frame 1: Cuadro de búsqueda y botones */}
          <div className="header-container">
            <div className="search">
              <input 
                type="text" 
                className="search__input" 
                placeholder="Buscar curso" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search__button" onClick={handleSearch}>
                <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </button>
              <button className="add-course-button" onClick={() => setNuevoCursoVisible(true)}>
                Agregar
              </button>
            </div>
          </div>

          {/* Frame 2: Cursos agrupados por academia */}
          {Object.keys(cursosFiltrados).map((academia) => (
            <div key={academia} className="academia-section">
              <div className={`academia-separador ${academia === 'Cursos de Administración' ? 'admin' : 'systems'}`}>
                {academia}
              </div>

              {/* Auto-layout para los cursos */}
              <div className="courses-list">
                {cursosFiltrados[academia].map((curso) => (
                  <div key={curso.id} className="course-item">
                    <h3>{curso.cursoNombre}</h3>
                    <div className="more-options">
                      <FontAwesomeIcon 
                        icon={faEllipsisV} 
                        className="more-icon" 
                        onClick={() => toggleMenu(curso.id)} 
                      />
                      {menuVisible === curso.id && (  
                        <div className="dropdown-content">
                          <button className="dropdown-item" onClick={() => editarCurso(curso)}>Editar</button>
                          <button className="dropdown-item" onClick={() => eliminarCurso(curso.id)}>Eliminar</button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <NuevoCurso
          cursoSeleccionado={cursoSeleccionado}
          onActualizarCurso={handleActualizarCurso}
          onCancelar={() => setNuevoCursoVisible(false)}
        />
      )}
=======
      <h2 className="title-courses">Cursos</h2>

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
        <button onClick={() => window.location.href = '/NuevoCurso'} className="add-course-button">
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
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
    </div>
  );
}

export default Courses;