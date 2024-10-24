import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import { faSearchPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs } from 'firebase/firestore';
=======
import { faSearchPlus, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc, updateDoc, query, where } from 'firebase/firestore';
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
import { db } from './firebaseConfig';
import './Lists.css';
import Attendance from './Attendance';
import CrearLista from './CrearLista';

function Lists() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [lists, setLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedList, setSelectedList] = useState(null);
<<<<<<< HEAD
=======
  const [editingList, setEditingList] = useState(null);
  const [editName, setEditName] = useState('');
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84

  // Cargar listas desde Firebase
  const fetchLists = async () => {
    try {
<<<<<<< HEAD
      const querySnapshot = await getDocs(collection(db, 'listas'));
=======
      const querySnapshot = await getDocs(collection(db, 'Listas'));
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
      const loadedLists = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
<<<<<<< HEAD
      setLists(loadedLists);
    } catch (error) {
      console.error('Error fetching lists: ', error);
=======
      console.log('Listas cargadas desde Firebase:', loadedLists);
      setLists(loadedLists);
    } catch (error) {
      console.error('Error al cargar las listas:', error);
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  const handleViewAttendance = (list) => {
    setSelectedList(list);
  };

  const handleListCreated = () => {
<<<<<<< HEAD
    fetchLists(); // Refrescar las listas después de crear una nueva
    setShowAddForm(false);
  };

=======
    fetchLists();
    setShowAddForm(false);
  };

  const handleEdit = (list) => {
    setEditingList(list);
    setEditName(list.Nombre);
  };

  const handleSaveEdit = async () => {
    if (editingList) {
      try {
        await updateDoc(doc(db, 'Listas', editingList.id), { Nombre: editName });
        fetchLists();
        setEditingList(null);
      } catch (error) {
        console.error('Error al actualizar la lista:', error);
      }
    }
  };

  const handleDelete = async (id, listName) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta lista?');
    if (confirmDelete) {
      try {
        // Eliminar la lista de la colección "Listas"
        await deleteDoc(doc(db, 'Listas', id));
        
        // Ahora eliminar el nombre de la lista de los documentos de "Alumnos"
        const alumnosQuery = query(collection(db, 'Alumnos'), where('Listas', 'array-contains', listName));
        const querySnapshot = await getDocs(alumnosQuery);

        // Actualizar cada alumno que tiene esta lista
        querySnapshot.forEach(async (doc) => {
          const alumnoRef = doc.ref;
          const updatedListas = doc.data().Listas.filter(nombre => nombre !== listName);
          await updateDoc(alumnoRef, { Listas: updatedListas });
        });

        fetchLists();
      } catch (error) {
        console.error('Error al eliminar la lista:', error);
      }
    }
  };

>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
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
<<<<<<< HEAD
                  <th>Lista</th>
=======
                  <th>Nombre</th>
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
<<<<<<< HEAD
                {lists
                  .filter(list =>
                    list.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((list) => (
                    <tr key={list.id}>
                      <td>{list.name}</td>
                      <td>{new Date(list.createdAt.seconds * 1000).toLocaleDateString()}</td>
                      <td>
                        <button
                          className="view-button"
                          onClick={() => handleViewAttendance(list)}
                        >
                          Visualizar
                        </button>
                      </td>
                    </tr>
                  ))}
=======
                {lists.length === 0 ? (
                  <tr>
                    <td colSpan="3">No se encontraron listas.</td>
                  </tr>
                ) : (
                  lists.map((list) => (
                    <tr key={list.id}>
                      <td>
                        {editingList && editingList.id === list.id ? (
                          <input
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                          />
                        ) : (
                          list.Nombre || 'Sin nombre'
                        )}
                      </td>
                      <td>
                        {list.Fecha ? new Date(list.Fecha.seconds * 1000).toLocaleDateString() : 'N/A'}
                      </td>
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
                              onClick={() => handleDelete(list.id, list.Nombre)}
                            >
                              <FontAwesomeIcon icon={faTrash} /> Eliminar
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                )}
>>>>>>> 4692b1226a6fdfc04e849e47f49e5b8bad26da84
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Lists;
