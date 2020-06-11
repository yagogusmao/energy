import React from 'react';
import { getAuthenticate, isAdmin } from './service/LocalAuth';
import { Route, Switch, Redirect } from 'react-router-dom';

import AlmoxarifadoController from './controller/almoxarifado/AlmoxarifadoController';
import AtividadeController from './controller/atividade/AtividadeController';
import MaterialController from './controller/material/MaterialController';
import RelatorioController from './controller/almoxarifado/RelatorioController';
import EstoqueController from './controller/almoxarifado/EstoqueController';

const RotaPrivada = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        getAuthenticate() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
    )}
    />
)

export const RotasUsuario = () => (

    <Switch>
        <RotaPrivada exact path="/usuario/almoxarifado" component={AlmoxarifadoController} />
        <RotaPrivada exact path="/usuario/atividade" component={AtividadeController} />
        <RotaPrivada exact path="/usuario/material" component={MaterialController} />
        <RotaPrivada exact path="/usuario/estoque" component={EstoqueController} />
        <RotaPrivada exact path="/usuario/relatorio" component={RelatorioController} />
    </Switch>

)


