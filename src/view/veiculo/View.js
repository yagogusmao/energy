import React from 'react';
import InputFloat from '../../component/input/InputFloat';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContainerCriar, ContainerTabela } from './Style';
import { Dropdown } from 'primereact/dropdown';

const VeiculoView = props => {
    const { _id, numeracao, kilometragem, modelo, handleInputChange, handleDropDown, submit, veiculos } = props;
    return (
        <>
            <ContainerCriar>
                <div className="titulo">
                    <h1>Criar veículo</h1>
                </div>
                <div className="inputs">
                    <InputFloat name="_id" label="Placa" type="text" value={_id} onChange={handleInputChange} />
                    <InputFloat name="numeracao" label="Numeração" type="text" value={numeracao} onChange={handleInputChange} />
                    <InputFloat name="kilometragem" label="Kilometragem atual" type="number" value={kilometragem} onChange={handleInputChange} />
                    <div className="dropdown">
                        <Dropdown value={modelo} style={{ width: '100%' }} options={[
                            { label: 'HILUX', value: 'HILUX' },
                            { label: 'STRADA', value: 'STRADA' },
                            { label: 'CAMINHAO', value: 'CAMINHAO' }
                        ]} placeholder="Modelo" onChange={handleDropDown} />
                        <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                            {modelo ? <p style={{ fontSize: '12px' }}>{'Modelo: ' + modelo}</p> :
                                <p style={{ fontSize: '12px' }}>{'Selecione o modelo do veículo.'}</p>}
                        </div>
                    </div>
                    <div className="botao">
                        <Button style={{ backgroundColor: '#ce5f52', minWidth: '100px' }} label="Criar" onClick={submit} className="p-button-raised p-button-rounded" />
                    </div>
                </div>
            </ContainerCriar>
            <ContainerTabela>
                <div className="titulo">
                    <h1>Veículos</h1>
                </div>
                <div className="tabela">
                    <DataTable
                        value={veiculos}
                        paginator={veiculos.length > 10}
                        rows={10}
                        emptyMessage={"Nenhum veículo cadastrado."}
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
                            field="equipe"
                            header="Equipe"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="kilometragem"
                            header="Kilometragem atual"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="modelo"
                            header="Modelo"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                    </DataTable>
                </div>
            </ContainerTabela>
        </>
    )
}
export default VeiculoView;