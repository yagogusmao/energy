import React from 'react';
import { Switch, Route } from "react-router-dom";

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';

import HomePage from './controller/usuario/HomePage';
import Atividade from './controller/atividade/AtividadeController';
import Almoxarifado from './controller/almoxarifado/AlmoxarifadoController';
import Estoque from './controller/almoxarifado/EstoqueController';
import Relatorio from './controller/almoxarifado/RelatorioController';
import Material from './controller/material/MaterialController';
import Usuario from './controller/usuario/UsuarioController';
import BarraNavegacao from './controller/barraNavegacao/BarraNavegacaoController';

const App = () =>
  <div className="App">
    <div className="Container">
      <Switch>
        <Route path="/usuario" component={BarraNavegacao} />
        <Route exact path="/" component={Usuario} />
      </Switch>
    </div>
  </div>

export default App;
