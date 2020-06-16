import React, { Component } from 'react';

import FuncionarioView from '../../view/funcionario/View';
import Api from '../../service/ApiBaseFuncionario';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Growl } from 'primereact/growl';

export default class FuncionarioController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            nome: "",
            cpf: "",
            lotacao: "",
            cargo: "",
            telefone: "",
            dataInicio: "",
            funcionarios: []
        }
    }

    componentDidMount = () => {
        this.setState({ carregando: true }, () =>
            Api.listarFuncionarios().then(res =>
                this.setState({ funcionarios: res.data.funcionarios, carregando: false })))
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleDropDownCargo = (e) => {
        this.setState({ cargo: e.value })
    }

    handleDropDownLotacao = (e) => {
        this.setState({ lotacao: e.value })
    }

    submit = () => {
        let { _id, nome, cpf, lotacao, cargo, telefone, dataInicio, funcionarios } = this.state;
        Api.criarFuncionario({ _id, nome, cpf, lotacao, cargo, telefone, dataInicio }).then(res => {
            funcionarios.push(res.data.funcionario);
            this.setState({ funcionarios: funcionarios, _id: "", nome: "", cpf: "", lotacao: "", telefone: "", dataInicio: "" }, () =>
                this.growl.show({ severity: 'success', summary: res.data.mensagem }))
        }, (erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem })))
    }

    render() {
        const { _id, cargo, nome, lotacao, cpf, carregando, telefone, dataInicio, funcionarios } = this.state;
        return (
            <>
                <Growl ref={(el) => this.growl = el} />
                {carregando ? <ProgressSpinner />
                    :
                    <FuncionarioView
                        funcionarios={funcionarios}
                        handleDropDownCargo={this.handleDropDownCargo}
                        handleDropDownLotacao={this.handleDropDownLotacao}
                        _id={_id}
                        cpf={cpf}
                        nome={nome}
                        lotacao={lotacao}
                        cargo={cargo}
                        telefone={telefone}
                        dataInicio={dataInicio}
                        submit={this.submit}
                        handleInputChange={this.handleInputChange} />
                }
            </>
        );
    }
}


