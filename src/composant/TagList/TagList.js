import React, { useEffect, useState } from 'react';
import api from '../../api';

// Composant pour afficher la liste des tags
const TagList = () => {
    const [tags, setTags] = useState([]);

    // Utilisation de useEffect pour effectuer une requête GET à l'API lors du montage du composant
    useEffect(() => {
        api.get('/tags')
            .then(response => {
                // Mettre à jour l'état avec les données des tags récupérées
                setTags(response.data);
            })
            .catch(error => {
                // Gérer les erreurs
                console.error('Il y a une erreur avec le tag!', error);
            });
    }, []);

    return (
        <div>
            <h1>Tags</h1>
            <ul>
                {/* Afficher chaque tag dans une liste */}
                {tags.map(tag => (
                    <li key={tag.id}>{tag.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TagList;
