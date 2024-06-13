import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/create-article">Create Article</Link></li>
                <li><Link to="/tags">Tags</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
