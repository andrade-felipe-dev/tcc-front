import axios from 'axios';
import { useHistory } from 'react-router-dom';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      const history = useHistory();
      history.push('/login');
    }
    return Promise.reject(error);
  }
);

export default api;
