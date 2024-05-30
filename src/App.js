import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import ArticleList from './composant/ArticleList'; 
import CreateArticle from './composant/CreateArticle'; 
import TagList from './composant/TagList';

// Composant principal pour définir les routes de l'application
function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Définir les routes pour les différents composants */}
                    <Route path="/articles" element={<ArticleList />} />
                    <Route path="/create-article" element={<CreateArticle />} />
                    <Route path="/tags" element={<TagList />} /> {/* Route pour afficher la liste des tags */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
