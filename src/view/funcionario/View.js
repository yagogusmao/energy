import React from 'react';
import InputFloat from '../../component/input/InputFloat';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContainerCriar, ContainerTabela } from './Style';
import { Dropdown } from 'primereact/dropdown';
import { cpfFormatMask, dateFormatMask, phoneFormatMask } from '../../utils/MaskFunctions';
 
const FuncionarioView = props => {
    const { _id, cargo, nome, lotacao, cpf, telefone, dataInicio, handleInputChange, handleDropDownCargo, handleDropDownLotacao, submit, funcionarios } = props;
    return (
        <>
            <ContainerCriar>
                <div className="titulo">
                    <h1>Criar funcionário</h1>
                </div>
                <div className="inputs">
                    <InputFloat name="_id" label="_id" type="text" value={_id} onChange={handleInputChange} />
                    <InputFloat name="nome" label="Nome" type="text" value={nome} onChange={handleInputChange} />
                    <InputFloat name="cpf" label="CPF" type="text" value={cpfFormatMask(cpf)} onChange={handleInputChange} />
                    <div className="dropdown">
                        <Dropdown value={lotacao} style={{width: '100%'}} options={[
                            { label: 'CAMPINA GRANDE', value: 'CAMPINA GRANDE' },
                            { label: 'SERRA BRANCA', value: 'SERRA BRANCA' },
                            { label: 'SOLANEA', value: 'SOLANEA' },
                            { label: 'ESPERANCA', value: 'ESPERANCA' },
                            { label: 'GUARABIRA', value: 'GUARABIRA' },
                            { label: 'ARARUNA', value: 'ARARUNA' },
                            { label: 'PICUI', value: 'PICUI' },
                            { label: 'SUME', value: 'SUME' },
                            { label: 'JUAZEIRINHO', value: 'JUAZEIRINHO' }
                        ]} placeholder="Lotação" onChange={handleDropDownLotacao} />
                        <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                            {lotacao ? <p style={{ fontSize: '12px' }}>{'Lotação: ' + lotacao}</p> :
                                <p style={{ fontSize: '12px' }}>{'Selecione a lotação do funcionário.'}</p>}
                        </div>
                    </div>
                    <InputFloat name="telefone" label="Telefone" type="text" value={phoneFormatMask(telefone)} onChange={handleInputChange} />
                    <InputFloat name="dataInicio" label="Data de Início" type="text" value={dateFormatMask(dataInicio)} onChange={handleInputChange} />
                    <div className="dropdown">
                        <Dropdown value={cargo} style={{width: '100%'}} options={[
                            { label: 'ENG. DE SEGURANÇA', value: 'ENG. DE SEGURANÇA' },
                            { label: 'SUPERVISOR', value: 'SUPERVISOR' },
                            { label: 'PLANEJADOR', value: 'PLANEJADOR' },
                            { label: 'ELETROTECNICO', value: 'ELETROTECNICO' },
                            { label: 'TÉCNICO DE SEGURANÇA', value: 'TÉCNICO DE SEGURANÇA' },
                            { label: 'FISCAL', value: 'FISCAL' },
                            { label: 'ALMOXARIFE', value: 'ALMOXARIFE' },
                            { label: 'AUX. ALMOXARIFE', value: 'AUX. ALMOXARIFE' },
                            { label: 'AUX. ADMINISTRATIVO', value: 'AUX. ADMINISTRATIVO' },
                            { label: 'PORTEIRO', value: 'PORTEIRO' },
                            { label: 'ELETRICISTA', value: 'ELETRICISTA' },
                            { label: 'ENC. LINHA VIVA', value: 'ENC. LINHA VIVA' },
                            { label: 'ELETRICISTA LINHA VIVA', value: 'ELETRICISTA LINHA VIVA' },
                            { label: 'ENC. LINHA MORTA', value: 'ENC. LINHA MORTA' },
                            { label: 'AUX. ELETRICISTA', value: 'AUX. ELETRICISTA' },
                            { label: 'ENC. PODA', value: 'ENC. PODA' },
                            { label: 'PODADOR', value: 'PODADOR' },
                            { label: 'GERENTE', value: 'GERENTE' },
                            { label: 'GESTOR DE AREA', value: 'GESTOR DE AREA' },
                        ]} placeholder="Tipo" onChange={handleDropDownCargo} />
                        <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                            {cargo ? <p style={{ fontSize: '12px' }}>{'Cargo do funcionário: ' + cargo}</p> :
                                <p style={{ fontSize: '12px' }}>{'Selecione o cargo do funcionário.'}</p>}
                        </div>
                    </div>
                    <div className="botao">
                        <Button style={{ backgroundColor: '#ce5f52', borderColor: '#e57164',
                                WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', minWidth: '100px' }} label="Criar" onClick={submit} className="p-button-raised p-button-rounded" />
                    </div>
                </div>
            </ContainerCriar>
            <ContainerTabela>
                <div className="titulo">
                    <h1>Funcionários</h1>
                </div>
                <div className="tabela">
                    <DataTable
                        value={funcionarios}
                        paginator={funcionarios.length > 10}
                        rows={10}
                        emptyMessage={"Nenhum funcionário cadastrad."}
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
                            field="equipe"
                            header="Equipe"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="telefone"
                            header="Telefone"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="data.inicio"
                            header="Data de Início"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="lotacao"
                            header="Lotação"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="cpf"
                            header="CPF"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                    </DataTable>
                </div>
            </ContainerTabela>
        </>
    )
}
export default FuncionarioView;