import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

//import Navbar from './controllers/navbars/NavbarController';
import HomePage from './controller/user/HomePage';

const App = () =>
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>

export default App;
