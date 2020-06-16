import React, { Component } from 'react';

import VeiculoView from '../../view/veiculo/View';
import Api from '../../service/ApiBaseVeiculo';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Growl } from 'primereact/growl';

export default class VeiculoController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            numeracao: "",
            modelo: "",
            kilometragem: "",
            veiculos: [],
            carregando: false
        }
    }

    componentDidMount = () => {
        this.setState({ carregando: true }, () =>
            Api.listarVeiculos().then(res =>
                this.setState({ veiculos: res.data.veiculos, carregando: false })))
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleDropDown = (e) => {
        this.setState({ modelo: e.value })
    }

    submit = () => {
        let { _id, numeracao, kilometragem, modelo, veiculos } = this.state;
        Api.criarVeiculo({ _id, numeracao, kilometragem, modelo }).then(res => {
            veiculos.push(res.data.veiculo);
            this.setState({ veiculos: veiculos, _id: "", numeracao: "", kilometragem: "", modelo: "" }, () =>
                this.growl.show({ severity: 'success', summary: res.data.mensagem }))
        }, (erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem })))
    }

    render() {
        const { carregando, _id, numeracao, kilometragem, modelo, veiculos } = this.state;
        return (
            <>
                <Growl ref={(el) => this.growl = el} />
                {carregando ? <ProgressSpinner />
                    :
                    <VeiculoView
                        funcionarios={veiculos}
                        handleDropDown={this.handleDropDown}
                        _id={_id}
                        numeracao={numeracao}
                        kilometragem={kilometragem}
                        modelo={modelo}
                        veiculos={veiculos}
                        submit={this.submit}
                        handleInputChange={this.handleInputChange} />
                }
            </>
        );
    }
}


