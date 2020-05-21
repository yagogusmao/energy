import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from './controller/user/HomePage';
import Atividade from './controller/AtividadeController';

const App = () =>
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/atividade" component={Atividade} />
    </Switch>
  </div>

export default App;
