import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './CrearLista.css';

const CrearLista = ({ onListCreated }) => {
  const [listName, setListName] = useState('');
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
    }
  };

  // Función para crear la lista final y guardarla en Firebase
  const handleCreateList = async () => {
    if (!listName) {
      alert('Por favor, introduce el nombre de la lista');
      return;
    }

    if (!listDate) {
      alert('Por favor, selecciona una fecha');
      return;
    }

    if (selectedStudents.length === 0) {
      alert('Agrega al menos un participante');
      return;
    }

    try {
      // Guardar la lista en Firebase
      const docRef = await addDoc(collection(db, 'Listas'), {
        Nombre: listName,                  // Guardar el nombre de la lista
        Fecha: listDate,                   // Guardar la fecha
        Alumnos: selectedStudents.map(s => ({
          Nombre: s.Nombres,
          ApellidoP: s.ApellidoP,
          ApellidoM: s.ApellidoM,
        })), // Guardar los detalles de los alumnos en el campo Alumnos
        createdAt: new Date(),             // Fecha de creación
      });

      alert('Lista creada exitosamente');

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

      // Notificar que una nueva lista fue creada
      onListCreated();
    } catch (e) {
      console.error('Error creando la lista: ', e);
      alert('Error al crear la lista');
    }
  };

  // Filtrar estudiantes según el término de búsqueda
  const filteredStudents = allStudents.filter(student =>
    student.Nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.ApellidoP.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.ApellidoM.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        </div>

        <div className="form-right">
          <h3>Vista Previa de la Lista</h3>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant, index) => (
                <tr key={index}>
                  <td>{participant.Nombre}</td>
                  <td>{participant.ApellidoP}</td>
                  <td>{participant.ApellidoM}</td>
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