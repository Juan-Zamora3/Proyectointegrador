// src/Lists.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Lists.css';
import Attendance from './Attendance';
import CrearLista from './CrearLista';

function Lists() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [lists, setLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedList, setSelectedList] = useState(null);
  const [editingList, setEditingList] = useState(null);
  const [editName, setEditName] = useState('');

  // Cargar listas desde Firebase
  const fetchLists = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'listas'));
      const loadedLists = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLists(loadedLists);
    } catch (error) {
      console.error('Error fetching lists: ', error);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  const handleViewAttendance = (list) => {
    setSelectedList(list);
  };

  const handleListCreated = () => {
    fetchLists();
    setShowAddForm(false);
  };

  const handleEdit = (list) => {
    setEditingList(list);
    setEditName(list.name);
  };

  const handleSaveEdit = async () => {
    if (editingList) {
      try {
        await updateDoc(doc(db, 'listas', editingList.id), { name: editName });
        fetchLists();
        setEditingList(null);
      } catch (error) {
        console.error('Error updating list: ', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'listas', id));
      fetchLists();
    } catch (error) {
      console.error('Error deleting list: ', error);
    }
  };

  return (
    <div className="lists-container">
      {selectedList ? (
        <Attendance list={selectedList} onBack={() => setSelectedList(null)} />
      ) : showAddForm ? (
        <CrearLista onListCreated={handleListCreated} />
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
                  <th>Lista</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {lists
                  .filter(list =>
                    list.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((list) => (
                    <tr key={list.id}>
                      <td>
                        {editingList && editingList.id === list.id ? (
                          <input
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                          />
                        ) : (
                          list.name
                        )}
                      </td>
                      <td>{new Date(list.createdAt.seconds * 1000).toLocaleDateString()}</td>
                      <td>
                        {editingList && editingList.id === list.id ? (
                          <button onClick={handleSaveEdit} className="save-button">
                            Guardar
                          </button>
                        ) : (
                          <>
                            <button
                              className="view-button"
                              onClick={() => handleViewAttendance(list)}
                            >
                              Visualizar
                            </button>
                            <button
                              className="edit-button"
                              onClick={() => handleEdit(list)}
                            >
                              <FontAwesomeIcon icon={faEdit} /> Editar
                            </button>
                            <button
                              className="delete-button"
                              onClick={() => handleDelete(list.id)}
                            >
                              <FontAwesomeIcon icon={faTrash} /> Eliminar
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Lists;
