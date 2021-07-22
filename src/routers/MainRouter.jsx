import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Connexion from '../pages/Connexion';
import HomePage from '../pages/HomePage';
import Inscription from '../pages/Inscription';
import CreateMovie from '../pages/CreateMovie';

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={Inscription} />
        <Route exact path="/connexion" component={Connexion} />
        <Route exact path="/account" component={CreateMovie} />
      </Switch>
    </Router>
  );
}
