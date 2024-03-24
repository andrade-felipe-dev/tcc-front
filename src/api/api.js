// api.js
import axios from 'axios';
import router from '../router/index'; // Certifique-se de que este é o caminho correto para o seu router

const token = localStorage.getItem('token'); // Obter o token do local storage

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Definindo a URL base
  headers: {
    Authorization: token ? `Bearer ${token}` : '', // Configurar o cabeçalho de autorização
  },
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      router.push('/login');
    }
    return Promise.reject(error);
  }
);

export default api;
