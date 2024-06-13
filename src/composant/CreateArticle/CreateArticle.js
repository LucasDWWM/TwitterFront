import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

// Composant pour créer un nouvel article
const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/articles', { title, content });
            // Redirection vers la liste des articles après la création réussie
            navigate('/articles');
        } catch (error) {
            console.error('There was an error creating the article!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Content</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <button type="submit">Create Article</button>
        </form>
    );
};

export default CreateArticle;
