<<<<<<< HEAD
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
=======
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
import { db } from './firebaseConfig';
import './CrearLista.css';

const CrearLista = ({ onListCreated }) => {
  const [listName, setListName] = useState('');
<<<<<<< HEAD
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
=======
  const [listDate, setListDate] = useState(''); // Estado para la fecha
  const [participants, setParticipants] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el filtro de búsqueda

  // Función para obtener todos los estudiantes de Firebase
  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, 'Alumnos'));
    const students = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setAllStudents(students);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Función para manejar el cambio en los checkboxes
  const handleCheckboxChange = (student) => {
    const isSelected = selectedStudents.find(s => s.id === student.id);

    if (isSelected) {
      // Si el estudiante ya está seleccionado, lo eliminamos de la lista de participantes
      setSelectedStudents(selectedStudents.filter(s => s.id !== student.id));
      setParticipants(participants.filter(p => p.id !== student.id));
    } else {
      // Si el estudiante no está seleccionado, lo agregamos
      setSelectedStudents([...selectedStudents, student]);
      setParticipants([...participants, { 
        Nombre: student.Nombres, 
        ApellidoP: student.ApellidoP, 
        ApellidoM: student.ApellidoM 
      }]);
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
    }
  };

  // Función para crear la lista final y guardarla en Firebase
  const handleCreateList = async () => {
    if (!listName) {
      alert('Por favor, introduce el nombre de la lista');
      return;
    }

<<<<<<< HEAD
    if (participants.length === 0) {
=======
    if (!listDate) {
      alert('Por favor, selecciona una fecha');
      return;
    }

    if (selectedStudents.length === 0) {
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
      alert('Agrega al menos un participante');
      return;
    }

    try {
      // Guardar la lista en Firebase
<<<<<<< HEAD
      const docRef = await addDoc(collection(db, 'listas'), {
        name: listName,
        participants,
        createdAt: new Date(),
=======
      const docRef = await addDoc(collection(db, 'Listas'), {
        Nombre: listName,                  // Guardar el nombre de la lista
        Fecha: listDate,                   // Guardar la fecha
        Alumnos: selectedStudents.map(s => ({
          Nombre: s.Nombres,
          ApellidoP: s.ApellidoP,
          ApellidoM: s.ApellidoM,
        })), // Guardar los detalles de los alumnos en el campo Alumnos
        createdAt: new Date(),             // Fecha de creación
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
      });

      alert('Lista creada exitosamente');

<<<<<<< HEAD
      // Limpiar todos los campos después de crear la lista
      setListName('');
      setParticipants([]);
=======
      // Actualizar cada alumno seleccionado para agregar la nueva lista a su campo "Listas"
      const listId = docRef.id; // Obtener la ID del documento recién creado

      for (const student of selectedStudents) {
        const studentRef = doc(db, 'Alumnos', student.id);
        await updateDoc(studentRef, {
          Listas: [...(student.Listas || []), listName], // Agregar el nombre de la nueva lista
        });
      }

      // Limpiar todos los campos después de crear la lista
      setListName('');
      setListDate(''); // Limpiar la fecha
      setParticipants([]);
      setSelectedStudents([]);
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84

      // Notificar que una nueva lista fue creada
      onListCreated();
    } catch (e) {
      console.error('Error creando la lista: ', e);
      alert('Error al crear la lista');
    }
  };

<<<<<<< HEAD
=======
  // Filtrar estudiantes según el término de búsqueda
  const filteredStudents = allStudents.filter(student =>
    student.Nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.ApellidoP.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.ApellidoM.toLowerCase().includes(searchTerm.toLowerCase())
  );

>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
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

<<<<<<< HEAD
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
=======
      <div className="date-section">
        <label htmlFor="listDate">Fecha de la Lista</label>
        <input
          type="date"
          id="listDate"
          value={listDate}
          onChange={(e) => setListDate(e.target.value)}
        />
      </div>

      <div className="participant-section">
        <div className="form-left">
          <h3>Buscar Participante</h3>
          <input
            type="text"
            placeholder="Filtrar alumnos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>Seleccionar</th>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedStudents.some(s => s.id === student.id)}
                      onChange={() => handleCheckboxChange(student)}
                    />
                  </td>
                  <td>{student.Nombres}</td>
                  <td>{student.ApellidoP}</td>
                  <td>{student.ApellidoM}</td>
                </tr>
              ))}
            </tbody>
          </table>
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
        </div>

        <div className="form-right">
          <h3>Vista Previa de la Lista</h3>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
<<<<<<< HEAD
                <th>Puesto</th>
=======
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
              </tr>
            </thead>
            <tbody>
              {participants.map((participant, index) => (
                <tr key={index}>
<<<<<<< HEAD
                  <td>{participant.firstName}</td>
                  <td>{participant.lastNameP}</td>
                  <td>{participant.lastNameM}</td>
                  <td>{participant.position}</td>
=======
                  <td>{participant.Nombre}</td>
                  <td>{participant.ApellidoP}</td>
                  <td>{participant.ApellidoM}</td>
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
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
