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
            graficos: [],
            encarregados: [],
            supervisores: []
        }
    }

    componentDidMount = () => {
        this.setState({ carregando: true }, () =>
            Promise.all([
                Api.listarApontamentosIniciados(),
                Api.listarApontamentosFinalizados(),
                ApiEquipe.listarEquipes(),
                ApiAtividade.listarAtividades(),
                ApiEquipe.graficos(),
                Api.listarEncarregados(),
                Api.listarSupervisores()
            ]).then(res => {
                this.setState({
                    apontamentosIniciados: res[0].data.apontamentos,
                    apontamentosFinalizados: res[1].data.apontamentos,
                    equipesEscolher: res[2].data.equipes.map(equipe => { return { label: equipe._id, value: equipe._id } }),
                    carregando: false,
                    atividades: res[3].data.atividades,
                    graficos: res[4].data.graficos,
                    encarregados: res[5].data.funcionarios,
                    supervisores: res[6].data.funcionarios,
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

    handleDropDownChangeEquipe = e => this.setState({ equipe: e.value })
    handleDropDownChangeTipo = e => this.setState({ tipo: e.value })
    handleDropDownChangeSupervisor = e => this.setState({ pessoaSupervisor: e.value })
    handleDropDownChangeEncarregado = e => this.setState({ pessoaEncarregado: e.value })
    handleDropDownChangeCidade = e => this.setState({ cidade: e.value })
    handleDropDownChangeLocalSaida = e => this.setState({ localSaida: e.value })

    iniciarApontamento = () => {
        const { tipo, pessoaEncarregado, pessoaSupervisor, equipe, pes, cidade, endereco,
            localSaida, codigoObra } = this.state;
        if (this.validarInputs([tipo, pessoaEncarregado, pessoaSupervisor, equipe, pes, cidade, endereco,
            localSaida, codigoObra])) {
            Api.iniciarApontamento({
                tipo, pessoaSupervisor, pessoaEncarregado, pes, equipe, cidade, endereco,
                localSaida, codigoObra
            }).then(async res => {
                this.setState({
                    tipo: "", pessoaEncarregado: "", pessoaSupervisor: "", equipe: "", pes: "",
                    cidade: "", endereco: "", localSaida: "", codigoObra: ""
                }, async () => {
                    await Promise.all([Api.listarApontamentosIniciados(), Api.listarApontamentosFinalizados()]).then(res1 =>
                        this.setState({
                            apontamentosIniciados: res1[0].data.apontamentos,
                            apontamentosFinalizados: res1[1].data.apontamentos,
                        }, () => this.growl.show({ severity: 'success', summary: res.data.mensagem }))
                    )
                })
            }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem }))
        } else this.growl.show({ severity: 'error', summary: "Preencha todos os campos." })
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
        Api.finalizarApontamento({
            _id: apontamento, atividades: atividadesSelecionadas.map(atividade => {
                return { _id: atividade._id, quantidade: Number(atividade.quantidade) }
            }), tecnicoEnergisa, veiculoKmFim,
            PgCp
        }).then(res => {
            this.setState({ tecnicoEnergisa: "", veiculoKmFim: "", PgCp: "", atividadesSelecionadas: [] }
                , () =>
                    Promise.all([Api.listarApontamentosIniciados(), Api.listarApontamentosFinalizados()]).then(res1 =>
                        this.setState({
                            apontamentosIniciados: res1[0].data.apontamentos,
                            apontamentosFinalizados: res1[1].data.apontamentos
                        }, () =>
                            this.growl.show({ severity: 'success', summary: res.data.mensagem }))
                    )
            )
        }, erro => this.growl.show({ severity: 'error', summary: erro.response.data.mensagem }))
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
                    quantidade: ""
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

    handleInputChangeTable = (e) => {
        const { name, value } = e.target;
        let newArray = this.state.atividadesSelecionadas;
        newArray.forEach((material, i) => {
            if (material._id == name) newArray[i].quantidade = value;
        })
        this.setState({ atividadesSelecionadas: newArray })
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
            atividadesSelecionadas, tecnicoEnergisa, PgCp, veiculoKmFim, graficos, supervisores, encarregados } = this.state;
        return (
            <>
                <Growl ref={(el) => this.growl = el} />
                {carregando ? <ProgressSpinner />
                    :
                    <>
                        <ApontamentoView
                            encarregados={encarregados}
                            supervisores={supervisores}
                            graficos={graficos}
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


