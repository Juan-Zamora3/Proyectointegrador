import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import './Asistencia.css';
import ExcelJS from 'exceljs';
import { Buffer } from 'buffer';


const Asistencia = () => {
  const [cursos, setCursos] = useState([]);
  const [selectedAsistencia, setSelectedAsistencia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCursos();
  }, []);
  const getField = (obj, fieldName) => {
    if (!obj || !fieldName) return 'No disponible';
    const value = obj[fieldName] ?? 'No disponible';
  
    // Si los campos son nombres propios, los capitalizamos.
    if (['Nombres', 'ApellidoP', 'ApellidoM', 'cursoNombre', 'asesor'].includes(fieldName)) {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  
    return value;
  };
  

  const handleExportToExcel = async () => {
    if (!selectedAsistencia) return;

    const workbook = new ExcelJS.Workbook();

    // Crear hoja de asistencia
    const asistenciaSheet = workbook.addWorksheet('Asistencia');
    asistenciaSheet.addRow(['Nombre', 'Apellido Paterno', 'Apellido Materno']);
    selectedAsistencia.asistencia.forEach((asistencia) =>
      asistencia.estudiantes.forEach((estudiante) => {
        asistenciaSheet.addRow([estudiante.Nombres, estudiante.ApellidoP, estudiante.ApellidoM]);
      })
    );

    // Crear hoja de información general
    const generalSheet = workbook.addWorksheet('Información General');
    generalSheet.addRow(['Curso', selectedAsistencia.cursoNombre || 'No disponible']);
    generalSheet.addRow(['Asesor', selectedAsistencia.asesor || 'No disponible']);
    generalSheet.addRow(['Fecha de Inicio', selectedAsistencia.fechaInicio || 'No disponible']);
    generalSheet.addRow(['Fecha de Finalización', selectedAsistencia.fechaFin || 'No disponible']);

    // Crear hoja de comentarios
    const comentariosSheet = workbook.addWorksheet('Comentarios');
    comentariosSheet.addRow(['Comentario']);
    (selectedAsistencia.reportes || []).forEach((reporte) => {
      comentariosSheet.addRow([reporte.comentario || 'Sin comentario']);
    });

    // Crear hoja de imágenes
    const imagenesSheet = workbook.addWorksheet('Imágenes');
    imagenesSheet.getColumn(1).width = 40; // Ajustar el ancho de la columna para las imágenes
    imagenesSheet.getRow(1).height = 150; // Ajustar la altura de las filas para las imágenes
    imagenesSheet.addRow(['Imágenes']);

    const addImageToSheet = async (url, sheet, row, workbook) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`No se pudo cargar la imagen: ${response.statusText}`);
        }
        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
    
        // Agrega la imagen al workbook
        const imageId = workbook.addImage({
          buffer: new Uint8Array(arrayBuffer), // Usa Uint8Array
          extension: url.split('.').pop().split('?')[0], // Extrae la extensión del archivo
        });
    
        // Agrega la imagen a la hoja de Excel
        sheet.addImage(imageId, {
          tl: { col: 0, row }, // Top-left: posición inicial de la imagen
          ext: { width: 150, height: 150 }, // Dimensiones de la imagen
        });
      } catch (error) {
        console.error(`Error al agregar la imagen desde ${url}:`, error);
      }
    };

    let row = 2; // Inicia desde la fila 2 para las imágenes
for (const reporte of selectedAsistencia.reportes || []) {
  for (const url of reporte.imagenes || []) {
    await addImageToSheet(url, imagenesSheet, row, workbook); // Asegúrate de pasar los parámetros correctamente
    row+= 11;
  }
}
    const convertBlobToBase64 = (blob) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]); // Obtén solo los datos Base64
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    };
    
    const addImageToSheetAsBase64 = async (url, sheet, row) => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const base64Data = await convertBlobToBase64(blob);
    
        const imageId = workbook.addImage({
          base64: base64Data,
          extension: url.split('.').pop(),
        });
    
        sheet.addImage(imageId, {
          tl: { col: 0, row },
          ext: { width: 150, height: 150 },
        });
      } catch (error) {
        console.error('Error al agregar la imagen:', error);
      }
    };

    // Descargar el archivo Excel
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Asistencia_${selectedAsistencia.cursoNombre}.xlsx`;
    link.click();
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

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este curso?')) {
      try {
        await deleteDoc(doc(db, 'Cursos', id));
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
