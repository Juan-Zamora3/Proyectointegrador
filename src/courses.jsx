import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash, faUndo, faSave } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Courses.css';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [backupFiles, setBackupFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);
  const [editName, setEditName] = useState('');
  const [selectedBackup, setSelectedBackup] = useState(null);

  // Cargar cursos desde Firebase
  const fetchCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Cursos'));
      const loadedCourses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(loadedCourses);
    } catch (error) {
      console.error('Error al cargar los cursos:', error);
    }
  };

  // Cargar archivos de backup desde LocalStorage
  const fetchBackupFiles = () => {
    const backups = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('backup-')) {
        backups.push(key);
      }
    }
    setBackupFiles(backups);
  };

  useEffect(() => {
    fetchCourses();
    fetchBackupFiles();
  }, []);

  const handleEdit = (course) => {
    setEditingCourse(course);
    setEditName(course.cursoNombre);
  };

  const handleSaveEdit = async () => {
    if (editingCourse) {
      try {
        await updateDoc(doc(db, 'Cursos', editingCourse.id), { cursoNombre: editName });
        fetchCourses();
        setEditingCourse(null);
      } catch (error) {
        console.error('Error al actualizar el curso:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este curso?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'Cursos', id));
        fetchCourses();
      } catch (error) {
        console.error('Error al eliminar el curso:', error);
      }
    }
  };

  // Guardar los datos actuales como commit en LocalStorage
  const handleCommit = () => {
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const backupKey = `backup-${timestamp}`;
    localStorage.setItem(backupKey, JSON.stringify(courses));
    alert('Commit realizado y guardado en LocalStorage.');
    fetchBackupFiles(); // Actualizar la lista de backups
  };

  // Restaurar un backup seleccionado desde LocalStorage
  const handleRollback = async () => {
    if (!selectedBackup) {
      alert("Seleccione un backup para restaurar.");
      return;
    }

    const backupData = localStorage.getItem(selectedBackup);
    if (backupData) {
      const restoredCourses = JSON.parse(backupData);
      setCourses(restoredCourses);
      alert(`Rollback realizado desde ${selectedBackup}.`);
    } else {
      alert("No se encontró el backup seleccionado.");
    }
  };

  return (
    <div className="courses-container">
      <h2 className="title-courses">Cursos</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar curso..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearchPlus} /> Buscar
        </button>
      </div>

      <div className="add-course-container">
        <button onClick={() => window.location.href = '/NuevoCurso'} className="add-course-button">
          <FontAwesomeIcon icon={faPlus} /> Agregar Curso
        </button>
      </div>

      <div className="commit-rollback-container">
        <button onClick={handleCommit} className="commit-button">
          <FontAwesomeIcon icon={faSave} /> Commit
        </button>
        <select onChange={(e) => setSelectedBackup(e.target.value)} value={selectedBackup} className="rollback-select">
          <option value="">Seleccione un backup</option>
          {backupFiles.map(file => (
            <option key={file} value={file}>{file}</option>
          ))}
        </select>
        <button onClick={handleRollback} className="rollback-button">
          <FontAwesomeIcon icon={faUndo} /> Rollback
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
            {courses.length === 0 ? (
              <tr>
                <td colSpan="3">No se encontraron cursos.</td>
              </tr>
            ) : (
              courses.map((course) => (
                <tr key={course.id}>
                  <td>
                    {editingCourse && editingCourse.id === course.id ? (
                      <input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    ) : (
                      course.cursoNombre || 'Sin nombre'
                    )}
                  </td>
                  <td>
                    {course.fechaInicio
                      ? new Date(course.fechaInicio.seconds * 1000).toLocaleDateString()
                      : 'N/A'}
                  </td>
                  <td>
                    {editingCourse && editingCourse.id === course.id ? (
                      <button onClick={handleSaveEdit} className="save-button">
                        Guardar
                      </button>
                    ) : (
                      <>
                        <button
                          className="edit-button"
                          onClick={() => handleEdit(course)}
                        >
                          <FontAwesomeIcon icon={faEdit} /> Editar
                        </button>
                        <button
                          className="delete-button"
                          onClick={() => handleDelete(course.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} /> Eliminar
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Courses;
