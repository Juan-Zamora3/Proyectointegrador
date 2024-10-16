// src/Asistencias.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Asistencias.css';

function Asistencias() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchStudents = async () => {
    try {
      const listsRef = collection(db, 'listas');
      const listsSnapshot = await getDocs(listsRef);
      const allParticipants = {};

      listsSnapshot.forEach(doc => {
        const { participants, name } = doc.data();

        participants.forEach(participant => {
          // Normaliza el nombre a minúsculas para evitar duplicados
          const key = `${participant.firstName.toLowerCase()} ${participant.lastNameP.toLowerCase()} ${participant.lastNameM.toLowerCase()}`;
          if (!allParticipants[key]) {
            allParticipants[key] = {
              firstName: participant.firstName,
              lastNameP: participant.lastNameP,
              lastNameM: participant.lastNameM,
              position: participant.position,
              lists: [name],
              courses: [] 
            };
          } else {
            allParticipants[key].lists.push(name);
          }
        });
      });

      setStudents(Object.values(allParticipants));
    } catch (error) {
      console.error('Error al cargar los estudiantes:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDetails = (student) => {
    console.log('Detalles de:', student);
  };

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
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Cargo</th>
            <th>Listas</th>
            <th>Cursos</th>
            <th>Detalles</th>
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
                <td>{student.lists.join(', ')}</td>
                <td>{student.courses.join(', ')}</td>
                <td>
                  <button onClick={() => handleDetails(student)}>Detalles</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Asistencias;
