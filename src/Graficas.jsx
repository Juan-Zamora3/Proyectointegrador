import React, { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebaseConfig';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import './Graficas.css';

// Registra los componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Graficas = () => {
  const [courseData, setCourseData] = useState([]);
  const [reportData, setReportData] = useState([]);
  const [participationData, setParticipationData] = useState({});

  useEffect(() => {
    fetchCourseData();
    fetchReportData();
    fetchParticipationData();
  }, []);

  const fetchCourseData = () => {
    onSnapshot(collection(db, 'Cursos'), (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const course = doc.data();
        // Calcula la duración en días entre fechaInicio y fechaFin
        const fechaInicio = new Date(course.fechaInicio);
        const fechaFin = new Date(course.fechaFin);
        const duracion = Math.floor((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24)); // diferencia en días
        return { ...course, duracion };
      });
      setCourseData(data);
    });
  };

  const fetchReportData = () => {
    onSnapshot(collection(db, 'Reportes'), (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setReportData(data);
    });
  };

  const fetchParticipationData = () => {
    onSnapshot(collection(db, 'Listas'), (snapshot) => {
      const participation = {};
      snapshot.docs.forEach((doc) => {
        const listData = doc.data();
        const courseId = listData.cursoId;
        if (participation[courseId]) {
          participation[courseId] += 1;
        } else {
          participation[courseId] = 1;
        }
      });
      setParticipationData(participation);
    });
  };

  const getAverageRating = (courseId) => {
    const courseReports = reportData.filter((report) => report.cursoId === courseId);
    const totalRating = courseReports.reduce((sum, report) => sum + (report.calificacion || 0), 0);
    return courseReports.length > 0 ? totalRating / courseReports.length : 0;
  };

  const durationChartData = {
    labels: courseData.map((course) => course.cursoNombre),
    datasets: [
      {
        label: 'Duración en días',
        data: courseData.map((course) => course.duracion || 0),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const participationChartData = {
    labels: courseData.map((course) => course.cursoNombre),
    datasets: [
      {
        label: 'Participación',
        data: courseData.map((course) => participationData[course.id] || 0),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const ratingChartData = {
    labels: courseData.map((course) => course.cursoNombre),
    datasets: [
      {
        label: 'Calificación Promedio',
        data: courseData.map((course) => getAverageRating(course.id)),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="graficas-container">
      <h2></h2>
      <div className="chart-section">
        <div className="chart-container">
          <h3>Duración de los Cursos</h3>
          <Bar data={durationChartData} options={{ indexAxis: 'y' }} />
        </div>
        <div className="chart-container">
          <h3>Participación por Curso</h3>
          <Doughnut data={participationChartData} />
        </div>
        <div className="chart-container">
          <h3>Calificación Promedio</h3>
          <Bar data={ratingChartData} />
        </div>
      </div>
    </div>
  );
};

export default Graficas;
