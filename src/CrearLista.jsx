import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './CrearLista.css';

const CrearLista = ({ onListCreated }) => {
  const [listName, setListName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastNameP, setLastNameP] = useState('');
  const [lastNameM, setLastNameM] = useState('');
  const [position, setPosition] = useState('');
  const [participants, setParticipants] = useState([]);

  // Función para agregar un participante a la vista previa
  const handleAddParticipant = () => {
    if (firstName && lastNameP && position) {
      const newParticipant = { firstName, lastNameP, lastNameM, position };
      setParticipants([...participants, newParticipant]);

      // Limpiar los campos
      setFirstName('');
      setLastNameP('');
      setLastNameM('');
      setPosition('');
    } else {
      alert('Por favor, rellena todos los campos obligatorios');
    }
  };

  // Función para crear la lista final y guardarla en Firebase
  const handleCreateList = async () => {
    if (!listName) {
      alert('Por favor, introduce el nombre de la lista');
      return;
    }

    if (participants.length === 0) {
      alert('Agrega al menos un participante');
      return;
    }

    try {
      // Guardar la lista en Firebase
      const docRef = await addDoc(collection(db, 'listas'), {
        name: listName,
        participants,
        createdAt: new Date(),
      });

      alert('Lista creada exitosamente');

      // Limpiar todos los campos después de crear la lista
      setListName('');
      setParticipants([]);

      // Notificar que una nueva lista fue creada
      onListCreated();
    } catch (e) {
      console.error('Error creando la lista: ', e);
      alert('Error al crear la lista');
    }
  };

  return (
    <div className="crear-lista-container">
      <h2>Nueva Lista</h2>

      <div className="list-name-section">
        <label htmlFor="listName">Nombre de la Lista</label>
        <input
          type="text"
          id="listName"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
      </div>

      <div className="participant-section">
        <div className="form-left">
          <h3>Agregar Participante</h3>

          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="lastNameP">Apellido Paterno</label>
          <input
            type="text"
            id="lastNameP"
            value={lastNameP}
            onChange={(e) => setLastNameP(e.target.value)}
          />

          <label htmlFor="lastNameM">Apellido Materno</label>
          <input
            type="text"
            id="lastNameM"
            value={lastNameM}
            onChange={(e) => setLastNameM(e.target.value)}
          />

          <label htmlFor="position">Puesto</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />

          <button onClick={handleAddParticipant}>Guardar Participante</button>
        </div>

        <div className="form-right">
          <h3>Vista Previa de la Lista</h3>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Puesto</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant, index) => (
                <tr key={index}>
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

      <div className="create-list-button-container">
        <button onClick={handleCreateList}>Crear Lista</button>
      </div>
    </div>
  );
};

export default CrearLista;
