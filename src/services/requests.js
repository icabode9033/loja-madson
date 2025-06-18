import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sebo-backend-production.up.railway.app/',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const result = await api.get(endpoint);
  return result.data;
};

export const requestPost = async (endpoint, body) => {
  const result = await api.post(endpoint, body);
  return result.data;
};

export default api;
