import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebaseConfig';
import './Reporte.css';

const Reportes = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

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

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    for (const file of files) {
      if (file.size > 5 * 1024 * 1024) {
        alert('El tamaño máximo permitido por imagen es 5MB.');
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('Solo se permiten archivos de imagen.');
        return;
      }
    }

    if (files.length + previewImages.length > 5) {
      alert('Solo puedes subir un máximo de 5 imágenes.');
      return;
    }

    setImages([...images, ...files]);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...previews]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedPreviews = previewImages.filter((_, i) => i !== index);

    setImages(updatedImages);
    setPreviewImages(updatedPreviews);
  };

  const handleSaveReport = async () => {
    if (!selectedCourse || !comment || !rating) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    setIsUploading(true);

    try {
      const imageUrls = [];
      for (const image of images) {
        const storageRef = ref(storage, `reportes/${Date.now()}-${image.name}`);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        imageUrls.push(downloadURL);
      }

      const courseDocRef = doc(db, 'Cursos', selectedCourse);
      const courseDocSnapshot = await getDoc(courseDocRef);

      if (!courseDocSnapshot.exists()) {
        alert('Curso no encontrado');
        return;
      }

      const courseData = courseDocSnapshot.data();

      await updateDoc(courseDocRef, {
        reportes: [
          ...(courseData.reportes || []),
          {
            comentario: comment,
            calificacion: rating,
            imagenes: imageUrls,
            fecha: new Date(),
          },
        ],
      });

      alert('Reporte guardado con éxito.');
      setComment('');
      setRating('');
      setSelectedCourse('');
      setImages([]);
      setPreviewImages([]);
    } catch (error) {
      console.error('Error al guardar el reporte:', error);
      alert('Hubo un error al guardar el reporte.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="reports-container">
      <h2>Reportes de Cursos</h2>

      <label>Seleccionar Curso</label>
      <select
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="">Seleccione un curso</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.cursoNombre || 'Sin nombre'}
          </option>
        ))}
      </select>

      <label>Comentario</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe un comentario sobre el curso..."
      />

      <label>Calificación (1-5)</label>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        placeholder="Calificación"
      />

      <label>Subir Imágenes (Máximo 5)</label>
      <input type="file" accept="image/*" multiple onChange={handleImageUpload} />

      <div className="preview-container">
        {previewImages.map((src, index) => (
          <div key={index} className="preview-item">
            <img src={src} alt={`preview-${index}`} />
            <button onClick={() => handleRemoveImage(index)}>Eliminar</button>
          </div>
        ))}
      </div>

      <button onClick={handleSaveReport} disabled={isUploading}>
        {isUploading ? 'Guardando...' : 'Guardar Reporte'}
      </button>
    </div>
  );
};

export default Reportes;
