import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './CrearLista.css';

const CrearLista = ({ listaSeleccionada, onCancelar, onSave }) => {
  const [listName, setListName] = useState('');
  const [listDate, setListDate] = useState('');
  const [participants, setParticipants] = useState([]); // Participantes de la lista
  const [allStudents, setAllStudents] = useState([]); // Todos los estudiantes
  const [selectedStudents, setSelectedStudents] = useState([]); // Estudiantes seleccionados
  const [searchTerm, setSearchTerm] = useState(''); // Término de búsqueda

  // Cargar datos de la lista seleccionada cuando se edita
  useEffect(() => {
    if (listaSeleccionada) {
      setListName(listaSeleccionada.Nombre || '');
      setListDate(listaSeleccionada.Fecha || '');
      setSelectedStudents(listaSeleccionada.Alumnos || []);
    } else {
      setListName('');
      setListDate('');
      setSelectedStudents([]);
    }
  }, [listaSeleccionada]);

  // Función para obtener todos los estudiantes desde Firebase
  const fetchStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Alumnos'));
      const students = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllStudents(students);
    } catch (error) {
      console.error('Error al cargar los estudiantes:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Manejar cambios en checkboxes de selección de estudiantes
  const handleCheckboxChange = (student) => {
    const isSelected = selectedStudents.find((s) => s.id === student.id);

    if (isSelected) {
      setSelectedStudents(selectedStudents.filter((s) => s.id !== student.id));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  // Guardar o actualizar lista en Firebase
  const handleSaveList = async () => {
    if (!listName.trim()) {
      alert('Por favor, introduce el nombre de la lista.');
      return;
    }

    if (!listDate.trim()) {
      alert('Por favor, selecciona una fecha.');
      return;
    }

    if (selectedStudents.length === 0) {
      alert('Agrega al menos un participante.');
      return;
    }

    const listaData = {
      Nombre: listName.trim(),
      Fecha: listDate.trim(),
      Alumnos: selectedStudents.map((s) => ({
        Nombres: s.Nombres || 'Nombre no especificado',
        ApellidoP: s.ApellidoP || 'Apellido Paterno no especificado',
        ApellidoM: s.ApellidoM || 'Apellido Materno no especificado',
      })),
    };

    try {
      if (listaSeleccionada?.id) {
        // Actualizar lista existente
        await updateDoc(doc(db, 'Listas', listaSeleccionada.id), listaData);
        alert('Lista actualizada exitosamente.');
      } else {
        // Crear nueva lista
        await addDoc(collection(db, 'Listas'), listaData);
        alert('Lista creada exitosamente.');
      }

      // Limpiar campos después de guardar
      setListName('');
      setListDate('');
      setSelectedStudents([]);
      onSave();
    } catch (error) {
      console.error('Error al guardar la lista:', error);
      alert('Hubo un error al guardar la lista.');
    }
  };

  // Filtrar estudiantes según el término de búsqueda
  const filteredStudents = allStudents.filter((student) =>
    student.Nombres?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.ApellidoP?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.ApellidoM?.toLowerCase().includes(searchTerm.toLowerCase())
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
              {selectedStudents.map((student, index) => (
                <tr key={index}>
                  <td>{student.Nombres}</td>
                  <td>{student.ApellidoP}</td>
                  <td>{student.ApellidoM}</td>
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
