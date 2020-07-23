import React, { Component } from 'react';

import HomePageView from '../../view/homepage/View';
import Api from '../../service/ApiBaseApontamento';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Growl } from 'primereact/growl';

export default class HomePageController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            realizado: "",
            equipesApuradas: "",
            equipesAlcancandoMeta: "",
            realizadoEquipes: "",
            metaAcumuladaEquipes: "",
            oportunidade: "",
            metaMensal: "",
            metaAcumulada: "",
            diferenca: "",
            global: [],
            grafico: [],
            segmentos: [],
            graficoConstrucao: [],
            graficoManutencao: [],
            graficoLinhaviva: [],
            graficoPoda: [],
            graficoDECP: [],
            graficoDEOP: [],
            carregando: false,
            supervisores: [],
            gestores: [],
            fiscaisTecnicos: []
        }
    }

    componentDidMount = () => {
        this.setState({ carregando: true }, () =>
            Api.dashboard().then(res =>
                this.setState({
                    grafico: res.data.grafico, carregando: false, realizado: res.data.realizado, equipesApuradas: res.data.equipesApuradas,
                    equipesAlcancandoMeta: res.data.equipesAlcancandoMeta, realizadoEquipes: res.data.realizadoEquipes, metaAcumuladaEquipes: res.data.metaAcumuladaEquipes, oportunidade: res.data.oportunidade,
                    metaMensal: res.data.metaMensal, metaAcumulada: res.data.metaAcumulada, diferenca: res.data.diferenca, global: res.data.global,
                    segmentos: res.data.segmentos,
                    graficoConstrucao: res.data.graficoConstrucao, graficoManutencao: res.data.graficoManutencao, graficoLinhaviva: res.data.graficoLinhaviva,
                    graficoPoda: res.data.graficoPoda, graficoDECP: res.data.graficoDECP, graficoDEOP: res.data.graficoDEOP,
                    supervisores: res.data.supervisores, gestores: res.data.gestores, fiscaisTecnicos: res.data.fiscaisTecnicos,
                })
            )
        )
    }

    render() {
        const { grafico, realizado, equipesApuradas,
            equipesAlcancandoMeta, realizadoEquipes, metaAcumuladaEquipes, oportunidade,
            metaMensal, metaAcumulada, diferenca, carregando, global, segmentos,
            graficoConstrucao, graficoManutencao, graficoLinhaviva, graficoPoda, graficoDECP, graficoDEOP,
            supervisores, gestores, fiscaisTecnicos } = this.state;
        return (
            <>
                <Growl ref={(el) => this.growl = el} />
                {carregando ? <ProgressSpinner />
                    :
                    <HomePageView
                        supervisores={supervisores}
                        gestores={gestores}
                        fiscaisTecnicos={fiscaisTecnicos}
                        graficoConstrucao={graficoConstrucao}
                        graficoManutencao={graficoManutencao}
                        graficoLinhaviva={graficoLinhaviva}
                        graficoPoda={graficoPoda}
                        graficoDECP={graficoDECP}
                        graficoDEOP={graficoDEOP}
                        segmentos={segmentos}
                        global={global}
                        grafico={grafico}
                        realizado={realizado}
                        equipesApuradas={equipesApuradas}
                        equipesAlcancandoMeta={equipesAlcancandoMeta}
                        realizadoEquipes={realizadoEquipes}
                        metaAcumuladaEquipes={metaAcumuladaEquipes}
                        oportunidade={oportunidade}
                        metaMensal={metaMensal}
                        metaAcumulada={metaAcumulada}
                        diferenca={diferenca}
                    />
                }
            </>
        );
    }
}


