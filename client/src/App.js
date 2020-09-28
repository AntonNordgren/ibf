import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/home'
import Team from './components/team'
import Pictures from './components/pictures'
import NotFound from './components/notFound'

import NavigationBar from './components/NavigationBar'

import './App.css';

import 'bootswatch/dist/simplex/bootstrap.min.css';

export default function App() {
  return (
    <div className="App container">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/laget" component={Team} />
          <Route path="/bilder" component={Pictures} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
