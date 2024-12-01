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
      setShowForm(false);
    } catch (error) {
      console.error('Error al actualizar la lista:', error);
    }
  };

  const handleAdd = async (newList) => {
    try {
      await addDoc(collection(db, 'Listas'), newList);
      fetchLists();
      setShowForm(false);
    } catch (error) {
      console.error('Error al agregar la lista:', error);
    }
  };

  return (
    <div className="lists-container">
      {showForm ? (
        <CrearLista
          listaSeleccionada={editingList}
          onCancelar={() => setShowForm(false)}
          onSave={(listData) => {
            if (listData.id) {
              handleUpdate(listData);
            } else {
              handleAdd(listData);
            }
          }}
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
            <button onClick={() => setShowForm(true)} className="add-list-button">
              <FontAwesomeIcon icon={faPlus} /> Agregar Lista
            </button>
          </div>

          <div className="lists-grid">
            {lists
              .filter((list) =>
                list.Nombre && list.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((list) => (
                <div className="list-card" key={list.id}>
                  <h3>{list.Nombre || 'Sin Nombre'}</h3>
                  <p>Fecha: {list.Fecha || 'Sin fecha'}</p>
                  <div className="list-actions">
                    <button className="edit-button" onClick={() => handleEdit(list)}>
                      <FontAwesomeIcon icon={faEdit} /> Editar
                    </button>
                    <button className="delete-button" onClick={() => handleDelete(list.id)}>
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
