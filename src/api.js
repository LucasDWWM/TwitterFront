import axios from 'axios';

// Configuration d'Axios
const api = axios.create({
    baseURL: 'http://your-laravel-api-url/api', // Remplacez par l'URL de votre API Laravel
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
