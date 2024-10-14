import React, { useState, useEffect } from 'react';
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
      }
    }
  };

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
  };

  return (
    <div className="courses-container">
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
    </div>
  );
};

export default Courses;
