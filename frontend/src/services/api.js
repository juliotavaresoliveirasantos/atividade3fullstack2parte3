import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',  // URL do servidor
});

// Intercepta todas as requisições e adiciona o token JWT ao cabeçalho
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');  // Verifique se o token existe no localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;  // Adiciona o token no cabeçalho Authorization
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
