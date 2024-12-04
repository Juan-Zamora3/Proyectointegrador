import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Asistencia.css';

const Asistencia = () => {
  const [cursos, setCursos] = useState([]);
  const [selectedAsistencia, setSelectedAsistencia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Obtener los cursos desde Firestore
  useEffect(() => {
    fetchCursos();
  }, []);

  // Obtener todos los cursos
  const fetchCursos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Cursos'));
      const loadedCursos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Cursos cargados:", loadedCursos);  // Verificación de los datos cargados
      setCursos(loadedCursos);
    } catch (error) {
      console.error('Error al cargar los cursos:', error);
    }
  };

  // Eliminar una asistencia
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta asistencia?')) {
      try {
        await deleteDoc(doc(db, 'Asistencias', id));
        setCursos(cursos.filter(curso => curso.id !== id)); // Corregir la actualización de los cursos
        alert('Asistencia eliminada con éxito.');
      } catch (error) {
        console.error('Error al eliminar la asistencia:', error);
        alert('Hubo un error al eliminar la asistencia.');
      }
    }
  };

  // Abrir el modal con los detalles de la asistencia
  const handleOpenModal = (asistencia) => {
    setSelectedAsistencia(asistencia);
    setIsModalOpen(true);
  };

  // Cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAsistencia(null);
  };

  // Función para obtener el valor de un campo si existe
  const getField = (obj, fieldName) => {
    const fieldValue = obj && obj[fieldName];
    return fieldValue !== undefined && fieldValue !== null ? fieldValue : 'No disponible';
  };

  return (
    <div className="asistencia-container">
      <h2>Asistencias</h2>
      <div className="asistencia-grid">
        {cursos.length === 0 ? (
          <p>No hay cursos disponibles.</p>
        ) : (
          cursos.map((curso) => {
            const asistencia = curso.asistencia && curso.asistencia[0]; // Asume que solo hay una asistencia por curso
            return (
              <div key={curso.id} className="asistencia-card">
                <h3>{getField(curso, 'cursoNombre')}</h3>
                <p><strong>Fecha de inicio:</strong> {getField(curso, 'fechaInicio')}</p>
                <p><strong>Fecha de finalización:</strong> {getField(curso, 'fechaFin')}</p>
                <p><strong>Asesor:</strong> {getField(curso, 'asesor')}</p>
                <div className="actions">
                  <button onClick={() => handleOpenModal(asistencia || curso)} className="btn-ver">Ver</button>
                  {asistencia && (
                    <button onClick={() => handleDelete(asistencia.id)} className="btn-eliminar">Eliminar</button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedAsistencia && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{getField(selectedAsistencia, 'cursoNombre')}</h3>
            <p><strong>Asesor:</strong> {getField(selectedAsistencia, 'asesor')}</p>
            <p><strong>Fecha de inicio:</strong> {getField(selectedAsistencia, 'fechaInicio')}</p>
            <p><strong>Fecha de finalización:</strong> {getField(selectedAsistencia, 'fechaFin')}</p>

            {/* Verificar reportes disponibles */}
            {selectedAsistencia.reportes && selectedAsistencia.reportes.length > 0 ? (
              <div>
                <p><strong>Comentarios:</strong> {getField(selectedAsistencia.reportes[0], 'comentario')}</p>
                <p><strong>Calificación:</strong> {getField(selectedAsistencia.reportes[0], 'calificacion')}</p>
              </div>
            ) : (
              <p>No hay reportes disponibles</p>
            )}

            <h4>Lista de Asistencia:</h4>
            <table>
              <thead>
                <tr>
                  <th>Estudiante</th>
                  <th>Puesto</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(selectedAsistencia.estudiantes) && selectedAsistencia.estudiantes.length > 0 ? (
                  selectedAsistencia.estudiantes.map((estudiante, index) => (
                    <tr key={index}>
                      <td>{`${getField(estudiante, 'nombres')} ${getField(estudiante, 'apellidoP')} ${getField(estudiante, 'apellidoM')}`}</td>
                      <td>{getField(estudiante, 'puesto')}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No hay estudiantes registrados en esta asistencia.</td>
                  </tr>
                )}
              </tbody>
            </table>

            <h4>Imágenes:</h4>
            <div className="carousel">
              {Array.isArray(selectedAsistencia.imagenes) && selectedAsistencia.imagenes.length > 0 ? (
                selectedAsistencia.imagenes.map((url, index) => (
                  <img key={index} src={url} alt={`Imagen ${index + 1}`} />
                ))
              ) : (
                <p>No hay imágenes disponibles.</p>
              )}
            </div>

            <div className="actions">
              <button onClick={handleCloseModal} className="btn-close">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Asistencia;
