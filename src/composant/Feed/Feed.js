import React from 'react';
import './Feed.css';
import ArticleList from '../ArticleList/ArticleList';

function Feed() {
    return (
        <div className="feed">
            <h2>Home</h2>
            <ArticleList />
        </div>
    );
}

export default Feed;
