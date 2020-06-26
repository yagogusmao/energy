import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import InputFloat from '../../component/input/InputFloat';
import { Dropdown } from 'primereact/dropdown';
import { ContainerInside, ContainerPesquisa } from './styles/Style';
import { Button } from 'primereact/button'
const MaterialView = props => {
    const { _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, submit, handleInputChange, materiais, handleDropDownChange,
        pesquisarMateriais, _idCriar, unidadeMedidaCriar, descricaoCriar, codigoClasseCriar, descricaoClasseCriar, opcoesCodigos } = props;
    return (
        <>
            <ContainerInside>
                <div className="titulo">
                    <h1>Criar material</h1>
                </div>
                <div className="inputs">
                    <div>
                    <div style={{ marginTop: '.5em' }}>{descricaoClasseCriar ? 'Código selecionado: ' : 'Nenhum código selecionado.'}</div>
                        <Dropdown title="titulo" optionLabel="descricaoClasseCriar" value={descricaoClasseCriar} options={opcoesCodigos} placeholder="Código da Classe" onChange={handleDropDownChange} />
                    </div>
                    <InputFloat name="_idCriar" label="_id" value={_idCriar} onChange={handleInputChange} />
                    <InputFloat name="unidadeMedidaCriar" label="Unidade de Medida" value={unidadeMedidaCriar} onChange={handleInputChange} />
                    <InputFloat name="descricaoCriar" label="Descrição" value={descricaoCriar} onChange={handleInputChange} />
                    <InputFloat name="codigoClasseCriar" disabled={true} label="Código de Classe" type="number" value={codigoClasseCriar} onChange={handleInputChange} />
                    <InputFloat name="descricaoClasseCriar" disabled={true} label="Descrição da Classe" value={descricaoClasseCriar} onChange={handleInputChange} />
                    <div className="botao">
                        <Button style={{
                            backgroundColor: '#ce5f52', borderColor: '#e57164',
                            WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                            MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                            boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
                        }} label="Criar" onClick={submit} className="p-button-raised p-button-rounded" />
                    </div>
                </div>
            </ContainerInside>
            <ContainerPesquisa style={{marginBottom: '10px'}}>
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
                        <Button style={{
                            backgroundColor: '#ce5f52', borderColor: '#e57164',
                            WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                            MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                            boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
                        }} label="Pesquisar" onClick={pesquisarMateriais} className="p-button-raised p-button-rounded" />
                    </div>
                </div>
                <div className="tabela" style={{overflowX: 'scroll', marginTop: '10px'}}>
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
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            filter={true}
                            field="unidadeMedida"
                            header="Unidade de Medida"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            filter={true}
                            field="descricao"
                            header="Descrição"
                            style={{ textAlign: 'center', width: '300px' }}
                        />
                        <Column
                            filter={true}
                            field="codigoClasse"
                            header="Codigo de Descrição"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            filter={true}
                            field="descricaoClasse"
                            header="Descrição de Classe"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                    </DataTable>
                </div>
            </ContainerPesquisa>
        </>
    )
}
export default MaterialView;