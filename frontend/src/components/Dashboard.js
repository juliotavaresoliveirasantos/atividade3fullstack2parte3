import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:4000/eventos', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEventos(response.data);
    };
    fetchEventos();
  }, []);

  return (
    <div>
      <h1>Eventos</h1>
      <ul>
        {eventos.map(evento => (
          <li key={evento.id}>{evento.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
