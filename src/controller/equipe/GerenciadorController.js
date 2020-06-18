import React, { Component } from 'react';

import EquipeGerenciadorView from '../../view/equipe/gerenciador/View';
import Api from '../../service/ApiBaseEquipe';
import { ProgressSpinner } from 'primereact/progressspinner';
import queryString from 'query-string';
import { Growl } from 'primereact/growl';
import { Button } from 'primereact/button';

export default class GerenciadorController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            funcionariosSemEquipe: [],
            funcionarios: [],
            veiculo: "",
            local: "",
            _id: "",
            tipo: "",
            status: "",
            apontamentos: [],
            carregando: false,
            itemAtivo: "faturamento",
            modelo: "",
            numeracao: "",
            kilometragem: "",
            veiculos: []
        }
    }

    componentDidMount = () => {
        const { _id } = queryString.parse(this.props.location.search);
        this.setState({ carregando: true }, () =>
            Promise.all([Api.listarEquipe(_id),
            Api.listarFuncionariosSemEquipe(),
            Api.listarFuncionarios(_id),
            Api.verVeiculo(_id),
            Api.listarVeiculosSemEquipe()
            ]).then(res => {
                const { _id, tipo, status, veiculo, local, apontamentos } = res[0].data.equipe;
                const funcionarios = res[2].data.funcionarios;
                const funcionariosSemEquipe = res[1].data.funcionarios;
                if (res[3].data.veiculo === {}) {
                    this.setState({
                        _id, tipo, status, veiculo, local, apontamentos, funcionarios,
                        funcionariosSemEquipe, carregando: false, veiculos: res[4].data.veiculos
                    })
                } else {
                    const { modelo, numeracao, kilometragem } = res[3].data.veiculo;
                    this.setState({
                        _id, modelo, numeracao, kilometragem, tipo, status, veiculo, local,
                        apontamentos, funcionarios, funcionariosSemEquipe, carregando: false,
                        veiculos: res[4].data.veiculos
                    })
                }
            })
        )
    }

    goTo = (path) => {
        this.props.history.push(path);
    }

    retirarFuncionario = (_idFuncionario) => {
        const { _id } = queryString.parse(this.props.location.search);
        Api.retirarFuncionario(_id, _idFuncionario).then(res => {
            this.setState({ funcionarios: res.data.funcionarios, status: res.data.equipe.status, funcionariosSemEquipe: res.data.funcionariosSemEquipe },
                () => this.growl.show({ severity: 'success', summary: res.data.mensagem }))
        }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem })
        )
    }

    adicionarFuncionario = (_idFuncionario) => {
        const { _id } = queryString.parse(this.props.location.search);
        Api.adicionarFuncionario({ _id, funcionario: _idFuncionario }).then(res => {
            this.setState({ funcionarios: res.data.funcionarios, status: res.data.equipe.status, funcionariosSemEquipe: res.data.funcionariosSemEquipe },
                () => this.growl.show({ severity: 'success', summary: res.data.mensagem }))
        }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem })
        )
    }

    definirVeiculoEquipe = (_idVeiculo) => {
        const { _id } = queryString.parse(this.props.location.search);
        Api.definirVeiculo({ _id, veiculo: _idVeiculo }).then(res => {
            Api.verVeiculo(_id).then(res1 => {
                this.setState({
                    veiculos: res.data.veiculos, veiculo: res1.data.veiculo._id,
                    modelo: res1.data.veiculo.modelo, numeracao: res1.data.veiculo.numeracao,
                    kilometragem: res1.data.veiculo.kilometragem, status: res.data.equipe.status
                },
                    () => this.growl.show({ severity: 'success', summary: res.data.mensagem }))
            })
        }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem })
        )
    }

    retirarVeiculo = () => {
        const { _id } = queryString.parse(this.props.location.search);
        Api.deletarVeiculo(_id).then(res => {
            this.setState({
                veiculos: res.data.veiculos, veiculo: "", modelo: "", numeracao: "",
                kilometragem: "", status: res.data.equipe.status
            },
                () => this.growl.show({ severity: 'success', summary: res.data.mensagem }))
        }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem })
        )
    }

    actionTemplateButton = (rowData) => <Button style={{
        backgroundColor: '#f79c91', borderColor: '#f7b9b2',
        WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
    }} label="Retirar da equipe" onClick={() => { this.retirarFuncionario(rowData._id) }}
        className="p-button-raised p-button-rounded" />

    actionTemplateButtonAdicionar = (rowData) => <Button style={{
        backgroundColor: '#f79c91', borderColor: '#f7b9b2',
        WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
    }} label="Adicionar à equipe" onClick={() => { this.adicionarFuncionario(rowData._id) }}
        className="p-button-raised p-button-rounded" />

    actionTemplateButtonVeiculo = (rowData) => <Button style={{
        backgroundColor: '#f79c91', borderColor: '#f7b9b2',
        WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
    }} label="Definir veículo da equipe" onClick={() => { this.definirVeiculoEquipe(rowData._id) }}
        className="p-button-raised p-button-rounded" />

    onChangeItemAtivo = (e) => {
        this.setState({ itemAtivo: e.value.value })
    }

    render() {
        const { carregando, _id, veiculo, tipo, local, status, apontamentos, funcionarios, funcionariosSemEquipe,
            itemAtivo, modelo, numeracao, kilometragem, veiculos } = this.state;
        return (
            <>
                <Growl ref={(el) => this.growl = el} />
                {carregando ? <ProgressSpinner />
                    :
                    <>
                        <EquipeGerenciadorView
                            retirarVeiculo={this.retirarVeiculo}
                            actionTemplateButtonVeiculo={this.actionTemplateButtonVeiculo}
                            veiculos={veiculos}
                            modelo={modelo}
                            numeracao={numeracao}
                            kilometragem={kilometragem}
                            onChangeItemAtivo={this.onChangeItemAtivo}
                            itemAtivo={itemAtivo}
                            actionTemplateButtonAdicionar={this.actionTemplateButtonAdicionar}
                            actionTemplateButton={this.actionTemplateButton}
                            funcionariosSemEquipe={funcionariosSemEquipe}
                            goTo={this.goTo}
                            _id={_id}
                            veiculo={veiculo}
                            tipo={tipo}
                            local={local}
                            status={status}
                            apontamentos={apontamentos}
                            funcionarios={funcionarios}
                        />
                    </>}
            </>
        )
    }
}


