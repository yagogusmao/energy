import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

//import Navbar from './controllers/navbars/NavbarController';
//import RegisterController from './controllers/user/RegisterController';
//import LoginController from './controllers/user/LoginController';

const App = () =>
  <div className="App">
    <Switch>
      <Route exact path="/" component={LoginController} />
    </Switch>
  </div>

export default App;
