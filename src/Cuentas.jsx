import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faPlus, faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, setDoc, deleteDoc, doc, updateDoc, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Cuentas.css';

function Cuentas() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [creatingUser, setCreatingUser] = useState(false);  // Cambié a 'false' para inicializar correctamente el estado
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPassword, setEditPassword] = useState('');

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Usuarios'));
      const loadedUsers = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(loadedUsers);
    } catch (error) {
      console.error('Error al cargar los usuarios:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchUsers();
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      setShowLoginPrompt(false);
    } else {
      alert('Credenciales incorrectas. Inténtalo nuevamente.');
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditName(user.name || '');
    setEditEmail(user.email || '');
    setEditPassword(user.password || '');
  };

  const handleSaveEdit = async () => {
    if (editingUser) {
      try {
        await updateDoc(doc(db, 'Usuarios', editingUser.id), {
          name: editName,
          email: editEmail,
          password: editPassword,
        });
        fetchUsers();
        setEditingUser(null);
      } catch (error) {
        console.error('Error al guardar los cambios:', error);
      }
    }
  };

  const handleVisualizar = (user) => {
    setSelectedUser(user);
  };

  const handleCreateUser = async () => {
    if (editName && editEmail && editPassword) {
      try {
        const userDoc = await getDocs(doc(db, 'Usuarios', editEmail));  // Usa editEmail aquí
        if (userDoc.exists()) {
          alert('El correo ya está en uso. Por favor, usa otro o inicia sesión.');
          return;
        }
  
        // Guarda los datos del usuario en la colección "Usuarios"
        await setDoc(doc(db, 'Usuarios', editEmail), {
          name: editName,
          email: editEmail,
          password: editPassword,
        });
        fetchUsers(); // Actualiza la lista de usuarios
        setCreatingUser(false); // Cierra el modal
        setEditName('');
        setEditEmail('');
        setEditPassword('');
      } catch (error) {
        console.error('Error al agregar el usuario:', error);
        alert('Error al crear el usuario. Inténtalo nuevamente.');
      }
    } else {
      alert('Por favor completa todos los campos.');
    }
  };
  

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este Usuario?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'Usuarios', id));
        fetchUsers();
      } catch (error) {
        console.error('Error al eliminar el Usuario:', error);
      }
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses-container">
      {showLoginPrompt && !isAuthenticated ? (
        <div className="login-overlay">
          <div className="login-box">
            <h2>Para acceder necesitas cuenta administrativa</h2>
            <div className="login-form">
              <div className="form-field">
                <label htmlFor="username">Usuario</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="login-input"
                  placeholder="Ingresa tu usuario"
                />
              </div>
              <div className="form-field">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  placeholder="Ingresa tu contraseña"
                />
              </div>
              <div className="login-btn-container">
                <button onClick={handleLogin} className="login-button">
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="courses-left">
            <div className="header-container">
              <input
                type="text"
                placeholder="Buscar usuario..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button onClick={() => setCreatingUser(true)} className="add-course-button">
                <FontAwesomeIcon icon={faPlus} /> Agregar Usuario
              </button>
            </div>
            <div className="courses-section">
              {filteredUsers.map((user) => (
                <div key={user.id} className="course-card">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <div className="course-actions">
                    <button onClick={() => handleVisualizar(user)}>
                      <FontAwesomeIcon icon={faEye} /> Ver
                    </button>
                    <button onClick={() => handleEdit(user)}>
                      <FontAwesomeIcon icon={faEdit} /> Editar
                    </button>
                    <button onClick={() => handleDelete(user.id)}>
                      <FontAwesomeIcon icon={faTrash} /> Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {editingUser && (
            <div className="overlay">
              <div className="modal">
                <h2>Editar Usuario</h2>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Nombre"
                />
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  placeholder="Correo"
                />
                <input
                  type="password"
                  value={editPassword}
                  onChange={(e) => setEditPassword(e.target.value)}
                  placeholder="Contraseña"
                />
                <div className="modal-buttons">
                  <button onClick={handleSaveEdit}>Guardar Cambios</button>
                  <button onClick={() => setEditingUser(null)}>Cancelar</button>
                </div>
              </div>
            </div>
          )}

          {creatingUser && (
            <div className="overlay">
              <div className="modal">
                <h2>Crear Usuario</h2>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Nombre"
                />
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  placeholder="Correo"
                />
                <input
                  type="password"
                  value={editPassword}
                  onChange={(e) => setEditPassword(e.target.value)}
                  placeholder="Contraseña"
                />
                <div className="modal-buttons">
                  <button onClick={handleCreateUser}>Guardar Usuario</button>
                  <button onClick={() => setCreatingUser(false)}>Cancelar</button>
                </div>
              </div>
            </div>
          )}

          {selectedUser && (
            <div className="overlay">
              <div className="modal">
                <h2>Detalles del Usuario</h2>
                <p><strong>Nombre:</strong> {selectedUser.name}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Contraseña:</strong> {selectedUser.password}</p>
                <div className="modal-buttons">
                  <button onClick={() => setSelectedUser(null)}>Cerrar</button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cuentas;