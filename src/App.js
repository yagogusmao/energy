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
import Relatorio from './controller/RelatorioController'

const App = () =>
  <div className="App">
    <div className="Container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/atividade" component={Atividade} />
        <Route path="/almoxarifado" component={Almoxarifado} />
        <Route path="/estoque" component={Estoque} />
        <Route path="/relatorio" component={Relatorio} />
      </Switch>
    </div>
  </div>

export default App;
