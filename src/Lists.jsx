import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import "./Lists.css";

function Lists() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [lists, setLists] = useState([]);
  const [editingList, setEditingList] = useState(null); // Lista seleccionada para editar
  const [searchTerm, setSearchTerm] = useState("");
  const [formValues, setFormValues] = useState({ Nombre: "", Fecha: "" });
  const [allStudents, setAllStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [filterCargo, setFilterCargo] = useState("Todos los cargos");
  const [showPreview, setShowPreview] = useState(false);

  // Cargar listas desde Firebase
  const fetchLists = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Listas"));
      const loadedLists = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLists(loadedLists);
    } catch (error) {
      console.error("Error al cargar las listas:", error);
    }
  };

  // Cargar estudiantes desde Firebase
  const fetchStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Alumnos"));
      const students = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllStudents(students);
    } catch (error) {
      console.error("Error al cargar los estudiantes:", error);
    }
  };

  useEffect(() => {
    fetchLists();
    fetchStudents();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (student) => {
    const isSelected = selectedStudents.some((s) => s.id === student.id);
    if (isSelected) {
      setSelectedStudents(selectedStudents.filter((s) => s.id !== student.id));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const handleSave = async () => {
    if (!formValues.Nombre.trim()) {
      alert("Por favor, introduce el nombre de la lista.");
      return;
    }

    if (!formValues.Fecha.trim()) {
      alert("Por favor, selecciona una fecha.");
      return;
    }

    if (selectedStudents.length === 0) {
      alert("Agrega al menos un participante.");
      return;
    }

    const listaData = {
      Nombre: formValues.Nombre.trim(),
      Fecha: formValues.Fecha.trim(),
      Alumnos: selectedStudents.map((s) => ({
        Nombres: s.Nombres || "Nombre no especificado",
        ApellidoP: s.ApellidoP || "Apellido Paterno no especificado",
        ApellidoM: s.ApellidoM || "Apellido Materno no especificado",
        Puesto: s.Puesto || "Sin puesto",
      })),
    };

    try {
      if (editingList) {
        await updateDoc(doc(db, "Listas", editingList.id), listaData);
        alert("Lista actualizada exitosamente.");
      } else {
        await addDoc(collection(db, "Listas"), listaData);
        alert("Lista creada exitosamente.");
      }
      setShowFormModal(false);
      setEditingList(null);
      setFormValues({ Nombre: "", Fecha: "" });
      setSelectedStudents([]);
      fetchLists();
    } catch (error) {
      console.error("Error al guardar la lista:", error);
      alert("Hubo un error al guardar la lista.");
    }
  };

  const handleEdit = (list) => {
    setEditingList(list);
    setFormValues({ Nombre: list.Nombre || "", Fecha: list.Fecha || "" });
    const updatedSelectedStudents = allStudents.filter((student) =>
      list.Alumnos.some(
        (alumno) =>
          alumno.Nombres === student.Nombres &&
          alumno.ApellidoP === student.ApellidoP &&
          alumno.ApellidoM === student.ApellidoM
      )
    );
    setSelectedStudents(updatedSelectedStudents);
    setShowFormModal(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta lista?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "Listas", id));
        alert("Lista eliminada exitosamente.");
        fetchLists();
      } catch (error) {
        console.error("Error al eliminar la lista:", error);
      }
    }
  };

  const filteredStudents = allStudents.filter((student) => {
    const matchesSearch =
      student.Nombres?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.ApellidoP?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.ApellidoM?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCargo =
      filterCargo === "Todos los cargos" || student.Puesto === filterCargo;

    return matchesSearch && matchesCargo;
  });

  return (
    <div className="lists-container">
      <h2 className="title-lists">Listas</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar lista..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button
          className="Add-Button"
          onClick={() => {
            setEditingList(null);
            setFormValues({ Nombre: "", Fecha: "" });
            setSelectedStudents([]);
            setShowFormModal(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} /> Nueva Lista
        </button>
      </div>
      <div className="lists-grid">
        {lists.map((list) => (
          <div className="list-card" key={list.id}>
            <h3>{list.Nombre || "Sin Nombre"}</h3>
            <p>Fecha: {list.Fecha || "Sin fecha"}</p>
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

      {showFormModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{editingList ? "Editar Lista" : "Nueva Lista"}</h2>
            <form>
              <label>Nombre de la Lista:</label>
              <input
                type="text"
                name="Nombre"
                value={formValues.Nombre}
                onChange={handleInputChange}
                placeholder="Nombre de la lista"
              />
              <label>Fecha de la Lista:</label>
              <input
                type="date"
                name="Fecha"
                value={formValues.Fecha}
                onChange={handleInputChange}
              />
              <h3>Buscar Participante</h3>
              <input
                type="text"
                placeholder="Filtrar alumnos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="select-box"
                value={filterCargo}
                onChange={(e) => setFilterCargo(e.target.value)}
              >
                <option value="Todos los cargos">Todos los cargos</option>
                <option value="Administrador">Administrador</option>
                <option value="Sistemas">Sistemas</option>
                <option value="Maestro">Maestro</option>
                <option value="Otro">Otro</option>
              </select>
              <table>
                <thead>
                  <tr>
                    <th>Seleccionar</th>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Cargo</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedStudents.some((s) => s.id === student.id)}
                          onChange={() => handleCheckboxChange(student)}
                        />
                      </td>
                      <td>{student.Nombres}</td>
                      <td>{student.ApellidoP}</td>
                      <td>{student.ApellidoM}</td>
                      <td>{student.Puesto || "Sin puesto"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {showPreview && (
                <>
                  <h3>Vista Previa de la Lista</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Cargo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedStudents.map((student, index) => (
                        <tr key={index}>
                          <td>{student.Nombres}</td>
                          <td>{student.ApellidoP}</td>
                          <td>{student.ApellidoM}</td>
                          <td>{student.Puesto || "Sin puesto"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
              <div className="modal-actions">
                <button type="button" onClick={() => setShowPreview(!showPreview)}>
                  {showPreview ? "Ocultar Vista Previa" : "Mostrar Vista Previa"}
                </button>
                <button type="button" onClick={handleSave}>
                  Guardar
                </button>
                <button type="button" onClick={() => setShowFormModal(false)}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lists;
