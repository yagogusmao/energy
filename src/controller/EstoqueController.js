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
            vemDe: "",
            vaiPara: "",
            servico: "",
            equipe: "",
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
        this.setState({ [name]: value })
    }

    adicionarEstoque = () => {
        const { materialAdicionar, quantidadeAdicionar, vemDe } = this.state;
        const _id = this.props.location.search.split("=")[1];
        Api.adicionarEstoque({ _id, material: materialAdicionar, quantidade: Number(quantidadeAdicionar), vemDe }).then(res => {
            const materiais = res.data.materiais;
            this.setState({ materiais: materiais })
        })
    }

    retirarEstoque = () => {
        const { materialRetirar, quantidadeRetirar, vaiPara, servico, equipe } = this.state;
        const _id = this.props.location.search.split("=")[1];
        Api.retirarEstoque(_id, materialRetirar, quantidadeRetirar, vaiPara, servico, equipe ).then(res => {
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

    goto = (opcao) => {
        const _id = this.props.location.search.split("=")[1];
        this.props.history.push(`/relatorio?_id=${_id}&opcao=${opcao}`);
    }

    render() {
        let { materiais, materialAdicionar, quantidadeAdicionar, materialRetirar, quantidadeRetirar, vemDe, vaiPara, 
            servico, equipe, _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, materiaisPesquisados, 
            quantidadeMateriaisPesquisados } = this.state;
        return (
            <EstoqueView
                materiais={materiais}
                materialAdicionar={materialAdicionar}
                quantidadeAdicionar={quantidadeAdicionar}
                materialRetirar={materialRetirar}
                quantidadeRetirar={quantidadeRetirar}
                handleInputChange={this.handleInputChange}
                adicionarEstoque={this.adicionarEstoque}
                retirarEstoque={this.retirarEstoque}
                goto={this.goto}
                vemDe={vemDe}
                vaiPara={vaiPara}
                servico={servico}
                equipe={equipe}
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


