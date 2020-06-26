import React from 'react';
import { ContainerInformacoes, ContainerTabela } from './Style';
import InputFloat from '../../../component/input/InputFloat';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const VerApontamentoView = props => {
    const { tipo, supervisor, encarregado, tecnicoEnergisa, placa, kmInicial, kmFinal, kmTotal, codigoObra, PgCp, equipe, cidade, endereco, horaInicio, horaFinal, lucro, atividades,
        localSaida, localChegada } = props;
    return (
        <>
            <ContainerInformacoes>
                <InputFloat name="tipo" label="Tipo" type="text" disabled={true} value={tipo} />
                <InputFloat name="supervisor" label="Supervisor" disabled={true} type="text" value={supervisor} />
                <InputFloat name="encarregado" label="Encarregado" disabled={true} type="text" value={encarregado} />
                <InputFloat name="tecnicoEnergisa" label="Técnico da energisa" disabled={true} type="text" value={tecnicoEnergisa} />
                <InputFloat name="localSaida" label="Local de saída" disabled={true} type="text" value={localSaida} />
                <InputFloat name="localChegada" label="Local de chegada" disabled={true} type="text" value={localChegada} />
                <InputFloat name="placa" label="Veículo" disabled={true} type="text" value={placa} />
                <InputFloat name="kmInicial" label="Kilometragem inicial" disabled={true} type="text" value={kmInicial} />
                <InputFloat name="kmFinal" label="Kilometragem final" disabled={true} type="text" value={kmFinal} />
                <InputFloat name="kmTotal" label="Kilometragem total" disabled={true} type="text" value={kmTotal} />
                <InputFloat name="codigoObra" label="Código da obra" disabled={true} type="text" value={codigoObra} />
                <InputFloat name="PgCp" label="Componente" type="text" disabled={true} value={PgCp} />
                <InputFloat name="equipe" label="Equipe" type="text" disabled={true} value={equipe} />
                <InputFloat name="cidade" label="Cidade" type="text" disabled={true} value={cidade} />
                <InputFloat name="endereco" label="Endereço" type="text" disabled={true} value={endereco} />
                <InputFloat name="horaInicio" label="Hora de início" disabled={true} type="text" value={horaInicio} />
                <InputFloat name="horaFinal" label="Hora de término" disabled={true} type="text" value={horaFinal} />
                <InputFloat name="lucro" label="Lucro total" disabled={true} type="number" value={lucro} />
            </ContainerInformacoes>
            <ContainerTabela>
                <div className="titulo">
                    <h1>Atividades</h1>
                </div>
                <div className="tabela" style={{ overflowX: 'scroll' }}>
                    <DataTable
                        value={atividades}
                        paginator={atividades.length > 10}
                        rows={10}
                        emptyMessage={"Nenhuma atividade cadastrada."}
                    >
                        <Column
                            filter={true}
                            field="_id"
                            header="_id"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="quantidade"
                            header="Quantidade"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="nome"
                            header="Nome"
                            style={{ textAlign: 'center', width: '300px' }}
                        />
                        <Column
                            field="valor"
                            header="Valor (R$)"
                            style={{ textAlign: 'center', width: '100px' }}
                        />   
                        <Column
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
export default VerApontamentoView;