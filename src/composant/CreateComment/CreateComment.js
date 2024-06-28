import React, { useState } from 'react';
import axios from 'axios';

// Composant pour créer un nouveau commentaire
const CreateComment = ({ articleId }) => {
    // États pour gérer le contenu du commentaire,le message de succès
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    // Fonction de soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            // Requête POST à l'API Laravel pour créer un nouveau commentaire
            const response = await axios.post(`/api/articles/${articleId}/comments`, {
                content
            });
            // Mise à jour du message de succès et réinitialisation du champ de contenu
            setMessage('Commentaire ajouté avec succès');
            setContent('');
        } catch (err) {
            // Gestion des erreurs de réponse
            if (err.response) {
                setError('Erreur lors de l\'ajout du commentaire');
            } else {
                setError('Erreur de serveur');
            }
        }
    };

    // Rendu du formulaire de création de commentaire
    return (
        <div className="create-comment">
            <h3>Ajouter un commentaire</h3>
            {/* Affichage du message de succès */}
            {message && <div className="success-message">{message}</div>}

            <form onSubmit={handleSubmit}>
                {/* Champ de saisie du contenu du commentaire */}
                <div className="form-group">
                    <label>Commentaire</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                {/* Bouton de soumission */}
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default CreateComment;
