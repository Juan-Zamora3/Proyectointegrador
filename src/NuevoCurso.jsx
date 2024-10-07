import React, { useState, useEffect } from 'react';
import './NuevoCurso.css';
import { db } from './firebaseConfig'; 
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'; 

const NuevoCurso = ({ cursoSeleccionado, onActualizarCurso, onCancelar }) => {
  const [cursoNombre, setCursoNombre] = useState('');
  const [asesor, setAsesor] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [listas, setListas] = useState([]);

  // Si cursoSeleccionado cambia, cargamos sus datos en el formulario
  useEffect(() => {
    if (cursoSeleccionado) {
      setCursoNombre(cursoSeleccionado.cursoNombre || '');
      setAsesor(cursoSeleccionado.asesor || '');
      setFechaInicio(cursoSeleccionado.fechaInicio || '');
      setFechaFin(cursoSeleccionado.fechaFin || '');
      setListas(cursoSeleccionado.listas || []);
    }
  }, [cursoSeleccionado]);

  const handleListChange = (e) => {
    const { value, checked } = e.target;
    setListas((prevListas) =>
      checked ? [...prevListas, value] : prevListas.filter((lista) => lista !== value)
    );
  };

  const handleCrearOActualizar = async () => {
    if (!cursoNombre || !asesor || !fechaInicio || !fechaFin) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (cursoSeleccionado) {
      // Si cursoSeleccionado existe, actualiza el curso
      const cursoActualizado = {
        cursoNombre,
        asesor,
        fechaInicio,
        fechaFin,
        listas,
      };
      onActualizarCurso(cursoSeleccionado.id, cursoActualizado);
    } else {
      // Si no hay cursoSeleccionado, crea uno nuevo
      try {
        await addDoc(collection(db, 'cursos'), {
          cursoNombre,
          asesor,
          fechaInicio,
          fechaFin,
          listas,
        });
        alert('Curso creado exitosamente');
      } catch (error) {
        console.error("Error al crear el curso: ", error);
        alert('Hubo un error al crear el curso.');
      }
    }

    // Limpiar el formulario
    setCursoNombre('');
    setAsesor('');
    setFechaInicio('');
    setFechaFin('');
    setListas([]);
    onCancelar(); // Cierra el formulario
  };

  return (
    <div className="nuevo-curso-page">
      <div className="nuevo-curso-container">
        <div className="form-section">
          <h2>{cursoSeleccionado ? 'Editar Curso' : 'Nuevo Curso'}</h2>
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
                          checked={listas.includes("Academia de Sistemas")}
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
                          checked={listas.includes("Academia de Administración")}
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
                          checked={listas.includes("Academia de Civil")}
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
          <button className="cancel-button" onClick={onCancelar}>Cancelar</button>
          <button className="create-button" onClick={handleCrearOActualizar}>
            {cursoSeleccionado ? 'Actualizar' : 'Crear'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NuevoCurso;
