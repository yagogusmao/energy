import React from 'react';
import InputFloat from '../../../component/input/InputFloat';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContainerRelatorio, ContainerPesquisa } from './styles/Style';
import { Button } from 'primereact/button';
import moment from 'moment';
import 'moment/locale/pt-br';

const RelatorioView = props => {
    const { saidas, opcao, _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, entradas,
        pesquisarMateriais, materiaisPesquisados, handleInputChange, saidasMedidores, saidasTransformadores } = props;
    return (
        <>
            <ContainerPesquisa>
                <div className="titulo">
                    <h1>Pesquisar materiais</h1>
                </div>
                <div className="inputs">
                    <InputFloat name="_id" label="Código" value={_id} onChange={handleInputChange} />
                    <InputFloat name="unidadeMedida" label="Unidade de Medida" value={unidadeMedida} onChange={handleInputChange} />
                    <InputFloat name="descricao" label="Descrição" value={descricao} onChange={handleInputChange} />
                    <InputFloat name="codigoClasse" label="Código de Classe" type="number" value={codigoClasse} onChange={handleInputChange} />
                    <InputFloat name="descricaoClasse" label="Descrição da Classe" value={descricaoClasse} onChange={handleInputChange} />
                    <div className="botao">
                        <Button style={{ backgroundColor: '#ce5f52', borderColor: '#e57164',
                                WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', width: '100px' }} label="Pesquisar" onClick={pesquisarMateriais} className="p-button-raised p-button-rounded" />
                    </div>
                </div>
                <div className="tabela" style={{marginTop: '10px'}}>
                    <DataTable
                        value={materiaisPesquisados}
                        paginator={materiaisPesquisados.length > 10}
                        rows={10}
                        emptyMessage={"Materiais pesquisados."}
                    >
                        <Column
                            filter={true}
                            field="_id"
                            header="Código"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            filter={true}
                            field="unidadeMedida"
                            header="Unidade de Medida"
                            style={{ textAlign: 'center', width: '120px' }}
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
                            style={{ textAlign: 'center', width: '300px' }}
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
                                    header="Código"
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
                                    field="quantidade"
                                    header="Quantidade"
                                    style={{ textAlign: 'center', width: '100px' }}
                                />
                                <Column
                                    filter={true}
                                    field="unidadeMedida"
                                    header="Unidade de Medida"
                                    style={{ textAlign: 'center', width: '120px' }}
                                />
                                <Column
                                    filter={true}
                                    field="vemDe"
                                    header="Local de onde veio"
                                    style={{ textAlign: 'center', width: '200px' }}
                                />
                                <Column
                                    filter={true}
                                    field="data"
                                    header="Data de recebimento"
                                    style={{ textAlign: 'center', width: '120px' }}
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
                                        header="Código"
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
                                        field="quantidade"
                                        header="Quantidade"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="unidadeMedida"
                                        header="Unidade de Medida"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="vaiPara"
                                        header="Local para onde foi"
                                        style={{ textAlign: 'center', width: '150px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="equipe"
                                        header="Equipe que utilizou"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="servico"
                                        header="Código do serviço"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="data"
                                        header="Data da retirada"
                                        style={{ textAlign: 'center', width: '120px' }}
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
                                        header="Código"
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
                                        field="quantidade"
                                        header="Quantidade"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="unidadeMedida"
                                        header="Unidade de Medida"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="vaiPara"
                                        header="Local para onde foi"
                                        style={{ textAlign: 'center', width: '150px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="equipe"
                                        header="Equipe que utilizou"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="servico"
                                        header="Código do serviço"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="data"
                                        header="Data da retirada"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="numeroSerie"
                                        header="Número de série"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="tombamento"
                                        header="Tombamento"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="impedancia"
                                        header="Impedância"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="dataFabricacao"
                                        header="Data de fabricacao"
                                        style={{ textAlign: 'center', width: '120px' }}
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
                                        header="Código"
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
                                        field="quantidade"
                                        header="Quantidade"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="unidadeMedida"
                                        header="Unidade de Medida"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="vaiPara"
                                        header="Local para onde foi"
                                        style={{ textAlign: 'center', width: '150px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="equipe"
                                        header="Equipe que utilizou"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="servico"
                                        header="Código do serviço"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="data"
                                        header="Data da retirada"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="numero"
                                        header="Número"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="nSeloCaixa"
                                        header="Número Selo Caixa"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="nSeloBorn"
                                        header="Número Selo Born"
                                        style={{ textAlign: 'center', width: '120px' }}
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