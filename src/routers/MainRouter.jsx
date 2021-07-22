import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Connexion from '../pages/Connexion';
import HomePage from '../pages/HomePage';
import Inscription from '../pages/Inscription';

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/inscription" component={Inscription} />
        <Route exact path="/connexion" component={Connexion} />
      </Switch>
    </Router>
  );
}
