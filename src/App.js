import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import CreateArticle from './components/CreateArticle';

// Composant principal pour définir les routes de l'application
function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/articles" component={ArticleList} />
                    <Route path="/create-article" component={CreateArticle} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
