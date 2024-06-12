import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ArticleList from './composant/ArticleList';
import CreateArticle from './composant/CreateArticle';
import TagList from './composant/TagList';
import Login from './composant/Login';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/articles">Articles</Link></li>
                        <li><Link to="/create-article">Create Article</Link></li>
                        <li><Link to="/tags">Tags</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/articles" element={<ArticleList />} />
                    <Route path="/create-article" element={<CreateArticle />} />
                    <Route path="/tags" element={<TagList />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
