import React, { useEffect, useState } from 'react';
import api from '../services/api';

const DashboardPage = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await api.get('/eventos');
        setEventos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
        setLoading(false);
        if (error.response && error.response.status === 403) {
          setError('Acesso negado. Você não tem permissão para visualizar os eventos.');
        } else {
          setError('Ocorreu um erro ao buscar os eventos.');
        }
      }
    };

    fetchEventos();
  }, []);

  return (
    <div>
      <h1>Eventos</h1>
      {loading && <p>Carregando eventos...</p>}
      {error && <p>{error}</p>}
      
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            <strong>{evento.nome}</strong> - {evento.local}
            <ul>
              <li>Data: {new Date(evento.data).toLocaleDateString()}</li>
              <li>Capacidade: {evento.capacidade}</li>
              <li>Preço: R$ {typeof evento.preco === 'number' ? evento.preco.toFixed(2) : 'Preço não disponível'}</li>
              <li><strong>Ingressos Disponíveis:</strong></li>
              <ul>
                {evento.ingressos && evento.ingressos.length > 0 ? (
                  evento.ingressos.map((ingresso) => (
                    <li key={ingresso.id}>
                      Tipo: {ingresso.tipo}, Preço: R$ {typeof ingresso.preco === 'number' ? ingresso.preco.toFixed(2) : 'Preço não disponível'}, Quantidade: {ingresso.quantidade}
                    </li>
                  ))
                ) : (
                  <li>Nenhum ingresso disponível</li>
                )}
              </ul>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
