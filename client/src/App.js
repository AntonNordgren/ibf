import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/home'
import Stats from './components/stats'
import Team from './components/team'
import NotFound from './components/notFound'
import Player from './components/player'

import NavigationBar from './components/NavigationBar'

import './App.css';

export default function App() {
  return (
    <div className="App container">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stats" component={Stats} />
          <Route exact path="/laget" component={Team} />
          <Route path="/laget/:id" component={Player} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
