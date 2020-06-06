import React from 'react';
import InputFloat from '../../../component/input/InputFloat';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { ContainerGerenciadorSaidaTransfMedid, ContainerMudarEstoque, ContainerEstoque, ContainerGerenciador, ContainerPesquisa, ContainerEstoqueRetirar } from './styles/Style';
const EstoqueView = props => {
    const { materiais, handleInputChange, adicionarEstoque, retirarEstoque, handleDropDownChange, _idTransformador, _idMedidor,
        actionTemplate, actionTemplateInput, actionTemplateButton, _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, pesquisarMateriais, materiaisPesquisados, vemDe, vaiPara, servico, equipe, goto,
        materiaisSelecionados, actionTemplateRetirar, materiaisSelecionadosRetirar, actionTemplateInputRetirar, actionTemplateButtonRetirar,
        numeroSerie, tombamento, impedancia, dataFabricacao, numero, nSeloCaixa, nSeloBorn, retirarTransformador, retirarMedidor } = props;
    return (
        <>
            <ContainerPesquisa>
                <div className="titulo">
                    <h1>Pesquisar materiais para adicionar</h1>
                </div>
                <div className="inputs">
                    <InputFloat name="_id" label="_id" value={_id} onChange={handleInputChange} />
                    <InputFloat name="unidadeMedida" label="Unidade de Medida" value={unidadeMedida} onChange={handleInputChange} />
                    <InputFloat name="descricao" label="Descrição" value={descricao} onChange={handleInputChange} />
                    <InputFloat name="codigoClasse" label="Código de Classe" type="number" value={codigoClasse} onChange={handleInputChange} />
                    <InputFloat name="descricaoClasse" label="Descrição da Classe" value={descricaoClasse} onChange={handleInputChange} />
                    <div className="botao">
                        <button onClick={pesquisarMateriais}>Pesquisar</button>
                    </div>
                </div>
                <div className="tabela">
                    <DataTable
                        value={materiaisPesquisados}
                        paginator={materiaisPesquisados.length > 10}
                        rows={10}
                        emptyMessage={"Nenhum material pesquisado."}
                    >
                        <Column
                            filter={true}
                            field="_id"
                            header="_id"
                        />
                        <Column
                            filter={true}
                            field="unidadeMedida"
                            header="Unidade de Medida"
                        />
                        <Column
                            filter={true}
                            field="descricao"
                            header="Descrição"
                        />
                        <Column
                            filter={true}
                            field="codigoClasse"
                            header="Codigo de Descrição"
                        />
                        <Column
                            filter={true}
                            field="descricaoClasse"
                            header="Descrição de Classe"
                        />
                        <Column
                            field="checked"
                            body={actionTemplate.bind(this)}
                        />
                    </DataTable>
                </div>
            </ContainerPesquisa>
            <ContainerGerenciador>
                <div className="titulo">
                    <h1>Gerenciador de entradas</h1>
                </div>
                <ContainerMudarEstoque>
                    <Dropdown optionLabel="vemDe" value={vemDe} options={[
                        { vemDe: 'ENERGISA' },
                        { vemDe: 'ALMOXARIFADO' }
                    ]} placeholder="Local de onde vem" onChange={handleDropDownChange} />
                    <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>{vemDe ? 'Local de onde vem: ' + vemDe : 'Selecione o local de onde vem.'}</div>
                    <div className="tabela">
                        <DataTable
                            value={materiaisSelecionados}
                            paginator={materiaisSelecionados.length > 10}
                            rows={10}
                            emptyMessage={"Nenhum material selecionado para adicionar."}
                        >
                            <Column
                                field="_id"
                                header="_id"
                            />
                            <Column
                                field="descricao"
                                header="Descrição"
                            />
                            <Column
                                header="Quantidade"
                                body={actionTemplateInput.bind(this)}
                            />
                            <Column
                                body={actionTemplateButton.bind(this)}
                            />
                        </DataTable>
                    </div>
                    <div className="inputs">
                        <button onClick={adicionarEstoque}>Adicionar ao estoque</button>
                        <button onClick={() => goto("entrada")}>Relatório de entradas</button>
                    </div>
                </ContainerMudarEstoque>
            </ContainerGerenciador>
            <ContainerGerenciador>
                <div className="titulo">
                    <h1>Pesquisar materiais para retirar</h1>
                </div>
                <ContainerMudarEstoque>
                    <div className="tabela">
                        <DataTable
                            value={materiais}
                            paginator={materiais.length > 10}
                            rows={10}
                            emptyMessage={"Materiais para retirar."}
                        >
                            <Column
                                filter={true}
                                field="_id"
                                header="_id"
                            />
                            <Column
                                filter={true}
                                field="descricao"
                                header="Descrição"
                            />
                            <Column
                                filter={true}
                                field="quantidade"
                                header="Quantidade"
                            />
                            <Column
                                filter={true}
                                field="unidadeMedida"
                                header="Unidade de Medida"
                            />
                            <Column
                                field="checked"
                                body={actionTemplateRetirar.bind(this)}
                            />
                        </DataTable>
                    </div>
                </ContainerMudarEstoque>
            </ContainerGerenciador>
            <ContainerEstoqueRetirar>
                <div className="titulo">
                    <h1>Gerenciador de saídas</h1>
                </div>
                <Dropdown optionLabel="vaiPara" value={vaiPara} options={[
                    { vaiPara: 'CAMPINA GRANDE' },
                    { vaiPara: 'SOLEDADE' },
                    { vaiPara: 'ESPERANÇA' },
                    { vaiPara: 'POCINHOS' },
                    { vaiPara: 'AREIAL' },
                    { vaiPara: 'RIACHÃO' },
                    { vaiPara: 'ALAGOA GRANDE' },
                    { vaiPara: 'ALAGOA NOVA' },
                    { vaiPara: 'LAGOA DE ROÇA' }
                ]} placeholder="Local para onde vai" onChange={handleDropDownChange} />
                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>{vaiPara ? 'Local para onde vai: ' + vaiPara : 'Selecione o local para onde vai.'}</div>
                <div className="inputSozinho">
                    <InputFloat name="servico" label="Código do serviço" value={servico} onChange={handleInputChange} />
                </div>
                <Dropdown optionLabel="equipe" value={equipe} options={[
                    { equipe: 'ENPB-001' },
                    { equipe: 'ENPB-002' },
                    { equipe: 'ENPB-003' },
                    { equipe: 'ENPB-004' },
                    { equipe: 'ENPB-005' },
                    { equipe: 'ENPB-006' },
                    { equipe: 'ENPB-007' },
                    { equipe: 'ENPB-008' },
                ]} placeholder="Equipe que executou" onChange={handleDropDownChange} />
                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>{equipe ? 'Equipe que executou: ' + equipe : 'Selecione a equipe que executou.'}</div>
                <div className="tabela">
                    <DataTable
                        value={materiaisSelecionadosRetirar}
                        paginator={materiaisSelecionadosRetirar.length > 10}
                        rows={10}
                        emptyMessage={"Nenhum material selecionado para retirar."}
                    >
                        <Column
                            filter={true}
                            field="_id"
                            header="_id"
                        />
                        <Column
                            filter={true}
                            field="descricao"
                            header="Descrição"
                        />
                        <Column
                            filter={true}
                            field="quantidade"
                            header="Quantidade disponível"
                        />
                        <Column
                            filter={true}
                            field="unidadeMedida"
                            header="Unidade de Medida"
                        />
                        <Column
                            header="Quantidade a retirar"
                            body={actionTemplateInputRetirar.bind(this)}
                        />
                        <Column
                            body={actionTemplateButtonRetirar.bind(this)}
                        />
                    </DataTable>
                </div>
                <div className="inputs">
                    <button onClick={retirarEstoque}>Retirar do estoque</button>
                    <button onClick={() => goto("saida")}>Relatório de saídas</button>
                </div>
                <div className="gerenciadores">
                    <div className="transformadores">
                        <div className="titulo">
                            <h3>Transformadores</h3>
                        </div>
                        <InputFloat name="_idTransformador" label="_id do Transformador" value={_idTransformador} onChange={handleInputChange} />
                        <InputFloat name="numeroSerie" label="Número de série" value={numeroSerie} onChange={handleInputChange} />
                        <InputFloat name="tombamento" label="Tombamento" value={tombamento} onChange={handleInputChange} />
                        <InputFloat name="impedancia" label="Impedância" value={impedancia} onChange={handleInputChange} />
                        <InputFloat name="dataFabricacao" label="Data de Fabricação" value={dataFabricacao} onChange={handleInputChange} />
                        <div className="botao">
                            <button onClick={retirarTransformador}>Retirar Transformador</button>
                        </div>
                    </div>
                    <div className="transformadores">
                        <div className="titulo">
                            <h3>Medidores</h3>
                        </div>
                        <InputFloat name="_idMedidor" label="_id do Medidor" value={_idMedidor} onChange={handleInputChange} />
                        <InputFloat name="numero" label="Número" value={numero} onChange={handleInputChange} />
                        <InputFloat name="nSeloCaixa" label="Nº selo caixa" value={nSeloCaixa} onChange={handleInputChange} />
                        <InputFloat name="nSeloBorn" label="Nº selo born" value={nSeloBorn} onChange={handleInputChange} />
                        <div className="botao">
                            <button onClick={retirarMedidor}>Retirar Medidor</button>
                        </div>
                    </div>
                </div>
            </ContainerEstoqueRetirar>

            <ContainerEstoque>
                <div className="titulo">
                    <h1>Estoque</h1>
                </div>
                <div className="tabela">
                    <DataTable
                        value={materiais}
                        paginator={materiais.length > 10}
                        rows={10}
                        emptyMessage={"Nenhum estoque no almoxarifado."}
                    >
                        <Column
                            filter={true}
                            field="_id"
                            header="_id"
                        />
                        <Column
                            filter={true}
                            field="descricao"
                            header="Descrição"
                        />
                        <Column
                            filter={true}
                            field="quantidade"
                            header="Quantidade"
                        />
                        <Column
                            filter={true}
                            field="unidadeMedida"
                            header="Unidade de Medida"
                        />
                    </DataTable>
                </div>
            </ContainerEstoque>
        </>
    )
}
export default EstoqueView;