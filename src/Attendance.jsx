// src/Attendance.jsx
import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Asegúrate de tener configurado Firebase
import './Attendance.css';

function Attendance({ list, onBack }) {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        // Referencia al documento de la lista seleccionada
        const docRef = doc(collection(db, 'listas'), list.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // Obtener los datos de los participantes
          const participantsData = docSnap.data().participants || [];
          setParticipants(participantsData);
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error al cargar los participantes:', error);
      }
    };

    if (list) {
      fetchParticipants();
    }
  }, [list]);

  return (
    <div className="attendance-container">
      <h2 className="title-attendance">Asistencia - {list.name}</h2>
      <button onClick={onBack} className="back-button">Regresar a Listas</button>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Asistencia</th>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Área</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{participant.firstName}</td>
                <td>{participant.lastNameP}</td>
                <td>{participant.lastNameM}</td>
                <td>{participant.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
