import React, { Component } from 'react';

import MaterialView from '../../view/material/View';
import Api from '../../service/ApiBaseMaterial';

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
            materiais: []
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    submit = () => {
        const { _idCriar, unidadeMedidaCriar, descricaoCriar, codigoClasseCriar, descricaoClasseCriar } = this.state;
        let { materiais } = this.state;
        Api.criar({
            _id: _idCriar, unidadeMedida: unidadeMedidaCriar, descricao: descricaoCriar,
            codigoClasse: codigoClasseCriar, descricaoClasse: descricaoClasseCriar
        }).then(res => {
            materiais.push(res.data.material);
            this.setState({ materiais })
        })
    }

    pesquisarMateriais = () => {
        const { _id, unidadeMedida, descricao, codigoClasse, descricaoClasse } = this.state;
        Api.listar(_id, unidadeMedida, descricao, codigoClasse, descricaoClasse).then(res =>
            this.setState({ materiais: res.data.materiais }))
    }

    render() {
        let { _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, materiais,
            _idCriar, unidadeMedidaCriar, descricaoCriar, codigoClasseCriar, descricaoClasseCriar } = this.state;
        return (
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
                submit={this.submit}
                handleInputChange={this.handleInputChange}
                pesquisarMateriais={this.pesquisarMateriais}
            />
        );
    }
}


