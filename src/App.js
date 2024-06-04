import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './composant/ArticleList';
import CreateArticle from './composant/CreateArticle';
import TagList from './composant/TagList';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/articles" element={<ArticleList />} />
                    <Route path="/create-article" element={<CreateArticle />} />
                    <Route path="/tags" element={<TagList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
