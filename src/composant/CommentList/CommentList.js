import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Composant pour afficher la liste des commentaires
const CommentList = ({ articleId }) => {
    // États pour gérer les commentaires et les erreurs
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');

    // Fonction pour récupérer les commentaires depuis l'API
    const fetchComments = async () => {
        try {
            const response = await axios.get(`/api/articles/${articleId}/comments`);
            setComments(response.data);
        } catch (err) {
            setError('Erreur lors du chargement des commentaires');
        }
    };

    // Utilisation de useEffect pour appeler fetchComments lors du montage du composant
    useEffect(() => {
        fetchComments();
    }, []);

    // Rendu de la liste des commentaires
    return (
        <div className="comment-list">
            <h3>Commentaires</h3>
            {error && <div className="error">{error}</div>}
            {comments.length > 0 ? (
                <ul>
                    {comments.map(comment => (
                        <li key={comment.id}>
                            <p><strong>{comment.user.username}:</strong> {comment.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun commentaire</p>
            )}
        </div>
    );
};

export default CommentList;
