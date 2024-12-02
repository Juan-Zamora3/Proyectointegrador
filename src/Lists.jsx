import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Lists.css';
import CrearLista from './CrearLista';

function Lists() {
  const [showForm, setShowForm] = useState(false);
  const [lists, setLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingList, setEditingList] = useState(null);
  const [selectedList, setSelectedList] = useState(null); // Lista seleccionada para ver detalles

  // Cargar listas desde Firebase
  const fetchLists = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Listas'));
      const loadedLists = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLists(loadedLists);
    } catch (error) {
      console.error('Error al cargar las listas:', error);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  const handleEdit = (list) => {
    setEditingList(list);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta lista?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'Listas', id));
        fetchLists();
        alert('Lista eliminada exitosamente.');
      } catch (error) {
        console.error('Error al eliminar la lista:', error);
      }
    }
  };

  const handleSave = () => {
    setShowForm(false);
    setEditingList(null);
    fetchLists();
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingList(null);
  };

  const handleViewList = (list) => {
    setSelectedList(list);
  };

  return (
    <div className="lists-container">
      {showForm ? (
        <CrearLista
          listaSeleccionada={editingList}
          onCancelar={handleCancel}
          onSave={handleSave}
        />
      ) : selectedList ? (
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
        <>
          <h2 className="title-lists">Listas</h2>
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
                setEditingList(null);
                setShowForm(true);
              }}
              className="add-list-button"
            >
              <FontAwesomeIcon icon={faPlus} /> Agregar Lista
            </button>
          </div>
          <div className="lists-grid">
            {lists
              .filter((list) =>
                list.Nombre?.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((list) => (
                <div
                  className="list-card"
                  key={list.id}
                  onClick={() => handleViewList(list)}
                >
                  <h3>{list.Nombre || 'Sin Nombre'}</h3>
                  <p>Fecha: {list.Fecha || 'Sin fecha'}</p>
                  <div className="list-actions">
                    <button
                      className="edit-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(list);
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} /> Editar
                    </button>
                    <button
                      className="delete-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(list.id);
                      }}
                    >
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