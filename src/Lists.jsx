import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Lists.css';
import CrearLista from './CrearLista'; // Componente para agregar/editar listas

function Lists() {
  const [showForm, setShowForm] = useState(false); // Controla si el formulario de agregar/editar se muestra
  const [lists, setLists] = useState([]); // Datos de las listas
  const [searchTerm, setSearchTerm] = useState(''); // Término de búsqueda
  const [editingList, setEditingList] = useState(null); // Datos de la lista en edición

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

  // Manejar clic en "Editar"
  const handleEdit = (list) => {
    setEditingList(list); // Establecer datos de la lista seleccionada para edición
    setShowForm(true); // Mostrar el formulario
  };

  // Manejar clic en "Eliminar"
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta lista?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'Listas', id));
        fetchLists(); // Recargar listas después de eliminar
      } catch (error) {
        console.error('Error al eliminar la lista:', error);
      }
    }
  };

  // Manejar actualización de una lista existente
  const handleUpdate = async (updatedList) => {
    try {
      const listRef = doc(db, 'Listas', updatedList.id);
      await updateDoc(listRef, updatedList);
      fetchLists(); // Recargar listas después de actualizar
      setShowForm(false); // Cerrar el formulario
    } catch (error) {
      console.error('Error al actualizar la lista:', error);
    }
  };

  // Manejar creación de una nueva lista
  const handleAdd = async (newList) => {
    try {
      await addDoc(collection(db, 'Listas'), newList);
      fetchLists(); // Recargar listas después de agregar
      setShowForm(false); // Cerrar el formulario
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
              handleUpdate(listData); // Si hay ID, es edición
            } else {
              handleAdd(listData); // Si no hay ID, es creación
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
                list.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((list) => (
                <div className="list-card" key={list.id}>
                  <h3>{list.Nombre}</h3>
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