import React from 'react';
import {
    ContainerPropriedades, ContainerGerenciadorFuncionarios, MenuTab,
    ContainerGerenciadorVeiculos, ContainerVeiculos, ContainerFaturamento,
    ContainerMetas
} from './Style';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
import InputFloat from '../../../component/input/InputFloat';
const GerenciadorView = props => {
    const { _id, veiculo, tipo, local, status, funcionarios, funcionariosSemEquipe, actionTemplateButtonVeiculo,
        actionTemplateButton, actionTemplateButtonAdicionar, itemAtivo, onChangeItemAtivo, numeracao, kilometragem,
        modelo, veiculos, retirarVeiculo, apontamentos, apontamentosHoje, apontamentosSemana, apontamentosMes,
        apontamentosAno, lucro, lucroHoje, lucroMes, lucroSemana, lucroAno, metaDiaria, metaSemanal, metaMensal, metaAnual,
        handleInputChange, atualizarMetas } = props;
    return (
        <>
            <ContainerPropriedades>
                <h3>Equipe: {_id}</h3>
                <strong>Tipo: {tipo}</strong>
                <strong>Local: {local}</strong>
                <strong>Status: {status}</strong>
                {veiculo !== "" ? <strong>Veículo: {veiculo}</strong> : <strong>Veículo: Nenhum</strong>}
            </ContainerPropriedades>
            <MenuTab>
                <TabMenu model={[{ label: 'Faturamento', value: "faturamento", icon: 'pi pi-fw pi-home' },
                { label: 'Funcionários', value: "funcionarios", icon: 'pi pi-fw pi-pencil' },
                { label: 'Veículo', value: "veiculo", icon: 'pi pi-fw pi-pencil' },
                { label: 'Metas', value: "metas", icon: 'pi pi-fw pi-pencil' }]} activeItem={itemAtivo} onTabChange={onChangeItemAtivo} />
            </MenuTab>
            {itemAtivo === "faturamento" ?
                <>
                    <ContainerFaturamento>
                        <div className="titulo">
                            {lucroHoje > metaDiaria ? <><h3 style={{ color: 'green' }}>Faturamento do dia: R$ {lucroHoje.toFixed(2)}</h3><h3>/Meta Diária: R$ {metaDiaria}</h3></>
                                : <><h3 style={{ color: 'red' }}>Faturamento do dia: R$ {lucroHoje.toFixed(2)}</h3><h3>/Meta Diária: R$ {metaDiaria}</h3></>}
                        </div>
                        <div style={{ marginTop: '5px', overflowX: 'scroll' }} className="tabela">
                            <DataTable
                                value={apontamentosHoje}
                                paginator={apontamentosHoje.length > 10}
                                rows={10}
                                emptyMessage={"Nenhum apontamento hoje."}
                            >
                                <Column
                                    filter={true}
                                    field="tipo"
                                    header="Tipo do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="codigoObra"
                                    header="Código do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="pessoa.supervisor"
                                    header="Supervisor"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="pessoa.encarregado"
                                    header="Encarregado"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    field="cidade"
                                    header="Cidade do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    field="veiculo.placa"
                                    header="Veículo"
                                    style={{ textAlign: 'center', width: '100px' }}
                                />
                                <Column
                                    field="lucro"
                                    header="Lucro Total (R$)"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                            </DataTable>
                        </div>
                    </ContainerFaturamento>
                    <ContainerFaturamento>
                        <div className="titulo">
                            {lucroSemana > metaSemanal ? <><h3 style={{ color: 'green' }}>Faturamento da Semana: R$ {lucroSemana.toFixed(2)}</h3><h3>/Meta Semanal: R$ {metaSemanal}</h3></>
                                : <><h3 style={{ color: 'red' }}>Faturamento da Semana: R$ {lucroSemana.toFixed(2)}</h3><h3>/Meta Semanal: R$ {metaSemanal}</h3></>}
                        </div>
                        <div style={{ marginTop: '5px', overflowX: 'scroll' }} className="tabela">
                            <DataTable
                                value={apontamentosSemana}
                                paginator={apontamentosSemana.length > 10}
                                rows={10}
                                emptyMessage={"Nenhum apontamento na semana."}
                            >
                                <Column
                                    filter={true}
                                    field="tipo"
                                    header="Tipo do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="codigoObra"
                                    header="Código do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="pessoa.supervisor"
                                    header="Supervisor"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="pessoa.encarregado"
                                    header="Encarregado"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    field="cidade"
                                    header="Cidade do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    field="veiculo.placa"
                                    header="Veículo"
                                    style={{ textAlign: 'center', width: '100px' }}
                                />
                                <Column
                                    field="lucro"
                                    header="Lucro Total (R$)"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                            </DataTable>
                        </div>
                    </ContainerFaturamento>
                    <ContainerFaturamento>
                        <div className="titulo">
                            {lucroMes > metaMensal ? <><h3 style={{ color: 'green' }}>Faturamento do Mês: R$ {lucroMes.toFixed(2)}</h3><h3>/Meta Mensal: R$ {metaMensal}</h3></>
                                : <><h3 style={{ color: 'red' }}>Faturamento do Mês: R$ {lucroMes.toFixed(2)}</h3><h3>/Meta Mensal: R$ {metaMensal}</h3></>}
                        </div>
                        <div style={{ marginTop: '5px', overflowX: 'scroll' }} className="tabela">
                            <DataTable
                                value={apontamentosMes}
                                paginator={apontamentosMes.length > 10}
                                rows={10}
                                emptyMessage={"Nenhum apontamento no mês."}
                            >
                                <Column
                                    filter={true}
                                    field="tipo"
                                    header="Tipo do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="codigoObra"
                                    header="Código do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="pessoa.supervisor"
                                    header="Supervisor"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="pessoa.encarregado"
                                    header="Encarregado"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    field="cidade"
                                    header="Cidade do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    field="veiculo.placa"
                                    header="Veículo"
                                    style={{ textAlign: 'center', width: '100px' }}
                                />
                                <Column
                                    field="lucro"
                                    header="Lucro Total (R$)"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                            </DataTable>
                        </div>
                    </ContainerFaturamento>
                    <ContainerFaturamento>
                        <div className="titulo">
                            {lucroAno > metaAnual ? <><h3 style={{ color: 'green' }}>Faturamento do Ano: R$ {lucroAno.toFixed(2)}</h3><h3>/Meta Anual: R$ {metaAnual}</h3></>
                                : <><h3 style={{ color: 'red' }}>Faturamento do Ano: R$ {lucroAno.toFixed(2)}</h3><h3>/Meta Anual: R$ {metaAnual}</h3></>}
                        </div>
                        <div style={{ marginTop: '5px', overflowX: 'scroll' }} className="tabela">
                            <DataTable
                                value={apontamentosAno}
                                paginator={apontamentosAno.length > 10}
                                rows={10}
                                emptyMessage={"Nenhum apontamento no ano."}
                            >
                                <Column
                                    filter={true}
                                    field="tipo"
                                    header="Tipo do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="codigoObra"
                                    header="Código do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="pessoa.supervisor"
                                    header="Supervisor"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="pessoa.encarregado"
                                    header="Encarregado"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    field="cidade"
                                    header="Cidade do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    field="veiculo.placa"
                                    header="Veículo"
                                    style={{ textAlign: 'center', width: '100px' }}
                                />
                                <Column
                                    field="lucro"
                                    header="Lucro Total (R$)"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                            </DataTable>
                        </div>
                    </ContainerFaturamento>
                    <ContainerFaturamento>
                        <div className="titulo">
                            <h3>Faturamento de todos os tempos: R$ {lucro.toFixed(2)} </h3>
                        </div>
                        <div style={{ marginTop: '5px', overflowX: 'scroll' }} className="tabela">
                            <DataTable
                                value={apontamentos}
                                paginator={apontamentos.length > 10}
                                rows={10}
                                emptyMessage={"Nenhum apontamento."}
                            >
                                <Column
                                    filter={true}
                                    field="tipo"
                                    header="Tipo do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="codigoObra"
                                    header="Código do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="pessoa.supervisor"
                                    header="Supervisor"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    filter={true}
                                    field="pessoa.encarregado"
                                    header="Encarregado"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    field="cidade"
                                    header="Cidade do serviço"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                                <Column
                                    field="veiculo.placa"
                                    header="Veículo"
                                    style={{ textAlign: 'center', width: '100px' }}
                                />
                                <Column
                                    field="lucro"
                                    header="Lucro Total (R$)"
                                    style={{ textAlign: 'center', width: '150px' }}
                                />
                            </DataTable>
                        </div>
                    </ContainerFaturamento>
                </>
                :
                itemAtivo === "funcionarios" ?
                    <>
                        <ContainerGerenciadorFuncionarios>
                            <div className="titulo">
                                <h3>Gerenciador de funcionários</h3>
                            </div>
                            <div style={{ marginTop: '5px', overflowX: 'scroll' }} className="tabela">
                                <DataTable
                                    value={funcionarios}
                                    paginator={funcionarios.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhum funcionário cadastrado na equipe."}
                                >
                                    <Column
                                        field="_id"
                                        header="Matrícula"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="nome"
                                        header="Nome"
                                        style={{ textAlign: 'center', width: '150px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="cargo"
                                        header="Cargo"
                                        style={{ textAlign: 'center', width: '150px' }}
                                    />
                                    <Column
                                        field="cpf"
                                        header="CPF"
                                        style={{ textAlign: 'center', width: '150px' }}
                                    />
                                    <Column
                                        body={actionTemplateButton.bind(this)}
                                        style={{ textAlign: 'center', width: '200px' }}
                                        />
                                   
                                </DataTable>
                            </div>
                        </ContainerGerenciadorFuncionarios>
                        <ContainerGerenciadorFuncionarios style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <div className="titulo">
                                <h3>Funcionários sem equipe</h3>
                            </div>
                            <div style={{ marginTop: '5px', overflowX: 'scroll' }} className="tabela">
                                <DataTable
                                    value={funcionariosSemEquipe}
                                    paginator={funcionariosSemEquipe.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhum funcionário sem equipe."}
                                >
                                    <Column
                                        field="_id"
                                        header="Matrícula"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="nome"
                                        header="Nome"
                                        style={{ textAlign: 'center', width: '150px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="cargo"
                                        header="Cargo"
                                        style={{ textAlign: 'center', width: '150px' }}
                                    />
                                    <Column
                                        field="cpf"
                                        header="CPF"
                                        style={{ textAlign: 'center', width: '150px' }}
                                    />
                                    <Column
                                        body={actionTemplateButtonAdicionar.bind(this)}
                                        style={{ textAlign: 'center', width: '200px' }}
                                        />
                                </DataTable>
                            </div>
                        </ContainerGerenciadorFuncionarios>
                    </>
                    :
                    itemAtivo === "veiculo" ?
                        <>
                            <ContainerGerenciadorVeiculos>
                                <div className="propriedades">
                                    <div className="dados" style={{marginBottom: '10px'}}>
                                        {veiculo !== "" ? <strong>Placa: {veiculo}</strong> : <strong>Placa: -</strong>}
                                        {veiculo !== "" ? <strong>Numeração: {numeracao}</strong> : <strong>Numeração: -</strong>}
                                        {veiculo !== "" ? <strong>Modelo: {modelo}</strong> : <strong>Modelo: -</strong>}
                                        {veiculo !== "" ? <strong>Kilometragem: {kilometragem}</strong> : <strong>Kilometragem: -</strong>}
                                    </div>
                                    <div className="botao">
                                        <Button style={{
                                            backgroundColor: '#ce5f52', borderColor: '#e57164',
                                            WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                            MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                            boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
                                        }} label="Retirar veículo da equipe" onClick={retirarVeiculo} className="p-button-raised p-button-rounded" />
                                    </div>
                                </div>
                            </ContainerGerenciadorVeiculos>
                            <ContainerVeiculos style={{ marginTop: '10px' }}>
                                <div className="titulo">
                                    <h3>Veículos sem equipe</h3>
                                </div>
                                <div style={{ marginTop: '5px', overflowX: 'scroll' }} className="tabela">
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
                                            style={{ textAlign: 'center', width: '150px' }}
                                        />
                                        <Column
                                            body={actionTemplateButtonVeiculo.bind(this)}
                                            style={{ textAlign: 'center', width: '200px' }}
                                        />
                                    </DataTable>
                                </div>
                            </ContainerVeiculos>
                        </>
                        :
                        <>
                            <ContainerMetas>
                                <InputFloat name="metaDiaria" label="Meta Diária" type="text" value={metaDiaria} onChange={handleInputChange} />
                                <InputFloat name="metaSemanal" label="Meta Semanal" type="text" value={metaSemanal} onChange={handleInputChange} />
                                <InputFloat name="metaMensal" label="Meta Mensal" type="text" value={metaMensal} onChange={handleInputChange} />
                                <InputFloat name="metaAnual" label="Meta Anual" type="text" value={metaAnual} onChange={handleInputChange} />
                                <Button style={{
                                    backgroundColor: '#ce5f52', borderColor: '#e57164',
                                    WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                    MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                    boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
                                }} label="Atualizar Metas" onClick={atualizarMetas} className="p-button-raised p-button-rounded" />
                            </ContainerMetas>
                        </>
            }
        </>
    )
}
export default GerenciadorView;