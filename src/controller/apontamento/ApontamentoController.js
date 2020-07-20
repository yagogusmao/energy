import React, { Component } from 'react';

import ApontamentoView from '../../view/apontamento/View';
import Api from '../../service/ApiBaseApontamento';
import ApiEquipe from '../../service/ApiBaseEquipe';
import ApiAtividade from '../../service/ApiBaseAtividade';
import InputFloat from '../../component/input/InputFloat';
import { ProgressSpinner } from 'primereact/progressspinner';
import queryString from 'query-string';
import { Checkbox } from 'primereact/checkbox';
import { Growl } from 'primereact/growl';
import { Button } from 'primereact/button';

export default class ApontamentoController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carregando: false,
            itemAtivo: "iniciar",
            apontamentosIniciados: [],
            apontamentosFinalizados: [],
            equipesEscolher: [],
            tipo: "",
            pessoaSupervisor: "",
            pessoaEncarregado: "",
            pes: "",
            equipe: "",
            cidade: "",
            endereco: "",
            localSaida: "",
            codigoObra: "",
            atividades: [],
            atividadesSelecionadas: [],
            tecnicoEnergisa: "",
            PgCp: "",
            veiculoKmFim: "",
            subestacao: "",
            area: "",
            alimentador: "",
            origemOS: "",
            quantidadePlanejada: "",
            quantidadeExecutada: "",
            recolha: "",
            observacao: "",
            tensao: "",
            horarioInicio: "", horarioFinal: "",
            graficosConstrucao: [],
            graficosManutencao: [],
            graficosPoda: [],
            graficosLinhaviva: [],
            graficosDECP: [],
            graficosDEOP: [],
            encarregados: [],
            supervisores: [],
            faturamentoConstrucao: [],
            faturamentoManutencao: [],
            faturamentoLinhaviva: [],
            faturamentoPoda: [],
            faturamentoDEOP: [],
            faturamentoDECP: [],
            construcaoHoje: [],
            construcaoSemana: [],
            construcaoMes: [],
            construcaoAno: [],
            manutencaoHoje: [],
            manutencaoSemana: [],
            manutencaoMes: [],
            manutencaoAno: [],
            linhavivaHoje: [],
            linhavivaSemana: [],
            inhavivaMes: [],
            linhavivaAno: [],
            podaHoje: [],
            podaSemana: [],
            podaMes: [],
            podaAno: [],
            decpHoje: [],
            decpSemana: [],
            decpMes: [],
            decpAno: [],
            deopHoje: [],
            deopSemana: [],
            deopMes: [],
            deopAno: [],
            mostrarFinalizadosConstrucaoHoje: false,
            mostrarFinalizadosConstrucaoSemana: false,
            mostrarFinalizadosConstrucaoMes: false,
            mostrarFinalizadosConstrucaoAno: false,
            mostrarFinalizadosConstrucao: false,

            mostrarFinalizadosManutencaoHoje: false,
            mostrarFinalizadosManutencaoSemana: false,
            mostrarFinalizadosManutencaoMes: false,
            mostrarFinalizadosManutencaoAno: false,
            mostrarFinalizadosManutencao: false,

            mostrarFinalizadosLinhavivaHoje: false,
            mostrarFinalizadosLinhavivaSemana: false,
            mostrarFinalizadosLinhavivaMes: false,
            mostrarFinalizadosLinhavivaAno: false,
            mostrarFinalizadosLinhaviva: false,

            mostrarFinalizadosPodaHoje: false,
            mostrarFinalizadosPodaSemana: false,
            mostrarFinalizadosPodaMes: false,
            mostrarFinalizadosPodaAno: false,
            mostrarFinalizadosPoda: false,

            mostrarFinalizadosDECPHoje: false,
            mostrarFinalizadosDECPSemana: false,
            mostrarFinalizadosDECPMes: false,
            mostrarFinalizadosDECPAno: false,
            mostrarFinalizadosDECP: false,

            mostrarFinalizadosDEOPHoje: false,
            mostrarFinalizadosDEOPSemana: false,
            mostrarFinalizadosDEOPMes: false,
            mostrarFinalizadosDEOPAno: false,
            mostrarFinalizadosDEOP: false,

            atividadePesquisa: "",
            apontamentosPesquisa: [],
            obraPesquisa: ""
        }
    }

    componentDidMount = () => {
        this.setState({ carregando: true }, () =>
            Promise.all([
                Api.listarApontamentosIniciados(),
                Api.listarApontamentosFinalizados(),
                ApiEquipe.listarEquipes(),
                ApiAtividade.listarAtividades("all"),
                Api.listarEncarregados(),
                Api.listarSupervisores(),
                ApiEquipe.faturamentoConstrucao(),
                ApiEquipe.faturamentoManutencao(),
                ApiEquipe.faturamentoPoda(),
                ApiEquipe.faturamentoLinhaviva(),
                ApiEquipe.faturamentoDECP(),
                ApiEquipe.faturamentoDEOP()
            ]).then(res => {
                this.setState({
                    apontamentosIniciados: res[0].data.apontamentos,
                    apontamentosFinalizados: res[1].data.apontamentos,
                    equipesEscolher: res[2].data.equipes.map(equipe => { return { label: equipe._id, value: equipe._id } }),
                    carregando: false,
                    atividades: res[3].data.atividades,
                    encarregados: res[4].data.funcionarios,
                    supervisores: res[5].data.funcionarios,
                    graficosConstrucao: res[6].data.graficos,
                    graficosManutencao: res[7].data.graficos,
                    graficosPoda: res[8].data.graficos,
                    graficosLinhaviva: res[9].data.graficos,
                    graficosDECP: res[10].data.graficos,
                    graficosDEOP: res[11].data.graficos,
                    faturamentoConstrucao: res[1].data.construcao,
                    faturamentoManutencao: res[1].data.manutencao,
                    faturamentoLinhaviva: res[1].data.linhaviva,
                    faturamentoPoda: res[1].data.poda,
                    faturamentoDEOP: res[1].data.deop,
                    faturamentoDECP: res[1].data.decp,
                    construcaoHoje: res[1].data.construcaoHoje,
                    construcaoSemana: res[1].data.construcaoSemana,
                    construcaoMes: res[1].data.construcaoMes,
                    construcaoAno: res[1].data.construcaoAno,
                    manutencaoHoje: res[1].data.manutencaoHoje,
                    manutencaoSemana: res[1].data.manutencaoSemana,
                    manutencaoMes: res[1].data.manutencaoMes,
                    manutencaoAno: res[1].data.manutencaoAno,
                    linhavivaHoje: res[1].data.linhavivaHoje,
                    linhavivaSemana: res[1].data.linhavivaSemana,
                    linhavivaMes: res[1].data.linhavivaMes,
                    linhavivaAno: res[1].data.linhavivaAno,
                    podaHoje: res[1].data.podaHoje,
                    podaSemana: res[1].data.podaSemana,
                    podaMes: res[1].data.podaMes,
                    podaAno: res[1].data.podaAno,
                    decpHoje: res[1].data.decpHoje,
                    decpSemana: res[1].data.decpSemana,
                    decpMes: res[1].data.decpMes,
                    decpAno: res[1].data.decpAno,
                    deopHoje: res[1].data.deopHoje,
                    deopSemana: res[1].data.deopSemana,
                    deopMes: res[1].data.deopMes,
                    deopAno: res[1].data.deopAno
                })
            })
        )
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    goTo = (path) => {
        this.props.history.push(path);
    }

    actionTemplateButton = (rowData) => <Button style={{ backgroundColor: '#ce5f52' }}
        label="Retirar da equipe" onClick={() => { this.retirarFuncionario(rowData._id) }}
        className="p-button-raised p-button-rounded" />

    onChangeItemAtivo = (e) => {
        this.setState({ itemAtivo: e.value.value })
    }

    onChangeMostrarFinalizadosConstrucaoHoje = () =>
        this.state.mostrarFinalizadosConstrucaoHoje ? this.setState({ mostrarFinalizadosConstrucaoHoje: false }) : this.setState({ mostrarFinalizadosConstrucaoHoje: true });
    onChangeMostrarFinalizadosConstrucaoSemana = () =>
        this.state.mostrarFinalizadosConstrucaoSemana ? this.setState({ mostrarFinalizadosConstrucaoSemana: false }) : this.setState({ mostrarFinalizadosConstrucaoSemana: true });
    onChangeMostrarFinalizadosConstrucaoMes = () =>
        this.state.mostrarFinalizadosConstrucaoMes ? this.setState({ mostrarFinalizadosConstrucaoMes: false }) : this.setState({ mostrarFinalizadosConstrucaoMes: true });
    onChangeMostrarFinalizadosConstrucaoAno = () =>
        this.state.mostrarFinalizadosConstrucaoAno ? this.setState({ mostrarFinalizadosConstrucaoAno: false }) : this.setState({ mostrarFinalizadosConstrucaoAno: true });
    onChangeMostrarFinalizadosConstrucao = () =>
        this.state.mostrarFinalizadosConstrucao ? this.setState({ mostrarFinalizadosConstrucao: false }) : this.setState({ mostrarFinalizadosConstrucao: true });

    onChangeMostrarFinalizadosManutencaoHoje = () =>
        this.state.mostrarFinalizadosManutencaoHoje ? this.setState({ mostrarFinalizadosManutencaoHoje: false }) : this.setState({ mostrarFinalizadosManutencaoHoje: true });
    onChangeMostrarFinalizadosManutencaoSemana = () =>
        this.state.mostrarFinalizadosManutencaoSemana ? this.setState({ mostrarFinalizadosManutencaoSemana: false }) : this.setState({ mostrarFinalizadosManutencaoSemana: true });
    onChangeMostrarFinalizadosManutencaoMes = () =>
        this.state.mostrarFinalizadosManutencaoMes ? this.setState({ mostrarFinalizadosManutencaoMes: false }) : this.setState({ mostrarFinalizadosManutencaoMes: true });
    onChangeMostrarFinalizadosManutencaoAno = () =>
        this.state.mostrarFinalizadosManutencaoAno ? this.setState({ mostrarFinalizadosManutencaoAno: false }) : this.setState({ mostrarFinalizadosManutencaoAno: true });
    onChangeMostrarFinalizadosManutencao = () =>
        this.state.mostrarFinalizadosManutencao ? this.setState({ mostrarFinalizadosManutencao: false }) : this.setState({ mostrarFinalizadosManutencao: true });

    onChangeMostrarFinalizadosLinhavivaHoje = () =>
        this.state.mostrarFinalizadosLinhavivaHoje ? this.setState({ mostrarFinalizadosLinhavivaHoje: false }) : this.setState({ mostrarFinalizadosLinhavivaHoje: true });
    onChangeMostrarFinalizadosLinhavivaSemana = () =>
        this.state.mostrarFinalizadosLinhavivaSemana ? this.setState({ mostrarFinalizadosLinhavivaSemana: false }) : this.setState({ mostrarFinalizadosLinhavivaSemana: true });
    onChangeMostrarFinalizadosLinhavivaMes = () =>
        this.state.mostrarFinalizadosLinhavivaMes ? this.setState({ mostrarFinalizadosLinhavivaMes: false }) : this.setState({ mostrarFinalizadosLinhavivaMes: true });
    onChangeMostrarFinalizadosLinhavivaAno = () =>
        this.state.mostrarFinalizadosLinhavivaAno ? this.setState({ mostrarFinalizadosLinhavivaAno: false }) : this.setState({ mostrarFinalizadosLinhavivaAno: true });
    onChangeMostrarFinalizadosLinhaviva = () =>
        this.state.mostrarFinalizadosLinhaviva ? this.setState({ mostrarFinalizadosLinhaviva: false }) : this.setState({ mostrarFinalizadosLinhaviva: true });

    onChangeMostrarFinalizadosPodaHoje = () =>
        this.state.mostrarFinalizadosPodaHoje ? this.setState({ mostrarFinalizadosPodaHoje: false }) : this.setState({ mostrarFinalizadosPodaHoje: true });
    onChangeMostrarFinalizadosPodaSemana = () =>
        this.state.mostrarFinalizadosPodaSemana ? this.setState({ mostrarFinalizadosPodaSemana: false }) : this.setState({ mostrarFinalizadosPodaSemana: true });
    onChangeMostrarFinalizadosPodaMes = () =>
        this.state.mostrarFinalizadosPodaMes ? this.setState({ mostrarFinalizadosPodaMes: false }) : this.setState({ mostrarFinalizadosPodaMes: true });
    onChangeMostrarFinalizadosPodaAno = () =>
        this.state.mostrarFinalizadosPodaAno ? this.setState({ mostrarFinalizadosPodaAno: false }) : this.setState({ mostrarFinalizadosPodaAno: true });
    onChangeMostrarFinalizadosPoda = () =>
        this.state.mostrarFinalizadosPoda ? this.setState({ mostrarFinalizadosPoda: false }) : this.setState({ mostrarFinalizadosPoda: true });

    onChangeMostrarFinalizadosDECPHoje = () =>
        this.state.mostrarFinalizadosDECPHoje ? this.setState({ mostrarFinalizadosDECPHoje: false }) : this.setState({ mostrarFinalizadosDECPHoje: true });
    onChangeMostrarFinalizadosDECPSemana = () =>
        this.state.mostrarFinalizadosDECPSemana ? this.setState({ mostrarFinalizadosDECPSemana: false }) : this.setState({ mostrarFinalizadosDECPSemana: true });
    onChangeMostrarFinalizadosDECPMes = () =>
        this.state.mostrarFinalizadosDECPMes ? this.setState({ mostrarFinalizadosDECPMes: false }) : this.setState({ mostrarFinalizadosDECPMes: true });
    onChangeMostrarFinalizadosDECPAno = () =>
        this.state.mostrarFinalizadosDECPAno ? this.setState({ mostrarFinalizadosDECPAno: false }) : this.setState({ mostrarFinalizadosDECPAno: true });
    onChangeMostrarFinalizadosDECP = () =>
        this.state.mostrarFinalizadosDECP ? this.setState({ mostrarFinalizadosDECP: false }) : this.setState({ mostrarFinalizadosDECP: true });

    onChangeMostrarFinalizadosDEOPHoje = () =>
        this.state.mostrarFinalizadosDEOPHoje ? this.setState({ mostrarFinalizadosDEOPHoje: false }) : this.setState({ mostrarFinalizadosDEOPHoje: true });
    onChangeMostrarFinalizadosDEOPSemana = () =>
        this.state.mostrarFinalizadosDEOPSemana ? this.setState({ mostrarFinalizadosDEOPSemana: false }) : this.setState({ mostrarFinalizadosDEOPSemana: true });
    onChangeMostrarFinalizadosDEOPMes = () =>
        this.state.mostrarFinalizadosDEOPMes ? this.setState({ mostrarFinalizadosDEOPMes: false }) : this.setState({ mostrarFinalizadosDEOPMes: true });
    onChangeMostrarFinalizadosDEOPAno = () =>
        this.state.mostrarFinalizadosDEOPAno ? this.setState({ mostrarFinalizadosDEOPAno: false }) : this.setState({ mostrarFinalizadosDEOPAno: true });
    onChangeMostrarFinalizadosDEOP = () =>
        this.state.mostrarFinalizadosDEOP ? this.setState({ mostrarFinalizadosDEOP: false }) : this.setState({ mostrarFinalizadosDEOP: true });

    handleDropDownChangeEquipe = e => this.setState({ equipe: e.value })
    handleDropDownChangeTipo = e => this.setState({ tipo: e.value })
    handleDropDownChangeSupervisor = e => this.setState({ pessoaSupervisor: e.value })
    handleDropDownChangeEncarregado = e => this.setState({ pessoaEncarregado: e.value })
    handleDropDownChangeCidade = e => this.setState({ cidade: e.value })
    handleDropDownChangeLocalSaida = e => this.setState({ localSaida: e.value })

    handleRadioButtonArea = e => this.setState({ area: e.value })
    handleRadioButtonAreaTensao = e => this.setState({ tensao: e.value })
    handleRadioButtonRecolha = e => this.setState({ recolha: e.value })
    handleDropDownChangeOrigemOS = e => this.setState({ origemOS: e.value })

    iniciarApontamento = () => {
        const { tipo, pessoaEncarregado, pessoaSupervisor, equipe, pes, cidade, endereco,
            localSaida, codigoObra } = this.state;
        if (tipo === "PODA") {
            const { subestacao, area, alimentador, origemOS,
                quantidadePlanejada, quantidadeExecutada, recolha, tensao } = this.state;
            if (this.validarInputs([tipo, pessoaEncarregado, pessoaSupervisor, equipe, cidade, endereco,
                localSaida, codigoObra, subestacao, area, alimentador, origemOS,
                quantidadePlanejada, quantidadeExecutada, recolha, tensao])) {
                Api.iniciarApontamento({
                    tipo, pessoaSupervisor, pessoaEncarregado, pes, equipe, cidade, endereco,
                    localSaida, codigoObra, subestacao, area, alimentador, origemOS,
                    quantidadePlanejada, quantidadeExecutada, tensao, recolha
                }).then(res => {
                    this.setState({
                        tipo: "", pessoaEncarregado: "", pessoaSupervisor: "", equipe: "", pes: "",
                        cidade: "", endereco: "", localSaida: "", codigoObra: "",
                        subestacao: "", area: "", alimentador: "", origemOS: "",
                        quantidadePlanejada: "", quantidadeExecutada: "", recolha: "", tensao: ""
                    }, () =>
                        Api.listarApontamentosIniciados()
                            .then(res1 => this.setState({ apontamentosIniciados: res1.data.apontamentos }, () => this.growl.show({ severity: 'success', summary: res.data.mensagem })))
                    )
                }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem }))
            } else this.growl.show({ severity: 'error', summary: "Preencha todos os campos." })
        } else if (tipo === "CONSTRUCAO" || tipo === "MANUTENCAO" || tipo === "LINHA VIVA") {
            if (this.validarInputs([tipo, pessoaEncarregado, pessoaSupervisor, equipe, cidade, endereco,
                localSaida, codigoObra])) {
                Api.iniciarApontamento({
                    tipo, pessoaSupervisor, pessoaEncarregado, pes, equipe, cidade, endereco,
                    localSaida, codigoObra
                }).then(res => {
                    this.setState({
                        tipo: "", pessoaEncarregado: "", pessoaSupervisor: "", equipe: "", pes: "",
                        cidade: "", endereco: "", localSaida: "", codigoObra: ""
                    }, () =>
                        Api.listarApontamentosIniciados()
                            .then(res1 =>
                                this.setState({ apontamentosIniciados: res1.data.apontamentos }, () => this.growl.show({ severity: 'success', summary: res.data.mensagem })))
                    )
                }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem }))
            } else this.growl.show({ severity: 'error', summary: "Preencha todos os campos." })
        }
    }

    validarInputs = (inputs) => {
        let flag = true;
        inputs.forEach(input => {
            if (input === "") flag = false;
        })
        return flag;
    }

    finalizarApontamento = (apontamento) => {
        const { atividadesSelecionadas, tecnicoEnergisa, veiculoKmFim, PgCp } = this.state;
        let flag = true;
        atividadesSelecionadas.forEach(element => {
            if (element.quantidade === "") flag = false;
        })
        if (flag) {
            if (this.validarInputs([tecnicoEnergisa, veiculoKmFim, PgCp])) {
                Api.finalizarApontamento({
                    _id: apontamento, atividades: atividadesSelecionadas.map(atividade => {
                        return { _id: atividade._id, quantidade: Number(atividade.quantidade) }
                    }), tecnicoEnergisa, veiculoKmFim,
                    PgCp
                }).then(res1 =>
                    this.setState({
                        tecnicoEnergisa: "", veiculoKmFim: "", PgCp: "", observacao: "",
                        atividadesSelecionadas: [], horarioFinal: "", horarioInicio: ""
                    }, () =>
                        Promise.all([
                            Api.listarApontamentosIniciados(),
                            Api.listarApontamentosFinalizados(),
                            ApiEquipe.listarEquipes(),
                            ApiAtividade.listarAtividades("all"),
                            Api.listarEncarregados(),
                            Api.listarSupervisores(),
                            ApiEquipe.faturamentoConstrucao(),
                            ApiEquipe.faturamentoManutencao(),
                            ApiEquipe.faturamentoPoda(),
                            ApiEquipe.faturamentoLinhaviva(),
                            ApiEquipe.faturamentoDECP(),
                            ApiEquipe.faturamentoDEOP()
                        ]).then(res =>
                            this.setState({
                                apontamentosIniciados: res[0].data.apontamentos,
                                apontamentosFinalizados: res[1].data.apontamentos,
                                atividades: res[3].data.atividades,
                                graficosConstrucao: res[6].data.graficos,
                                graficosManutencao: res[7].data.graficos,
                                graficosPoda: res[8].data.graficos,
                                graficosLinhaviva: res[9].data.graficos,
                                graficosDECP: res[10].data.graficos,
                                graficosDEOP: res[11].data.graficos,
                                faturamentoConstrucao: res[1].data.construcao,
                                faturamentoManutencao: res[1].data.manutencao,
                                faturamentoLinhaviva: res[1].data.linhaviva,
                                faturamentoPoda: res[1].data.poda,
                                faturamentoDEOP: res[1].data.deop,
                                faturamentoDECP: res[1].data.decp,
                                construcaoHoje: res[1].data.construcaoHoje,
                                construcaoSemana: res[1].data.construcaoSemana,
                                construcaoMes: res[1].data.construcaoMes,
                                construcaoAno: res[1].data.construcaoAno,
                                manutencaoHoje: res[1].data.manutencaoHoje,
                                manutencaoSemana: res[1].data.manutencaoSemana,
                                manutencaoMes: res[1].data.manutencaoMes,
                                manutencaoAno: res[1].data.manutencaoAno,
                                linhavivaHoje: res[1].data.linhavivaHoje,
                                linhavivaSemana: res[1].data.linhavivaSemana,
                                linhavivaMes: res[1].data.linhavivaMes,
                                linhavivaAno: res[1].data.linhavivaAno,
                                podaHoje: res[1].data.podaHoje,
                                podaSemana: res[1].data.podaSemana,
                                podaMes: res[1].data.podaMes,
                                podaAno: res[1].data.podaAno,
                                decpHoje: res[1].data.decpHoje,
                                decpSemana: res[1].data.decpSemana,
                                decpMes: res[1].data.decpMes,
                                decpAno: res[1].data.decpAno,
                                deopHoje: res[1].data.deopHoje,
                                deopSemana: res[1].data.deopSemana,
                                deopMes: res[1].data.deopMes,
                                deopAno: res[1].data.deopAno
                            }, () => this.growl.show({ severity: 'success', summary: res1.data.mensagem }))
                        )
                    ), erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem })
                )
            } else this.growl.show({ severity: 'error', summary: "Preencha todos os campos." })
        } else this.growl.show({ severity: 'error', summary: "Coloque todas as quantidades." })
    }

    actionTemplateButtonFinalizar = (rowData) => <Button style={{
        backgroundColor: '#f79c91', borderColor: '#f7b9b2',
        WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
    }} label="Finalizar" onClick={() => { this.finalizarApontamento(rowData._id) }}
        className="p-button-raised p-button-rounded" />

    onChangeSelecteds = (atividade) => {
        let { atividades, atividadesSelecionadas } = this.state;
        const atividadeData = atividade.target;
        let newArray = atividadesSelecionadas;
        atividades.forEach(element => {
            if (element._id === atividadeData.id) {
                element.checked = atividadeData.checked
                if (element.checked) atividadesSelecionadas.push({
                    _id: atividadeData.id,
                    nome: element.nome,
                    tipo: element.tipo,
                    valor: element.valor,
                    quantidade: "",
                    subtotal: "0"
                })
            }
        });
        if (!atividadeData.checked) newArray = atividadesSelecionadas.filter(material => material._id !== atividadeData.id)
        this.setState({ atividadesSelecionadas: newArray, atividades });
    }

    actionTemplate = (rowData) => <Checkbox id={rowData._id} onChange={this.onChangeSelecteds} checked={rowData.checked}></Checkbox>

    actionTemplateInput = (rowData) => <InputFloat name={rowData._id} type="number" label="Quantidade"
        value={this.state.atividadesSelecionadas.filter(atividade => atividade._id === rowData._id)[0].quantidade}
        onChange={this.handleInputChangeTable} />

    actionTemplateButtonVer = (rowData) => <Button style={{
        backgroundColor: '#f79c91', borderColor: '#f7b9b2',
        WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
    }} label="Ver" onClick={() => this.props.history.push(`/usuario/apontamento/ver?_id=${rowData._id}`)}
        className="p-button-raised p-button-rounded" />

    actionTemplateButtonFaturar = (rowData) => <Button style={{
        backgroundColor: '#f79c91', borderColor: '#f7b9b2',
        WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
    }} label="Faturar" onClick={() => Api.faturar({ _id: rowData._id }).then(res => this.growl.show({ severity: 'success', summary: res.data.mensagem }))}
        className="p-button-raised p-button-rounded" />

    handleInputChangeTable = (e) => {
        const { name, value } = e.target;
        let newArray = this.state.atividadesSelecionadas;
        newArray.forEach((material, i) => {
            if (material._id == name) {
                newArray[i].quantidade = value;
                newArray[i].subtotal = (value * newArray[i].valor).toFixed(2);
            };
        })
        this.setState({ atividadesSelecionadas: newArray })
    }

    pesquisarAtividade = async () => {
        const { atividadePesquisa } = this.state;
        ApiAtividade.listarAtividades(atividadePesquisa).then(res => {
            this.setState({ atividades: res.data.atividades }, () => this.growl.show({ severity: 'success', summary: res.data.mensagem }));
        }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem }))
    }

    faturarObra = async () => {
        const { obraPesquisa } = this.state;
        if (this.state.apontamentosPesquisa.length !== 0)
            Api.faturarObra({ codigoObra: obraPesquisa }).then(res => this.growl.show({ severity: 'success', summary: res.data.mensagem })
                , erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem }))
        else this.growl.show({ severity: 'error', summary: "Pesquisa a obra primeiro." })
    }

    pesquisarObra = async () => {
        const { obraPesquisa } = this.state;
        Api.pesquisarObra(obraPesquisa).then(res => {
            this.setState({ apontamentosPesquisa: res.data.apontamentos }, () => this.growl.show({ severity: 'success', summary: res.data.mensagem }));
        }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem }))
    }

    limparFiltroAtividades = async () => {
        const res = await ApiAtividade.listarAtividades("all");
        this.setState({ atividades: res.data.atividades });
    }

    actionTemplateButton = (rowData) => <Button style={{
        backgroundColor: '#f79c91', borderColor: '#f7b9b2',
        WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
    }} label="Retirar atividade" onClick={() => { this.retirarAtividadeTabela(rowData._id) }}
        className="p-button-raised p-button-rounded" />

    retirarAtividadeTabela = (material) => {
        let newArray = [];
        this.state.atividadesSelecionadas.forEach(element => {
            if (element._id !== material) newArray.push(element)
        })
        this.setState({ atividadesSelecionadas: newArray })
    }

    render() {
        const { carregando, itemAtivo, tipo, pessoaEncarregado, pessoaSupervisor, equipe, pes, cidade, endereco,
            localSaida, codigoObra, equipesEscolher, apontamentosIniciados, apontamentosFinalizados, atividades,
            atividadesSelecionadas, tecnicoEnergisa, PgCp, veiculoKmFim, graficosConstrucao,
            graficosManutencao, graficosPoda, graficosLinhaviva, graficosDECP, graficosDEOP, supervisores, encarregados,
            faturamentoConstrucao, faturamentoManutencao, faturamentoLinhaviva, faturamentoPoda, faturamentoDEOP,
            faturamentoDECP, construcaoHoje, construcaoSemana, construcaoMes, construcaoAno,
            manutencaoHoje, manutencaoSemana, manutencaoMes, manutencaoAno,
            linhavivaHoje, linhavivaSemana, linhavivaMes, linhavivaAno,
            podaHoje, podaSemana, podaMes, podaAno,
            decpHoje, decpSemana, decpMes, decpAno,
            deopHoje, deopSemana, deopMes, deopAno,
            mostrarFinalizadosConstrucaoHoje, mostrarFinalizadosConstrucaoSemana, mostrarFinalizadosConstrucaoMes,
            mostrarFinalizadosConstrucaoAno, mostrarFinalizadosConstrucao,
            mostrarFinalizadosManutencaoHoje, mostrarFinalizadosManutencaoSemana, mostrarFinalizadosManutencaoMes,
            mostrarFinalizadosManutencaoAno, mostrarFinalizadosManutencao,
            mostrarFinalizadosLinhavivaHoje, mostrarFinalizadosLinhavivaSemana, mostrarFinalizadosLinhavivaMes,
            mostrarFinalizadosLinhavivaAno, mostrarFinalizadosLinhaviva,
            mostrarFinalizadosPodaHoje, mostrarFinalizadosPodaSemana, mostrarFinalizadosPodaMes,
            mostrarFinalizadosPodaAno, mostrarFinalizadosPoda,
            mostrarFinalizadosDECPHoje, mostrarFinalizadosDECPSemana, mostrarFinalizadosDECPMes,
            mostrarFinalizadosDECPAno, mostrarFinalizadosDECP,
            mostrarFinalizadosDEOPHoje, mostrarFinalizadosDEOPSemana, mostrarFinalizadosDEOPMes,
            mostrarFinalizadosDEOPAno, mostrarFinalizadosDEOP,
            subestacao, area, alimentador, origemOS,
            quantidadePlanejada, quantidadeExecutada, recolha, tensao, observacao, horarioInicio, horarioFinal, atividadePesquisa,
            apontamentosPesquisa, obraPesquisa } = this.state;
        return (
            <>
                <Growl ref={(el) => this.growl = el} />
                {carregando ? <ProgressSpinner />
                    :
                    <>
                        <ApontamentoView
                            faturarObra={this.faturarObra}
                            pesquisarObra={this.pesquisarObra}
                            obraPesquisa={obraPesquisa}
                            apontamentosPesquisa={apontamentosPesquisa}
                            actionTemplateButtonFaturar={this.actionTemplateButtonFaturar}
                            limparFiltroAtividades={this.limparFiltroAtividades}
                            pesquisarAtividade={this.pesquisarAtividade}
                            atividadePesquisa={atividadePesquisa}
                            horarioFinal={horarioFinal}
                            horarioInicio={horarioInicio}
                            observacao={observacao}
                            handleDropDownChangeOrigemOS={this.handleDropDownChangeOrigemOS}
                            handleRadioButtonRecolha={this.handleRadioButtonRecolha}
                            handleRadioButtonAreaTensao={this.handleRadioButtonAreaTensao}
                            handleRadioButtonArea={this.handleRadioButtonArea}
                            subestacao={subestacao}
                            area={area}
                            alimentador={alimentador}
                            origemOS={origemOS}
                            quantidadePlanejada={quantidadePlanejada}
                            quantidadeExecutada={quantidadeExecutada}
                            recolha={recolha}
                            tensao={tensao}
                            actionTemplateButtonVer={this.actionTemplateButtonVer}
                            onChangeMostrarFinalizadosConstrucaoHoje={this.onChangeMostrarFinalizadosConstrucaoHoje}
                            mostrarFinalizadosConstrucaoHoje={mostrarFinalizadosConstrucaoHoje}
                            onChangeMostrarFinalizadosConstrucaoSemana={this.onChangeMostrarFinalizadosConstrucaoSemana}
                            mostrarFinalizadosConstrucaoSemana={mostrarFinalizadosConstrucaoSemana}
                            onChangeMostrarFinalizadosConstrucaoMes={this.onChangeMostrarFinalizadosConstrucaoMes}
                            mostrarFinalizadosConstrucaoMes={mostrarFinalizadosConstrucaoMes}
                            onChangeMostrarFinalizadosConstrucaoAno={this.onChangeMostrarFinalizadosConstrucaoAno}
                            mostrarFinalizadosConstrucaoAno={mostrarFinalizadosConstrucaoAno}
                            onChangeMostrarFinalizadosConstrucao={this.onChangeMostrarFinalizadosConstrucao}
                            mostrarFinalizadosConstrucao={mostrarFinalizadosConstrucao}
                            onChangeMostrarFinalizadosManutencaoHoje={this.onChangeMostrarFinalizadosManutencaoHoje}
                            mostrarFinalizadosManutencaoHoje={mostrarFinalizadosManutencaoHoje}
                            onChangeMostrarFinalizadosManutencaoSemana={this.onChangeMostrarFinalizadosManutencaoSemana}
                            mostrarFinalizadosManutencaoSemana={mostrarFinalizadosManutencaoSemana}
                            onChangeMostrarFinalizadosManutencaoMes={this.onChangeMostrarFinalizadosManutencaoMes}
                            mostrarFinalizadosManutencaoMes={mostrarFinalizadosManutencaoMes}
                            onChangeMostrarFinalizadosManutencaoAno={this.onChangeMostrarFinalizadosManutencaoAno}
                            mostrarFinalizadosManutencaoAno={mostrarFinalizadosManutencaoAno}
                            onChangeMostrarFinalizadosManutencao={this.onChangeMostrarFinalizadosManutencao}
                            mostrarFinalizadosManutencao={mostrarFinalizadosManutencao}
                            onChangeMostrarFinalizadosLinhavivaHoje={this.onChangeMostrarFinalizadosLinhavivaHoje}
                            mostrarFinalizadosLinhavivaHoje={mostrarFinalizadosLinhavivaHoje}
                            onChangeMostrarFinalizadosLinhavivaSemana={this.onChangeMostrarFinalizadosLinhavivaSemana}
                            mostrarFinalizadosLinhavivaSemana={mostrarFinalizadosLinhavivaSemana}
                            onChangeMostrarFinalizadosLinhavivaMes={this.onChangeMostrarFinalizadosLinhavivaMes}
                            mostrarFinalizadosLinhavivaMes={mostrarFinalizadosLinhavivaMes}
                            onChangeMostrarFinalizadosLinhavivaAno={this.onChangeMostrarFinalizadosLinhavivaAno}
                            mostrarFinalizadosLinhavivaAno={mostrarFinalizadosLinhavivaAno}
                            onChangeMostrarFinalizadosLinhaviva={this.onChangeMostrarFinalizadosLinhaviva}
                            mostrarFinalizadosLinhaviva={mostrarFinalizadosLinhaviva}
                            onChangeMostrarFinalizadosPodaHoje={this.onChangeMostrarFinalizadosPodaHoje}
                            mostrarFinalizadosPodaHoje={mostrarFinalizadosPodaHoje}
                            onChangeMostrarFinalizadosPodaSemana={this.onChangeMostrarFinalizadosPodaSemana}
                            mostrarFinalizadosPodaSemana={mostrarFinalizadosPodaSemana}
                            onChangeMostrarFinalizadosPodaMes={this.onChangeMostrarFinalizadosPodaMes}
                            mostrarFinalizadosPodaMes={mostrarFinalizadosPodaMes}
                            onChangeMostrarFinalizadosPodaAno={this.onChangeMostrarFinalizadosPodaAno}
                            mostrarFinalizadosPodaAno={mostrarFinalizadosPodaAno}
                            onChangeMostrarFinalizadosPoda={this.onChangeMostrarFinalizadosPoda}
                            mostrarFinalizadosPoda={mostrarFinalizadosPoda}
                            onChangeMostrarFinalizadosDECPHoje={this.onChangeMostrarFinalizadosDECPHoje}
                            mostrarFinalizadosDECPHoje={mostrarFinalizadosDECPHoje}
                            onChangeMostrarFinalizadosDECPSemana={this.onChangeMostrarFinalizadosDECPSemana}
                            mostrarFinalizadosDECPSemana={mostrarFinalizadosDECPSemana}
                            onChangeMostrarFinalizadosDECPMes={this.onChangeMostrarFinalizadosDECPMes}
                            mostrarFinalizadosDECPMes={mostrarFinalizadosDECPMes}
                            onChangeMostrarFinalizadosDECPAno={this.onChangeMostrarFinalizadosDECPAno}
                            mostrarFinalizadosDECPAno={mostrarFinalizadosDECPAno}
                            onChangeMostrarFinalizadosDECP={this.onChangeMostrarFinalizadosDECP}
                            mostrarFinalizadosDECP={mostrarFinalizadosDECP}
                            onChangeMostrarFinalizadosDEOPHoje={this.onChangeMostrarFinalizadosDEOPHoje}
                            mostrarFinalizadosDEOPHoje={mostrarFinalizadosDEOPHoje}
                            onChangeMostrarFinalizadosDEOPSemana={this.onChangeMostrarFinalizadosDEOPSemana}
                            mostrarFinalizadosDEOPSemana={mostrarFinalizadosDEOPSemana}
                            onChangeMostrarFinalizadosDEOPMes={this.onChangeMostrarFinalizadosDEOPMes}
                            mostrarFinalizadosDEOPMes={mostrarFinalizadosDEOPMes}
                            onChangeMostrarFinalizadosDEOPAno={this.onChangeMostrarFinalizadosDEOPAno}
                            mostrarFinalizadosDEOPAno={mostrarFinalizadosDEOPAno}
                            onChangeMostrarFinalizadosDEOP={this.onChangeMostrarFinalizadosDEOP}
                            mostrarFinalizadosDEOP={mostrarFinalizadosDEOP}
                            construcaoHoje={construcaoHoje}
                            construcaoSemana={construcaoSemana}
                            construcaoMes={construcaoMes}
                            construcaoAno={construcaoAno}
                            manutencaoHoje={manutencaoHoje}
                            manutencaoSemana={manutencaoSemana}
                            manutencaoMes={manutencaoMes}
                            manutencaoAno={manutencaoAno}
                            linhavivaHoje={linhavivaHoje}
                            linhavivaSemana={linhavivaSemana}
                            linhavivaMes={linhavivaMes}
                            linhavivaAno={linhavivaAno}
                            podaHoje={podaHoje}
                            podaSemana={podaSemana}
                            podaMes={podaMes}
                            podaAno={podaAno}
                            decpHoje={decpHoje}
                            decpSemana={decpSemana}
                            decpMes={decpMes}
                            decpAno={decpAno}
                            deopHoje={deopHoje}
                            deopSemana={deopSemana}
                            deopMes={deopMes}
                            deopAno={deopAno}
                            faturamentoConstrucao={faturamentoConstrucao}
                            faturamentoManutencao={faturamentoManutencao}
                            faturamentoLinhaviva={faturamentoLinhaviva}
                            faturamentoPoda={faturamentoPoda}
                            faturamentoDEOP={faturamentoDEOP}
                            faturamentoDECP={faturamentoDECP}
                            encarregados={encarregados}
                            supervisores={supervisores}
                            graficosManutencao={graficosManutencao}
                            graficosPoda={graficosPoda}
                            graficosLinhaviva={graficosLinhaviva}
                            graficosDECP={graficosDECP}
                            graficosDEOP={graficosDEOP}
                            graficosConstrucao={graficosConstrucao}
                            tecnicoEnergisa={tecnicoEnergisa}
                            PgCp={PgCp}
                            veiculoKmFim={veiculoKmFim}
                            atividadesSelecionadas={atividadesSelecionadas}
                            actionTemplate={this.actionTemplate}
                            actionTemplateInput={this.actionTemplateInput}
                            atividades={atividades}
                            actionTemplateButton={this.actionTemplateButton}
                            actionTemplateButtonFinalizar={this.actionTemplateButtonFinalizar}
                            iniciarApontamento={this.iniciarApontamento}
                            handleDropDownChangeLocalSaida={this.handleDropDownChangeLocalSaida}
                            handleDropDownChangeCidade={this.handleDropDownChangeCidade}
                            handleDropDownChangeEncarregado={this.handleDropDownChangeEncarregado}
                            handleDropDownChangeSupervisor={this.handleDropDownChangeSupervisor}
                            handleDropDownChangeTipo={this.handleDropDownChangeTipo}
                            equipesEscolher={equipesEscolher}
                            apontamentosIniciados={apontamentosIniciados}
                            apontamentosFinalizados={apontamentosFinalizados}
                            handleDropDownChangeEquipe={this.handleDropDownChangeEquipe}
                            onChangeItemAtivo={this.onChangeItemAtivo}
                            itemAtivo={itemAtivo}
                            actionTemplateButton={this.actionTemplateButton}
                            goTo={this.goTo}
                            handleInputChange={this.handleInputChange}
                            tipo={tipo}
                            pessoaSupervisor={pessoaSupervisor}
                            pessoaEncarregado={pessoaEncarregado}
                            pes={pes}
                            equipe={equipe}
                            cidade={cidade}
                            endereco={endereco}
                            localSaida={localSaida}
                            codigoObra={codigoObra}
                        />
                    </>}
            </>
        )
    }

}

