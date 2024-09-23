import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/autenticacao/login', { usuario, senha });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); // Redireciona após o login bem-sucedido
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Usuário"
      />
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
