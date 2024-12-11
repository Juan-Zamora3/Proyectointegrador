import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './personal.css';

function Asistencias() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({
    Nombres: '',
    ApellidoP: '',
    ApellidoM: '',
    Puesto: '',
    Correo: '',
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedStudent) {
        const studentRef = doc(db, 'Alumnos', selectedStudent.id);
        await updateDoc(studentRef, formData);
        alert('Alumno actualizado exitosamente');
      } else {
        await addDoc(collection(db, 'Alumnos'), formData);
        alert('Alumno agregado exitosamente');
      }
      setFormData({
        Nombres: '',
        ApellidoP: '',
        ApellidoM: '',
        Puesto: '',
        Correo: '',
      });
      setSelectedStudent(null);
      setIsModalOpen(false);
      fetchStudents();
    } catch (error) {
      console.error('Error al guardar el alumno:', error);
      alert('Error al guardar el alumno');
    }
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    setFormData({
      Nombres: student.firstName,
      ApellidoP: student.lastNameP,
      ApellidoM: student.lastNameM,
      Puesto: student.position,
      Correo: student.email,
    });
    setIsModalOpen(true);
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este alumno?')) {
      try {
        await deleteDoc(doc(db, 'Alumnos', id));
        fetchStudents();
        alert('Alumno eliminado exitosamente');
      } catch (error) {
        console.error('Error al eliminar el alumno:', error);
        alert('Error al eliminar el alumno');
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
    setFormData({
      Nombres: '',
      ApellidoP: '',
      ApellidoM: '',
      Puesto: '',
      Correo: '',
    });
  };

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
        
        <button className="add-button" onClick={() => setIsModalOpen(true)}>
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
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>{selectedStudent ? 'Editar Alumno' : 'Agregar Alumno'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="Nombres">Nombres</label>
                <input
                  type="text"
                  id="Nombres"
                  name="Nombres"
                  value={formData.Nombres}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="ApellidoP">Apellido Paterno</label>
                <input
                  type="text"
                  id="ApellidoP"
                  name="ApellidoP"
                  value={formData.ApellidoP}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="ApellidoM">Apellido Materno</label>
                <input
                  type="text"
                  id="ApellidoM"
                  name="ApellidoM"
                  value={formData.ApellidoM}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Puesto">Cargo</label>
                <select
                  id="Puesto"
                  name="Puesto"
                  value={formData.Puesto}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Selecciona un cargo</option>
                  <option value="Recursos Humanos">Recursos Humanos</option>
                  <option value="Administracion">Administración</option>
                  <option value="Sistemas">Sistemas</option>
                  <option value="Civil">Civil</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Correo">Email</label>
                <input
                  type="email"
                  id="Correo"
                  name="Correo"
                  value={formData.Correo}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="button-container">
                <button type="submit" className="submit-button">
                  {selectedStudent ? 'Actualizar Alumno' : 'Agregar Alumno'}
                </button>
                <button type="button" className="cancel-button" onClick={handleCloseModal}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Asistencias;
