import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import TeamPage from './components/TeamPage';

function App() {
  return (
    <Switch>
      <Route path="/team/:team" render={(props) => <TeamPage {...props} />} />
      <Route exact path="/KB" render={() => <Home />} />
    </Switch>
  )
}

export default App;