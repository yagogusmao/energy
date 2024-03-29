import React from 'react';
import Chart from "react-google-charts";
import { ContainerGraficoEquipes, ContainerTabelaGlobal, ContainerForaGraficoEquipes } from './styles/Style';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const HomePageView = props => {
    const { grafico, realizado, metaMensal, global, segmentos,
        graficoConstrucao, graficoManutencao, graficoLinhaviva, graficoPoda, graficoDECP, graficoDEOP, supervisores, gestores, fiscaisTecnicos } = props;
    return (
        <>
            <ContainerTabelaGlobal>
                <div className="tabela" style={{ overflowX: 'scroll' }}>
                    <DataTable
                        value={global}
                        rows={1}
                    >
                        <Column
                            field="metaMensal"
                            header="Meta Mensal"
                            style={{ textAlign: 'center', width: '200px' }}
                        />
                        <Column
                            field="metaAcumulada"
                            header="Meta Acumulada"
                            style={{ textAlign: 'center', width: '200px' }}
                        />
                        <Column
                            field="realizado"
                            header="Realizado"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="equipesApuradas"
                            header="Equipes Apuradas"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="equipesAlcancandoMeta"
                            header="Equipes Alcançando Meta"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="diferenca"
                            header="Diferença"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="oportunidade"
                            header="Oportunidade"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="faturado"
                            header="Faturado"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                    </DataTable>
                </div>
                <div className="graficoTabela">
                    <div style={{ marginTop: "10px", overflowX: 'scroll', overflowY: 'hidden' }}>
                        <Chart
                            width={'500px'}
                            height={'330px'}
                            chartType="PieChart"
                            loader={<div>Carregando gráfico...</div>}
                            data={[
                                ['Meta restante', 'Meta batida'],
                                ['Meta batida', realizado / metaMensal],
                                ['Meta restante', metaMensal],
                            ]}
                            rootProps={{ 'data-testid': '1' }}
                            options={{
                                legend: {
                                    position: 'bottom'
                                },
                                series: {
                                    1: { visibleInLegend: false },
                                    2: { color: '#000000', visibleInLegend: false },
                                }
                            }}
                        />
                    </div>
                    <div className="tabela" style={{ overflowX: 'scroll', marginTop: "10px" }}>
                        <DataTable
                            value={segmentos.map(segmento => {
                                return {
                                    ...segmento,
                                    porcentagem: Number(segmento.metaAcumulada) !== 0 ? ((Number(segmento.realizado) / Number(segmento.metaAcumulada)) * 100).toFixed(2) : 0
                                }
                            })}
                            rows={10}
                        >
                            <Column
                                field="segmento"
                                header="Seguimento"
                                style={{ textAlign: 'center', width: '100px' }}
                            />
                            <Column
                                field="metaAcumulada"
                                header="Meta Acumulada"
                                style={{ textAlign: 'center', width: '100px' }}
                            />
                            <Column
                                field="realizado"
                                header="Realizado"
                                style={{ textAlign: 'center', width: '100px' }}
                            />
                            <Column
                                field="porcentagem"
                                header="Porcentagem (%)"
                                style={{ textAlign: 'center', width: '100px' }}
                            />
                        </DataTable>
                    </div>
                </div>
            </ContainerTabelaGlobal>
            <ContainerTabelaGlobal style={{ marginBottom: '10px' }}>
                <div className="tabela" style={{ overflowX: 'scroll' }}>
                    <DataTable
                        value={gestores}
                        rows={2}
                    >
                        <Column
                            field="gestor"
                            header="Gestor"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="metaMensal"
                            header="Meta Mensal"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="metaAcumulada"
                            header="Meta Acumulada"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="realizado"
                            header="Realizado"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="equipesApuradas"
                            header="Equipes Apuradas"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="equipesAlcancandoMeta"
                            header="Equipes Alcançando Meta"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="diferenca"
                            header="Diferença"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="oportunidade"
                            header="Oportunidade"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                    </DataTable>
                </div>
                <div className="tabela" style={{ overflowX: 'scroll', marginTop: '10px' }}>
                    <DataTable
                        value={supervisores}
                        rows={3}
                    >
                        <Column
                            field="supervisor"
                            header="Supervisor"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="metaMensal"
                            header="Meta Mensal"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="metaAcumulada"
                            header="Meta Acumulada"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="realizado"
                            header="Realizado"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="equipesApuradas"
                            header="Equipes Apuradas"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="equipesAlcancandoMeta"
                            header="Equipes Alcançando Meta"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="diferenca"
                            header="Diferença"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="oportunidade"
                            header="Oportunidade"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                    </DataTable>
                </div>
                <div className="tabela" style={{ overflowX: 'scroll', marginTop: '10px' }}>
                    <DataTable
                        value={fiscaisTecnicos}
                        rows={5}
                    >
                        <Column
                            field="fiscalTecnico"
                            header="Fiscal/Técnico"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="metaMensal"
                            header="Meta Mensal"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="metaAcumulada"
                            header="Meta Acumulada"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="realizado"
                            header="Realizado"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="equipesApuradas"
                            header="Equipes Apuradas"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="equipesAlcancandoMeta"
                            header="Equipes Alcançando Meta"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="diferenca"
                            header="Diferença"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="oportunidade"
                            header="Oportunidade"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                    </DataTable>
                </div>
            </ContainerTabelaGlobal>
            <ContainerForaGraficoEquipes>
                <ContainerGraficoEquipes>
                    <Chart
                        width={'1300px'}
                        height={'500px'}
                        chartType="ComboChart"
                        loader={<div>Carregando gráfico...</div>}
                        data={grafico}
                        options={{
                            title: 'TODAS AS EQUIPES',
                            legend: {
                                position: 'top'
                            },
                            vAxis: { title: 'Lucro' },
                            hAxis: { title: 'Equipes' },
                            axisTitlesPosition: "in",
                            seriesType: 'bars',
                            series: {
                                1: { type: 'line', color: '#ff9000' },
                                2: { type: 'line', color: 'yellow', lineDashStyle: [6, 2] }
                            },
                            fontSize: 14,
                            annotations: {
                                textStyle: {
                                    fontSize: 18,
                                    opacity: 1
                                }
                            }
                        }}
                    />
                </ContainerGraficoEquipes>
            </ContainerForaGraficoEquipes>
            <ContainerForaGraficoEquipes>
                <ContainerGraficoEquipes>
                    <Chart
                        width={'1300px'}
                        height={'500px'}
                        chartType="ComboChart"
                        loader={<div>Carregando gráfico...</div>}
                        data={graficoConstrucao}
                        options={{
                            title: 'CONSTRUÇÃO',
                            legend: {
                                position: 'top'
                            },
                            vAxis: { title: 'Lucro' },
                            hAxis: { title: 'Equipes' },
                            seriesType: 'bars',
                            series: {
                                1: { type: 'line', color: '#ff9000' },
                                2: { type: 'line', color: 'yellow', lineDashStyle: [6, 2] }
                            },
                            axisTitlesPosition: "in",
                            annotations: {
                                textStyle: {
                                    fontSize: 18,
                                    opacity: 1
                                }
                            }
                        }}
                    />
                </ContainerGraficoEquipes>
            </ContainerForaGraficoEquipes>
            <ContainerForaGraficoEquipes>
                <ContainerGraficoEquipes>
                    <Chart
                        width={'1300px'}
                        height={'500px'}
                        chartType="ComboChart"
                        loader={<div>Carregando gráfico...</div>}
                        data={graficoManutencao}
                        options={{
                            title: 'MANUTENÇÃO',
                            legend: {
                                position: 'top'
                            },
                            vAxis: { title: 'Lucro' },
                            hAxis: { title: 'Equipes' },
                            seriesType: 'bars',
                            series: {
                                1: { type: 'line', color: '#ff9000' },
                                2: { type: 'line', color: 'yellow', lineDashStyle: [6, 2] }
                            },
                            axisTitlesPosition: "in",
                            annotations: {
                                textStyle: {
                                    fontSize: 18,
                                    opacity: 1
                                }
                            }
                        }}
                    />
                </ContainerGraficoEquipes>
            </ContainerForaGraficoEquipes>
            <ContainerForaGraficoEquipes>
                <ContainerGraficoEquipes>
                    <Chart
                        width={'1300px'}
                        height={'500px'}
                        chartType="ComboChart"
                        loader={<div>Carregando gráfico...</div>}
                        data={graficoLinhaviva}
                        options={{
                            title: 'LINHA VIVA',
                            legend: {
                                position: 'top'
                            },
                            vAxis: { title: 'Lucro' },
                            hAxis: { title: 'Equipes' },
                            seriesType: 'bars',
                            series: {
                                1: { type: 'line', color: '#ff9000' },
                                2: { type: 'line', color: 'yellow', lineDashStyle: [6, 2] }
                            },
                            axisTitlesPosition: "in",
                            annotations: {
                                textStyle: {
                                    fontSize: 18,
                                    opacity: 1
                                }
                            }
                        }}
                    />
                </ContainerGraficoEquipes>
            </ContainerForaGraficoEquipes>
            <ContainerForaGraficoEquipes>
                <ContainerGraficoEquipes>
                    <Chart
                        width={'1300px'}
                        height={'500px'}
                        chartType="ComboChart"
                        loader={<div>Carregando gráfico...</div>}
                        data={graficoPoda}
                        options={{
                            title: 'PODA',
                            legend: {
                                position: 'top'
                            },
                            vAxis: { title: 'Lucro' },
                            hAxis: { title: 'Equipes' },
                            seriesType: 'bars',
                            series: {
                                1: { type: 'line', color: '#ff9000' },
                                2: { type: 'line', color: 'yellow', lineDashStyle: [6, 2] }
                            },
                            axisTitlesPosition: "in",
                            annotations: {
                                textStyle: {
                                    fontSize: 18,
                                    opacity: 1
                                }
                            }
                        }}
                    />
                </ContainerGraficoEquipes>
            </ContainerForaGraficoEquipes>
            <ContainerForaGraficoEquipes>
                <ContainerGraficoEquipes>
                    <Chart
                        width={'1300px'}
                        height={'500px'}
                        chartType="ComboChart"
                        loader={<div>Carregando gráfico...</div>}
                        data={graficoDECP}
                        options={{
                            title: 'DECP',
                            legend: {
                                position: 'top'
                            },
                            vAxis: { title: 'Lucro' },
                            hAxis: { title: 'Equipes' },
                            seriesType: 'bars',
                            series: {
                                1: { type: 'line', color: '#ff9000' },
                                2: { type: 'line', color: 'yellow', lineDashStyle: [6, 2] }
                            },
                            axisTitlesPosition: "in",
                            annotations: {
                                textStyle: {
                                    fontSize: 18,
                                    opacity: 1
                                }
                            }
                        }}
                    />
                </ContainerGraficoEquipes>
            </ContainerForaGraficoEquipes>
            <ContainerForaGraficoEquipes>
                <ContainerGraficoEquipes>
                    <Chart
                        width={'1300px'}
                        height={'500px'}
                        chartType="ComboChart"
                        loader={<div>Carregando gráfico...</div>}
                        data={graficoDEOP}
                        options={{
                            title: 'DEOP',
                            legend: {
                                position: 'top'
                            },
                            vAxis: { title: 'Lucro' },
                            hAxis: { title: 'Equipes' },
                            seriesType: 'bars',
                            series: {
                                1: { type: 'line', color: '#ff9000' },
                                2: { type: 'line', color: 'yellow', lineDashStyle: [6, 2] }
                            },
                            axisTitlesPosition: "in",
                            annotations: {
                                textStyle: {
                                    fontSize: 18,
                                    opacity: 1
                                }
                            }
                        }}
                    />
                </ContainerGraficoEquipes>
            </ContainerForaGraficoEquipes>
        </>
    )
}
export default HomePageView;