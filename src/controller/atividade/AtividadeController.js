import React, { Component } from 'react';

import AtividadeView from '../../view/atividade/View';
import Api from '../../service/ApiBaseAtividade';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Growl } from 'primereact/growl';

export default class AtividadeController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            nome: "",
            valor: "",
            tipo: "",
            atividades: [],
            carregando: false
        }
    }

    componentDidMount = () => {
        this.setState({ carregando: true }, () =>
            Api.listarAtividades().then(res =>
                this.setState({ atividades: res.data.atividades, carregando: false })))
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleDropDown = (e) => {
        this.setState({ tipo: e.value })
    }

    submit = () => {
        let { _id, valor, nome, tipo, atividades } = this.state;
        Api.criarAtividade({ _id, valor: Number(valor), nome, tipo }).then(res => {
            atividades.push(res.data.atividade);
            this.setState({ atividades: atividades }, () =>
                this.growl.show({ severity: 'success', summary: res.data.mensagem }))
        }, (erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem })))
    }

    render() {
        const { _id, valor, nome, tipo, atividades, carregando } = this.state;
        return (
            <>
                <Growl ref={(el) => this.growl = el} />
                {carregando ? <ProgressSpinner />
                    :
                    <AtividadeView
                        handleDropDown={this.handleDropDown}
                        _id={_id}
                        valor={valor}
                        nome={nome}
                        tipo={tipo}
                        atividades={atividades}
                        submit={this.submit}
                        handleInputChange={this.handleInputChange} />
                }
            </>
        );
    }
}


