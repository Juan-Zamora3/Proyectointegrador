import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Lists.css';
import CrearLista from './CrearLista';

function Lists() {
  const [showForm, setShowForm] = useState(false);
  const [lists, setLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingList, setEditingList] = useState(null);

  // Cargar listas desde Firebase
  const fetchLists = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Listas'));
      const loadedLists = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((list) => list.Nombre); // Filtrar elementos que no tengan el campo Nombre
      setLists(loadedLists);
    } catch (error) {
      console.error('Error al cargar las listas:', error);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  // Editar lista existente
  const handleEdit = (list) => {
    setEditingList(list); // Establecer los datos de la lista seleccionada
    setShowForm(true); // Mostrar el formulario
  };

  // Eliminar lista existente
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta lista?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'Listas', id));
        fetchLists(); // Recargar las listas después de eliminar
      } catch (error) {
        console.error('Error al eliminar la lista:', error);
      }
    }
  };

  // Actualizar una lista existente
  const handleUpdate = async (updatedList) => {
    try {
      const listRef = doc(db, 'Listas', updatedList.id);
      await updateDoc(listRef, updatedList);
      fetchLists(); // Recargar las listas después de actualizar
      setEditingList(null); // Limpiar la lista en edición
      setShowForm(false); // Ocultar el formulario
    } catch (error) {
      console.error('Error al actualizar la lista:', error);
    }
  };

  // Crear una nueva lista
  const handleAdd = async (newList) => {
    try {
      await addDoc(collection(db, 'Listas'), newList);
      fetchLists(); // Recargar las listas después de agregar
      setEditingList(null); // Limpiar cualquier lista en edición
      setShowForm(false); // Ocultar el formulario
    } catch (error) {
      console.error('Error al agregar la lista:', error);
    }
  };
  const [selectedList, setSelectedList] = useState(null); // Nueva lista seleccionada
  const handleViewList = (list) => {
  setSelectedList(list); // Establecer la lista seleccionada
};

return (
  <div className="lists-container">
    {selectedList ? (
      // Vista de detalles de la lista seleccionada
      <div className="list-details">
        <h2>Detalles de la Lista: {selectedList.Nombre}</h2>
        <p><strong>Fecha:</strong> {selectedList.Fecha || 'Sin fecha'}</p>
        <h3>Participantes:</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
            </tr>
          </thead>
          <tbody>
            {selectedList.Alumnos && selectedList.Alumnos.length > 0 ? (
              selectedList.Alumnos.map((alumno, index) => (
                <tr key={index}>
                  <td>{alumno.Nombre}</td>
                  <td>{alumno.ApellidoP}</td>
                  <td>{alumno.ApellidoM}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No hay participantes en esta lista.</td>
              </tr>
            )}
          </tbody>
        </table>
        <button onClick={() => setSelectedList(null)}>Volver</button>
      </div>
    ) : (
      // Vista principal con todas las listas
      <>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar lista..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearchPlus} /> Buscar
          </button>
        </div>

        <div className="add-list-container">
          <button
            onClick={() => {
              setEditingList(null); // Limpiar cualquier lista en edición
              setShowForm(true); // Mostrar formulario para agregar
            }}
            className="add-list-button"
          >
            <FontAwesomeIcon icon={faPlus} /> Agregar Lista
          </button>
        </div>

        <div className="lists-grid">
          {lists
            .filter((list) =>
              list.Nombre && list.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((list) => (
              <div
                className="list-card"
                key={list.id}
                onClick={() => handleViewList(list)} // Manejar clic para visualizar detalles
              >
                <h3>{list.Nombre || 'Sin Nombre'}</h3>
                <p>Fecha: {list.Fecha || 'Sin fecha'}</p>
                <div className="list-actions">
                  <button className="edit-button" onClick={(e) => {
                    e.stopPropagation(); // Prevenir que el clic en "Editar" abra la vista detallada
                    handleEdit(list);
                  }}>
                    <FontAwesomeIcon icon={faEdit} /> Editar
                  </button>
                  <button className="delete-button" onClick={(e) => {
                    e.stopPropagation(); // Prevenir que el clic en "Eliminar" abra la vista detallada
                    handleDelete(list.id);
                  }}>
                    <FontAwesomeIcon icon={faTrash} /> Eliminar
                  </button>
                </div>
              </div>
            ))}
        </div>
      </>
    )}
  </div>
);

}

export default Lists;
