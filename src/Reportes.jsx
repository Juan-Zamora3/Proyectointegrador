import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Reporte.css';

const Reportes = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  // Cargar cursos desde Firebase
  const fetchCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Cursos'));
      const loadedCourses = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCourses(loadedCourses);
    } catch (error) {
      console.error('Error al cargar los cursos:', error);
    }
  };

  const handleSaveReport = async () => {
    if (!selectedCourse || !comment || !rating) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      await addDoc(collection(db, 'Reportes'), {
        cursoId: selectedCourse,
        comentario: comment,
        calificacion: rating,
        fecha: new Date()
      });
      alert('Reporte guardado con éxito');
      setComment('');
      setRating('');
      setSelectedCourse('');
    } catch (error) {
      console.error('Error al guardar el reporte:', error);
      alert('Hubo un error al guardar el reporte');
    }
  };

  return (
    <div className="reports-container">
      <h2>Reportes de Cursos</h2>

      <label>Seleccionar Curso</label>
      <select
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="">Seleccione un curso</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.cursoNombre || 'Sin nombre'}
          </option>
        ))}
      </select>

      <label>Comentario</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe un comentario sobre el curso..."
      />

      <label>Calificación (1-5)</label>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        placeholder="Calificación"
      />

      <button onClick={handleSaveReport}>Guardar Reporte</button>
    </div>
  );
};

export default Reportes;
