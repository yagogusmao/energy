import React from 'react';
import { getAuthenticate, isAdmin } from './service/LocalAuth';
import { Route, Switch, Redirect } from 'react-router-dom';

import AlmoxarifadoController from './controller/almoxarifado/AlmoxarifadoController';
import AtividadeController from './controller/atividade/AtividadeController';
import MaterialController from './controller/material/MaterialController';
import RelatorioController from './controller/almoxarifado/RelatorioController';
import EstoqueController from './controller/almoxarifado/EstoqueController';
import FuncionarioController from './controller/funcionario/FuncionarioController';
import EquipeController from './controller/equipe/EquipeController';
import GerenciadorEquipeController from './controller/equipe/GerenciadorController';
import VeiculoController from './controller/veiculo/VeiculoController';
import ApontamentoController from './controller/apontamento/ApontamentoController';
import VerApontamentoController from './controller/apontamento/VerApontamentoController';

const RotaPrivada = ({ component: Component, title, ...rest }) => {
    setDocumentTitle(title);
    const { onChangeClearNavbar } = rest;
    return (
        <Route
            {...rest}
            render={(props) =>
                getAuthenticate() ? (
                    <Component {...props} onChangeClearNavbar={onChangeClearNavbar} />
                ) : (
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    )
            }
        />
    );
};

const setDocumentTitle = (title) => {
    if (title === "") {
      document.title = "Energy";
    } else {
      document.title = `${title} | Energy`;
    }
  };

export const RotasUsuario = () => (

    <Switch>
        <RotaPrivada exact path="/usuario/almoxarifado" title={"Almoxarifados"} component={AlmoxarifadoController} />
        <RotaPrivada exact path="/usuario/atividade" title={"Atividades"} component={AtividadeController} />
        <RotaPrivada exact path="/usuario/material" title={"Materiais"} component={MaterialController} />
        <RotaPrivada exact path="/usuario/estoque" title={"Almoxarifado"} component={EstoqueController} />
        <RotaPrivada exact path="/usuario/relatorio" title={"Almoxarifado"} component={RelatorioController} />
        <RotaPrivada exact path="/usuario/funcionario" title={"Funcionários"} component={FuncionarioController} />
        <RotaPrivada exact path="/usuario/equipe" title={"Equipes"} component={EquipeController} />
        <RotaPrivada exact path="/usuario/equipe/gerenciar" title={"Equipe"} component={GerenciadorEquipeController} />
        <RotaPrivada exact path="/usuario/veiculo" title={"Veículos"} component={VeiculoController} />
        <RotaPrivada exact path="/usuario/apontamento" title={"Apontamentos"} component={ApontamentoController} />
        <RotaPrivada exact path="/usuario/apontamento/ver" title={"Apontamento"} component={VerApontamentoController} />
    </Switch>

)


