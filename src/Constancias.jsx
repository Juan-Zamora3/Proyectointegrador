import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { saveAs } from 'file-saver';
import { PDFDocument, rgb } from 'pdf-lib';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Constancias.css';

const Constancias = () => {
  const [students, setStudents] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState(null);
  const [selectedCursoNombre, setSelectedCursoNombre] = useState('');
  const [pdfBlobs, setPdfBlobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [listasAsociadas, setListasAsociadas] = useState([]);

  useEffect(() => {
    fetchCursos();
  }, []);

  // Cargar los cursos desde Firebase
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

  // Cargar estudiantes y listas asociadas cuando se selecciona un curso
  const fetchStudentsAndListas = async (cursoId) => {
    try {
      const cursoDocRef = doc(db, 'Cursos', cursoId);
      const cursoData = await getDoc(cursoDocRef);
      const listasIds = cursoData.data().listas; // Asumiendo que 'listas' es un arreglo de IDs de listas

      // Cargar los nombres de las listas asociadas al curso
      const loadedListas = [];
      for (const listaId of listasIds) {
        const listaDocRef = doc(db, 'Listas', listaId);
        const listaDoc = await getDoc(listaDocRef);
        if (listaDoc.exists) {
          loadedListas.push(listaDoc.data().Nombre); // Obtener el nombre de cada lista
        }
      }
      setListasAsociadas(loadedListas);

      // Cargar los estudiantes de todas las listas asociadas
      let allStudents = [];
      for (const listaId of listasIds) {
        const listaDocRef = doc(db, 'Listas', listaId);
        const listaDoc = await getDoc(listaDocRef);
        if (listaDoc.exists) {
          allStudents = allStudents.concat(listaDoc.data().Alumnos || []);
        }
      }

      // Eliminar duplicados (si es necesario) basados en un identificador único, por ejemplo, 'Nombre'
      const uniqueStudents = Array.from(new Set(allStudents.map(student => student.Nombre)))
        .map(nombre => allStudents.find(student => student.Nombre === nombre));

      setStudents(uniqueStudents);
      setSelectedStudents(uniqueStudents.map((_, index) => index)); // Seleccionar todos inicialmente
      setSelectAll(true);
    } catch (error) {
      console.error('Error al cargar los estudiantes:', error);
    }
  };

  // Manejar el cambio de curso
  const handleCursoChange = (event) => {
    const selectedCursoId = event.target.value;
    const selectedCursoText = event.target.options[event.target.selectedIndex].text;
    setSelectedCurso(selectedCursoId);
    setSelectedCursoNombre(selectedCursoText);
    if (selectedCursoId) {
      fetchStudentsAndListas(selectedCursoId); // Cargar estudiantes y listas asociadas al curso seleccionado
    }
  };

  const handleGenerarPDFs = async () => {
    try {
      const blobs = [];
      for (const student of students) {
        const existingPdfBytes = await fetch('/Proyectointegrador/plantillareconocimiento.pdf').then(res => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const { width } = firstPage.getSize();

        firstPage.drawText(`A: ${student.Nombre} ${student.ApellidoP} ${student.ApellidoM}`, {
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
      }
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
      saveAs(blob, `Constancia_${student.Nombre}_${student.ApellidoP}.pdf`);
    });
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

        {/* Listas asociadas */}
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

        {/* Integrantes del curso */}
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
                  {`${student.Nombre} ${student.ApellidoP} ${student.ApellidoM}`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {pdfBlobs.length > 0 && (
        <div className="preview-section">
          <h3>Vista Previa de las Constancias</h3>

          <div className="pdf-carousel">
            <button onClick={handlePrevious} disabled={pdfBlobs.length <= 1}>Anterior</button>

            <div className="pdf-preview-item">
              <div className="student-select">
                <input
                  type="checkbox"
                  checked={selectedStudents.includes(currentIndex)}
                  onChange={() => handleSelectStudent(currentIndex)}
                />
                <span>{`${students[currentIndex].Nombre} ${students[currentIndex].ApellidoP} ${students[currentIndex].ApellidoM}`}</span>
              </div>
              <div className="pdf-viewer">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer fileUrl={URL.createObjectURL(pdfBlobs[currentIndex].blob)} />
                </Worker>
              </div>
            </div>

            <button onClick={handleNext} disabled={pdfBlobs.length <= 1}>Siguiente</button>
          </div>

          <button onClick={handleDescargarPDFs}>Descargar Constancias</button>
        </div>
      )}
    </div>
  );
};

export default Constancias;
