import React from 'react';
import { ContainerInside } from './styles/Style';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const AlmoxarifadoView = props => {
    const { almoxarifados, actionTemplateButton } = props;
    return (
        <ContainerInside>
            <div className="titulo">
                <h1>Almoxarifados</h1>
            </div>
            <div style={{ marginTop: '5px' }} className="tabela">
                <DataTable
                    value={almoxarifados}
                    paginator={almoxarifados.length > 10}
                    rows={10}
                    emptyMessage={"Nenhuma equipe."}
                >
                    <Column
                        field="_id"
                        header="_id"
                        style={{ textAlign: 'center', width: '100px' }}
                    />
                    <Column
                        field="status"
                        header="Status"
                        style={{ textAlign: 'center', width: '100px' }}
                    />
                    <Column
                        field="quantidade"
                        header="Quantidade de Itens"
                        style={{ textAlign: 'center', width: '100px' }}
                    />
                    <Column
                        body={actionTemplateButton.bind(this)}
                        style={{ textAlign: 'center', width: '100px' }}
                    />
                </DataTable>
            </div>
        </ContainerInside>
    )
}
export default AlmoxarifadoView;