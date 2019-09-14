import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch, /* Only allows one route to be generated at a time */
  } from "react-router-dom";
import './App.css';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFoundPage} /> {/* Need to have this last */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
