import React, { useState } from 'react';
import './EditForm.css';

function EditForm({ list, onCancel, onSave }) {
  const [formData, setFormData] = useState({ ...list });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Llamar a la función de guardado
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
            onChange={handleChange}
            style={{ width: '100%' }}
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
              {formData.Participantes?.map((participant, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={participant.selected || false}
                      onChange={() => {
                        const updatedParticipants = [...formData.Participantes];
                        updatedParticipants[index].selected =
                          !updatedParticipants[index].selected;
                        setFormData((prev) => ({
                          ...prev,
                          Participantes: updatedParticipants,
                        }));
                      }}
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
