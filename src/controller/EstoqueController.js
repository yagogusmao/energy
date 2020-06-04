import React, { Component } from 'react';

import EstoqueView from '../view/estoque/View';
import Api from '../service/ApiBaseAlmoxarifado';
import ApiMaterial from '../service/ApiBaseMaterial';
import { Checkbox } from 'primereact/checkbox';
import InputFloat from '../component/input/InputFloat';

export default class EstoqueController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vemDe: "",
            vaiPara: "",
            servico: "",
            equipe: "",
            materiais: [],
            materiaisPesquisados: [],
            materiaisSelecionados: [],
            materiaisSelecionadosRetirar: [],
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
        Api.listarEstoque(_id).then(res => this.setState({ materiais: res.data.materiais }));
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleDropDownChange = (e) => {
        const { value } = e.target;
        this.setState(value)
    }

    limparDadosSelecionadosAdicionar = () => {
        this.setState({ vemDe: "", materiaisSelecionados: [], materiaisPesquisados: [] })
    }
    limparDadosSelecionadosRetirar = () => {
        this.setState({ vaiPara: "", equipe: "", servico: "", materiaisSelecionadosRetirar: [] })
    }

    adicionarEstoque = () => {
        const { materiaisSelecionados, vemDe } = this.state;
        const _id = this.props.location.search.split("=")[1];
        const newArray = materiaisSelecionados.map(material => { return { _id: String(material._id), quantidade: Number(material.quantidade) } });
        Api.adicionarEstoque({ _id, newArray, vemDe }).then(res => {
            this.setState({ materiais: res.data.materiais });
            this.limparDadosSelecionadosAdicionar();
        })
    }

    retirarEstoque = () => {
        const { materiaisSelecionadosRetirar, vaiPara, servico, equipe } = this.state;
        const _id = this.props.location.search.split("=")[1];
        const newArray = materiaisSelecionadosRetirar.map(material => { return { _id: String(material._id), quantidade: Number(material.quantidade) } });
        Api.retirarEstoque({ _id, newArray, vaiPara, servico, equipe }).then(res => {
            this.setState({ materiais: res.data.materiais });
            this.limparDadosSelecionadosRetirar();
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

    onChangeSelecteds = (material) => {
        let { materiaisPesquisados, materiaisSelecionados } = this.state;
        const materialData = material.target;
        let newArray = materiaisSelecionados;
        materiaisPesquisados.forEach(element => {
            if (element._id === materialData.id) {
                element.checked = materialData.checked
                if (element.checked) materiaisSelecionados.push({
                    _id: materialData.id,
                    descricao: element.descricao,
                    unidadeMedida: element.unidadeMedida,
                    quantidade: ""
                })
            }
        });
        if (!materialData.checked) newArray = materiaisSelecionados.filter(material => material._id !== materialData.id)
        this.setState({ materiaisSelecionados: newArray, materiaisPesquisados });
    }

    onChangeSelectedsRetirar = (material) => {
        let { materiais, materiaisSelecionadosRetirar } = this.state;
        const materialData = material.target;
        let newArray = materiaisSelecionadosRetirar;
        materiais.forEach(element => {
            if (element._id === materialData.id) {
                element.checked = materialData.checked
                if (element.checked) materiaisSelecionadosRetirar.push({
                    _id: materialData.id,
                    descricao: element.descricao,
                    unidadeMedida: element.unidadeMedida,
                    quantidade: element.quantidade
                })
            }
        });
        if (!materialData.checked) newArray = materiaisSelecionadosRetirar.filter(material => material._id !== materialData.id)
        this.setState({ materiaisSelecionadosRetirar: newArray, materiais });
    }

    handleInputChangeTable = (e) => {
        const { name, value } = e.target;
        let newArray = this.state.materiaisSelecionados;
        newArray.forEach((material, i) => {
            if (material._id == name) newArray[i].quantidade = value;
        })
        this.setState({ materiaisSelecionados: newArray })
    }

    handleInputChangeTableRetirar = (e) => {
        const { name, value } = e.target;
        let newArray = this.state.materiaisSelecionadosRetirar;
        newArray.forEach((material, i) => {
            if (material._id == name) newArray[i].quantidadeRetirar = value;
        })
        this.setState({ materiaisSelecionadosRetirar: newArray })
    }

    actionTemplate = (rowData) => <Checkbox id={rowData._id} onChange={this.onChangeSelecteds} checked={rowData.checked}></Checkbox>

    actionTemplateRetirar = (rowData) => <Checkbox id={rowData._id} onChange={this.onChangeSelectedsRetirar} checked={rowData.checked}></Checkbox>

    actionTemplateInputRetirar = (rowData) => {
        return <InputFloat name={rowData._id} type="number" label="Quantidade"
            value={this.state.materiaisSelecionadosRetirar.filter(material => material._id === rowData._id)[0].quantidadeRetirar}
            onChange={this.handleInputChangeTableRetirar} />
    }

    actionTemplateInput = (rowData) => {
        return <InputFloat name={rowData._id} type="number" label="Quantidade"
            value={this.state.materiaisSelecionados.filter(material => material._id === rowData._id)[0].quantidade}
            onChange={this.handleInputChangeTable} />
    }

    actionTemplateButton = (rowData) => <button onClick={() => { this.retirarMaterialTabela(rowData._id) }}>Retirar material</button>

    actionTemplateButtonRetirar = (rowData) => <button onClick={() => { this.retirarMaterialTabelaRetirar(rowData._id) }}>Retirar material</button>

    retirarMaterialTabela = (material) => {
        let newArray = [];
        this.state.materiaisSelecionados.forEach(element => {
            if (element._id !== material) newArray.push(element)
        })
        this.setState({ materiaisSelecionados: newArray })
    }

    retirarMaterialTabelaRetirar = (material) => {
        let newArray = [];
        this.state.materiaisSelecionadosRetirar.forEach(element => {
            if (element._id !== material) newArray.push(element)
        })
        this.setState({ materiaisSelecionadosRetirar: newArray })
    }

    render() {
        let { materiais, materialRetirar, quantidadeRetirar, vemDe, vaiPara,
            servico, equipe, _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, materiaisPesquisados,
            quantidadeMateriaisPesquisados, materiaisSelecionados, materiaisSelecionadosRetirar } = this.state;
        return (
            <EstoqueView
                materiais={materiais}
                materialRetirar={materialRetirar}
                quantidadeRetirar={quantidadeRetirar}
                materiaisSelecionadosRetirar={materiaisSelecionadosRetirar}
                handleInputChange={this.handleInputChange}
                adicionarEstoque={this.adicionarEstoque}
                retirarEstoque={this.retirarEstoque}
                actionTemplate={this.actionTemplate}
                actionTemplateInput={this.actionTemplateInput}
                actionTemplateButton={this.actionTemplateButton}
                actionTemplateRetirar={this.actionTemplateRetirar}
                actionTemplateInputRetirar={this.actionTemplateInputRetirar}
                actionTemplateButtonRetirar={this.actionTemplateButtonRetirar}
                handleDropDownChange={this.handleDropDownChange}
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
                materiaisSelecionados={materiaisSelecionados}
                quantidadeMateriaisPesquisados={quantidadeMateriaisPesquisados}
                pesquisarMateriais={this.pesquisarMateriais}
            />
        )
    }
}


