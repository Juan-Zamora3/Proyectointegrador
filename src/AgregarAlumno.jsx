import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import './AgregarAlumno.css';

function AgregarAlumno({ onBack, student }) {
  const [formData, setFormData] = useState({
    Nombres: '',
    ApellidoP: '',
    ApellidoM: '',
    Puesto: '',
    Correo: '',
  });

  useEffect(() => {
    if (student) {
      setFormData({
        Nombres: student.firstName,
        ApellidoP: student.lastNameP,
        ApellidoM: student.lastNameM,
        Puesto: student.position,
        Correo: student.email,
      });
    } else {
      setFormData({
        Nombres: '',
        ApellidoP: '',
        ApellidoM: '',
        Puesto: '',
        Correo: '',
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (student) {
        const studentRef = doc(db, 'Alumnos', student.id);
        await updateDoc(studentRef, formData);
        alert('Alumno actualizado exitosamente');
      } else {
        const docRef = await addDoc(collection(db, 'Alumnos'), formData);
        console.log('Documento escrito con ID: ', docRef.id);
        alert('Alumno agregado exitosamente');
      }
      setFormData({
        Nombres: '',
        ApellidoP: '',
        ApellidoM: '',
        Puesto: '',
        Correo: '',
      });
      onBack(); // Regresar a la lista después de agregar o actualizar
    } catch (error) {
      console.error('Error añadiendo o actualizando documento: ', error);
      alert('Error al agregar o actualizar el alumno');
    }
  };

  return (
    <div className="agregar-alumno-container">
      <h2>{student ? 'Editar Alumno' : 'Agregar Alumno'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Nombres">Nombres</label>
          <input
            type="text"
            name="Nombres"
            id="Nombres"
            value={formData.Nombres}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ApellidoP">Apellido Paterno</label>
          <input
            type="text"
            name="ApellidoP"
            id="ApellidoP"
            value={formData.ApellidoP}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ApellidoM">Apellido Materno</label>
          <input
            type="text"
            name="ApellidoM"
            id="ApellidoM"
            value={formData.ApellidoM}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Puesto">Cargo</label>
          <input
            type="text"
            name="Puesto"
            id="Puesto"
            value={formData.Puesto}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Correo">Email</label>
          <input
            type="email"
            name="Correo"
            id="Correo"
            value={formData.Correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="submit-button">{student ? 'Actualizar Alumno' : 'Agregar Alumno'}</button>
          <button type="button" className="cancel-button" onClick={onBack}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default AgregarAlumno;
