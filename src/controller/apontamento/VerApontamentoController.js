import React, { Component } from 'react';

import VerApontamentoView from '../../view/apontamento/verApontamento/View';
import Api from '../../service/ApiBaseApontamento';
import { ProgressSpinner } from 'primereact/progressspinner';
import queryString from 'query-string';
import moment from 'moment';

export default class VerApontamentoController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tipo: "",
            supervisor: "",
            encarregado: "",
            tecnicoEnergisa: "",
            placa: "",
            kmInicial: "",
            kmFinal: "",
            kmTotal: "",
            codigoObra: "",
            localChegada: "",
            localSaida: "",
            PgCp: "",
            equipe: "",
            cidade: "",
            endereco: "",
            horaInicio: "",
            horaFinal: "",
            lucro: "",
            atividades: [],
            carregando: false
        }
    }

    componentDidMount = () => {
        const { _id } = queryString.parse(this.props.location.search);
        this.setState({ carregando: true }, () =>
            Promise.all([Api.verApontamento(_id), Api.verAtividades(_id)]).then(res =>
                this.setState({
                    tipo: res[0].data.apontamento.tipo,
                    supervisor: res[0].data.apontamento.pessoa.supervisor,
                    encarregado: res[0].data.apontamento.pessoa.encarregado,
                    tecnicoEnergisa: res[0].data.apontamento.pessoa.tecnicoEnergisa,
                    placa: res[0].data.apontamento.veiculo.placa,
                    kmInicial: res[0].data.apontamento.veiculo.kilometragem.inicio,
                    kmFinal: res[0].data.apontamento.veiculo.kilometragem.fim,
                    kmTotal: res[0].data.apontamento.veiculo.kilometragem.total,
                    localChegada: res[0].data.apontamento.local.chegada,
                    localSaida: res[0].data.apontamento.local.saida,
                    codigoObra: res[0].data.apontamento.codigoObra,
                    PgCp: res[0].data.apontamento.PgCp,
                    equipe: res[0].data.apontamento.equipe,
                    cidade: res[0].data.apontamento.cidade,
                    endereco: res[0].data.apontamento.endereco,
                    horaInicio: moment(new Date(res[0].data.apontamento.hora.inicio)).format('DD/MM/YYYY'),
                    horaFinal: moment(new Date(res[0].data.apontamento.hora.fim)).format('DD/MM/YYYY'),
                    lucro: res[0].data.apontamento.lucro,
                    atividades: res[1].data.atividades,
                    carregando: false
                })
            )
        )
    }

    render() {
        const { tipo, supervisor, encarregado, tecnicoEnergisa, placa, kmInicial, kmFinal, kmTotal, codigoObra, PgCp, equipe, cidade, endereco, horaInicio, horaFinal, lucro, carregando,
            localSaida, localChegada, atividades } = this.state;
        return (
            <>
                {carregando ? <ProgressSpinner />
                    :
                    <VerApontamentoView
                    atividades={atividades}
                        localSaida={localSaida}
                        localChegada={localChegada}
                        tipo={tipo}
                        supervisor={supervisor}
                        encarregado={encarregado}
                        tecnicoEnergisa={tecnicoEnergisa}
                        placa={placa}
                        kmInicial={kmInicial}
                        kmFinal={kmFinal}
                        kmTotal={kmTotal}
                        codigoObra={codigoObra}
                        PgCp={PgCp}
                        equipe={equipe}
                        cidade={cidade}
                        endereco={endereco}
                        horaInicio={horaInicio}
                        horaFinal={horaFinal}
                        lucro={lucro} />
                }
            </>
        );
    }
}


