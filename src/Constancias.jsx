import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { saveAs } from 'file-saver';
import { PDFDocument, rgb } from 'pdf-lib';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Constancias.css';

const Constancias = () => {
  const [students, setStudents] = useState([]);
  const [listas, setListas] = useState([]);
  const [listaSeleccionada, setListaSeleccionada] = useState('');
  const [pdfBlobs, setPdfBlobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    fetchListas();
  }, []);

  // Cargar listas desde Firebase
  const fetchListas = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Listas'));
      const loadedListas = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setListas(loadedListas);
    } catch (error) {
      console.error('Error al cargar las listas:', error);
    }
  };

  // Cargar estudiantes de la lista seleccionada
  const fetchStudents = async (listName) => {
    try {
      const studentsQuery = query(
        collection(db, 'Alumnos'),
        where('Listas', 'array-contains', listName)
      );
      const studentsSnapshot = await getDocs(studentsQuery);
      const allStudents = studentsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(allStudents);
      setSelectedStudents(allStudents.map(student => student.id)); // Seleccionar todos inicialmente
      setSelectAll(true);
    } catch (error) {
      console.error('Error al cargar los estudiantes:', error);
    }
  };

  const handleListChange = (event) => {
    const selectedListName = event.target.value;
    setListaSeleccionada(selectedListName);
    fetchStudents(selectedListName); // Cargar estudiantes cuando se selecciona una lista
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

        firstPage.drawText(`A: ${student.Nombres} ${student.ApellidoP} ${student.ApellidoM}`, {
          x: width / 2 - 100,
          y: 420,
          size: 20,
          color: rgb(0, 0, 0),
        });

        firstPage.drawText(`Por su participación en el curso: ${listaSeleccionada}`, {
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
    const selectedBlobs = pdfBlobs.filter(({ student }) => selectedStudents.includes(student.id));
    selectedBlobs.forEach(({ blob, student }) => {
      saveAs(blob, `Constancia_${student.Nombres}_${student.ApellidoP}.pdf`);
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pdfBlobs.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pdfBlobs.length) % pdfBlobs.length);
  };

  const handleSelectStudent = (id) => {
    setSelectedStudents(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(studentId => studentId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(students.map(student => student.id));
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="constancias-container">
      <div className="form-section">
        <h2>Constancias</h2>

        <label>Seleccionar Lista</label>
        <select
          value={listaSeleccionada}
          onChange={handleListChange}
        >
          <option value="">Seleccione una lista</option>
          {listas.map((lista) => (
            <option key={lista.id} value={lista.Nombre}>
              {lista.Nombre}
            </option>
          ))}
        </select>

        <button onClick={handleGenerarPDFs} disabled={!listaSeleccionada || students.length === 0}>
          Generar Constancias
        </button>
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
                  checked={selectedStudents.includes(pdfBlobs[currentIndex].student.id)}
                  onChange={() => handleSelectStudent(pdfBlobs[currentIndex].student.id)}
                />
                <span>{`${pdfBlobs[currentIndex].student.Nombres} ${pdfBlobs[currentIndex].student.ApellidoP} ${pdfBlobs[currentIndex].student.ApellidoM}`}</span>
              </div>
              <div className="pdf-viewer">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer fileUrl={URL.createObjectURL(pdfBlobs[currentIndex].blob)} />
                </Worker>
              </div>
            </div>

            <button onClick={handleNext} disabled={pdfBlobs.length <= 1}>Siguiente</button>
          </div>

          <button onClick={handleDescargarPDFs} className="download-all-button">
            Descargar Seleccionados
          </button>
        </div>
      )}
    </div>
  );
};

export default Constancias;
