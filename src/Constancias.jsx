import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore'; // Asegúrate de importar updateDoc

import { db } from './firebaseConfig';
import { saveAs } from 'file-saver';
import { PDFDocument, rgb } from 'pdf-lib';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Constancias.css';

const Constancias = () => {
  const [students, setStudents] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState("");
  const [selectedCursoNombre, setSelectedCursoNombre] = useState('');
  const [pdfBlobs, setPdfBlobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [listasAsociadas, setListasAsociadas] = useState([]);

  // Cargar los cursos
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

  // Cargar estudiantes y listas asociadas a un curso
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

      const uniqueStudents = Array.from(new Set(allStudents.map(student => student.Nombres)))
        .map(nombres => allStudents.find(student => student.Nombres === nombres));

      setStudents(uniqueStudents);
      setSelectedStudents(uniqueStudents.map((_, index) => index));
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
      await Promise.all(students.map(async (student) => {
        try {
          const existingPdfBytes = await fetch('/Proyectointegrador/public/plantillareconocimiento.pdf').then(res => res.arrayBuffer());
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
          console.error(`Error al generar el PDF para el estudiante: ${student.Nombres}`, error);
        }
      }));

      setPdfBlobs(blobs);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Error al generar los PDFs:", error);
      alert("Hubo un error al generar los PDFs.");
    }
  };

  const handleDescargarPDFs = () => {
    const selectedBlobs = pdfBlobs.filter((_, index) => selectedStudents.includes(index));
    selectedBlobs.forEach(({ blob, student }) => {
      saveAs(blob, `Constancia_${student.Nombres}_${student.ApellidoP}.pdf`);
    });
  };

  const handleGuardarAsistencia = async () => {
    try {
      const asistenciaData = {
        cursoId: selectedCurso,
        cursoNombre: selectedCursoNombre,
        fecha: new Date(),
        estudiantes: [], // Aquí guardamos la lista de estudiantes presentes
      };
  
      // Agregar los estudiantes seleccionados a la lista de estudiantes
      selectedStudents.forEach((index) => {
        const student = students[index];
        asistenciaData.estudiantes.push({
          nombres: student.Nombres,
          apellidoP: student.ApellidoP,
          apellidoM: student.ApellidoM,
        });
      });
  
      // Obtener el documento del curso
      const courseDocRef = doc(db, 'Cursos', selectedCurso);
      const courseDocSnapshot = await getDoc(courseDocRef);
  
      if (!courseDocSnapshot.exists()) {
        alert('Curso no encontrado');
        return;
      }
  
      const courseData = courseDocSnapshot.data();
  
      // Guardar la lista de asistencia en el curso seleccionado
      await updateDoc(courseDocRef, {
        asistencia: [
          ...(courseData.asistencia || []), // Mantener las asistencias existentes
          asistenciaData,
        ],
      });
  
      alert('Asistencia guardada con éxito');
      setSelectedStudents([]);
    } catch (error) {
      console.error('Error al guardar la asistencia:', error);
      alert('Hubo un error al guardar la asistencia.');
    }
  };
  
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pdfBlobs.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pdfBlobs.length) % pdfBlobs.length);
  };

  const handleSelectStudent = (index) => {
    setSelectedStudents(prevSelected =>
      prevSelected.includes(index)
        ? prevSelected.filter(studentIndex => studentIndex !== index)
        : [...prevSelected, index]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(students.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="constancias-container">
      <div className="form-section">
        <h2>Constancias</h2>

        <label>Seleccionar Curso</label>
        <select onChange={handleCursoChange}>
          <option value="">Seleccione un curso</option>
          {cursos.map((curso) => (
            <option key={curso.id} value={curso.id}>
              {curso.cursoNombre}
            </option>
          ))}
        </select>

        <button onClick={handleGenerarPDFs} disabled={!selectedCurso || students.length === 0}>
          Generar Constancias
        </button>
        <button onClick={handleGuardarAsistencia} disabled={!selectedCurso || selectedStudents.length === 0}>
          Guardar Asistencia
        </button>

        <h3>Listas asociadas</h3>
        {listasAsociadas.length > 0 ? (
          <ul>
            {listasAsociadas.map((lista, index) => (
              <li key={index}>{lista}</li>
            ))}
          </ul>
        ) : (
          <p>No hay listas asociadas para este curso.</p>
        )}

        <h3>Integrantes del curso</h3>
        {students.length > 0 && (
          <div className="students-list">
            <ul>
              {students.map((student, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(index)}
                    onChange={() => handleSelectStudent(index)}
                  />
                  {`${student.Nombres} ${student.ApellidoP} ${student.ApellidoM}`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {pdfBlobs.length > 0 && (
        <div className="preview-section">
          <h3>Vista Previa de las Constancias</h3>

          <div className="buttons">
            <button onClick={handlePrevious} disabled={pdfBlobs.length <= 1}>Anterior</button>
            <button onClick={handleNext} disabled={pdfBlobs.length <= 1}>Siguiente</button>
            <button onClick={handleDescargarPDFs}>Descargar Constancias</button>
          </div>

          <div className="pdf-carousel">
            <div className="pdf-preview-item">
              <div className="student-select">
                <input
                  type="checkbox"
                  checked={selectedStudents.includes(currentIndex)}
                  onChange={() => handleSelectStudent(currentIndex)}
                />
                <span>{`${students[currentIndex].Nombres} ${students[currentIndex].ApellidoP} ${students[currentIndex].ApellidoM}`}</span>
              </div>
              <div className="pdf-viewer">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer fileUrl={URL.createObjectURL(pdfBlobs[currentIndex].blob)} />
                </Worker>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Constancias;
