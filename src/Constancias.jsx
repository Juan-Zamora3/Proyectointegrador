import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { saveAs } from 'file-saver';
import { PDFDocument, rgb } from 'pdf-lib';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Constancias.css';

const Constancias = () => {
  const [students, setStudents] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState('');
  const [pdfBlob, setPdfBlob] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const studentsRef = collection(db, 'Alumnos');
        const studentsSnapshot = await getDocs(studentsRef);
        const allStudents = studentsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(allStudents);
      } catch (error) {
        console.error('Error al cargar los estudiantes:', error);
      }
    };
    fetchStudents();
  }, []);

  const handleGenerarPDF = async (student) => {
    try {
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

      firstPage.drawText(`Por su participación en el curso: ${cursoSeleccionado || student.Cursos?.[0] || 'Curso Desconocido'}`, {
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
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });

      setPdfBlob(blob);
      saveAs(blob, 'Constancia.pdf');
    } catch (error) {
      console.error("Error al generar el PDF:", error);
      alert("Hubo un error al generar el PDF.");
    }
  };

  return (
    <div className="constancias-container">
      <div className="form-section">
        <h2>Constancias</h2>

        <label>Seleccionar Curso</label>
        <select
          value={cursoSeleccionado}
          onChange={(e) => setCursoSeleccionado(e.target.value)}
        >
          <option value="">Seleccione un curso</option>
          <option value="Curso 1">Curso 1</option>
          <option value="Curso 2">Curso 2</option>
          <option value="Curso Evolución">Curso Evolución</option>
        </select>

        <div className="students-section">
          {students.map((student) => (
            <div key={student.id} className="student-item">
              <p>{`${student.Nombres} ${student.ApellidoP} ${student.ApellidoM}`}</p>
              <button onClick={() => handleGenerarPDF(student)}>Generar PDF</button>
            </div>
          ))}
        </div>
      </div>

      {pdfBlob && (
        <div className="preview-section">
          <h3>Vista Previa del PDF</h3>
          <div className="pdf-viewer">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={URL.createObjectURL(pdfBlob)} />
            </Worker>
          </div>
        </div>
      )}
    </div>
  );
};

export default Constancias;
