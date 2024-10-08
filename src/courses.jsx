import React, { useState, useEffect } from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import NuevoCurso from './NuevoCurso';
import { collection, getDocs, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const Courses = () => {
  const [nuevoCursoVisible, setNuevoCursoVisible] = useState(false);
  const [cursos, setCursos] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Obtener cursos desde Firebase
  const obtenerCursos = async () => {
    const querySnapshot = await getDocs(collection(db, 'cursos'));
    const cursosObtenidos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCursos(cursosObtenidos);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'cursos'), (snapshot) => {
      const cursosActualizados = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCursos(cursosActualizados);
    });

    return () => unsubscribe();
  }, []);

  const handleEliminar = async (cursoId) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este curso?");
    if (confirmacion) {
      try {
        await deleteDoc(doc(db, 'cursos', cursoId));
        alert('Curso eliminado exitosamente');
      } catch (error) {
        console.error("Error al eliminar el curso: ", error);
      }
    }
  };

  const handleEditar = (curso) => {
    setCursoSeleccionado(curso);
    setNuevoCursoVisible(true);
  };

  const handleActualizarCurso = () => {
    setCursoSeleccionado(null);
    setNuevoCursoVisible(false);
  };

  const cursosFiltrados = cursos.filter((curso) =>
    curso.cursoNombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses-container">
      {!nuevoCursoVisible ? (
        <>
          <h1 className="title-courses">Cursos</h1>
          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Buscar curso" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">
              <FontAwesomeIcon icon={faSearchPlus} /> Buscar
            </button>
          </div>
          <div className="actions-container">
            <button className="action-button" onClick={() => setNuevoCursoVisible(true)}>
              <FontAwesomeIcon icon={faPlus} className="fa-icon" /> Agregar
            </button>
          </div>
          <div className="courses-list">
            {cursosFiltrados.map((curso) => (
              <div key={curso.id} className="course-item">
                <h3>{curso.cursoNombre}</h3>
                <button className="action-button" onClick={() => handleEditar(curso)}>
                  <FontAwesomeIcon icon={faEdit} /> Editar
                </button>
                <button className="action-button" onClick={() => handleEliminar(curso.id)}>
                  <FontAwesomeIcon icon={faTrash} /> Eliminar
                </button>
              </div>
            ))}
          </div>
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
