import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import './Asistencia.css';
import * as XLSX from 'xlsx';

const Asistencia = () => {
  const [cursos, setCursos] = useState([]);
  const [selectedAsistencia, setSelectedAsistencia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCursos();
  }, []);
  const handleExportToExcel = () => {
    if (!selectedAsistencia) return;
  
    const workbook = XLSX.utils.book_new();
  
    // Crear la hoja de asistencia
    const asistenciaData = [
      ['Nombre', 'Apellido Paterno', 'Apellido Materno'],
      ...selectedAsistencia.asistencia.flatMap((asistencia) =>
        asistencia.estudiantes.map((estudiante) => [
          estudiante.Nombres,
          estudiante.ApellidoP,
          estudiante.ApellidoM,
        ])
      ),
    ];
    const asistenciaSheet = XLSX.utils.aoa_to_sheet(asistenciaData);
    XLSX.utils.book_append_sheet(workbook, asistenciaSheet, 'Asistencia');
  
    // Crear hoja de información general
    const generalData = [
      ['Curso', selectedAsistencia.cursoNombre || 'No disponible'],
      ['Asesor', selectedAsistencia.asesor || 'No disponible'],
      ['Fecha de Inicio', selectedAsistencia.fechaInicio || 'No disponible'],
      ['Fecha de Finalización', selectedAsistencia.fechaFin || 'No disponible'],
    ];
    const generalSheet = XLSX.utils.aoa_to_sheet(generalData);
    XLSX.utils.book_append_sheet(workbook, generalSheet, 'Información General');
  
    // Crear hoja de comentarios
    const comentariosData = [
      ['Comentario'],
      ...(selectedAsistencia.reportes?.map((reporte) => [reporte.comentario]) || [
        ['No hay comentarios disponibles'],
      ]),
    ];
    const comentariosSheet = XLSX.utils.aoa_to_sheet(comentariosData);
    XLSX.utils.book_append_sheet(workbook, comentariosSheet, 'Comentarios');
  
    // Descargar el archivo Excel
    XLSX.writeFile(workbook, `Asistencia_${selectedAsistencia.cursoNombre}.xlsx`);
  };
  const fetchCursos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Cursos'));
      const loadedCursos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCursos(normalizeData(loadedCursos));
    } catch (error) {
      console.error('Error al cargar los cursos:', error);
    }
  };

  const normalizeData = (data) => {
    return data.map((item) => ({
      ...item,
      asesor: item.asesor || 'No disponible',
      asistencia: item.asistencia || [],
      reportes: item.reportes || [],
      imagenes: Array.isArray(item.imagenes) ? item.imagenes : [],
    }));
  };

  const capitalize = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const getField = (obj, fieldName) => {
    if (!obj || !fieldName) return 'No disponible';
    const value = obj[fieldName] ?? 'No disponible';
    if (['Nombres', 'ApellidoP', 'ApellidoM'].includes(fieldName)) {
      return capitalize(value);
    }
    return value;
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este curso?')) {
      try {
        // Elimina el documento completo usando el ID
        await deleteDoc(doc(db, 'Cursos', id));
  
        // Actualiza el estado local eliminando el curso del arreglo
        setCursos((prevCursos) => prevCursos.filter((curso) => curso.id !== id));
  
        alert('Curso eliminado con éxito.');
      } catch (error) {
        console.error('Error al eliminar el curso:', error);
        alert('Hubo un error al eliminar el curso.');
      }
    }
  };

  const handleOpenModal = (curso) => {
    setSelectedAsistencia(curso);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAsistencia(null);
  };

  return (
    <div className="asistencia-container">
      <div className="asistencia-grid">
        {cursos.length === 0 ? (
          <p>No hay cursos disponibles.</p>
        ) : (
          cursos.map((curso) => (
            <div key={curso.id} className="asistencia-card">
              <h3>{getField(curso, 'cursoNombre')}</h3>
              <p><strong>Fecha de inicio:</strong> {getField(curso, 'fechaInicio')}</p>
              <p><strong>Fecha de finalización:</strong> {getField(curso, 'fechaFin')}</p>
              <p><strong>Asesor:</strong> {getField(curso, 'asesor')}</p>
              <div className="card-actions">
                <button onClick={() => handleOpenModal(curso)} className="btn-ver">
                  <i className="icon-eye"></i> Ver
                </button>
                <button onClick={() => handleDelete(curso.id)} className="btn-eliminar">
                  <i className="icon-trash"></i> Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {isModalOpen && selectedAsistencia && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{getField(selectedAsistencia, 'cursoNombre')}</h3>
            <p><strong>Asesor:</strong> {getField(selectedAsistencia, 'asesor')}</p>
            <p><strong>Fecha de inicio:</strong> {getField(selectedAsistencia, 'fechaInicio')}</p>
            <p><strong>Fecha de finalización:</strong> {getField(selectedAsistencia, 'fechaFin')}</p>

            <h4>Lista de Asistencia:</h4>
            <div className="table-scroll-container">
              {selectedAsistencia.asistencia?.length > 0 ? (
                <table className="asistencia-table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido Paterno</th>
                      <th>Apellido Materno</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedAsistencia.asistencia.map((asistencia, index) =>
                      asistencia.estudiantes.map((estudiante, estudianteIndex) => (
                        <tr key={`estudiante-${index}-${estudianteIndex}`}>
                          <td>{capitalize(estudiante.Nombres)}</td>
                          <td>{capitalize(estudiante.ApellidoP)}</td>
                          <td>{capitalize(estudiante.ApellidoM)}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              ) : (
                <p>No hay asistencias registradas.</p>
              )}
            </div>

            <h4></h4>
            {selectedAsistencia.reportes?.length > 0 ? (
              selectedAsistencia.reportes.map((reporte, index) => (
                <div key={`reporte-${index}`} className="comment-section">
                  <p><strong>Comentario:</strong> {reporte.comentario || 'Sin comentario'}</p>
             
                </div>
              ))
            ) : (
              <p>No hay comentarios registrados.</p>
            )}

            <h4>Imágenes:</h4>
            {selectedAsistencia.reportes?.some((reporte) => reporte.imagenes?.length > 0) ? (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop
                spaceBetween={10}
                slidesPerView={1}
                className="image-carousel"
              >
                {selectedAsistencia.reportes.flatMap((reporte, reporteIndex) =>
                  reporte.imagenes?.map((url, imgIndex) => (
                    <SwiperSlide key={`reporte-${reporteIndex}-image-${imgIndex}`}>
                      <div className="image-item">
                        <img
                          src={url}
                          alt={`Reporte ${reporteIndex + 1} - Imagen ${imgIndex + 1}`}
                          className="carousel-image"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/150?text=No+disponible';
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  ))
                )}
              </Swiper>
            ) : (
              <p>No hay imágenes disponibles.</p>
            )}

            <div className="modal-actions">
            <button onClick={handleExportToExcel} className="btn-export">Exportar a Excel</button>
            <button onClick={handleCloseModal} className="btn-close">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Asistencia;
