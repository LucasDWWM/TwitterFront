import React, { useEffect, useState } from 'react';
import api from '../../api';

// Composant pour lister les articles
const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    // Charger les articles au montage du composant
    useEffect(() => {
        api.get('/articles')
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the articles!', error);
            });
    }, []);

    return (
        <div>
            <h1>Articles</h1>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;
