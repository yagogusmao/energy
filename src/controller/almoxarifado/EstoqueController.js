import React, { Component } from 'react';

import EstoqueView from '../../view/almoxarifado/estoque/View';
import Api from '../../service/ApiBaseAlmoxarifado';
import ApiMaterial from '../../service/ApiBaseMaterial';
import { Checkbox } from 'primereact/checkbox';
import { Growl } from 'primereact/growl';
import InputFloat from '../../component/input/InputFloat';
import { ProgressSpinner } from 'primereact/progressspinner';

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
            descricaoClasse: "",
            numeroSerie: "",
            tombamento: "",
            impedancia: "",
            dataFabricacao: "",
            numero: "",
            nSeloCaixa: "",
            nSeloBorn: "",
            _idMedidor: "",
            _idTransformador: "",
            carregando: false,
            carregandoPesquisar: false
        }
    }

    componentDidMount = () => {
        const _id = this.props.location.search.split("=")[1];
        this.setState({ carregando: true }, () =>
            Api.listarEstoque(_id).then(res =>
                this.setState({ materiais: res.data.materiais, carregando: false })
            )
        )
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleDropDownChangeVemDe = (e) => {
        this.setState({ vemDe: e.value })
    }
    handleDropDownChangeVaiPara = (e) => {
        this.setState({ vaiPara: e.value })
    }
    handleDropDownChangeEquipe = (e) => {
        this.setState({ equipe: e.value })
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
        let flag = true;
        materiaisSelecionados.forEach(element => {
            if (element.quantidade <= 0) flag = false;
        })
        if (flag) {
            const newArray = materiaisSelecionados.map(material => {
                return { _id: String(material._id), quantidade: Number(material.quantidade) }
            });
            if (this.validarInputs([vemDe]) && newArray.length > 0) {
                Api.adicionarEstoque({ _id, newArray, vemDe }).then(res => {
                    this.setState({ materiais: res.data.materiais },
                        () => this.growl.show({ severity: 'success', summary: res.data.mensagem }));
                    this.limparDadosSelecionadosAdicionar();
                }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem }));
            } else this.growl.show({ severity: 'error', summary: 'Selecione todos os campos.' })
        } else this.growl.show({ severity: 'error', summary: 'Coloque as quantidades em todos os materiais.' })
    }

    retirarEstoque = () => {
        const { materiaisSelecionadosRetirar, vaiPara, servico, equipe } = this.state;
        const _id = this.props.location.search.split("=")[1];
        let flag = true;
        materiaisSelecionadosRetirar.forEach(element => {
            if (element.quantidadeRetirar === undefined) flag = false;
        })
        if (flag) {
            const newArray = materiaisSelecionadosRetirar.map(material => {
                return { _id: String(material._id), quantidade: Number(material.quantidadeRetirar) }
            });
            if (this.validarInputs([servico, equipe, vaiPara]) && newArray.length > 0) {
                Api.retirarEstoque({ _id, newArray, vaiPara, servico, equipe }).then(res => {
                    this.setState({ materiais: res.data.materiais },
                        () => this.growl.show({ severity: 'success', summary: res.data.mensagem }));
                    this.limparDadosSelecionadosRetirar();
                }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem }));
            } else this.growl.show({ severity: 'error', summary: 'Selecione todos os campos.' })
        } else this.growl.show({ severity: 'error', summary: 'Coloque as quantidades em todos os materiais.' })
    }

    pesquisarMateriais = () => {
        const { _id, unidadeMedida, descricao, codigoClasse, descricaoClasse } = this.state;
        this.setState({ carregandoPesquisar: true }, () =>
            ApiMaterial.listar(_id, unidadeMedida, descricao, codigoClasse, descricaoClasse).then(res => {
                const materiais = res.data.materiais;
                this.setState({ materiaisPesquisados: materiais, carregandoPesquisar: false }, () => this.growl.show({ severity: 'success', summary: res.data.mensagem }));
            }))
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

    retirarTransformador = () => {
        const _id = this.props.location.search.split("=")[1];
        const { _idTransformador, tombamento, impedancia, numeroSerie, dataFabricacao, servico, equipe, vaiPara } = this.state;
        if (this.validarInputs([_idTransformador, tombamento, impedancia, numeroSerie, dataFabricacao, servico, equipe, vaiPara])) {
            Api.retirarTransformador({ _id, _idTransformador, tombamento, impedancia, numeroSerie, dataFabricacao, servico, equipe, vaiPara }).then(res => {
                this.setState({
                    materiais: res.data.materiais, _idTransformador: "", tombamento: "", impedancia: "",
                    numeroSerie: "", dataFabricacao: ""
                }, () => this.growl.show({ severity: 'success', summary: res.data.mensagem }));
            }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem }))
        } else this.growl.show({ severity: 'error', summary: "Selecione todos os campos." })
    }

    retirarMedidor = () => {
        const _id = this.props.location.search.split("=")[1];
        const { _idMedidor, numero, nSeloCaixa, nSeloBorn, servico, equipe, vaiPara } = this.state;
        if (this.validarInputs([_idMedidor, numero, nSeloCaixa, nSeloBorn, servico, servico, equipe, vaiPara])) {
            Api.retirarMedidor({ _id, _idMedidor, numero, nSeloCaixa, nSeloBorn, servico, equipe, vaiPara }).then(res => {
                this.setState({
                    materiais: res.data.materiais, _idMedidor: "", numero: "", nSeloCaixa: "",
                    nSeloBorn: ""
                }, () => this.growl.show({ severity: 'success', summary: res.data.mensagem }));
            }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem }))
        } else this.growl.show({ severity: 'error', summary: "Selecione todos os campos." })
    }

    validarInputs = (inputs) => {
        let flag = true;
        inputs.forEach(input => {
            if (input === "") flag = false;
        })
        return flag;
    }

    actionTemplate = (rowData) => <Checkbox id={rowData._id} onChange={this.onChangeSelecteds} checked={rowData.checked}></Checkbox>

    actionTemplateRetirar = (rowData) => {
        if (rowData.codigoClasse !== 74 && rowData.codigoClasse !== 75 &&
            rowData.codigoClasse !== 76 && rowData.codigoClasse !== 174 &&
            rowData.codigoClasse !== 147)
            return <Checkbox id={rowData._id} onChange={this.onChangeSelectedsRetirar} checked={rowData.checked}></Checkbox>
    }

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
        let { materiais, materialRetirar, quantidadeRetirar, vemDe, vaiPara, numeroSerie, tombamento, carregando,
            impedancia, dataFabricacao, numero, nSeloCaixa, nSeloBorn, _idTransformador, _idMedidor, carregandoPesquisar,
            servico, equipe, _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, materiaisPesquisados,
            quantidadeMateriaisPesquisados, materiaisSelecionados, materiaisSelecionadosRetirar } = this.state;
        return (
            <>
                <Growl ref={(el) => this.growl = el} />
                {carregando ? <ProgressSpinner />
                    :
                    <>
                        <EstoqueView
                            carregandoPesquisar={carregandoPesquisar}
                            _idTransformador={_idTransformador}
                            _idMedidor={_idMedidor}
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
                            handleDropDownChangeVemDe={this.handleDropDownChangeVemDe}
                            handleDropDownChangeVaiPara={this.handleDropDownChangeVaiPara}
                            handleDropDownChangeEquipe={this.handleDropDownChangeEquipe}
                            retirarTransformador={this.retirarTransformador}
                            retirarMedidor={this.retirarMedidor}
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
                            numeroSerie={numeroSerie}
                            tombamento={tombamento}
                            impedancia={impedancia}
                            dataFabricacao={dataFabricacao}
                            numero={numero}
                            nSeloCaixa={nSeloCaixa}
                            nSeloBorn={nSeloBorn}
                        />
                    </>
                }
            </>
        )
    }
}


