import React, { Component } from 'react';

import AtividadeView from '../view/atividade/View';
import Api from '../service/ApiBaseAtividade';

export default class AtividadeController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            nome: "",
            valor: "",
            tipo: "",
            atividades: []
        }
    }

    componentDidMount = () => {
        Api.listarAtividades().then(res => this.setState({ atividades: res.data.atividades }));
    }

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
}


