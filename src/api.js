import axios from 'axios';

// Configuration d'Axios pour interagir avec l'API Laravel
const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
