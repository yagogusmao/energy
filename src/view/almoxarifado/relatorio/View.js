import React from 'react';
import InputFloat from '../../../component/input/InputFloat';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContainerRelatorio, ContainerPesquisa } from './styles/Style';
import moment from 'moment';
import 'moment/locale/pt-br';

const RelatorioView = props => {
    const { saidas, opcao, _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, entradas,
        pesquisarMateriais, materiaisPesquisados, handleInputChange, saidasMedidores, saidasTransformadores } = props;
    return (
        <>{console.log(materiaisPesquisados)}
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
            {
                opcao === "entrada" ?
                    <ContainerRelatorio>
                        <div className="titulo">
                            <h1>Relatório de entrada</h1>
                        </div>
                        <div className="tabela">
                            <DataTable
                                value={entradas.map(pagina => {
                                    return {
                                        _id: pagina._id,
                                        descricao: pagina.descricao,
                                        unidadeMedida: pagina.unidadeMedida,
                                        quantidade: pagina.quantidade,
                                        vemDe: pagina.vemDe,
                                        data: moment(pagina.data).format('DD/MM/YYYY')
                                    }
                                })}
                                paginator={entradas.length > 10}
                                rows={10}
                                emptyMessage={"Nenhum relatório no almoxarifado."}
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
                    <>
                        <ContainerRelatorio>
                            <div className="titulo">
                                <h1>Relatório de saída</h1>
                            </div>
                            <div className="tabela">
                                <DataTable
                                    value={saidas.map(pagina => {
                                        return {
                                            _id: pagina._id,
                                            descricao: pagina.descricao,
                                            unidadeMedida: pagina.unidadeMedida,
                                            quantidade: pagina.quantidade,
                                            vaiPara: pagina.vaiPara,
                                            data: moment(pagina.data).format('DD/MM/YYYY'),
                                            servico: pagina.servico,
                                            equipe: pagina.equipe
                                        }
                                    })}
                                    paginator={saidas.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhum relatório no almoxarifado."}
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
                                        field="vaiPara"
                                        header="Local para onde foi"
                                    />
                                    <Column
                                        filter={true}
                                        field="equipe"
                                        header="Equipe que utilizou"
                                    />
                                    <Column
                                        filter={true}
                                        field="servico"
                                        header="Código do serviço"
                                    />
                                    <Column
                                        filter={true}
                                        field="data"
                                        header="Data da retirada"
                                    />
                                </DataTable>
                            </div>
                        </ContainerRelatorio>
                        <ContainerRelatorio>
                            <div className="titulo">
                                <h1>Relatório de saída dos transformadores</h1>
                            </div>
                            <div className="tabela">
                                <DataTable
                                    value={saidasTransformadores.map(pagina => {
                                        return {
                                            _id: pagina._id,
                                            descricao: pagina.descricao,
                                            unidadeMedida: pagina.unidadeMedida,
                                            quantidade: pagina.quantidade,
                                            vaiPara: pagina.vaiPara,
                                            data: moment(pagina.data).format('DD/MM/YYYY'),
                                            servico: pagina.servico,
                                            equipe: pagina.equipe,
                                            tombamento: pagina.tombamento,
                                            impedancia: pagina.impedancia,
                                            numeroSerie: pagina.numeroSerie,
                                            dataFabricacao: pagina.dataFabricacao
                                        }
                                    })}
                                    paginator={saidas.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhum relatório no almoxarifado."}
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
                                        field="vaiPara"
                                        header="Local para onde foi"
                                    />
                                    <Column
                                        filter={true}
                                        field="equipe"
                                        header="Equipe que utilizou"
                                    />
                                    <Column
                                        filter={true}
                                        field="servico"
                                        header="Código do serviço"
                                    />
                                    <Column
                                        filter={true}
                                        field="data"
                                        header="Data da retirada"
                                    />
                                    <Column
                                        filter={true}
                                        field="numeroSerie"
                                        header="Número de série"
                                    />
                                    <Column
                                        filter={true}
                                        field="tombamento"
                                        header="Tombamento"
                                    />
                                    <Column
                                        filter={true}
                                        field="impedancia"
                                        header="Impedância"
                                    />
                                    <Column
                                        filter={true}
                                        field="dataFabricacao"
                                        header="Data de fabricacao"
                                    />
                                </DataTable>
                            </div>
                        </ContainerRelatorio>
                        <ContainerRelatorio>
                            <div className="titulo">
                                <h1>Relatório de saída dos medidores</h1>
                            </div>
                            <div className="tabela">
                                <DataTable
                                    value={saidasMedidores.map(pagina => {
                                        return {
                                            _id: pagina._id,
                                            descricao: pagina.descricao,
                                            unidadeMedida: pagina.unidadeMedida,
                                            quantidade: pagina.quantidade,
                                            vaiPara: pagina.vaiPara,
                                            data: moment(pagina.data).format('DD/MM/YYYY'),
                                            servico: pagina.servico,
                                            equipe: pagina.equipe,
                                            numero: pagina.numero,
                                            nSeloCaixa: pagina.nSeloCaixa,
                                            nSeloBorn: pagina.nSeloBorn
                                        }
                                    })}
                                    paginator={saidasMedidores.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhum relatório no almoxarifado."}
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
                                        field="vaiPara"
                                        header="Local para onde foi"
                                    />
                                    <Column
                                        filter={true}
                                        field="equipe"
                                        header="Equipe que utilizou"
                                    />
                                    <Column
                                        filter={true}
                                        field="servico"
                                        header="Código do serviço"
                                    />
                                    <Column
                                        filter={true}
                                        field="data"
                                        header="Data da retirada"
                                    />
                                    <Column
                                        filter={true}
                                        field="numero"
                                        header="Número"
                                    />
                                    <Column
                                        filter={true}
                                        field="nSeloCaixa"
                                        header="Número Selo Caixa"
                                    />
                                    <Column
                                        filter={true}
                                        field="nSeloBorn"
                                        header="Número Selo Born"
                                    />
                                </DataTable>
                            </div>
                        </ContainerRelatorio>
                    </>
            }
        </>
    )
}
export default RelatorioView;