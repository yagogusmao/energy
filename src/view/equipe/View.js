import React from 'react';
import { ContainerInside } from './Style';
import { Button } from 'primereact/button'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const EquipeView = props => {
    const { equipes, actionTemplateButton } = props;
    return (
        <ContainerInside>
            <div className="titulo">
                <h1>Equipes</h1>
            </div>
            <div style={{ marginTop: '5px' }} className="tabela">
                <DataTable
                    value={equipes}
                    paginator={equipes.length > 10}
                    rows={10}
                    emptyMessage={"Nenhuma equipe."}
                >
                    <Column
                        field="_id"
                        header="Código da equipe"
                        style={{ textAlign: 'center', width: '100px' }}
                    />
                    <Column
                        field="tipo"
                        header="Tipo"
                        style={{ textAlign: 'center', width: '100px' }}
                    />
                    <Column
                        field="local"
                        header="Local"
                        style={{ textAlign: 'center', width: '100px' }}
                    />
                    <Column
                        field="status"
                        header="Status"
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
export default EquipeView;