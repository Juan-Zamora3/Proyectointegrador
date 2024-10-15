// src/Asistencias.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Asistencias.css'; // Asegúrate de que este archivo CSS exista

function Asistencias() {
  const [showCourses, setShowCourses] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Cargar los estudiantes desde Firebase
  const fetchStudents = async () => {
    try {
      const studentsRef = collection(db, 'estudiantes');
      const studentsSnapshot = await getDocs(studentsRef);
      const loadedStudents = studentsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(loadedStudents);
    } catch (error) {
      console.error('Error al cargar los estudiantes:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDoubleClick = (student) => {
    setSelectedStudent(student);
    setShowCourses(true);
  };

  const handleBackToAsistencias = () => {
    setShowCourses(false);
    setSelectedStudent(null);
  };

  return (
    <div className="asistencias-container">
      {!showCourses ? (
        <>
          <h2 className="title-asistencias">Asistencias</h2>
          <input
            type="text"
            placeholder="Buscar..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>ID Alumno</th>
                <th>Nombre</th>
                <th>Área</th>
              </tr>
            </thead>
            <tbody>
              {students
                .filter(student =>
                  student.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((student) => (
                  <tr key={student.id} onDoubleClick={() => handleDoubleClick(student)}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.area}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      ) : (
        <CoursesOfStudent student={selectedStudent} onBack={handleBackToAsistencias} />
      )}
    </div>
  );
}

function CoursesOfStudent({ student, onBack }) {
  const [courses, setCourses] = useState([]);

  // Cargar los cursos del estudiante desde Firebase
  const fetchCourses = async () => {
    try {
      const coursesRef = query(
        collection(db, 'cursos'),
        where('studentId', '==', student.id)
      );
      const coursesSnapshot = await getDocs(coursesRef);
      const loadedCourses = coursesSnapshot.docs.map(doc => doc.data());
      setCourses(loadedCourses);
    } catch (error) {
      console.error('Error al cargar los cursos del estudiante:', error);
    }
  };

  useEffect(() => {
    if (student) {
      fetchCourses();
    }
  }, [student]);

  return (
    <div className="courses-container">
      <h2 className="title-courses">Cursos de {student.name}</h2>
      <button onClick={onBack} className="back-button">Regresar a Asistencias</button>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Curso</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{new Date(course.date.seconds * 1000).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Asistencias;
