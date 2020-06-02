import React from 'react';
import InputFloat from '../../component/input/InputFloat';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContainerMudarEstoque, ContainerEstoque, ContainerSuperior, ContainerPesquisa } from './styles/Style';
const EstoqueView = props => {
    const { materiais, material, quantidade, handleInputChange, adicionarEstoque, retirarEstoque,
        _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, pesquisarMateriais, materiaisPesquisados } = props;
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
            <ContainerSuperior>
                <div>
                    <h1>Gerenciador de estoque</h1>
                </div>
                <ContainerMudarEstoque>
                    <InputFloat name="material" label="Material" value={material} onChange={handleInputChange} />
                    <InputFloat name="quantidade" label="Quantidade" type="number" value={quantidade} onChange={handleInputChange} />
                    <div>
                        <button onClick={adicionarEstoque}>Adicionar Estoque</button>
                        <button onClick={retirarEstoque}>Retirar Estoque</button>
                    </div>
                </ContainerMudarEstoque>
            </ContainerSuperior>
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