import React, { useState } from 'react';
import axios from 'axios';

const EventoForm = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');
  const [preco, setPreco] = useState('');
  const [capacidade, setCapacidade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        'http://localhost:4000/eventos',
        { nome, descricao, data, local, preco, capacidade },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Evento criado com sucesso!');
    } catch (error) {
      alert('Erro ao criar evento');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
      <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" />
      <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
      <input type="text" value={local} onChange={(e) => setLocal(e.target.value)} placeholder="Local" />
      <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} placeholder="Preço" />
      <input type="number" value={capacidade} onChange={(e) => setCapacidade(e.target.value)} placeholder="Capacidade" />
      <button type="submit">Criar Evento</button>
    </form>
  );
};

export default EventoForm;
