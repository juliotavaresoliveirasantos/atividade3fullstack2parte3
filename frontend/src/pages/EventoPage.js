import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const EventoPage = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');
  const [preco, setPreco] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/eventos', { nome, descricao, data, local, preco, capacidade });
      navigate('/dashboard'); // Redireciona para o dashboard após criar o evento
    } catch (error) {
      console.error('Erro ao criar evento', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do Evento"
      />
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição"
      />
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <input
        type="text"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        placeholder="Local"
      />
      <input
        type="number"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        placeholder="Preço"
      />
      <input
        type="number"
        value={capacidade}
        onChange={(e) => setCapacidade(e.target.value)}
        placeholder="Capacidade"
      />
      <button type="submit">Criar Evento</button>
    </form>
  );
};

export default EventoPage;
