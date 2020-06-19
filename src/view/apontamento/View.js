import React from 'react';
import {
    ContainerPropriedades, MenuTab, ContainerCriar, ContainerTabelaFinalizar,
    ContainerFomularioFinalizacao, ContainerInputs, ContainerApontamentosFinalizados,
    ContainerGrafico,Dropdowns,UltraCointainer,Graphics
} from './Style';
import InputFloat from '../../component/input/InputFloat';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
const GerenciadorView = props => {
    const { itemAtivo, onChangeItemAtivo, handleInputChange, tipo, pessoaEncarregado, pessoaSupervisor, equipe, pes,
        cidade, endereco, localSaida, codigoObra, equipesEscolher, handleDropDownChangeEquipe, handleDropDownChangeTipo,
        handleDropDownChangeSupervisor, handleDropDownChangeEncarregado, handleDropDownChangeCidade,
        handleDropDownChangeLocalSaida, iniciarApontamento, apontamentosIniciados, actionTemplateButtonFinalizar,
        atividades, actionTemplate, atividadesSelecionadas, actionTemplateInput, actionTemplateButton,
        tecnicoEnergisa, PgCp, veiculoKmFim, apontamentosFinalizados, graficos } = props;
    const backgroundColor = [
        "#780000",
        "#CE5F52",
        "#f79c91",
        "#006858",
        "#03ba9e",
        "#00ffd8",
        "#b7b7b7",
        "#d6d6d6",
        "#5e5e5e",
        "#000000"
    ];
    return (
        <UltraCointainer>
            <ContainerPropriedades>
                <div className="titulo">
                    <h1>Apontamentos</h1>
                </div>
            </ContainerPropriedades>
            <MenuTab>
                <TabMenu model={[{ label: 'Iniciar', value: "iniciar", icon: 'pi pi-fw pi-home' },
                { label: 'Finalizar', value: "finalizar", icon: 'pi pi-fw pi-pencil' },
                { label: 'Finalizados', value: "finalizados", icon: 'pi pi-fw pi-pencil' }]}
                    activeItem={itemAtivo} onTabChange={onChangeItemAtivo} />
            </MenuTab>
            {itemAtivo === "iniciar" ?
                <>
                    <ContainerCriar>
                        <Dropdowns>
                            <div>
                                <Dropdown style={{ width: '100%' }} value={equipe} options={equipesEscolher} placeholder="Equipe"
                                    onChange={handleDropDownChangeEquipe} />
                                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                    {equipe ? <p style={{ fontSize: '12px' }}>{'Equipe: ' + equipe}</p> :
                                        <p style={{ fontSize: '12px' }}>{'Selecione a equipe.'}</p>}
                                </div>
                            </div>
                            <div>
                                <Dropdown style={{ width: '100%' }} value={pessoaSupervisor} options={[
                                    { label: "Leom Fábio", value: "Leom Fábio" },
                                    { label: "Anderson Marques", value: "Anderson Marques" },
                                    { label: "Alisson Sousa", value: "Alisson Sousa" }
                                ]}
                                    placeholder="Supervisor" onChange={handleDropDownChangeSupervisor} />
                                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                    {pessoaSupervisor ? <p style={{ fontSize: '12px' }}>{'Supervisor: ' + pessoaSupervisor}</p> :
                                        <p style={{ fontSize: '12px' }}>{'Selecione o supervisor.'}</p>}
                                </div>
                            </div>
                            <div>
                                <Dropdown style={{ width: '100%' }} value={pessoaEncarregado} options={[
                                    { label: "Yago Gusmão", value: "Yago Gusmão" },
                                    { label: "Erik Sazio", value: "Erik Sazio" },
                                    { label: "Pedro Borba", value: "Pedro Borba" }
                                ]}
                                    placeholder="Encarregado" onChange={handleDropDownChangeEncarregado} />
                                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                    {pessoaEncarregado ? <p style={{ fontSize: '12px' }}>{'Encarregado: ' + pessoaEncarregado}</p> :
                                        <p style={{ fontSize: '12px' }}>{'Selecione o encarregado.'}</p>}
                                </div>
                            </div>


                            <div>
                                <Dropdown style={{ width: '100%' }} value={tipo} options={[
                                    { label: "MANUTENCAO", value: "MANUTENCAO" },
                                    { label: "CONSTRUCAO", value: "CONSTRUCAO" },
                                    { label: "PERDAS", value: "PERDAS" },
                                    { label: "DEOP", value: "DEOP" },
                                    { label: "PODA", value: "PODA" },
                                    { label: "LINHAVIVA", value: "LINHAVIVA" }
                                ]}
                                    placeholder="Tipo do serviço" onChange={handleDropDownChangeTipo} />
                                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                    {tipo ? <p style={{ fontSize: '12px' }}>{'Tipo do serviço: ' + tipo}</p> :
                                        <p style={{ fontSize: '12px' }}>{'Selecione o tipo do serviço.'}</p>}
                                </div>
                            </div>
                            <div>
                                <Dropdown style={{ width: '100%' }} value={cidade} options={[{ label: 'CAMPINA GRANDE', value: 'CAMPINA GRANDE' },
                                { label: 'SOLEDADE', value: 'SOLEDADE' },
                                { label: 'ESPERANÇA', value: 'ESPERANÇA' },
                                { label: 'POCINHOS', value: 'POCINHOS' },
                                { label: 'AREIAL', value: 'AREIAL' },
                                { label: 'RIACHÃO', value: 'RIACHÃO' },
                                { label: 'ALAGOA GRANDE', value: 'ALAGOA GRANDE' },
                                { label: 'ALAGOA NOVA', value: 'ALAGOA NOVA' },
                                { label: 'LAGOA DE ROÇA', value: 'LAGOA DE ROÇA' }]}
                                    placeholder="Cidade do serviço" onChange={handleDropDownChangeCidade} />
                                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                    {cidade ? <p style={{ fontSize: '12px' }}>{'Cidade do serviço: ' + cidade}</p> :
                                        <p style={{ fontSize: '12px' }}>{'Selecione a cidade do serviço.'}</p>}
                                </div>
                            </div>
                            <div>
                                <Dropdown style={{ width: '100%' }} value={localSaida} options={[
                                    { label: 'ENERGY CG', value: 'ENERGY CG' },
                                    { label: 'CAMPINA GRANDE', value: 'CAMPINA GRANDE' },
                                    { label: 'SOLEDADE', value: 'SOLEDADE' },
                                    { label: 'ESPERANÇA', value: 'ESPERANÇA' },
                                    { label: 'POCINHOS', value: 'POCINHOS' },
                                    { label: 'AREIAL', value: 'AREIAL' },
                                    { label: 'RIACHÃO', value: 'RIACHÃO' },
                                    { label: 'ALAGOA GRANDE', value: 'ALAGOA GRANDE' },
                                    { label: 'ALAGOA NOVA', value: 'ALAGOA NOVA' },
                                    { label: 'LAGOA DE ROÇA', value: 'LAGOA DE ROÇA' }]}
                                    placeholder="Local de saída da equipe" onChange={handleDropDownChangeLocalSaida} />
                                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                    {localSaida ? <p style={{ fontSize: '12px' }}>{'Local de saída da equipe: ' + localSaida}</p> :
                                        <p style={{ fontSize: '12px' }}>{'Selecione o local de saída da equipe.'}</p>}
                                </div>
                            </div>


                            <InputFloat name="pes" label="PES" value={pes} onChange={handleInputChange} />
                            <InputFloat name="endereco" label="Endereço" value={endereco} onChange={handleInputChange} />
                            <InputFloat name="codigoObra" label="Código da Obra" value={codigoObra} onChange={handleInputChange} />
                        </Dropdowns>
                        <Button style={{
                            backgroundColor: '#ce5f52', borderColor: '#e57164',
                            WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                            MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                            boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                        }} label="Iniciar Apontamento" onClick={iniciarApontamento} className="p-button-raised p-button-rounded" />
                    </ContainerCriar>
                </>
                :
                itemAtivo === "finalizar" ?
                    <>
                        <ContainerFomularioFinalizacao>
                            <div style={{ marginBottom: '10px' }} className="titulo">
                                <h1>Atividades disponíveis</h1>
                            </div>
                            <div className="tabela">
                                <DataTable
                                    value={atividades}
                                    paginator={atividades.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhuma atividade cadastrada."}
                                >
                                    <Column
                                        field="_id"
                                        header="_id"
                                        filter={true}
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="valor"
                                        header="Valor (R$)"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="nome"
                                        header="Nome"
                                    />
                                    <Column
                                        filter={true}
                                        field="tipo"
                                        header="Tipo"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        field="checked"
                                        body={actionTemplate.bind(this)}
                                        style={{ textAlign: 'center', width: '50px' }}
                                    />
                                </DataTable>
                            </div>
                            <div style={{ marginTop: '10px', marginBottom: '10px' }} className="titulo">
                                <h1>Atividades selecionadas</h1>
                            </div>
                            <div className="tabela">
                                <DataTable
                                    value={atividadesSelecionadas}
                                    paginator={atividadesSelecionadas.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhuma atividade selecionada."}
                                >
                                    <Column
                                        field="_id"
                                        header="_id"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        field="valor"
                                        header="Valor (R$)"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        field="nome"
                                        header="Nome"
                                    />
                                    <Column
                                        field="tipo"
                                        header="Tipo"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        header="Quantidade"
                                        body={actionTemplateInput.bind(this)}
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        body={actionTemplateButton.bind(this)}
                                        style={{ textAlign: 'center', width: '200px' }}
                                    />
                                </DataTable>
                            </div>
                        </ContainerFomularioFinalizacao>
                        <ContainerInputs>
                            <InputFloat name="tecnicoEnergisa" label="Técnico da Energisa" value={tecnicoEnergisa} onChange={handleInputChange} />
                            <InputFloat name="veiculoKmFim" label="Kilometragem final do veículo" value={veiculoKmFim} onChange={handleInputChange} />
                            <InputFloat name="PgCp" label="Componente" value={PgCp} onChange={handleInputChange} />
                        </ContainerInputs>
                        <ContainerTabelaFinalizar style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <div className="tabela">
                                <DataTable
                                    value={apontamentosIniciados}
                                    paginator={apontamentosIniciados.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhum apontamento iniciado no momento."}
                                >
                                    <Column
                                        filter={true}
                                        field="tipo"
                                        header="Tipo do serviço"
                                    />
                                    <Column
                                        filter={true}
                                        field="codigoObra"
                                        header="Código do serviço"
                                    />
                                    <Column
                                        filter={true}
                                        field="pessoa.supervisor"
                                        header="Supervisor"
                                    />
                                    <Column
                                        filter={true}
                                        field="pessoa.encarregado"
                                        header="Encarregado"
                                    />
                                    <Column
                                        field="cidade"
                                        header="Cidade do serviço"
                                    />
                                    <Column
                                        field="equipe"
                                        header="Equipe"
                                    />
                                    <Column
                                        field="veiculo.placa"
                                        header="Veículo"
                                    />
                                    <Column
                                        body={actionTemplateButtonFinalizar.bind(this)}
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                </DataTable>
                            </div>
                        </ContainerTabelaFinalizar>
                    </>
                    :
                    <>
                        <Graphics>
                        {graficos.map((grafico, i) => (
                            <ContainerGrafico>
                              
                                    {i === 0 ? <h1>Faturamento de Hoje</h1> :
                                        i === 1 ? <h1>Faturamento da Semana</h1> :
                                            i === 2 ? <h1>Faturamento do Mês</h1> :
                                                i === 3 ? <h1>Faturamento do Ano</h1> :
                                                    <h1>Faturamento de todos os tempos</h1>}
                             
                                <Chart type="doughnut"

                                    data={{
                                        labels: grafico.labels, datasets: [
                                            { data: grafico.data, backgroundColor, hoverBackgroundColor: backgroundColor }
                                        ]
                                    }} />
                            </ContainerGrafico>
                        ))}
                        </Graphics>
                        <ContainerApontamentosFinalizados>
                            <div className="tabela">
                                <DataTable
                                    value={apontamentosFinalizados}
                                    paginator={apontamentosFinalizados.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhum apontamento Finalizado."}
                                >
                                    <Column
                                        filter={true}
                                        field="tipo"
                                        header="Tipo do serviço"
                                    />
                                    <Column
                                        filter={true}
                                        field="codigoObra"
                                        header="Código do serviço"
                                    />
                                    <Column
                                        filter={true}
                                        field="pessoa.supervisor"
                                        header="Supervisor"
                                    />
                                    <Column
                                        filter={true}
                                        field="pessoa.encarregado"
                                        header="Encarregado"
                                    />
                                    <Column
                                        field="cidade"
                                        header="Cidade do serviço"
                                    />
                                    <Column
                                        field="equipe"
                                        header="Equipe"
                                    />
                                    <Column
                                        field="veiculo.placa"
                                        header="Veículo"
                                    />
                                    <Column
                                        field="lucro"
                                        header="Lucro (R$)"
                                    />
                                </DataTable>
                            </div>
                        </ContainerApontamentosFinalizados>
                    </>
            }
        </UltraCointainer>
    )
}
export default GerenciadorView;