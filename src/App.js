import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => (
        <Home />
      )}
      />
    </Switch>
  )
}

export default App;