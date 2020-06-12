import React, { Component } from 'react';

import MaterialView from '../../view/material/View';
import Api from '../../service/ApiBaseMaterial';
import { Growl } from 'primereact/growl';

export default class MaterialController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _idCriar: "",
            unidadeMedidaCriar: "",
            descricaoCriar: "",
            codigoClasseCriar: "",
            descricaoClasseCriar: "",
            _id: "",
            unidadeMedida: "",
            descricao: "",
            codigoClasse: "",
            descricaoClasse: "",
            materiais: [],
            opcoesCodigos: []
        }
    }
    componentDidMount = () => {
        Api.listarCodigos().then(res =>
            this.setState({ opcoesCodigos: res.data.map(codigo => { return { codigoClasseCriar: codigo._id, descricaoClasseCriar: codigo.descricaoClasse } }) })
        )
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleDropDownChange = (e) => {
        const { value } = e.target;
        this.setState(value)
    }

    submit = () => {
        const { _idCriar, unidadeMedidaCriar, descricaoCriar, codigoClasseCriar, descricaoClasseCriar } = this.state;
        let { materiais } = this.state;
        Api.criar({
            _id: _idCriar, unidadeMedida: unidadeMedidaCriar, descricao: descricaoCriar,
            codigoClasse: codigoClasseCriar, descricaoClasse: descricaoClasseCriar
        }).then(res => {
            materiais.push(res.data.material);
            this.setState({ materiais }, () => this.growl.show({ severity: 'success', summary: res.data.mensagem }))
        }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem }))
    }

    pesquisarMateriais = () => {
        const { _id, unidadeMedida, descricao, codigoClasse, descricaoClasse } = this.state;
        Api.listar(_id, unidadeMedida, descricao, codigoClasse, descricaoClasse).then(res =>
            this.setState({ materiais: res.data.materiais }))
    }

    render() {
        let { _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, materiais, opcoesCodigos,
            _idCriar, unidadeMedidaCriar, descricaoCriar, codigoClasseCriar, descricaoClasseCriar } = this.state;
        return (
            <>
                <Growl ref={(el) => this.growl = el} />
                <MaterialView
                    _id={_id}
                    unidadeMedida={unidadeMedida}
                    descricao={descricao}
                    codigoClasse={codigoClasse}
                    descricaoClasse={descricaoClasse}
                    _idCriar={_idCriar}
                    unidadeMedidaCriar={unidadeMedidaCriar}
                    descricaoCriar={descricaoCriar}
                    codigoClasseCriar={codigoClasseCriar}
                    descricaoClasseCriar={descricaoClasseCriar}
                    materiais={materiais}
                    opcoesCodigos={opcoesCodigos}
                    submit={this.submit}
                    handleInputChange={this.handleInputChange}
                    handleDropDownChange={this.handleDropDownChange}
                    pesquisarMateriais={this.pesquisarMateriais}
                />
            </>
        );
    }
}


