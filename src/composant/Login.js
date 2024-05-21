import React, { useState } from 'react';
import api from '../api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', { email, password });
            // Gérer la réponse de connexion, par exemple, enregistrer le token
        } catch (error) {
            console.error('Login error', error);
        }
    }
}