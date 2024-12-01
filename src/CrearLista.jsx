import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './CrearLista.css';

const CrearLista = ({ listaSeleccionada, onCancelar, onSave }) => {
  const [listName, setListName] = useState('');
  const [listDate, setListDate] = useState('');
  const [participants, setParticipants] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Cargar datos de la lista seleccionada cuando se edita
  useEffect(() => {
    if (listaSeleccionada) {
      setListName(listaSeleccionada.Nombre || '');
      setListDate(listaSeleccionada.Fecha || '');
      setParticipants(listaSeleccionada.Alumnos || []);
      setSelectedStudents(
        listaSeleccionada.Alumnos.map((alumno, index) => ({
          id: `existing-${index}`, // Usamos un ID ficticio para alumnos existentes
          ...alumno,
        }))
      );
    } else {
      // Limpiar campos si se está creando una nueva lista
      setListName('');
      setListDate('');
      setParticipants([]);
      setSelectedStudents([]);
    }
  }, [listaSeleccionada]);

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

  // Manejar cambios en checkboxes
  const handleCheckboxChange = (student) => {
    const isSelected = selectedStudents.find((s) => s.id === student.id);

    if (isSelected) {
      // Si el estudiante ya está seleccionado, lo eliminamos de la lista
      setSelectedStudents(selectedStudents.filter((s) => s.id !== student.id));
      setParticipants(participants.filter((p) => p.Nombre !== student.Nombres));
    } else {
      // Si el estudiante no está seleccionado, lo agregamos
      setSelectedStudents([...selectedStudents, student]);
      setParticipants([
        ...participants,
        {
          Nombre: student.Nombres,
          ApellidoP: student.ApellidoP,
          ApellidoM: student.ApellidoM,
        },
      ]);
    }
  };

  // Crear o actualizar lista en Firebase
  const handleSaveList = async () => {
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
      if (listaSeleccionada?.id) {
        // Actualizar lista existente
        await updateDoc(doc(db, 'Listas', listaSeleccionada.id), {
          Nombre: listName,
          Fecha: listDate,
          Alumnos: selectedStudents.map((s) => ({
            Nombre: s.Nombres,
            ApellidoP: s.ApellidoP,
            ApellidoM: s.ApellidoM,
          })),
        });
        alert('Lista actualizada exitosamente');
      } else {
        // Crear nueva lista
        await addDoc(collection(db, 'Listas'), {
          Nombre: listName,
          Fecha: listDate,
          Alumnos: selectedStudents.map((s) => ({
            Nombre: s.Nombres,
            ApellidoP: s.ApellidoP,
            ApellidoM: s.ApellidoM,
          })),
          createdAt: new Date(),
        });
        alert('Lista creada exitosamente');
      }

      // Limpiar todos los campos
      setListName('');
      setListDate('');
      setParticipants([]);
      setSelectedStudents([]);

      // Notificar al componente padre
      onSave();
    } catch (e) {
      console.error('Error al guardar la lista: ', e);
      alert('Error al guardar la lista');
    }
  };

  // Filtrar estudiantes según el término de búsqueda
  const filteredStudents = allStudents.filter((student) =>
    student.Nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.ApellidoP.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.ApellidoM.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="crear-lista-container">
      <h2>{listaSeleccionada ? 'Editar Lista' : 'Nueva Lista'}</h2>

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
                      checked={selectedStudents.some((s) => s.id === student.id)}
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
        <button onClick={handleSaveList}>
          {listaSeleccionada ? 'Actualizar Lista' : 'Crear Lista'}
        </button>
        <button onClick={onCancelar}>Cancelar</button>
      </div>
    </div>
  );
};

export default CrearLista;
