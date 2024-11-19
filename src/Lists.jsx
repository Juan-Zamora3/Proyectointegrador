import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Lists.css';
import CrearLista from './CrearLista';

function Lists() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [lists, setLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingList, setEditingList] = useState(null); // Lista en edición

  // Cargar listas desde Firebase
  const fetchLists = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Listas'));
      const loadedLists = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
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
    setEditingList(list); // Cargar la lista en edición
    setShowAddForm(true); // Mostrar el formulario de edición
  };

  const handleDelete = async (id, listName) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta lista?');
    if (confirmDelete) {
      try {
        // Eliminar la lista de la colección "Listas"
        await deleteDoc(doc(db, 'Listas', id));
        fetchLists();
      } catch (error) {
        console.error('Error al eliminar la lista:', error);
      }
    }
  };

  const handleUpdate = async (updatedList) => {
    try {
      const listRef = doc(db, 'Listas', updatedList.id);
      await updateDoc(listRef, updatedList);
      fetchLists();
      setShowAddForm(false);
    } catch (error) {
      console.error('Error al actualizar la lista:', error);
    }
  };

  return (
    <div className="lists-container">
      {showAddForm ? (
        <CrearLista
          listaSeleccionada={editingList} // Pasamos la lista seleccionada al formulario
          onCancelar={() => setShowAddForm(false)}
          onListCreated={handleUpdate} // Llamada para actualizar la lista
        />
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
            <button onClick={() => setShowAddForm(true)} className="add-list-button">
              <FontAwesomeIcon icon={faPlus} /> Agregar Lista
            </button>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {lists.length === 0 ? (
                  <tr>
                    <td colSpan="3">No se encontraron listas.</td>
                  </tr>
                ) : (
                  lists.map((list) => (
                    <tr key={list.id}>
                      <td>{list.Nombre}</td>
                      <td>{list.Fecha || 'N/A'}</td>
                      <td>
                        <button
                          className="edit-button"
                          onClick={() => handleEdit(list)} // Llamada a editar
                        >
                          <FontAwesomeIcon icon={faEdit} /> Editar
                        </button>
                        <button
                          className="delete-button"
                          onClick={() => handleDelete(list.id, list.Nombre)}
                        >
                          <FontAwesomeIcon icon={faTrash} /> Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Lists;
