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
                        <Dropdown filter={true} value={lotacao} style={{width: '100%'}} options={[
                            { label: 'FREI MIGUELINO', value: 'FREI MIGUELINO' },
                            { label: 'PICUI', value: 'PICUI' },
                            { label: 'NOVA FLORESTA', value: 'NOVA FLORESTA' },
                            { label: 'BARAÚNA', value: 'BARAÚNA' },
                            { label: 'NOVA PALMEIRA', value: 'NOVA PALMEIRA' },
                            { label: 'CUITÉ', value: 'CUITÉ' },
                            { label: 'SOSSEGO', value: 'SOSSEGO' },
                            { label: 'PEDRA LAVADA', value: 'PEDRA LAVADA' },
                            { label: 'BARRA DE SANTA ROSA', value: 'BARRA DE SANTA ROSA' },
                            { label: 'ALGODÃO DA JANDAÍRA', value: 'ALGODÃO DA JANDAÍRA' },
                            { label: 'REMÍGIO', value: 'REMÍGIO' },
                            { label: 'ARARA', value: 'ARARA' },
                            { label: 'SOLÂNEA', value: 'SOLÂNEA' },
                            { label: 'CASSERENGUE', value: 'CASSERENGUE' },
                            { label: 'POCINHOS', value: 'POCINHOS' },
                            { label: 'ESPERANÇA', value: 'ESPERANÇA' },
                            { label: 'AREIAL', value: 'AREIAL' },
                            { label: 'BANANEIRAS', value: 'BANANEIRAS' },
                            { label: 'BORBOREMA', value: 'BORBOREMA' },
                            { label: 'SERRARIA', value: 'SERRARIA' },
                            { label: 'ALAGOA NOVA', value: 'ALAGOA NOVA' },
                            { label: 'MONTADAS', value: 'MONTADAS' },
                            { label: 'PUXINANÃ', value: 'PUXINANÃ' },
                            { label: 'SÃO SEBASTIÃO DE LAGOA DE ROÇA', value: 'SÃO SEBASTIÃO DE LAGOA DE ROÇA' },
                            { label: 'MATINHAS', value: 'MATINHAS' },
                            { label: 'DAMIÃO', value: 'DAMIÃO' },
                            { label: 'ARARUNA', value: 'ARARUNA' },
                            { label: 'CACIMBA DE DENTRO', value: 'CACIMBA DE DENTRO' },
                            { label: 'RIACHÃO', value: 'RIACHÃO' },
                            { label: 'DONA INÊS', value: 'DONA INÊS' },
                            { label: 'TACIMA', value: 'TACIMA' },
                            { label: 'LOGRADOURO', value: 'LOGRADOURO' },
                            { label: 'CAIÇARA', value: 'CAIÇARA' },
                            { label: 'LAGOA DE DENTRO', value: 'LAGOA DE DENTRO' },
                            { label: 'SERRA DA RAIZ', value: 'SERRA DA RAIZ' },
                            { label: 'DUAS ESTRADAS', value: 'DUAS ESTRADAS' },
                            { label: 'SERTÃOZINHO', value: 'SERTÃOZINHO' },
                            { label: 'BELÉM', value: 'BELÉM' },
                            { label: 'PIRPIRITUBA', value: 'PIRPIRITUBA' },
                            { label: 'GUARABIRA', value: 'GUARABIRA' },
                            { label: 'ARAÇAGI', value: 'ARAÇAGI' },
                            { label: 'PILÕES', value: 'PILÕES' },
                            { label: 'PILÕEZINHO', value: 'PILÕEZINHO' },
                            { label: 'CUITEGI', value: 'CUITEGI' },
                            { label: 'ALAGOINHA', value: 'ALAGOINHA' },
                            { label: 'MULUNGU', value: 'MULUNGU' },
                            { label: 'ALAGOA GRANDE', value: 'ALAGOA GRANDE' },
                            { label: 'JUAREZ TÁVORA', value: 'JUAREZ TÁVORA' },
                            { label: 'SERRA REDONDA', value: 'SERRA REDONDA' },
                            { label: 'RIACHÃO DO BACAMARTE', value: 'RIACHÃO DO BACAMARTE' },
                            { label: 'INGÁ', value: 'INGÁ' },
                            { label: 'ITATUBA', value: 'ITATUBA' },
                            { label: 'CAMPINA GRANDE', value: 'CAMPINA GRANDE' },
                            { label: 'BOA VISTA', value: 'BOA VISTA' },
                            { label: 'LAGOA SECA', value: 'LAGOA SECA' },
                            { label: 'MASSARANDUBA', value: 'MASSARANDUBA' },
                            { label: 'FAGUNDES', value: 'FAGUNDES' },
                            { label: 'QUEIMADAS', value: 'QUEIMADAS' },
                            { label: 'CABACEIRAS', value: 'CABACEIRAS' },
                            { label: 'CATURITÉ', value: 'CATURITÉ' },
                            { label: 'BARRA DE SANTANA', value: 'BARRA DE SANTANA' },
                            { label: 'SÃO DOMINGOS DO CARIRI', value: 'SÃO DOMINGOS DO CARIRI' },
                            { label: 'BARRA DE SÃO MIGUEL', value: 'BARRA DE SÃO MIGUEL' },
                            { label: 'RIACHO DE SANTO ANTÔNIO', value: 'RIACHO DE SANTO ANTÔNIO' },
                            { label: 'ALCANTIL', value: 'ALCANTIL' },
                            { label: 'SANTA CECÍLIA', value: 'SANTA CECÍLIA' },
                            { label: 'GADO BRAVO', value: 'GADO BRAVO' },
                            { label: 'UMBUZEIRO', value: 'UMBUZEIRO' },
                            { label: 'NATUBA', value: 'NATUBA' },
                            { label: 'AROEIRAS', value: 'AROEIRAS' },
                            { label: 'BOQUEIRÃO', value: 'BOQUEIRÃO' },
                            { label: 'CUBATI', value: 'CUBATI' },
                            { label: 'SÃO VICENTE DO SERIDÓ', value: 'SÃO VICENTE DO SERIDÓ' },
                            { label: 'OLIVEDOS', value: 'OLIVEDOS' },
                            { label: 'TENÓRIO', value: 'TENÓRIO' },
                            { label: 'SOLEDADE', value: 'SOLEDADE' },
                            { label: 'JUAZEIRINHO', value: 'JUAZEIRINHO' },
                            { label: 'JUNCO DO SERIDÓ', value: 'JUNCO DO SERIDÓ' },
                            { label: 'ASSUNÇÃO', value: 'ASSUNÇÃO' },
                            { label: 'SALGADINHO', value: 'SALGADINHO' },
                            { label: 'TAPEROÁ', value: 'TAPEROÁ' },
                            { label: 'LIVRAMENTO', value: 'LIVRAMENTO' },
                            { label: 'SANTO ANDRÉ', value: 'SANTO ANDRÉ' },
                            { label: 'GURJÃO', value: 'GURJÃO' },
                            { label: 'PARARI', value: 'PARARI' },
                            { label: 'SÃO JOÃO DO CARIRI', value: 'SÃO JOÃO DO CARIRI' },
                            { label: 'SÃO JOSÉ DOS CORDEIROS', value: 'SÃO JOSÉ DOS CORDEIROS' },
                            { label: 'SERRA BRANCA', value: 'SERRA BRANCA' },
                            { label: 'AMPARO', value: 'AMPARO' },
                            { label: 'SUMÉ', value: 'SUMÉ' },
                            { label: 'COXIXOLA', value: 'COXIXOLA' },
                            { label: 'CARAÚBAS', value: 'CARAÚBAS' },
                            { label: 'CONGO', value: 'CONGO' },
                            { label: 'OURO VELHO', value: 'OURO VELHO' },
                            { label: 'PRATA', value: 'PRATA' },
                            { label: 'MONTEIRO', value: 'MONTEIRO' },
                            { label: 'CAMALAÚ', value: 'CAMALAÚ' },
                            { label: 'SÃO SEBASTIÃO DO UMBUZEIRO', value: 'SÃO SEBASTIÃO DO UMBUZEIRO' },
                            { label: 'SÃO JOÃO DO TIGRE', value: 'SÃO JOÃO DO TIGRE' },
                            { label: 'ZABELÊ', value: 'ZABELÊ' }
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
            <ContainerTabela style={{marginBottom: '10px'}}>
                <div className="titulo">
                    <h1>Funcionários</h1>
                </div>
                <div className="tabela" style={{overflowX: 'scroll'}}>
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
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            filter={true}
                            field="cargo"
                            header="Cargo"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="equipe"
                            header="Equipe"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="telefone"
                            header="Telefone"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="data.inicio"
                            header="Data de Início"
                            style={{ textAlign: 'center', width: '100px' }}
                        />
                        <Column
                            field="lotacao"
                            header="Lotação"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                        <Column
                            field="cpf"
                            header="CPF"
                            style={{ textAlign: 'center', width: '150px' }}
                        />
                    </DataTable>
                </div>
            </ContainerTabela>
        </>
    )
}
export default FuncionarioView;