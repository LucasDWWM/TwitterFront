// Importation des bibliothèques nécessaires
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Définition du composant CategoryList
const CategoryList = () => {
    // Déclaration des états pour gérer les catégories et les erreurs
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');

    // Utilisation du hook useEffect pour effectuer des effets secondaires
    useEffect(() => {
        // Fonction pour récupérer les catégories depuis l'API
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/categories');
                setCategories(response.data);
            } catch (error) {
                setError('There was an error fetching the categories.');
                console.error('Error fetching categories:', error);
            }
        };

        // Appel de la fonction pour récupérer les catégories
        fetchCategories();
    }, []);

    // Fonction pour supprimer une catégorie
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/categories/${id}`);
            setCategories(categories.filter(category => category.id !== id));
        } catch (error) {
            setError('There was an error deleting the category.');
            console.error('Error deleting category:', error);
        }
    };

    // Affichage des catégories avec des options d'édition et de suppression
    return (
        <div className="container">
            <h1>Catégories</h1>
            {error && <p>{error}</p>}
            <a href="/categories/create" className="btn btn-primary">Créer une nouvelle catégorie</a>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <a href={`/categories/${category.id}`}>{category.name}</a>
                        <a href={`/categories/${category.id}/edit`} className="btn btn-secondary">Éditer</a>
                        <button onClick={() => handleDelete(category.id)} className="btn btn-danger">Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Exportation du composant CategoryList
export default CategoryList;
