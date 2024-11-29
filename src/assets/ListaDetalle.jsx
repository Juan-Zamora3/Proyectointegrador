import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './ListaDetalle.css';

function ListaDetalle() {
  const { id } = useParams();
  const [list, setList] = useState(null);

  const fetchListDetails = async () => {
    try {
      const docRef = doc(db, 'Listas', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setList(docSnap.data());
      } else {
        console.error('No se encontró la lista');
      }
    } catch (error) {
      console.error('Error al cargar los detalles de la lista:', error);
    }
  };

  useEffect(() => {
    fetchListDetails();
  }, [id]);

  if (!list) {
    return <div>Cargando detalles de la lista...</div>;
  }

  return (
    <div className="list-detail-container">
      <h2>Detalles de la Lista</h2>
      <p><strong>Nombre:</strong> {list.Nombre}</p>
      <p><strong>Fecha:</strong> {list.Fecha || 'N/A'}</p>
      <button
        className="back-button"
        onClick={() => window.history.back()}
      >
        Volver
      </button>
    </div>
  );
}

export default ListaDetalle;
