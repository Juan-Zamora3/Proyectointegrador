import React, { useState } from 'react';
import './NuevoCurso.css'; // Asegúrate de tener este archivo CSS

const NuevoCurso = () => {
  const [cursoNombre, setCursoNombre] = useState('');
  const [asesor, setAsesor] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [listas, setListas] = useState([]);

  const handleListChange = (e) => {
    const { value, checked } = e.target;
    setListas((prevListas) =>
      checked ? [...prevListas, value] : prevListas.filter((lista) => lista !== value)
    );
  };

  const handleCrear = () => {
    // Lógica para crear el curso
    console.log({
      cursoNombre,
      asesor,
      fechaInicio,
      fechaFin,
      listas,
    });
  };

  return (
    <div className="nuevo-curso-page">
      <div className="nuevo-curso-container">
        <div className="form-section">
          <h2>Nuevo curso</h2>
          <label>Nombre del curso</label>
          <input
            type="text"
            value={cursoNombre}
            onChange={(e) => setCursoNombre(e.target.value)}
            placeholder="Nombre del curso"
          />
          <label>Asesor del curso</label>
          <input
            type="text"
            value={asesor}
            onChange={(e) => setAsesor(e.target.value)}
            placeholder="Asesor del curso"
          />
          <label>Fecha de Inicio</label>
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
          <label>Fecha de Finalización</label>
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
          <label>Listas</label>
          <input
            type="text"
            placeholder="Buscar nombre, usuario, correo, etc."
          />
          <div className="listas">
            <div className="table-container">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>
                        <input
                          type="checkbox"
                          value="Academia de Sistemas"
                          onChange={handleListChange}
                        />
                        Academia de Sistemas
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>
                        <input
                          type="checkbox"
                          value="Academia de Administración"
                          onChange={handleListChange}
                        />
                        Academia de Administración
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>
                        <input
                          type="checkbox"
                          value="Academia de Civil"
                          onChange={handleListChange}
                        />
                        Academia de Civil
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="preview-section">
          <h3>Vista Previa</h3>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Área</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alejandro</td>
                <td>Fernández</td>
                <td>Gómez</td>
                <td>Recursos Humanos</td>
              </tr>
              {/* Más filas */}
            </tbody>
          </table>
          <div className="actions">
            <button className="cancel-button">Cancelar</button>
            <button className="create-button" onClick={handleCrear}>Crear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoCurso;
