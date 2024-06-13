import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './composant/Header/Header';
import Sidebar from './composant/Sidebar/Sidebar';
import Feed from './composant/Feed/Feed';
import Widgets from './composant/Widgets/Widgets';
import CreateArticle from './composant/CreateArticle/CreateArticle';
import TagList from './composant/TagList/TagList';
import Login from './composant/Login/Login';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="app__body">
                    <Sidebar />
                    <Routes>
                        <Route path="/articles" element={<Feed />} />
                        <Route path="/create-article" element={<CreateArticle />} />
                        <Route path="/tags" element={<TagList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Feed />} />
                    </Routes>
                    <Widgets />
                </div>
            </div>
        </Router>
    );
}

export default App;
