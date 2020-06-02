import React from 'react';
import InputFloat from '../../component/input/InputFloat';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContainerRelatorio } from './styles/Style';
const RelatorioView = props => {
    const { relatorio, opcao } = props;
    return (
        <>
            {
                opcao === "entrada" ?
                    <ContainerRelatorio>
                        <div className="tabela">
                            <DataTable
                                value={relatorio}
                                paginator={relatorio.length > 10}
                                rows={10}
                                emptyMessage={"Nenhum relatorio no almoxarifado."}
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
                                <Column
                                    filter={true}
                                    field="vemDe"
                                    header="Local de onde veio"
                                />
                                <Column
                                    filter={true}
                                    field="data"
                                    header="Data de recebimento"
                                />
                            </DataTable>
                        </div>
                    </ContainerRelatorio>
                    :
                    <ContainerRelatorio>
                        {relatorio.map(indices => (<p>{indices._id}</p>))}
                    </ContainerRelatorio>
            }
        </>
    )
}
export default RelatorioView;