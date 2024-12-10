import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { saveAs } from 'file-saver';
import { PDFDocument, rgb } from 'pdf-lib';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Constancias.css';
import plantillareconocimiento from './assets/plantillareconocimiento.pdf';

const Constancias = () => {
  const [students, setStudents] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState('');
  const [selectedCursoNombre, setSelectedCursoNombre] = useState('');
  const [listasAsociadas, setListasAsociadas] = useState([]);
  const [pdfBlobs, setPdfBlobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchCursos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Cursos'));
      const loadedCursos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCursos(loadedCursos);
    } catch (error) {
      console.error('Error al cargar los cursos:', error);
    }
  };

  const fetchStudentsAndListas = async (cursoId) => {
    try {
      const cursoDocRef = doc(db, 'Cursos', cursoId);
      const cursoData = await getDoc(cursoDocRef);
      const listasIds = cursoData.data().listas;

      const loadedListas = [];
      for (const listaId of listasIds) {
        const listaDocRef = doc(db, 'Listas', listaId);
        const listaDoc = await getDoc(listaDocRef);
        if (listaDoc.exists) {
          loadedListas.push(listaDoc.data().Nombre);
        }
      }
      setListasAsociadas(loadedListas);

      let allStudents = [];
      for (const listaId of listasIds) {
        const listaDocRef = doc(db, 'Listas', listaId);
        const listaDoc = await getDoc(listaDocRef);
        if (listaDoc.exists) {
          allStudents = allStudents.concat(listaDoc.data().Alumnos || []);
        }
      }

      setStudents(allStudents);
      setSelectedStudents(allStudents.map((_, index) => index));
      setSelectAll(true);
    } catch (error) {
      console.error('Error al cargar los estudiantes:', error);
    }
  };

  const handleCursoChange = (event) => {
    const selectedCursoId = event.target.value;
    const selectedCursoText = event.target.options[event.target.selectedIndex].text;
    setSelectedCurso(selectedCursoId);
    setSelectedCursoNombre(selectedCursoText);
    if (selectedCursoId) {
      fetchStudentsAndListas(selectedCursoId);
    }
  };

  const handleGenerarPDFs = async () => {
    try {
      const blobs = [];
      const existingPdfBytes = await fetch(plantillareconocimiento).then(res => res.arrayBuffer());

      await Promise.all(
        students.map(async (student) => {
          try {
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const pages = pdfDoc.getPages();
            const firstPage = pages[0];
            const { width } = firstPage.getSize();

            firstPage.drawText(`A: ${student.Nombres} ${student.ApellidoP} ${student.ApellidoM}`, {
              x: width / 2 - 100,
              y: 420,
              size: 20,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(`Por su participación en el curso: ${selectedCursoNombre}`, {
              x: width / 2 - 150,
              y: 390,
              size: 14,
              color: rgb(0, 0, 0),
            });

            firstPage.drawText(`Agosto de 2024, Puerto Peñasco, Sonora, México.`, {
              x: width / 2 - 150,
              y: 360,
              size: 14,
              color: rgb(0, 0, 0),
            });

            const pdfBytes = await pdfDoc.save();
            blobs.push({ blob: new Blob([pdfBytes], { type: 'application/pdf' }), student });
          } catch (error) {
            console.error(`Error al generar el PDF para ${student.Nombres}:`, error);
          }
        })
      );

      setPdfBlobs(blobs);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Error al generar los PDFs:", error);
      alert("Hubo un error al generar los PDFs.");
    }
  };
  const handleDescargarPDFs = () => {
    if (pdfBlobs.length === 0) {
      alert("No hay PDFs disponibles para descargar.");
      return;
    }
  
    selectedStudents.forEach((index) => {
      const pdfData = pdfBlobs[index];
      if (pdfData) {
        const { blob, student } = pdfData;
        const fileName = `Constancia_${student.Nombres}_${student.ApellidoP}_${student.ApellidoM}.pdf`;
        saveAs(blob, fileName);
      }
    });
  };
  
  const handleGuardarAsistencia = async () => {
    try {
      const asistenciaData = {
        cursoId: selectedCurso,
        cursoNombre: selectedCursoNombre,
        fecha: new Date(),
        estudiantes: selectedStudents.map((index) => students[index]),
      };

      const cursoDocRef = doc(db, 'Cursos', selectedCurso);
      const cursoData = await getDoc(cursoDocRef);

      if (cursoData.exists) {
        const currentAsistencia = cursoData.data().asistencia || [];
        await updateDoc(cursoDocRef, {
          asistencia: [...currentAsistencia, asistenciaData],
        });
        alert('Asistencia guardada correctamente');
      } else {
        alert('El curso seleccionado no existe');
      }
    } catch (error) {
      console.error('Error al guardar asistencia:', error);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pdfBlobs.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pdfBlobs.length) % pdfBlobs.length);
  };

  return (
    <div className="constancias-container">
      <div className="form-section">
        <h2>Cursos disponibles</h2>
        <select onChange={handleCursoChange} className="select-box">
          <option value="">Seleccione un curso</option>
          {cursos.map((curso) => (
            <option key={curso.id} value={curso.id}>
              {curso.cursoNombre}
            </option>
          ))}
        </select>
        <h3>Listas</h3>
        <p>{listasAsociadas.join(' / ') || 'No hay listas asociadas'}</p>
        <div className="students-table-container">
          <table className="students-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" checked={selectAll} onChange={() => setSelectAll(!selectAll)} />
                </th>
                <th>Participante</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(index)}
                      onChange={() =>
                        setSelectedStudents(prev =>
                          prev.includes(index)
                            ? prev.filter(i => i !== index)
                            : [...prev, index]
                        )
                      }
                    />
                  </td>
                  <td>{`${student.Nombres} ${student.ApellidoP} ${student.ApellidoM}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="action-buttons">
          <button onClick={handleGenerarPDFs}>Generar Constancias</button>
          <button onClick={handleGuardarAsistencia}>Guardar Asistencia</button>
          <button onClick={handleDescargarPDFs}>Descargar PDFs</button>
        </div>
      </div>
      <div className="preview-section">
        <h3>Vista Previa</h3>
        {pdfBlobs.length > 0 && (
          <div className="pdf-preview-container">
            <button onClick={handlePrevious}>&#x25C0;</button>
            <div className="pdf-viewer">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={URL.createObjectURL(pdfBlobs[currentIndex].blob)} />
              </Worker>
            </div>
            <button onClick={handleNext}>&#x25B6;</button>
          </div>
        )}
      </div>
      
    </div>
    
  );
};

export default Constancias;
