import React, { Component } from 'react';

import AlmoxarifadoView from '../view/almoxarifado/View';
import Api from '../service/ApiBaseAlmoxarifado';

export default class AlmoxarifadoController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            almoxarifados: []
        }
    }

    componentDidMount = () => {
        Api.listar().then(res => this.setState({ almoxarifados: res.data.almoxarifados }));
    }

    goTo = (path) => {
        this.props.history.push(path);
    }

    /*
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    submit = () => {
        const { _id, valor, nome, tipo, atividades } = this.state;
        Api.criarAtividade({ _id, valor: Number(valor), nome, tipo }).then(res => {
            atividades.push(res.data.atividade);
            this.setState({ atividades: atividades })
        })
    }

    //goTo = (path) => this.props.history.push(path);
    //this.props.history.goBack()

    render() {
        let { _id, valor, nome, tipo, atividades } = this.state;
        return (
            <AtividadeView
                _id={_id}
                valor={valor}
                nome={nome}
                tipo={tipo}
                atividades={atividades}
                submit={this.submit}
                handleInputChange={this.handleInputChange} />
        );
    }
    */
    render() {
        let { almoxarifados } = this.state;
        return (
            <AlmoxarifadoView
                almoxarifados={almoxarifados}
                goTo={this.goTo}
            />
        )
    }
}


