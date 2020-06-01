import React, { Component } from 'react';

import EstoqueView from '../view/estoque/View';
import Api from '../service/ApiBaseAlmoxarifado';
import ApiMaterial from '../service/ApiBaseMaterial';

export default class EstoqueController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            materialAdicionar: "",
            quantidadeAdicionar: "",
            materialRetirar: "",
            quantidadeRetirar: "",
            materiais: [],
            materiaisPesquisados: [],
            quantidadeMateriaisPesquisados: "",
            _id: "",
            unidadeMedida: "",
            descricao: "",
            codigoClasse: "",
            descricaoClasse: ""
        }
    }

    componentDidMount = () => {
        const _id = this.props.location.search.split("=")[1];
        Api.listarEstoque(_id).then(res => {
            this.setState({ materiais: res.data.materiais })
        }
        );
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        this.setState({ [name]: value })
    }

    adicionarEstoque = () => {
        const { material, quantidade } = this.state;
        const _id = this.props.location.search.split("=")[1];
        Api.adicionarEstoque({ _id, material, quantidade: Number(quantidade) }).then(res => {
            const materiais = res.data.materiais;
            this.setState({ materiais: materiais })
        })
    }

    retirarEstoque = () => {
        const { material, quantidade } = this.state;
        const _id = this.props.location.search.split("=")[1];
        Api.retirarEstoque(_id, material, quantidade).then(res => {
            const materiais = res.data.materiais;
            this.setState({ materiais: materiais })
        })
    }

    pesquisarMateriais = () => {
        const { _id, unidadeMedida, descricao, codigoClasse, descricaoClasse } = this.state;
        ApiMaterial.listar(_id, unidadeMedida, descricao, codigoClasse, descricaoClasse).then(res => {
            const materiais = res.data.materiais;
            this.setState({ materiaisPesquisados: materiais })
        })
    }

    render() {
        let { materiais, material, quantidade, _id, unidadeMedida, descricao, 
            codigoClasse, descricaoClasse, materiaisPesquisados, quantidadeMateriaisPesquisados } = this.state;
        return (
            <EstoqueView
                materiais={materiais}
                material={material}
                quantidade={quantidade}
                handleInputChange={this.handleInputChange}
                adicionarEstoque={this.adicionarEstoque}
                retirarEstoque={this.retirarEstoque}
                _id={_id}
                unidadeMedida={unidadeMedida}
                descricao={descricao}
                codigoClasse={codigoClasse}
                descricaoClasse={descricaoClasse}
                materiaisPesquisados={materiaisPesquisados}
                quantidadeMateriaisPesquisados={quantidadeMateriaisPesquisados}
                pesquisarMateriais={this.pesquisarMateriais}
            />
        )
    }
}


