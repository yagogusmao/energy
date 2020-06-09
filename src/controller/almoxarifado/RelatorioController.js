import React, { Component } from 'react';

import RelatorioView from '../../view/almoxarifado/relatorio/View';
import Api from '../../service/ApiBaseAlmoxarifado';
import ApiMaterial from '../../service/ApiBaseMaterial';
import { ProgressSpinner } from 'primereact/progressspinner'

export default class EstoqueController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saidas: [],
            saidasTransformadores: [],
            saidasMedidores: [],
            opcao: "",
            _id: "",
            unidadeMedida: "",
            descricao: "",
            codigoClasse: "",
            descricaoClasse: "",
            materiaisPesquisados: [],
            entradas: [],
            carregando: false
        }
    }

    componentDidMount = () => {
        const _id = this.props.location.search.split("=")[1].split("&")[0];
        const opcao = this.props.location.search.split("=")[2];
        this.setState({ carregando: true }, () => {
            if (opcao === "entrada") Api.verRelatorio(_id, opcao).then(res => this.setState({
                entradas: res.data.relatorio.entradas,
                opcao: opcao,
                carregando: false
            }));
            else if (opcao === "saida") Api.verRelatorio(_id, opcao).then(res => this.setState({
                saidas: res.data.relatorio.saidas,
                saidasMedidores: res.data.relatorio.saidasMedidores,
                saidasTransformadores: res.data.relatorio.saidasTransformadores,
                opcao: opcao,
                carregando: false
            }));
        })

    }

    pesquisarMateriais = () => {
        const { _id, unidadeMedida, descricao, codigoClasse, descricaoClasse } = this.state;
        ApiMaterial.listar(_id, unidadeMedida, descricao, codigoClasse, descricaoClasse).then(res => {
            const materiais = res.data.materiais;
            this.setState({ materiaisPesquisados: materiais })
        })
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
        let { saidas, opcao, _id, unidadeMedida, descricao, codigoClasse, descricaoClasse,
            materiaisPesquisados, saidasTransformadores, saidasMedidores, entradas, carregando } = this.state;
        return (
            <>
                {carregando ? <ProgressSpinner />
                    :
                    <>
                        <RelatorioView
                            entradas={entradas}
                            saidas={saidas}
                            saidasTransformadores={saidasTransformadores}
                            saidasMedidores={saidasMedidores}
                            opcao={opcao}
                            handleInputChange={this.handleInputChange}
                            pesquisarMateriais={this.pesquisarMateriais}
                            _id={_id}
                            unidadeMedida={unidadeMedida}
                            descricao={descricao}
                            codigoClasse={codigoClasse}
                            descricaoClasse={descricaoClasse}
                            materiaisPesquisados={materiaisPesquisados}
                        />
                    </>
                }
            </>
        )
    }
}


