import axios from 'axios';

const api = axios.create({
    baseURL: 'http://your-laravel-api-url/api', // Remplacez par l'URL de votre API Laravel
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
