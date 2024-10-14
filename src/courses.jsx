import React, { useState, useEffect } from 'react';
import './Courses.css'; // Mantén el estilo de Cursos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import NuevoCurso from './NuevoCurso'; // Importa el nuevo componente
import { collection, getDocs, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore'; // Importa las funciones necesarias de Firestore
import { db } from './firebaseConfig'; // Importa la configuración correcta de Firebase

const Courses = () => {
  const [nuevoCursoVisible, setNuevoCursoVisible] = useState(false);
  const [cursos, setCursos] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  // Función para obtener los cursos desde Firestore
  const obtenerCursos = async () => {
    const querySnapshot = await getDocs(collection(db, 'cursos'));
    const cursosObtenidos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCursos(cursosObtenidos);
  };

  // Efecto para cargar los cursos al montar el componente
  useEffect(() => {
    // Usamos onSnapshot para obtener los cambios en tiempo real
    const unsubscribe = onSnapshot(collection(db, 'cursos'), (snapshot) => {
      const cursosActualizados = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCursos(cursosActualizados);
    });

    // Limpiar el snapshot cuando se desmonta el componente
    return () => unsubscribe();
  }, []);

  // Función para eliminar un curso
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

  // Función para seleccionar un curso para editar
  const handleEditar = (curso) => {
    setCursoSeleccionado(curso); // Selecciona el curso para editar
    setNuevoCursoVisible(true); // Muestra el formulario de edición
  };

  // Función para actualizar el curso
  const handleActualizarCurso = async (cursoId, updatedCurso) => {
    try {
      const cursoRef = doc(db, 'cursos', cursoId);
      await updateDoc(cursoRef, updatedCurso);
      alert('Curso actualizado exitosamente');
      setCursoSeleccionado(null); // Limpia el curso seleccionado
      setNuevoCursoVisible(false); // Cierra el formulario de edición
    } catch (error) {
      console.error("Error al actualizar el curso: ", error);
    }
  };

  return (
    <div className="courses-container">
      {!nuevoCursoVisible ? (
        <>
          <h1 className="title-courses">Cursos</h1>
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Buscar curso" />
            <button className="search-button">
              <FontAwesomeIcon icon={faSearchPlus} /> Buscar
            </button>
          </div>
          <div className="main-content">
            <div className="actions-container">
              <button className="action-button" onClick={() => setNuevoCursoVisible(true)}>
                <FontAwesomeIcon icon={faPlus} className="fa-icon" /> Agregar
              </button>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID curso</th>
                    <th>Nombre</th>
                    <th>Asesor</th>
                    <th>Fecha de Inicio</th>
                    <th>Fecha de Finalización</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cursos.map((curso) => (
                    <tr key={curso.id}>
                      <td>{curso.id}</td>
                      <td>{curso.cursoNombre}</td>
                      <td>{curso.asesor}</td>
                      <td>{curso.fechaInicio}</td>
                      <td>{curso.fechaFin}</td>
                      <td>
                        <button className="action-button" onClick={() => handleEditar(curso)}>
                          <FontAwesomeIcon icon={faEdit} /> Editar
                        </button>
                        <button className="action-button" onClick={() => handleEliminar(curso.id)}>
                          <FontAwesomeIcon icon={faTrash} /> Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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