import React, { Component } from 'react';

import RelatorioView from '../view/relatorio/View';
import Api from '../service/ApiBaseAlmoxarifado';
import ApiMaterial from '../service/ApiBaseMaterial';

export default class EstoqueController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            relatorio: [],
            opcao: ""
        }
    }

    componentDidMount = () => {
        const _id = this.props.location.search.split("=")[1].split("&")[0];
        const opcao = this.props.location.search.split("=")[2];
        Api.verRelatorio(_id, opcao).then(res => this.setState({
            relatorio: res.data.relatorio,
            opcao: opcao
        }));
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    pesquisarMateriais = () => {
        const { _id, unidadeMedida, descricao, codigoClasse, descricaoClasse } = this.state;
        ApiMaterial.listar(_id, unidadeMedida, descricao, codigoClasse, descricaoClasse).then(res => {
            const materiais = res.data.materiais;
            this.setState({ materiaisPesquisados: materiais })
        })
    }

    render() {
        let { relatorio, opcao } = this.state;
        return (
            <RelatorioView
                relatorio={relatorio}
                opcao={opcao}
            />
        )
    }
}


