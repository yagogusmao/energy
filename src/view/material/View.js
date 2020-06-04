import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import InputFloat from '../../component/input/InputFloat';
import { ContainerInside, ContainerPesquisa } from './styles/Style';
const AlmoxarifadoView = props => {
    const { _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, submit, handleInputChange, materiais, 
        pesquisarMateriais, _idCriar, unidadeMedidaCriar, descricaoCriar, codigoClasseCriar, descricaoClasseCriar } = props;
    return (
        <>
            <ContainerInside>
                <div className="titulo">
                    <h1>Criar material</h1>
                </div>
                <div className="inputs">
                    <InputFloat name="_idCriar" label="_id" value={_idCriar} onChange={handleInputChange} />
                    <InputFloat name="unidadeMedidaCriar" label="Unidade de Medida" value={unidadeMedidaCriar} onChange={handleInputChange} />
                    <InputFloat name="descricaoCriar" label="Descrição" value={descricaoCriar} onChange={handleInputChange} />
                    <InputFloat name="codigoClasseCriar" label="Código de Classe" type="number" value={codigoClasseCriar} onChange={handleInputChange} />
                    <InputFloat name="descricaoClasseCriar" label="Descrição da Classe" value={descricaoClasseCriar} onChange={handleInputChange} />
                    <div className="botao">
                        <button onClick={submit}>Criar</button>
                    </div>
                </div>
            </ContainerInside>
            <ContainerPesquisa>
                <div className="titulo">
                    <h1>Materiais</h1>
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
                        value={materiais}
                        paginator={materiais.length > 10}
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
                    </DataTable>
                </div>
            </ContainerPesquisa>
        </>
    )
}
export default AlmoxarifadoView;