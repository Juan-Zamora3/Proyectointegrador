// src/Attendance.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

function Attendance({ list, onBack }) {
  const [alumnos, setAlumnos] = useState([]);

  // Cargar alumnos que pertenecen a la lista
  const fetchAlumnos = async () => {
    try {
      const alumnosCollection = collection(db, 'Alumnos');
      const alumnosSnapshot = await getDocs(alumnosCollection);
      const alumnosData = alumnosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Filtrar alumnos que están en la lista actual
      const alumnosEnLista = alumnosData.filter(alumno => alumno.Listas && alumno.Listas.includes(list.Nombre));
      setAlumnos(alumnosEnLista);
    } catch (error) {
      console.error('Error al cargar los alumnos:', error);
    }
  };

  useEffect(() => {
    fetchAlumnos();
  }, [list]);

  return (
    <div className="attendance-container">
      <h2>Asistentes de la lista: {list.Nombre}</h2>
      <button onClick={onBack}>Volver</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido P</th>
            <th>Apellido M</th>
            <th>Puesto</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.length === 0 ? (
            <tr>
              <td colSpan="5">No hay alumnos en esta lista.</td>
            </tr>
          ) : (
            alumnos.map((alumno) => (
              <tr key={alumno.id}>
                <td>{alumno.Nombres}</td>
                <td>{alumno.ApellidoP}</td>
                <td>{alumno.ApellidoM}</td>
                <td>{alumno.Puesto}</td> {/* Cambiado de Area a Puesto */}
                <td>{alumno.Correo}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;
