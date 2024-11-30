import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Asistencias.css';
import AgregarAlumno from './AgregarAlumno';

function Asistencias() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAgregarAlumno, setShowAgregarAlumno] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Función para obtener los estudiantes de Firebase
  const fetchStudents = async () => {
    try {
      const studentsRef = collection(db, 'Alumnos');
      const studentsSnapshot = await getDocs(studentsRef);
      const allStudents = [];

      studentsSnapshot.forEach((doc) => {
        const studentData = doc.data();
        allStudents.push({
          id: doc.id,
          firstName: studentData.Nombres,
          lastNameP: studentData.ApellidoP,
          lastNameM: studentData.ApellidoM,
          position: studentData.Puesto,
          email: studentData.Correo,
          lists: studentData.Listas || [],
        });
      });

      setStudents(allStudents);
    } catch (error) {
      console.error('Error al cargar los estudiantes:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Agregar nuevo estudiante
  const handleAddStudent = () => {
    setSelectedStudent(null); // Reiniciar selección
    setShowAgregarAlumno(true); // Mostrar el formulario para agregar alumno
  };

  // Editar estudiante existente
  const handleEditStudent = (student) => {
    setSelectedStudent(student); // Establecer el estudiante seleccionado
    setShowAgregarAlumno(true); // Mostrar el formulario
  };

  // Eliminar estudiante
  const handleDeleteStudent = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este alumno?')) {
      try {
        await deleteDoc(doc(db, 'Alumnos', id));
        fetchStudents(); // Refrescar la lista después de eliminar
        alert('Alumno eliminado exitosamente');
      } catch (error) {
        console.error('Error al eliminar el alumno:', error);
        alert('Error al eliminar el alumno');
      }
    }
  };

  // Regresar a la vista principal
  const handleBack = () => {
    setShowAgregarAlumno(false); // Ocultar el formulario de agregar alumno
    setSelectedStudent(null); // Reiniciar selección
    fetchStudents(); // Actualizar la lista de estudiantes
  };

  // Renderizar el formulario de agregar alumno
  if (showAgregarAlumno) {
    return <AgregarAlumno onBack={handleBack} student={selectedStudent} />;
  }

  return (
    <div className="asistencias-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar alumno..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">Buscar</button>
        <button className="add-list-button" onClick={handleAddStudent}>
          Agregar Alumno
        </button>
      </div>
      <div className="lists-grid">
        {students
          .filter((student) =>
            `${student.firstName} ${student.lastNameP}`.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((student) => (
            <div key={student.id} className="list-card">
              <h3>
                {student.firstName} {student.lastNameP} {student.lastNameM}
              </h3>
              <p>Cargo: {student.position}</p>
              <p>Email: {student.email}</p>
              <div className="list-actions">
                <button onClick={() => handleEditStudent(student)}>Editar</button>
                <button onClick={() => handleDeleteStudent(student.id)}>Eliminar</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Asistencias;
