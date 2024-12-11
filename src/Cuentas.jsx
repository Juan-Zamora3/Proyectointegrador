import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faEye, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, setDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './Cuentas.css';

function Cuentas() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [creatingUser, setCreatingUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPassword, setEditPassword] = useState('');

  // Método para cargar usuarios desde Firestore
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
      alert('Hubo un problema al cargar los usuarios.');
    }
  };

  // Efecto para cargar usuarios solo si está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      fetchUsers();
    }
  }, [isAuthenticated]);

  // Método para iniciar sesión con credenciales administrativas
  const handleLogin = () => {
    if (username.trim() === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      setShowLoginPrompt(false);
      fetchUsers();
    } else {
      alert('Credenciales incorrectas. Inténtalo nuevamente.');
    }
  };

  // Método para manejar edición de usuario
  const handleEdit = (user) => {
    setEditingUser(user);
    setEditName(user.name || '');
    setEditEmail(user.email || '');
    setEditPassword(user.password || '');
  };

  // Método para guardar los cambios en la edición de usuario
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
        alert('Usuario actualizado correctamente.');
      } catch (error) {
        console.error('Error al guardar los cambios:', error);
        alert('Hubo un problema al guardar los cambios.');
      }
    }
  };

  // Método para crear un nuevo usuario
  const handleCreateUser = async () => {
    if (editName && editEmail && editPassword) {
      try {
        const userRef = doc(db, 'Usuarios', editEmail);
        const userSnapshot = await getDocs(collection(db, 'Usuarios'));
        const emailExists = userSnapshot.docs.some((doc) => doc.id === editEmail);

        if (emailExists) {
          alert('El correo ya está en uso. Usa otro.');
          return;
        }

        await setDoc(userRef, {
          name: editName,
          email: editEmail,
          password: editPassword,
        });

        fetchUsers();
        setCreatingUser(false);
        setEditName('');
        setEditEmail('');
        setEditPassword('');
        alert('Usuario creado exitosamente.');
      } catch (error) {
        console.error('Error al crear el usuario:', error);
        alert('Hubo un problema al crear el usuario.');
      }
    } else {
      alert('Por favor completa todos los campos.');
    }
  };

  // Método para eliminar un usuario
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'Usuarios', id));
        fetchUsers();
        alert('Usuario eliminado correctamente.');
      } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        alert('Hubo un problema al eliminar el usuario.');
      }
    }
  };

  // Método para filtrar usuarios según el término de búsqueda
  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleCloseModal = () => {
    setShowLoginPrompt(false); // Vuelve a mostrar el modal si fue ocultado.
    setIsAuthenticated(false); // Asegura que el usuario no está autenticado.
    setUsername(''); // Limpia el campo de usuario.
    setPassword('');
  };

  return (
    <div className="courses-container">
      {showLoginPrompt && !isAuthenticated ? (
        // Modal para iniciar sesión administrativa
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
                <button onClick={handleCloseModal} className="close-modal-button">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : isAuthenticated ? (
        // Vista principal de "Cuentas" con buscador y botones
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
                    <button onClick={() => setSelectedUser(user)}>
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
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="close-icon"
                  onClick={() => setEditingUser(null)}
                />
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
                </div>
              </div>
            </div>
          )}
  
          {creatingUser && (
            <div className="overlay">
              <div className="modal">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="close-icon"
                  onClick={() => setCreatingUser(false)}
                />
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
                </div>
              </div>
            </div>
          )}
  
          {selectedUser && (
            <div className="overlay">
              <div className="modal">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="close-icon"
                  onClick={() => setSelectedUser(null)}
                />
                <h2>Detalles del Usuario</h2>
                <p>
                  <strong>Nombre:</strong> {selectedUser.name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedUser.email}
                </p>
                <p>
                  <strong>Contraseña:</strong> {selectedUser.password}
                </p>
              </div>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
  
}

export default Cuentas;
