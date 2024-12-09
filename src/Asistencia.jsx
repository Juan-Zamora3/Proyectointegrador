import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Estilos básicos de Swiper
import 'swiper/css/navigation'; // Estilos para la navegación
import 'swiper/css/pagination'; // Estilos para la paginación

import './Asistencia.css';

const Asistencia = () => {
  const [cursos, setCursos] = useState([]);
  const [selectedAsistencia, setSelectedAsistencia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCursos();
  }, []);

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
    if (['nombres', 'apellidoP', 'apellidoM'].includes(fieldName)) {
      return capitalize(value);
    }
    return value;
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'No disponible';
    return new Intl.DateTimeFormat('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date(timestamp.seconds * 1000));
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta asistencia?')) {
      try {
        await deleteDoc(doc(db, 'Asistencias', id));
        setCursos(cursos.filter((curso) => curso.id !== id));
        alert('Asistencia eliminada con éxito.');
      } catch (error) {
        console.error('Error al eliminar la asistencia:', error);
        alert('Hubo un error al eliminar la asistencia.');
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
      <h2>Asistencias</h2>
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
              <div className="actions">
                <button onClick={() => handleOpenModal(curso)} className="btn-ver">Ver</button>
                <button onClick={() => handleDelete(curso.id)} className="btn-eliminar">Eliminar</button>
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

            <h4>Reportes:</h4>
            {selectedAsistencia.reportes?.length > 0 ? (
              selectedAsistencia.reportes.map((reporte, index) => (
                <div key={`reporte-${index}`}>
                  <p><strong>Comentario:</strong> {getField(reporte, 'comentario')}</p>
                  <p><strong>Calificación:</strong> {getField(reporte, 'calificacion')}</p>
                </div>
              ))
            ) : (
              <p>No hay reportes disponibles.</p>
            )}

            <h4>Imágenes:</h4>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              style={{ maxWidth: '100%', margin: '0 auto' }}
            >
              {selectedAsistencia.reportes?.flatMap((reporte, reporteIndex) =>
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
