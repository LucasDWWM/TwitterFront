import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // remplacer http://localhost:8000/api/articles par l'URL correcte de votre d'API Laravel.
        axios.get('http://localhost:8000/api/articles')
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
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
}

export default ArticleList;
