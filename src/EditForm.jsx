import React, { useState } from 'react';
import './EditForm.css';

function EditForm({ list, onCancel, onSave }) {
  const [formData, setFormData] = useState({
    ...list,
    Participantes: list.Participantes || [
      { id: 1, Nombre: 'Joshua', ApellidoPaterno: 'Quiroz', ApellidoMaterno: 'Burgos', selected: false },
      { id: 2, Nombre: 'Israel', ApellidoPaterno: 'Pelayo', ApellidoMaterno: 'Sepa', selected: false },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleParticipant = (id) => {
    setFormData((prev) => ({
      ...prev,
      Participantes: prev.Participantes.map((p) =>
        p.id === id ? { ...p, selected: !p.selected } : p
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Guardar cambios
  };

  return (
    <div className="edit-form-container">
      <h2>EDITAR LISTA</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de la Lista:
          <input
            type="text"
            name="Nombre"
            value={formData.Nombre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Fecha de la Lista:
          <input
            type="date"
            name="Fecha"
            value={formData.Fecha}
            onChange={handleChange}
          />
        </label>

        <label>
          Buscar Participante:
          <input
            type="text"
            placeholder="Filtrar alumnos..."
            name="search"
            style={{ width: '100%' }}
            onChange={(e) => {
              const searchTerm = e.target.value.toLowerCase();
              setFormData((prev) => ({
                ...prev,
                filteredParticipantes: prev.Participantes.filter(
                  (p) =>
                    p.Nombre.toLowerCase().includes(searchTerm) ||
                    p.ApellidoPaterno.toLowerCase().includes(searchTerm) ||
                    p.ApellidoMaterno.toLowerCase().includes(searchTerm)
                ),
              }));
            }}
          />
        </label>

        <div className="table-container">
          <h3>Vista Previa de la Lista</h3>
          <table>
            <thead>
              <tr>
                <th>Seleccionar</th>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
              </tr>
            </thead>
            <tbody>
              {(formData.filteredParticipantes || formData.Participantes).map((participant) => (
                <tr key={participant.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={participant.selected}
                      onChange={() => toggleParticipant(participant.id)}
                    />
                  </td>
                  <td>{participant.Nombre}</td>
                  <td>{participant.ApellidoPaterno}</td>
                  <td>{participant.ApellidoMaterno}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="form-actions">
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancelar
          </button>
          <button type="submit" className="save-button">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
