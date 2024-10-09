import React, { useState, useEffect } from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore'; // Importar funciones necesarias de Firestore
import { db } from './firebaseConfig';
import NuevoCurso from './NuevoCurso'; // Importar componente para agregar y editar cursos

const Courses = () => {
  const [cursos, setCursos] = useState([]);
  const [menuVisible, setMenuVisible] = useState(null); // Estado para manejar qué menú desplegable está visible
  const [searchTerm, setSearchTerm] = useState('');
  const [nuevoCursoVisible, setNuevoCursoVisible] = useState(false); // Estado para mostrar el formulario de nuevo curso
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null); // Estado para manejar el curso seleccionado para editar

  // Obtener cursos desde Firebase
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

  // Función para manejar el clic en el ícono de "more"
  const toggleMenu = (courseId) => {
    setMenuVisible(menuVisible === courseId ? null : courseId); // Si es el mismo, lo oculta; si no, lo muestra
  };

  // Función para eliminar un curso
  const eliminarCurso = async (cursoId) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este curso?");
    if (confirmacion) {
      try {
        await deleteDoc(doc(db, 'cursos', cursoId));
        alert('Curso eliminado correctamente');
      } catch (error) {
        console.error("Error eliminando el curso: ", error);
      }
    }
  };

  // Función para seleccionar un curso para editar
  const editarCurso = (curso) => {
    setCursoSeleccionado(curso); // Selecciona el curso para editar
    setNuevoCursoVisible(true); // Muestra el formulario de edición
  };

  // Función para manejar el cierre del formulario de nuevo curso
  const handleActualizarCurso = () => {
    setCursoSeleccionado(null);
    setNuevoCursoVisible(false); // Cierra el formulario
  };

  return (
    <div className="courses-container">
      {!nuevoCursoVisible ? (
        <>
          {/* Frame 1: Cuadro de búsqueda y botones */}
          <div className="header-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Buscar curso" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="filter-button">
              <FontAwesomeIcon icon={faSearchPlus} />
            </button>
            <button className="search-button">Buscar</button>
            <button className="add-course-button" onClick={() => setNuevoCursoVisible(true)}>
              <FontAwesomeIcon icon={faPlus} /> Agregar
            </button>
          </div>

          {/* Frame 2: Cursos agrupados por academia */}
          {Object.keys(cursosFiltrados).map((academia) => (
            <div key={academia} className="academia-section">
              {/* Separador con el nombre de la academia */}
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
                        onClick={() => toggleMenu(curso.id)} // Manejador de clic para abrir el menú
                      />
                      {menuVisible === curso.id && (  // Mostrar solo si el menú está activo
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
    </div>
  );
};

export default Courses;
