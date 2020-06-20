import React from 'react';
import InputFloat from '../../../component/input/InputFloat';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Dropdown } from 'primereact/dropdown';
import { ContainerMudarEstoque, ContainerEstoque, ContainerGerenciador, ContainerPesquisa, ContainerEstoqueRetirar, MenuTab } from './styles/Style';
import { Checkbox } from 'primereact/checkbox';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button'
const EstoqueView = props => {
    const { materiais, handleInputChange, adicionarEstoque, retirarEstoque, handleDropDownChangeVaiPara, handleDropDownChangeVemDe, handleDropDownChangeEquipe, _idTransformador, _idMedidor,
        actionTemplate, actionTemplateInput, actionTemplateButton, _id, unidadeMedida, descricao, codigoClasse, descricaoClasse, pesquisarMateriais, materiaisPesquisados, vemDe, vaiPara, servico, equipe, goto,
        materiaisSelecionados, actionTemplateRetirar, materiaisSelecionadosRetirar, actionTemplateInputRetirar, actionTemplateButtonRetirar, sairAlmoxarifado, onChangeCheckBox,
        numeroSerie, tombamento, impedancia, dataFabricacao, numero, nSeloCaixa, nSeloBorn, retirarTransformador, retirarMedidor, carregandoPesquisar, itemAtivo, onChangeItemAtivo,
        almoxarifados } = props;
    
    
        return (
        <>
            <MenuTab>
                <TabMenu model={[{ label: 'Ver Estoque', value: "estoque", icon: 'pi pi-fw pi-home' },
                { label: 'Adicionar Estoque', value: "adicionar", icon: 'pi pi-fw pi-pencil' },
                { label: 'Retirar Estoque', value: "retirar", icon: 'pi pi-fw pi-pencil' }]} activeItem={itemAtivo} onTabChange={onChangeItemAtivo} />
            </MenuTab>
            {
                itemAtivo === "estoque" ?
                    <>
                        <ContainerEstoque>
                            <div className="titulo">
                                <h1>Estoque</h1>
                            </div>
                            <div className="tabela">
                                <DataTable
                                    value={materiais}
                                    paginator={materiais.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhum estoque no almoxarifado."}
                                >
                                    <Column
                                        filter={true}
                                        field="_id"
                                        header="_id"
                                        style={{ textAlign: 'center', width: '100px' }}
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
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="unidadeMedida"
                                        header="Unidade de Medida"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                </DataTable>
                            </div>
                        </ContainerEstoque>
                    </>
                    :
                    itemAtivo === "adicionar" ?
                        <>
                            <ContainerPesquisa>
                                <div className="titulo">
                                    <h1>Pesquisar materiais para adicionar</h1>
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
                                        {carregandoPesquisar ? <ProgressSpinner /> : <></>}
                                    </div>
                                </div>
                                <div className="tabela">
                                    <DataTable
                                        value={materiaisPesquisados}
                                        paginator={materiaisPesquisados.length > 10}
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
                                            style={{ textAlign: 'center', width: '120px' }}
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
                                            style={{ textAlign: 'center', width: '100px' }}
                                        />
                                        <Column
                                            filter={true}
                                            field="descricaoClasse"
                                            header="Descrição de Classe"
                                        />
                                        <Column
                                            field="checked"
                                            body={actionTemplate.bind(this)}
                                            style={{ textAlign: 'center', width: '50px' }}
                                        />
                                    </DataTable>
                                </div>
                            </ContainerPesquisa>
                            <ContainerGerenciador style={{ marginBottom: '10px' }}>
                                <div className="titulo">
                                    <h1>Gerenciador de entradas</h1>
                                </div>
                                <ContainerMudarEstoque>
                                    <Dropdown value={vemDe} options={[
                                        { label: 'ENERGISA', value: 'ENERGISA' }
                                    ]} placeholder="Local de onde vem" onChange={handleDropDownChangeVemDe} />
                                    <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                        {vemDe ? <p style={{ fontSize: '12px' }}>{'Local de onde vem: ' + vemDe}</p> :
                                            <p style={{ fontSize: '12px' }}>{'Selecione o local de onde vem.'}</p>}
                                    </div>
                                    <div className="tabela">
                                        <DataTable
                                            value={materiaisSelecionados}
                                            paginator={materiaisSelecionados.length > 10}
                                            rows={10}
                                            emptyMessage={"Nenhum material selecionado para adicionar."}
                                        >
                                            <Column
                                                field="_id"
                                                header="_id"
                                                style={{ textAlign: 'center', width: '100px' }}
                                            />
                                            <Column
                                                field="descricao"
                                                header="Descrição"
                                            />
                                            <Column
                                                header="Quantidade"
                                                body={actionTemplateInput.bind(this)}
                                                style={{ textAlign: 'center', width: '120px' }}
                                            />
                                            <Column
                                                field="unidadeMedida"
                                                header="Unidade de Medida"
                                                style={{ textAlign: 'center', width: '120px' }}
                                            />
                                            <Column
                                                body={actionTemplateButton.bind(this)}
                                                style={{ textAlign: 'center', width: '200px' }}
                                            />
                                        </DataTable>
                                    </div>
                                    <div className="inputs">
                                        <Button style={{
                                            backgroundColor: '#ce5f52', borderColor: '#e57164',
                                            WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                            MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                            boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                                        }} label="Adicionar ao estoque" onClick={adicionarEstoque} className="p-button-raised p-button-rounded" />
                                        <Button style={{
                                            backgroundColor: '#ce5f52', borderColor: '#e57164',
                                            WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                            MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                            boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                                        }} label="Relatório de entradas" onClick={() => goto("entrada")} className="p-button-raised p-button-rounded" />
                                    </div>
                                </ContainerMudarEstoque>
                            </ContainerGerenciador>
                        </>
                        :
                        <>
                            <ContainerGerenciador>
                                <div className="titulo">
                                    <h1>Pesquisar materiais para retirar</h1>
                                </div>
                                <ContainerMudarEstoque>
                                    <div className="tabela">
                                        <DataTable
                                            value={materiais}
                                            paginator={materiais.length > 10}
                                            rows={10}
                                            emptyMessage={"Materiais para retirar."}
                                        >
                                            <Column
                                                filter={true}
                                                field="_id"
                                                header="_id"
                                                style={{ textAlign: 'center', width: '100px' }}
                                            />
                                            <Column
                                                filter={true}
                                                field="descricao"
                                                header="Descrição"
                                            />
                                            <Column
                                                filter={true}
                                                field="quantidade"
                                                header="Quantidade disponível"
                                                style={{ textAlign: 'center', width: '100px' }}
                                            />
                                            <Column
                                                filter={true}
                                                field="unidadeMedida"
                                                header="Unidade de Medida"
                                                style={{ textAlign: 'center', width: '120px' }}
                                            />
                                            <Column
                                                field="checked"
                                                body={actionTemplateRetirar.bind(this)}
                                                style={{ textAlign: 'center', width: '50px' }}
                                            />
                                        </DataTable>
                                    </div>
                                </ContainerMudarEstoque>
                            </ContainerGerenciador>
                            <ContainerEstoqueRetirar>
                                <div className="titulo">
                                    <h1>Gerenciador de saídas</h1>
                                </div>
                                <div className="entradas">
                                    <div className="checkbox">
                                        <Checkbox inputId="checkbox" checked={sairAlmoxarifado} onChange={onChangeCheckBox} />
                                        <label htmlFor="checkbox" className="p-checkbox-label">Saída para outros almoxarifados?</label>
                                    </div>
                                    <div className="dropdown">
                                        <Dropdown value={vaiPara} style={{ width: '100%' }} options={sairAlmoxarifado ?
                                            almoxarifados :
                                            [{ label: 'PONTAPORA', value: 'PONTAPORA' },
                                            { label: 'NAVIRAI', value: 'NAVIRAI' },
                                            { label: 'CAMPINA GRANDE', value: 'CAMPINA GRANDE' },
                                            { label: 'SOLEDADE', value: 'SOLEDADE' },
                                            { label: 'ESPERANÇA', value: 'ESPERANÇA' },
                                            { label: 'POCINHOS', value: 'POCINHOS' },
                                            { label: 'AREIAL', value: 'AREIAL' },
                                            { label: 'RIACHÃO', value: 'RIACHÃO' },
                                            { label: 'ALAGOA GRANDE', value: 'ALAGOA GRANDE' },
                                            { label: 'ALAGOA NOVA', value: 'ALAGOA NOVA' },
                                            { label: 'LAGOA DE ROÇA', value: 'LAGOA DE ROÇA' }]
                                        } placeholder="Local para onde vai" onChange={handleDropDownChangeVaiPara} />
                                        <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                            {vaiPara ? <p style={{ fontSize: '12px' }}>{'Local para onde vai: ' + vaiPara}</p> :
                                                <p style={{ fontSize: '12px' }}>{'Selecione o local para onde vai.'}</p>}
                                        </div>
                                    </div>
                                </div>
                                {sairAlmoxarifado ?
                                    <>
                                    </>
                                    :
                                    <>
                                        <div className="inputSozinho">
                                            <InputFloat name="servico" label="Código do serviço" value={servico} onChange={handleInputChange} />
                                        </div>
                                        <Dropdown value={equipe} options={[
                                            { label: 'ENPB-001', value: 'ENPB-001' },
                                            { label: 'ENPB-002', value: 'ENPB-002' },
                                            { label: 'ENPB-003', value: 'ENPB-003' },
                                            { label: 'ENPB-004', value: 'ENPB-004' },
                                            { label: 'ENPB-005', value: 'ENPB-005' },
                                            { label: 'ENPB-006', value: 'ENPB-006' },
                                            { label: 'ENPB-007', value: 'ENPB-007' },
                                            { label: 'ENPB-008', value: 'ENPB-008' },
                                        ]} placeholder="Equipe que executou" onChange={handleDropDownChangeEquipe} />
                                        <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                            {equipe ? <p style={{ fontSize: '12px' }}>{'Equipe que executou: ' + equipe}</p> :
                                                <p style={{ fontSize: '12px' }}>{'Selecione a equipe que executou.'}</p>}
                                        </div>
                                    </>
                                }

                                <div className="tabela">
                                    <DataTable
                                        value={materiaisSelecionadosRetirar}
                                        paginator={materiaisSelecionadosRetirar.length > 10}
                                        rows={10}
                                        emptyMessage={"Nenhum material selecionado para retirar."}
                                    >
                                        <Column
                                            filter={true}
                                            field="_id"
                                            header="_id"
                                            style={{ textAlign: 'center', width: '100px' }}
                                        />
                                        <Column
                                            filter={true}
                                            field="descricao"
                                            header="Descrição"
                                        />
                                        <Column
                                            filter={true}
                                            field="quantidade"
                                            header="Quantidade disponível"
                                            style={{ textAlign: 'center', width: '100px' }}
                                        />
                                        <Column
                                            filter={true}
                                            field="unidadeMedida"
                                            header="Unidade de Medida"
                                            style={{ textAlign: 'center', width: '120px' }}
                                        />
                                        <Column
                                            header="Quantidade a retirar"
                                            body={actionTemplateInputRetirar.bind(this)}
                                            style={{ textAlign: 'center', width: '120px' }}
                                        />
                                        <Column
                                            body={actionTemplateButtonRetirar.bind(this)}
                                            style={{ textAlign: 'center', width: '100px' }}
                                        />
                                    </DataTable>
                                </div>
                                <div className="inputs">
                                    <Button style={{
                                        backgroundColor: '#ce5f52', borderColor: '#e57164',
                                        WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                        MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                                    }} label="Retirar do estoque" onClick={retirarEstoque} className="p-button-raised p-button-rounded" />
                                    <Button style={{
                                        backgroundColor: '#ce5f52', borderColor: '#e57164',
                                        WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                        MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                                    }} label="Relatório de saídas" onClick={() => goto("saida")} className="p-button-raised p-button-rounded" />
                                </div>
                                <div className="gerenciadores">
                                    <div className="transformadores">
                                        <div className="titulo">
                                            <h3>Transformadores</h3>
                                        </div>
                                        <InputFloat name="_idTransformador" label="_id do Transformador" value={_idTransformador} onChange={handleInputChange} />
                                        <InputFloat name="numeroSerie" label="Número de série" value={numeroSerie} onChange={handleInputChange} />
                                        <InputFloat name="tombamento" label="Tombamento" value={tombamento} onChange={handleInputChange} />
                                        <InputFloat name="impedancia" label="Impedância" value={impedancia} onChange={handleInputChange} />
                                        <InputFloat name="dataFabricacao" label="Data de Fabricação" value={dataFabricacao} onChange={handleInputChange} />
                                        <div className="botao">
                                            <Button style={{
                                                backgroundColor: '#ce5f52', borderColor: '#e57164',
                                                WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                                            }} label="Retirar Transformador" onClick={retirarTransformador} className="p-button-raised p-button-rounded" />
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: '20px' }} className="transformadores">
                                        <div className="titulo">
                                            <h3>Medidores</h3>
                                        </div>
                                        <InputFloat name="_idMedidor" label="_id do Medidor" value={_idMedidor} onChange={handleInputChange} />
                                        <InputFloat name="numero" label="Número" value={numero} onChange={handleInputChange} />
                                        <InputFloat name="nSeloCaixa" label="Nº selo caixa" value={nSeloCaixa} onChange={handleInputChange} />
                                        <InputFloat name="nSeloBorn" label="Nº selo born" value={nSeloBorn} onChange={handleInputChange} />
                                        <div className="botao">
                                            <Button style={{
                                                backgroundColor: '#ce5f52', borderColor: '#e57164',
                                                WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                                            }} label="Retirar Medidor" onClick={retirarMedidor} className="p-button-raised p-button-rounded" />
                                        </div>
                                    </div>
                                </div>
                            </ContainerEstoqueRetirar>
                        </>
            }
        </>
    )
}
export default EstoqueView;