import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import TeamPage from './components/TeamPage';

function App() {
  return (
    <Switch>
      <Route exact path="/:team" render={(props) => <TeamPage {...props} />} />
      <Route exact path='/' render={() => <Home />} />
    </Switch>
  )
}

export default App;