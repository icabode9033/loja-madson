import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333', // URL do backend
});

// Interceptador para adicionar o token nas requisições (caso seja necessário no futuro)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); // Busca o token salvo no navegador
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Adiciona o token ao cabeçalho
  }
  return config;
});
