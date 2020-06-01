import React from 'react';
import { Switch, Route } from "react-router-dom";

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';

import HomePage from './controller/user/HomePage';
import Atividade from './controller/AtividadeController';
import Almoxarifado from './controller/AlmoxarifadoController';
import Estoque from './controller/EstoqueController';

const App = () =>
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/atividade" component={Atividade} />
      <Route path="/almoxarifado" component={Almoxarifado} />
      <Route path="/estoque" component={Estoque} />
    </Switch>
  </div>

export default App;
