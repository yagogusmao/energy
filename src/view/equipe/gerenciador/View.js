import React from 'react';
import { ContainerPropriedades, ContainerGerenciadorFuncionarios, MenuTab, ContainerGerenciadorVeiculos, ContainerVeiculos } from './Style';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
const GerenciadorView = props => {
    const { _id, veiculo, tipo, local, status, apontamentos, funcionarios, funcionariosSemEquipe, actionTemplateButtonVeiculo,
        actionTemplateButton, actionTemplateButtonAdicionar, itemAtivo, onChangeItemAtivo, numeracao, kilometragem,
        modelo, veiculos, retirarVeiculo } = props;
    return (
        <>
            <ContainerPropriedades>
                <div className="titulo">
                    <h1>Equipe: {_id}</h1>
                </div>
                <div className="propriedades">
                    <strong>Tipo: {tipo}</strong>
                    <strong>Local: {local}</strong>
                    <strong>Status: {status}</strong>
                    {veiculo !== "" ? <strong>Veículo: {veiculo}</strong> : <strong>Veículo: Nenhum</strong>}
                </div>
            </ContainerPropriedades>
            <MenuTab>
                <TabMenu model={[{ label: 'Faturamento', value: "faturamento", icon: 'pi pi-fw pi-home' },
                { label: 'Funcionários', value: "funcionarios", icon: 'pi pi-fw pi-pencil' },
                { label: 'Veículo', value: "veiculo", icon: 'pi pi-fw pi-pencil' }]} activeItem={itemAtivo} onTabChange={onChangeItemAtivo} />
            </MenuTab>
            {itemAtivo === "faturamento" ?
                <>
                </>
                :
                itemAtivo === "funcionarios" ?
                    <>
                        <ContainerGerenciadorFuncionarios>
                            <div className="titulo">
                                <h1>Gerenciador de funcionários</h1>
                            </div>
                            <div style={{ marginTop: '5px' }} className="tabela">
                                <DataTable
                                    value={funcionarios}
                                    paginator={funcionarios.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhum funcionário cadastrado na equipe."}
                                >
                                    <Column
                                        field="_id"
                                        header="_id"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="nome"
                                        header="Nome"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="cargo"
                                        header="Cargo"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        field="cpf"
                                        header="CPF"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        body={actionTemplateButton.bind(this)}
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                </DataTable>
                            </div>
                        </ContainerGerenciadorFuncionarios>
                        <ContainerGerenciadorFuncionarios style={{ marginTop: '10px' }}>
                            <div className="titulo">
                                <h1>Funcionários sem equipe</h1>
                            </div>
                            <div style={{ marginTop: '5px' }} className="tabela">
                                <DataTable
                                    value={funcionariosSemEquipe}
                                    paginator={funcionariosSemEquipe.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhum funcionário sem equipe."}
                                >
                                    <Column
                                        field="_id"
                                        header="_id"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="nome"
                                        header="Nome"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="cargo"
                                        header="Cargo"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        field="cpf"
                                        header="CPF"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        body={actionTemplateButtonAdicionar.bind(this)}
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                </DataTable>
                            </div>
                        </ContainerGerenciadorFuncionarios>
                    </>
                    :
                    <>
                        <ContainerGerenciadorVeiculos>
                            <div className="titulo">
                                <h1>Gerenciador de veículo</h1>
                            </div>
                            <div className="propriedades">
                                <div className="dados">
                                    {veiculo !== "" ? <strong>Placa: {veiculo}</strong> : <strong>Placa: -</strong>}
                                    {veiculo !== "" ? <strong>Numeração: {numeracao}</strong> : <strong>Numeração: -</strong>}
                                    {veiculo !== "" ? <strong>Modelo: {modelo}</strong> : <strong>Modelo: -</strong>}
                                    {veiculo !== "" ? <strong>Kilometragem: {kilometragem}</strong> : <strong>Kilometragem: -</strong>}
                                </div>
                                <div className="botao">
                                    <Button style={{ backgroundColor: '#ce5f52' }} label="Retirar veículo da equipe" onClick={retirarVeiculo} className="p-button-raised p-button-rounded" />
                                </div>
                            </div>
                        </ContainerGerenciadorVeiculos>
                        <ContainerVeiculos style={{ marginTop: '10px' }}>
                            <div className="titulo">
                                <h1>Veículos sem equipe</h1>
                            </div>
                            <div style={{ marginTop: '5px' }} className="tabela">
                                <DataTable
                                    value={veiculos}
                                    paginator={veiculos.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhum veículo sem equipe."}
                                >
                                    <Column
                                        field="_id"
                                        header="Placa"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        field="numeracao"
                                        header="Numeração"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        field="kilometragem"
                                        header="Kilometragem"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        body={actionTemplateButtonVeiculo.bind(this)}
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                </DataTable>
                            </div>
                        </ContainerVeiculos>
                    </>
            }
        </>
    )
}
export default GerenciadorView;