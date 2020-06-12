import React from 'react';
import InputFloat from '../../component/input/InputFloat';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContainerCriar, ContainerTabela } from './styles/Style';
import { Dropdown } from 'primereact/dropdown';
const AtividadeView = props => {
    const { _id, nome, tipo, valor, atividades, handleInputChange, submit, handleDropDown } = props;
    return (
        <>
            <ContainerCriar>
                <div className="titulo">
                    <h1>Criar atividade</h1>
                </div>
                <div className="inputs">
                    <InputFloat name="_id" label="_id" type="text" value={_id} onChange={handleInputChange} />
                    <InputFloat name="valor" label="Valor" type="number" value={valor} onChange={handleInputChange} />
                    <InputFloat name="nome" label="Nome" type="text" value={nome} onChange={handleInputChange} />
                    <div className="dropdown">
                        <Dropdown value={tipo} style={{width: '100%'}} options={[
                            { label: 'RETIRADO', value: 'RETIRADO' },
                            { label: 'INSTALADO', value: 'INSTALADO' },
                        ]} placeholder="Tipo" onChange={handleDropDown} />
                        <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                            {tipo ? <p style={{ fontSize: '12px' }}>{'Tipo da atividade: ' + tipo}</p> :
                                <p style={{ fontSize: '12px' }}>{'Selecione o tipo da atividade.'}</p>}
                        </div>
                    </div>
                    <div className="botao">
                        <Button style={{ backgroundColor: '#ce5f52', minWidth: '100px' }} label="Criar" onClick={submit} className="p-button-raised p-button-rounded" />
                    </div>
                </div>
            </ContainerCriar>
            <ContainerTabela>
                <div className="titulo">
                    <h1>Atividades</h1>
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
                    </DataTable>
                </div>
            </ContainerTabela>
        </>
    )
}
export default AtividadeView;