// src/Lists.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Lists.css';
import Attendance from './Attendance';
import CrearLista from './CrearLista';

function Lists() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [lists, setLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedList, setSelectedList] = useState(null);

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
    fetchLists(); // Refrescar las listas después de crear una nueva
    setShowAddForm(false);
  };

  return (
    <div className="lists-container">
      {selectedList ? (
        // Mostrar Attendance si se ha seleccionado una lista
        <Attendance list={selectedList} onBack={() => setSelectedList(null)} />
      ) : showAddForm ? (
        // Mostrar CrearLista si se quiere agregar una nueva lista
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
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Lists;
