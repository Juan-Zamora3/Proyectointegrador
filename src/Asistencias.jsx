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

  const fetchStudents = async () => {
    try {
      const studentsRef = collection(db, 'Alumnos');
      const studentsSnapshot = await getDocs(studentsRef);
      const allStudents = [];

      studentsSnapshot.forEach(doc => {
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
      console.error('Error al cargar los estudiantes:', error); // Esto debería mostrar un error si algo falla
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);


  const handleAddStudent = () => {
    setSelectedStudent(null); // Reiniciar selección
    setShowAgregarAlumno(true); // Cambiar el estado para mostrar AgregarAlumno
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student); // Establecer el estudiante seleccionado para editar
    setShowAgregarAlumno(true); // Mostrar el formulario de AgregarAlumno
  };

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

  // Función para regresar a la vista de Asistencias
  const handleBack = () => {
    setShowAgregarAlumno(false); // Cambiar el estado para ocultar AgregarAlumno
    setSelectedStudent(null); // Reiniciar selección
    fetchStudents(); // Llamar a la función para actualizar la lista
  };

  if (showAgregarAlumno) {
    return <AgregarAlumno onBack={handleBack} student={selectedStudent} />; // Pasar la función y el estudiante seleccionado
  }

  return (
    <div className="asistencias-container">
      <h2 className="title-asistencias">Asistencias</h2>
      <input
        type="text"
        placeholder="Buscar..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="add-button" onClick={handleAddStudent}>Agregar</button>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Cargo</th>
            <th>Email</th>
            <th>Listas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students
            .filter(student =>
              `${student.firstName} ${student.lastNameP}`.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastNameP}</td>
                <td>{student.lastNameM}</td>
                <td>{student.position}</td>
                <td>{student.email}</td>
                <td>{student.lists.join(', ')}</td>
                <td>
                  <button onClick={() => handleEditStudent(student)}>Editar</button>
                  <button onClick={() => handleDeleteStudent(student.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Asistencias;
