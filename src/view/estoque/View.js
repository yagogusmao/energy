import React from 'react';
import InputFloat from '../../component/input/InputFloat';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContainerMudarEstoque, ContainerEstoque, ContainerGerenciador, ContainerPesquisa } from './styles/Style';
const EstoqueView = props => {
    const { materiais, materialAdicionar, quantidadeAdicionar, materialRetirar, quantidadeRetirar, handleInputChange, adicionarEstoque, retirarEstoque,
        _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, pesquisarMateriais, materiaisPesquisados, vemDe, vaiPara, servico, equipe, goto } = props;
    return (
        <>
            <ContainerPesquisa>
                <div className="titulo">
                    <h1>Pesquisar materiais</h1>
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
                        emptyMessage={"Materiais pesquisados."}
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
                    </DataTable>
                </div>
            </ContainerPesquisa>
            <ContainerGerenciador>
                <div className="titulo">
                    <h1>Gerenciador de entradas</h1>
                </div>
                <ContainerMudarEstoque>
                    <InputFloat name="materialAdicionar" label="Material" value={materialAdicionar} onChange={handleInputChange} />
                    <InputFloat name="quantidadeAdicionar" label="Quantidade" type="number" value={quantidadeAdicionar} onChange={handleInputChange} />
                    <InputFloat name="vemDe" label="Local de onde vem" type="text" value={vemDe} onChange={handleInputChange} />
                    <div>
                        <button onClick={adicionarEstoque}>Adicionar ao estoque</button>
                        <button onClick={() => goto("entrada")}>Relatório de entradas</button>
                    </div>
                </ContainerMudarEstoque>
            </ContainerGerenciador>
            <ContainerGerenciador>
                <div className="titulo">
                    <h1>Gerenciador de saídas</h1>
                </div>
                <ContainerMudarEstoque>
                    <InputFloat name="materialRetirar" label="Material" value={materialRetirar} onChange={handleInputChange} />
                    <InputFloat name="quantidadeRetirar" label="Quantidade" type="number" value={quantidadeRetirar} onChange={handleInputChange} />
                    <InputFloat name="vaiPara" label="Local para onde vai" value={vaiPara} onChange={handleInputChange} />
                    <InputFloat name="servico" label="Código do serviço" value={servico} onChange={handleInputChange} />
                    <InputFloat name="equipe" label="Equipe que executou" value={equipe} onChange={handleInputChange} />
                    <div>
                        <button onClick={retirarEstoque}>Retirar do estoque</button>
                        <button onClick={() => goto("saida")}>Relatório de saídas</button>
                    </div>
                </ContainerMudarEstoque>
            </ContainerGerenciador>
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