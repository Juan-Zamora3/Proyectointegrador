import React, { useState, useEffect } from 'react';
import './NuevoCurso.css';
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const NuevoCurso = ({ cursoSeleccionado, onActualizarCurso, onCancelar }) => {
  const [cursoNombre, setCursoNombre] = useState('');
  const [asesor, setAsesor] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [listas, setListas] = useState([]);
  const [todasLasListas, setTodasLasListas] = useState([]);

  // Cargar listas desde Firebase
  useEffect(() => {
    const fetchListas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'listas'));
        const loadedListas = querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
        }));
        setTodasLasListas(loadedListas);
      } catch (error) {
        console.error('Error al cargar las listas:', error);
      }
    };

    fetchListas();
  }, []);

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
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      if (cursoSeleccionado) {
        // Actualizar curso existente
        await updateDoc(doc(db, 'cursos', cursoSeleccionado.id), {
          cursoNombre,
          asesor,
          fechaInicio,
          fechaFin,
          listas,
        });
        alert('Curso actualizado exitosamente');
        onActualizarCurso(cursoSeleccionado.id, { cursoNombre, asesor, fechaInicio, fechaFin, listas });
      } else {
        // Crear nuevo curso
        await addDoc(collection(db, 'cursos'), {
          cursoNombre,
          asesor,
          fechaInicio,
          fechaFin,
          listas,
        });
        alert('Curso creado exitosamente');
      }
    } catch (error) {
      console.error('Error al crear o actualizar el curso:', error);
      alert('Hubo un error al crear o actualizar el curso.');
    }

    setCursoNombre('');
    setAsesor('');
    setFechaInicio('');
    setFechaFin('');
    setListas([]);
    onCancelar();
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
          <div className="listas">
            {todasLasListas.map((lista) => (
              <div key={lista.id}>
                <label>
                  <input
                    type="checkbox"
                    value={lista.name}
                    onChange={handleListChange}
                    checked={listas.includes(lista.name)}
                  />
                  {lista.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="preview-section">
          <h3>Vista Previa</h3>
          <table className="preview-table">
            <thead>
              <tr>
                <th>Curso</th>
                <th>Asesor</th>
                <th>Fecha de Inicio</th>
                <th>Fecha de Finalización</th>
                <th>Listas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{cursoNombre}</td>
                <td>{asesor}</td>
                <td>{fechaInicio}</td>
                <td>{fechaFin}</td>
                <td>{listas.join(', ')}</td>
              </tr>
            </tbody>
          </table>
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
