import React from 'react';
import {
    ContainerPropriedades, MenuTab, ContainerCriar, ContainerTabelaFinalizar,
    ContainerFomularioFinalizacao, ContainerInputs, ContainerApontamentosFinalizados,
    ContainerGrafico
} from './Style';
import InputFloat from '../../component/input/InputFloat';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
const GerenciadorView = props => {
    const { itemAtivo, onChangeItemAtivo, handleInputChange, tipo, pessoaEncarregado, pessoaSupervisor, equipe, pes,
        cidade, endereco, localSaida, codigoObra, equipesEscolher, handleDropDownChangeEquipe, handleDropDownChangeTipo,
        handleDropDownChangeSupervisor, handleDropDownChangeEncarregado, handleDropDownChangeCidade,
        handleDropDownChangeLocalSaida, iniciarApontamento, apontamentosIniciados, actionTemplateButtonFinalizar,
        atividades, actionTemplate, atividadesSelecionadas, actionTemplateInput, actionTemplateButton, actionTemplateButtonVer,
        tecnicoEnergisa, PgCp, veiculoKmFim, apontamentosFinalizados, graficosConstrucao,
        graficosManutencao, graficosPoda, graficosLinhaviva, graficosDECP, graficosDEOP, encarregados, supervisores,
        faturamentoConstrucao, faturamentoManutencao, faturamentoLinhaviva, faturamentoPoda, faturamentoDEOP,
        faturamentoDECP, construcaoHoje, construcaoSemana, construcaoMes, construcaoAno,
        manutencaoHoje, manutencaoSemana, manutencaoMes, manutencaoAno,
        linhavivaHoje, linhavivaSemana, linhavivaMes, linhavivaAno,
        podaHoje, podaSemana, podaMes, podaAno,
        decpHoje, decpSemana, decpMes, decpAno,
        deopHoje, deopSemana, deopMes, deopAno,
        mostrarFinalizadosConstrucaoHoje, onChangeMostrarFinalizadosConstrucaoHoje,
        mostrarFinalizadosConstrucaoSemana, onChangeMostrarFinalizadosConstrucaoSemana,
        mostrarFinalizadosConstrucaoMes, onChangeMostrarFinalizadosConstrucaoMes,
        mostrarFinalizadosConstrucaoAno, onChangeMostrarFinalizadosConstrucaoAno,
        mostrarFinalizadosConstrucao, onChangeMostrarFinalizadosConstrucao,

        mostrarFinalizadosManutencaoHoje, onChangeMostrarFinalizadosManutencaoHoje,
        mostrarFinalizadosManutencaoSemana, onChangeMostrarFinalizadosManutencaoSemana,
        mostrarFinalizadosManutencaoMes, onChangeMostrarFinalizadosManutencaoMes,
        mostrarFinalizadosManutencaoAno, onChangeMostrarFinalizadosManutencaoAno,
        mostrarFinalizadosManutencao, onChangeMostrarFinalizadosManutencao,

        mostrarFinalizadosLinhavivaHoje, onChangeMostrarFinalizadosLinhavivaHoje,
        mostrarFinalizadosLinhavivaSemana, onChangeMostrarFinalizadosLinhavivaSemana,
        mostrarFinalizadosLinhavivaMes, onChangeMostrarFinalizadosLinhavivaMes,
        mostrarFinalizadosLinhavivaAno, onChangeMostrarFinalizadosLinhavivaAno,
        mostrarFinalizadosLinhaviva, onChangeMostrarFinalizadosLinhaviva,

        mostrarFinalizadosPodaHoje, onChangeMostrarFinalizadosPodaHoje,
        mostrarFinalizadosPodaSemana, onChangeMostrarFinalizadosPodaSemana,
        mostrarFinalizadosPodaMes, onChangeMostrarFinalizadosPodaMes,
        mostrarFinalizadosPodaAno, onChangeMostrarFinalizadosPodaAno,
        mostrarFinalizadosPoda, onChangeMostrarFinalizadosPoda,

        mostrarFinalizadosDECPHoje, onChangeMostrarFinalizadosDECPHoje,
        mostrarFinalizadosDECPSemana, onChangeMostrarFinalizadosDECPSemana,
        mostrarFinalizadosDECPMes, onChangeMostrarFinalizadosDECPMes,
        mostrarFinalizadosDECPAno, onChangeMostrarFinalizadosDECPAno,
        mostrarFinalizadosDECP, onChangeMostrarFinalizadosDECP,

        mostrarFinalizadosDEOPHoje, onChangeMostrarFinalizadosDEOPHoje,
        mostrarFinalizadosDEOPSemana, onChangeMostrarFinalizadosDEOPSemana,
        mostrarFinalizadosDEOPMes, onChangeMostrarFinalizadosDEOPMes,
        mostrarFinalizadosDEOPAno, onChangeMostrarFinalizadosDEOPAno,
        mostrarFinalizadosDEOP, onChangeMostrarFinalizadosDEOP
    } = props;
    const backgroundColor = [
        "#780000",
        "#CE5F52",
        "#f79c91",
        "#006858",
        "#03ba9e",
        "#00ffd8",
        "#b7b7b7",
        "#d6d6d6",
        "#5e5e5e",
        "#000000"
    ];
    return (
        <>
            <MenuTab>
                <TabMenu model={[{ label: 'Iniciar', value: "iniciar", icon: 'pi pi-fw pi-home' },
                { label: 'Finalizar', value: "finalizar", icon: 'pi pi-fw pi-pencil' },
                { label: 'Construcão', value: "construcao", icon: 'pi pi-fw pi-pencil' },
                { label: 'Manutencão', value: "manutencao", icon: 'pi pi-fw pi-pencil' },
                { label: 'Linha Viva', value: "linhaviva", icon: 'pi pi-fw pi-pencil' },
                { label: 'Poda', value: "poda", icon: 'pi pi-fw pi-pencil' },
                { label: 'DECP', value: "decp", icon: 'pi pi-fw pi-pencil' },
                { label: 'DEOP', value: "deop", icon: 'pi pi-fw pi-pencil' },
                ]}
                    activeItem={itemAtivo} onTabChange={onChangeItemAtivo} />
            </MenuTab>
            {itemAtivo === "iniciar" ?
                <>
                    <ContainerCriar>
                        <div className="dropdowns">
                            <div>
                                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                    {equipe ? <p style={{ fontSize: '12px' }}>{'Equipe: '}</p> :
                                        <p style={{ fontSize: '12px' }}>{'Selecione a equipe.'}</p>}
                                </div>
                                <Dropdown style={{ width: '100%' }} value={equipe} options={equipesEscolher} placeholder="Equipe"
                                    onChange={handleDropDownChangeEquipe} />
                            </div>
                            <div>
                                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                    {tipo ? <p style={{ fontSize: '12px' }}>{'Tipo do serviço: '}</p> :
                                        <p style={{ fontSize: '12px' }}>{'Selecione o tipo do serviço.'}</p>}
                                </div>
                                <Dropdown style={{ width: '100%' }} value={tipo} options={[
                                    { label: "MANUTENCAO", value: "MANUTENCAO" },
                                    { label: "CONSTRUCAO", value: "CONSTRUCAO" },
                                    { label: "DECP", value: "DECP" },
                                    { label: "DEOP", value: "DEOP" },
                                    { label: "PODA", value: "PODA" },
                                    { label: "LINHA VIVA", value: "LINHA VIVA" }
                                ]}
                                    placeholder="Tipo do serviço" onChange={handleDropDownChangeTipo} />
                            </div>
                            <div>
                                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                    {pessoaSupervisor ? <p style={{ fontSize: '12px' }}>{'Supervisor: '}</p> :
                                        <p style={{ fontSize: '12px' }}>{'Selecione o supervisor.'}</p>}
                                </div>
                                <Dropdown style={{ width: '100%' }} value={pessoaSupervisor} options={supervisores}
                                    placeholder="Supervisor" onChange={handleDropDownChangeSupervisor} />
                            </div>
                            <div>
                                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                    {pessoaEncarregado ? <p style={{ fontSize: '12px' }}>{'Encarregado: '}</p> :
                                        <p style={{ fontSize: '12px' }}>{'Selecione o encarregado.'}</p>}
                                </div>
                                <Dropdown style={{ width: '100%' }} value={pessoaEncarregado} options={encarregados}
                                    placeholder="Encarregado" onChange={handleDropDownChangeEncarregado} />
                            </div>
                            <div>
                                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                    {cidade ? <p style={{ fontSize: '12px' }}>{'Cidade do serviço: '}</p> :
                                        <p style={{ fontSize: '12px' }}>{'Selecione a cidade do serviço.'}</p>}
                                </div>
                                <Dropdown filter={true} style={{ width: '100%' }} value={cidade} options={[
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
                                    { label: 'ZABELÊ', value: 'ZABELÊ' },

                                ]}
                                    placeholder="Cidade do serviço" onChange={handleDropDownChangeCidade} />
                            </div>
                            <div>
                                <div style={{ marginTop: '.5em', marginRight: '.5em', marginBottom: '.5em' }}>
                                    {localSaida ? <p style={{ fontSize: '12px' }}>{'Local de saída da equipe: '}</p> :
                                        <p style={{ fontSize: '12px' }}>{'Selecione o local de saída.'}</p>}
                                </div>
                                <Dropdown filter={true} style={{ width: '100%' }} value={localSaida} options={[
                                    { label: 'ENERGY CG', value: 'ENERGY CG' },
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
                                ]}
                                    placeholder="Local de saída da equipe" onChange={handleDropDownChangeLocalSaida} />
                            </div>
                            <InputFloat name="pes" label="PES" value={pes} onChange={handleInputChange} />
                            <InputFloat name="endereco" label="Endereço" value={endereco} onChange={handleInputChange} />
                            <InputFloat name="codigoObra" label="Código da Obra" value={codigoObra} onChange={handleInputChange} />
                        </div>
                        <div className="botao">
                            <Button style={{
                                backgroundColor: '#ce5f52', borderColor: '#e57164',
                                WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                            }} label="Iniciar Apontamento" onClick={iniciarApontamento} className="p-button-raised p-button-rounded" />
                        </div>
                    </ContainerCriar>
                </>
                :
                itemAtivo === "finalizar" ?
                    <>
                        <ContainerTabelaFinalizar>
                            <div style={{ marginBottom: '10px' }} className="titulo">
                                <h1>Atividades disponíveis</h1>
                            </div>
                            <div className="tabela" style={{ overflowX: 'scroll' }}>
                                <DataTable
                                    value={atividades}
                                    paginator={atividades.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhuma atividade cadastrada."}
                                >
                                    <Column
                                        field="checked"
                                        body={actionTemplate.bind(this)}
                                        style={{ textAlign: 'center', width: '50px' }}
                                    />
                                    <Column
                                        field="_id"
                                        header="_id"
                                        filter={true}
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="valor"
                                        header="Valor (R$)"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="nome"
                                        header="Nome"
                                        style={{ textAlign: 'center', width: '300px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="tipo"
                                        header="Tipo"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />

                                </DataTable>
                            </div>
                            <div style={{ marginTop: '10px', marginBottom: '10px' }} className="titulo">
                                <h1>Atividades selecionadas</h1>
                            </div>
                            <div className="tabela" style={{ overflowX: 'scroll', marginBottom: '10px' }}>
                                <DataTable
                                    value={atividadesSelecionadas}
                                    paginator={atividadesSelecionadas.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhuma atividade selecionada."}
                                >
                                    <Column
                                        field="_id"
                                        header="_id"
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        header="Quantidade"
                                        body={actionTemplateInput.bind(this)}
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
                                        style={{ textAlign: 'center', width: '100px' }}
                                    />
                                    <Column
                                        body={actionTemplateButton.bind(this)}
                                        style={{ textAlign: 'center', width: '200px' }}
                                    />
                                </DataTable>
                            </div>
                            <div className="inputs">
                                <InputFloat name="tecnicoEnergisa" label="Técnico da Energisa" value={tecnicoEnergisa} onChange={handleInputChange} />
                                <InputFloat name="veiculoKmFim" label="Kilometragem final do veículo" value={veiculoKmFim} onChange={handleInputChange} />
                                <InputFloat name="PgCp" label="Componente" value={PgCp} onChange={handleInputChange} />
                            </div>
                            <div style={{ marginBottom: '10px' }} className="titulo">
                                <h1>Apontamentos para finalizar</h1>
                            </div>
                            <div className="tabela" style={{ overflowX: 'scroll' }}>
                                <DataTable
                                    value={apontamentosIniciados}
                                    paginator={apontamentosIniciados.length > 10}
                                    rows={10}
                                    emptyMessage={"Nenhum apontamento iniciado no momento."}
                                >
                                    <Column
                                        filter={true}
                                        field="tipo"
                                        header="Tipo do serviço"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="codigoObra"
                                        header="Código do serviço"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="pessoa.supervisor"
                                        header="Supervisor"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        filter={true}
                                        field="pessoa.encarregado"
                                        header="Encarregado"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        field="cidade"
                                        header="Cidade do serviço"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        field="equipe"
                                        header="Equipe"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        field="veiculo.placa"
                                        header="Veículo"
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                    <Column
                                        body={actionTemplateButtonFinalizar.bind(this)}
                                        style={{ textAlign: 'center', width: '120px' }}
                                    />
                                </DataTable>
                            </div>
                        </ContainerTabelaFinalizar>
                    </>
                    :
                    itemAtivo === "construcao" ?
                        <>
                            {graficosConstrucao.map((grafico, i) => (
                                <>
                                    <ContainerGrafico>
                                        <div className="titulo">
                                            {i === 0 ? <h1>Faturamento de Hoje</h1> :
                                                i === 1 ? <h1>Faturamento da Semana</h1> :
                                                    i === 2 ? <h1>Faturamento do Mês</h1> :
                                                        i === 3 ? <h1>Faturamento do Ano</h1> :
                                                            <h1>Faturamento de todos os tempos</h1>}
                                        </div>
                                        <Chart type="doughnut"
                                            data={{
                                                labels: grafico.labels, datasets: [
                                                    { data: grafico.data, backgroundColor, hoverBackgroundColor: backgroundColor }
                                                ]
                                            }} />

                                        <div className="titulo">
                                            <Button style={{
                                                backgroundColor: '#ce5f52', borderColor: '#e57164',
                                                WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                                            }} label="Ver Apontamentos" onClick={
                                                i === 0 ? onChangeMostrarFinalizadosConstrucaoHoje :
                                                    i === 1 ? onChangeMostrarFinalizadosConstrucaoSemana :
                                                        i === 2 ? onChangeMostrarFinalizadosConstrucaoMes :
                                                            i === 3 ? onChangeMostrarFinalizadosConstrucaoAno :
                                                                onChangeMostrarFinalizadosConstrucao} className="p-button-raised p-button-rounded" />
                                        </div>
                                    </ContainerGrafico>
                                    {i === 0 ? mostrarFinalizadosConstrucaoHoje ?
                                        <>
                                            <ContainerApontamentosFinalizados>
                                                <div className="tabela">
                                                    <DataTable
                                                        value={i === 0 ? construcaoHoje :
                                                            i === 1 ? construcaoSemana :
                                                                i === 2 ? construcaoMes :
                                                                    i === 3 ? construcaoAno :
                                                                        faturamentoConstrucao}
                                                        paginator={(i === 0 ? construcaoHoje :
                                                            i === 1 ? construcaoSemana :
                                                                i === 2 ? construcaoMes :
                                                                    i === 3 ? construcaoAno :
                                                                        faturamentoConstrucao).length > 10}
                                                        rows={10}
                                                        emptyMessage={"Nenhum apontamento Finalizado."}
                                                    >
                                                        <Column
                                                            filter={true}
                                                            field="dataFinal"
                                                            header="Data"
                                                            style={{ width: "100px" }}
                                                        />
                                                        <Column
                                                            filter={true}
                                                            field="tipo"
                                                            header="Tipo do serviço"
                                                            style={{ width: "150px" }}
                                                        />
                                                        <Column
                                                            filter={true}
                                                            field="codigoObra"
                                                            header="Código do serviço"
                                                            style={{ width: "150px" }}
                                                        />
                                                        <Column
                                                            filter={true}
                                                            field="pessoa.supervisor"
                                                            header="Supervisor"
                                                            style={{ width: "150px" }}
                                                        />
                                                        <Column
                                                            filter={true}
                                                            field="pessoa.encarregado"
                                                            header="Encarregado"
                                                            style={{ width: "150px" }}
                                                        />
                                                        <Column
                                                            field="cidade"
                                                            header="Cidade do serviço"
                                                            style={{ width: "200px" }}
                                                        />
                                                        <Column
                                                            field="equipe"
                                                            header="Equipe"
                                                            style={{ width: "150px" }}
                                                        />
                                                        <Column
                                                            field="veiculo.placa"
                                                            header="Veículo"
                                                            style={{ width: "100px" }}
                                                        />
                                                        <Column
                                                            field="lucro"
                                                            header="Lucro (R$)"
                                                            style={{ width: "100px" }}
                                                        />
                                                        <Column
                                                            body={actionTemplateButtonVer.bind(this)}
                                                            style={{ textAlign: 'center', width: '200px' }}
                                                        />
                                                    </DataTable>
                                                </div>
                                            </ContainerApontamentosFinalizados>
                                        </>
                                        :
                                        <>
                                        </>
                                        : i === 1 ? mostrarFinalizadosConstrucaoSemana ?
                                            <>
                                                <ContainerApontamentosFinalizados>
                                                    <div className="tabela">
                                                        <DataTable
                                                            value={i === 0 ? construcaoHoje :
                                                                i === 1 ? construcaoSemana :
                                                                    i === 2 ? construcaoMes :
                                                                        i === 3 ? construcaoAno :
                                                                            faturamentoConstrucao}
                                                            paginator={(i === 0 ? construcaoHoje :
                                                                i === 1 ? construcaoSemana :
                                                                    i === 2 ? construcaoMes :
                                                                        i === 3 ? construcaoAno :
                                                                            faturamentoConstrucao).length > 10}
                                                            rows={10}
                                                            emptyMessage={"Nenhum apontamento Finalizado."}
                                                        >
                                                            <Column
                                                                filter={true}
                                                                field="dataFinal"
                                                                header="Data"
                                                                style={{ width: "100px" }}
                                                            />
                                                            <Column
                                                                filter={true}
                                                                field="tipo"
                                                                header="Tipo do serviço"
                                                                style={{ width: "150px" }}
                                                            />
                                                            <Column
                                                                filter={true}
                                                                field="codigoObra"
                                                                header="Código do serviço"
                                                                style={{ width: "150px" }}
                                                            />
                                                            <Column
                                                                filter={true}
                                                                field="pessoa.supervisor"
                                                                header="Supervisor"
                                                                style={{ width: "150px" }}
                                                            />
                                                            <Column
                                                                filter={true}
                                                                field="pessoa.encarregado"
                                                                header="Encarregado"
                                                                style={{ width: "150px" }}
                                                            />
                                                            <Column
                                                                field="cidade"
                                                                header="Cidade do serviço"
                                                                style={{ width: "200px" }}
                                                            />
                                                            <Column
                                                                field="equipe"
                                                                header="Equipe"
                                                                style={{ width: "150px" }}
                                                            />
                                                            <Column
                                                                field="veiculo.placa"
                                                                header="Veículo"
                                                                style={{ width: "100px" }}
                                                            />
                                                            <Column
                                                                field="lucro"
                                                                header="Lucro (R$)"
                                                                style={{ width: "100px" }}
                                                            />
                                                            <Column
                                                                body={actionTemplateButtonVer.bind(this)}
                                                                style={{ textAlign: 'center', width: '200px' }}
                                                            />
                                                        </DataTable>
                                                    </div>
                                                </ContainerApontamentosFinalizados>
                                            </>
                                            :
                                            <>
                                            </>
                                            : i === 2 ? mostrarFinalizadosConstrucaoMes ?
                                                <>
                                                    <ContainerApontamentosFinalizados>
                                                        <div className="tabela">
                                                            <DataTable
                                                                value={i === 0 ? construcaoHoje :
                                                                    i === 1 ? construcaoSemana :
                                                                        i === 2 ? construcaoMes :
                                                                            i === 3 ? construcaoAno :
                                                                                faturamentoConstrucao}
                                                                paginator={(i === 0 ? construcaoHoje :
                                                                    i === 1 ? construcaoSemana :
                                                                        i === 2 ? construcaoMes :
                                                                            i === 3 ? construcaoAno :
                                                                                faturamentoConstrucao).length > 10}
                                                                rows={10}
                                                                emptyMessage={"Nenhum apontamento Finalizado."}
                                                            >
                                                                <Column
                                                                    filter={true}
                                                                    field="dataFinal"
                                                                    header="Data"
                                                                    style={{ width: "100px" }}
                                                                />
                                                                <Column
                                                                    filter={true}
                                                                    field="tipo"
                                                                    header="Tipo do serviço"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    filter={true}
                                                                    field="codigoObra"
                                                                    header="Código do serviço"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    filter={true}
                                                                    field="pessoa.supervisor"
                                                                    header="Supervisor"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    filter={true}
                                                                    field="pessoa.encarregado"
                                                                    header="Encarregado"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    field="cidade"
                                                                    header="Cidade do serviço"
                                                                    style={{ width: "200px" }}
                                                                />
                                                                <Column
                                                                    field="equipe"
                                                                    header="Equipe"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    field="veiculo.placa"
                                                                    header="Veículo"
                                                                    style={{ width: "100px" }}
                                                                />
                                                                <Column
                                                                    field="lucro"
                                                                    header="Lucro (R$)"
                                                                    style={{ width: "100px" }}
                                                                />
                                                                <Column
                                                                    body={actionTemplateButtonVer.bind(this)}
                                                                    style={{ textAlign: 'center', width: '200px' }}
                                                                />
                                                            </DataTable>
                                                        </div>
                                                    </ContainerApontamentosFinalizados>
                                                </>
                                                :
                                                <>
                                                </>
                                                : i === 3 ? mostrarFinalizadosConstrucaoAno ?
                                                    <>
                                                        <ContainerApontamentosFinalizados>
                                                            <div className="tabela">
                                                                <DataTable
                                                                    value={i === 0 ? construcaoHoje :
                                                                        i === 1 ? construcaoSemana :
                                                                            i === 2 ? construcaoMes :
                                                                                i === 3 ? construcaoAno :
                                                                                    faturamentoConstrucao}
                                                                    paginator={(i === 0 ? construcaoHoje :
                                                                        i === 1 ? construcaoSemana :
                                                                            i === 2 ? construcaoMes :
                                                                                i === 3 ? construcaoAno :
                                                                                    faturamentoConstrucao).length > 10}
                                                                    rows={10}
                                                                    emptyMessage={"Nenhum apontamento Finalizado."}
                                                                >
                                                                    <Column
                                                                        filter={true}
                                                                        field="dataFinal"
                                                                        header="Data"
                                                                        style={{ width: "100px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="tipo"
                                                                        header="Tipo do serviço"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="codigoObra"
                                                                        header="Código do serviço"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="pessoa.supervisor"
                                                                        header="Supervisor"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="pessoa.encarregado"
                                                                        header="Encarregado"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        field="cidade"
                                                                        header="Cidade do serviço"
                                                                        style={{ width: "200px" }}
                                                                    />
                                                                    <Column
                                                                        field="equipe"
                                                                        header="Equipe"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        field="veiculo.placa"
                                                                        header="Veículo"
                                                                        style={{ width: "100px" }}
                                                                    />
                                                                    <Column
                                                                        field="lucro"
                                                                        header="Lucro (R$)"
                                                                        style={{ width: "100px" }}
                                                                    />
                                                                    <Column
                                                                        body={actionTemplateButtonVer.bind(this)}
                                                                        style={{ textAlign: 'center', width: '200px' }}
                                                                    />
                                                                </DataTable>
                                                            </div>
                                                        </ContainerApontamentosFinalizados>
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                    : mostrarFinalizadosConstrucao ?
                                                        <>
                                                            <ContainerApontamentosFinalizados>
                                                                <div className="tabela">
                                                                    <DataTable
                                                                        value={i === 0 ? construcaoHoje :
                                                                            i === 1 ? construcaoSemana :
                                                                                i === 2 ? construcaoMes :
                                                                                    i === 3 ? construcaoAno :
                                                                                        faturamentoConstrucao}
                                                                        paginator={(i === 0 ? construcaoHoje :
                                                                            i === 1 ? construcaoSemana :
                                                                                i === 2 ? construcaoMes :
                                                                                    i === 3 ? construcaoAno :
                                                                                        faturamentoConstrucao).length > 10}
                                                                        rows={10}
                                                                        emptyMessage={"Nenhum apontamento Finalizado."}
                                                                    >
                                                                        <Column
                                                                            filter={true}
                                                                            field="dataFinal"
                                                                            header="Data"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="tipo"
                                                                            header="Tipo do serviço"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="codigoObra"
                                                                            header="Código do serviço"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="pessoa.supervisor"
                                                                            header="Supervisor"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="pessoa.encarregado"
                                                                            header="Encarregado"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            field="cidade"
                                                                            header="Cidade do serviço"
                                                                            style={{ width: "200px" }}
                                                                        />
                                                                        <Column
                                                                            field="equipe"
                                                                            header="Equipe"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            field="veiculo.placa"
                                                                            header="Veículo"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            field="lucro"
                                                                            header="Lucro (R$)"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            body={actionTemplateButtonVer.bind(this)}
                                                                            style={{ textAlign: 'center', width: '200px' }}
                                                                        />
                                                                    </DataTable>
                                                                </div>
                                                            </ContainerApontamentosFinalizados>
                                                        </>
                                                        :
                                                        <>
                                                        </>
                                    }
                                </>
                            ))}
                        </>
                        :
                        itemAtivo === "manutencao" ?
                            <>
                                {graficosManutencao.map((grafico, i) => (
                                    <>
                                        <ContainerGrafico>
                                            <div className="titulo">
                                                {i === 0 ? <h1>Faturamento de Hoje</h1> :
                                                    i === 1 ? <h1>Faturamento da Semana</h1> :
                                                        i === 2 ? <h1>Faturamento do Mês</h1> :
                                                            i === 3 ? <h1>Faturamento do Ano</h1> :
                                                                <h1>Faturamento de todos os tempos</h1>}
                                            </div>
                                            <Chart type="doughnut"
                                                data={{
                                                    labels: grafico.labels, datasets: [
                                                        { data: grafico.data, backgroundColor, hoverBackgroundColor: backgroundColor }
                                                    ]
                                                }} />
                                            <div className="titulo">
                                                <Button style={{
                                                    backgroundColor: '#ce5f52', borderColor: '#e57164',
                                                    WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                    MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                    boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                                                }} label="Ver Apontamentos" onClick={
                                                    i === 0 ? onChangeMostrarFinalizadosManutencaoHoje :
                                                        i === 1 ? onChangeMostrarFinalizadosManutencaoSemana :
                                                            i === 2 ? onChangeMostrarFinalizadosManutencaoMes :
                                                                i === 3 ? onChangeMostrarFinalizadosManutencaoAno :
                                                                    onChangeMostrarFinalizadosManutencao} className="p-button-raised p-button-rounded" />
                                            </div>
                                        </ContainerGrafico>
                                        {i === 0 ? mostrarFinalizadosManutencaoHoje ?
                                            <>
                                                <ContainerApontamentosFinalizados>
                                                    <div className="tabela">
                                                        <DataTable
                                                            value={i === 0 ? manutencaoHoje :
                                                                i === 1 ? manutencaoSemana :
                                                                    i === 2 ? manutencaoMes :
                                                                        i === 3 ? manutencaoAno :
                                                                            faturamentoManutencao}
                                                            paginator={(i === 0 ? manutencaoHoje :
                                                                i === 1 ? manutencaoSemana :
                                                                    i === 2 ? manutencaoMes :
                                                                        i === 3 ? manutencaoAno :
                                                                            faturamentoManutencao).length > 10}
                                                            rows={10}
                                                            emptyMessage={"Nenhum apontamento Finalizado."}
                                                        >
                                                            <Column
                                                                filter={true}
                                                                field="dataFinal"
                                                                header="Data"
                                                                style={{ width: "100px" }}
                                                            />
                                                            <Column
                                                                filter={true}
                                                                field="tipo"
                                                                header="Tipo do serviço"
                                                                style={{ width: "150px" }}
                                                            />
                                                            <Column
                                                                filter={true}
                                                                field="codigoObra"
                                                                header="Código do serviço"
                                                                style={{ width: "150px" }}
                                                            />
                                                            <Column
                                                                filter={true}
                                                                field="pessoa.supervisor"
                                                                header="Supervisor"
                                                                style={{ width: "150px" }}
                                                            />
                                                            <Column
                                                                filter={true}
                                                                field="pessoa.encarregado"
                                                                header="Encarregado"
                                                                style={{ width: "150px" }}
                                                            />
                                                            <Column
                                                                field="cidade"
                                                                header="Cidade do serviço"
                                                                style={{ width: "200px" }}
                                                            />
                                                            <Column
                                                                field="equipe"
                                                                header="Equipe"
                                                                style={{ width: "150px" }}
                                                            />
                                                            <Column
                                                                field="veiculo.placa"
                                                                header="Veículo"
                                                                style={{ width: "100px" }}
                                                            />
                                                            <Column
                                                                field="lucro"
                                                                header="Lucro (R$)"
                                                                style={{ width: "100px" }}
                                                            />
                                                            <Column
                                                                body={actionTemplateButtonVer.bind(this)}
                                                                style={{ textAlign: 'center', width: '200px' }}
                                                            />
                                                        </DataTable>
                                                    </div>
                                                </ContainerApontamentosFinalizados>
                                            </>
                                            :
                                            <>
                                            </>
                                            : i === 1 ? mostrarFinalizadosManutencaoSemana ?
                                                <>
                                                    <ContainerApontamentosFinalizados>
                                                        <div className="tabela">
                                                            <DataTable
                                                                value={i === 0 ? manutencaoHoje :
                                                                    i === 1 ? manutencaoSemana :
                                                                        i === 2 ? manutencaoMes :
                                                                            i === 3 ? manutencaoAno :
                                                                                faturamentoManutencao}
                                                                paginator={(i === 0 ? manutencaoHoje :
                                                                    i === 1 ? manutencaoSemana :
                                                                        i === 2 ? manutencaoMes :
                                                                            i === 3 ? manutencaoAno :
                                                                                faturamentoManutencao).length > 10}
                                                                rows={10}
                                                                emptyMessage={"Nenhum apontamento Finalizado."}
                                                            >
                                                                <Column
                                                                    filter={true}
                                                                    field="dataFinal"
                                                                    header="Data"
                                                                    style={{ width: "100px" }}
                                                                />
                                                                <Column
                                                                    filter={true}
                                                                    field="tipo"
                                                                    header="Tipo do serviço"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    filter={true}
                                                                    field="codigoObra"
                                                                    header="Código do serviço"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    filter={true}
                                                                    field="pessoa.supervisor"
                                                                    header="Supervisor"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    filter={true}
                                                                    field="pessoa.encarregado"
                                                                    header="Encarregado"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    field="cidade"
                                                                    header="Cidade do serviço"
                                                                    style={{ width: "200px" }}
                                                                />
                                                                <Column
                                                                    field="equipe"
                                                                    header="Equipe"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    field="veiculo.placa"
                                                                    header="Veículo"
                                                                    style={{ width: "100px" }}
                                                                />
                                                                <Column
                                                                    field="lucro"
                                                                    header="Lucro (R$)"
                                                                    style={{ width: "100px" }}
                                                                />
                                                                <Column
                                                                    body={actionTemplateButtonVer.bind(this)}
                                                                    style={{ textAlign: 'center', width: '200px' }}
                                                                />
                                                            </DataTable>
                                                        </div>
                                                    </ContainerApontamentosFinalizados>
                                                </>
                                                :
                                                <>
                                                </>
                                                : i === 2 ? mostrarFinalizadosManutencaoMes ?
                                                    <>
                                                        <ContainerApontamentosFinalizados>
                                                            <div className="tabela">
                                                                <DataTable
                                                                    value={i === 0 ? manutencaoHoje :
                                                                        i === 1 ? manutencaoSemana :
                                                                            i === 2 ? manutencaoMes :
                                                                                i === 3 ? manutencaoAno :
                                                                                    faturamentoManutencao}
                                                                    paginator={(i === 0 ? manutencaoHoje :
                                                                        i === 1 ? manutencaoSemana :
                                                                            i === 2 ? manutencaoMes :
                                                                                i === 3 ? manutencaoAno :
                                                                                    faturamentoManutencao).length > 10}
                                                                    rows={10}
                                                                    emptyMessage={"Nenhum apontamento Finalizado."}
                                                                >
                                                                    <Column
                                                                        filter={true}
                                                                        field="dataFinal"
                                                                        header="Data"
                                                                        style={{ width: "100px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="tipo"
                                                                        header="Tipo do serviço"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="codigoObra"
                                                                        header="Código do serviço"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="pessoa.supervisor"
                                                                        header="Supervisor"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="pessoa.encarregado"
                                                                        header="Encarregado"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        field="cidade"
                                                                        header="Cidade do serviço"
                                                                        style={{ width: "200px" }}
                                                                    />
                                                                    <Column
                                                                        field="equipe"
                                                                        header="Equipe"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        field="veiculo.placa"
                                                                        header="Veículo"
                                                                        style={{ width: "100px" }}
                                                                    />
                                                                    <Column
                                                                        field="lucro"
                                                                        header="Lucro (R$)"
                                                                        style={{ width: "100px" }}
                                                                    />
                                                                    <Column
                                                                        body={actionTemplateButtonVer.bind(this)}
                                                                        style={{ textAlign: 'center', width: '200px' }}
                                                                    />
                                                                </DataTable>
                                                            </div>
                                                        </ContainerApontamentosFinalizados>
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                    : i === 3 ? mostrarFinalizadosManutencaoAno ?
                                                        <>
                                                            <ContainerApontamentosFinalizados>
                                                                <div className="tabela">
                                                                    <DataTable
                                                                        value={i === 0 ? manutencaoHoje :
                                                                            i === 1 ? manutencaoSemana :
                                                                                i === 2 ? manutencaoMes :
                                                                                    i === 3 ? manutencaoAno :
                                                                                        faturamentoManutencao}
                                                                        paginator={(i === 0 ? manutencaoHoje :
                                                                            i === 1 ? manutencaoSemana :
                                                                                i === 2 ? manutencaoMes :
                                                                                    i === 3 ? manutencaoAno :
                                                                                        faturamentoManutencao).length > 10}
                                                                        rows={10}
                                                                        emptyMessage={"Nenhum apontamento Finalizado."}
                                                                    ><Column
                                                                            filter={true}
                                                                            field="dataFinal"
                                                                            header="Data"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="tipo"
                                                                            header="Tipo do serviço"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="codigoObra"
                                                                            header="Código do serviço"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="pessoa.supervisor"
                                                                            header="Supervisor"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="pessoa.encarregado"
                                                                            header="Encarregado"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            field="cidade"
                                                                            header="Cidade do serviço"
                                                                            style={{ width: "200px" }}
                                                                        />
                                                                        <Column
                                                                            field="equipe"
                                                                            header="Equipe"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            field="veiculo.placa"
                                                                            header="Veículo"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            field="lucro"
                                                                            header="Lucro (R$)"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            body={actionTemplateButtonVer.bind(this)}
                                                                            style={{ textAlign: 'center', width: '200px' }}
                                                                        />
                                                                    </DataTable>
                                                                </div>
                                                            </ContainerApontamentosFinalizados>
                                                        </>
                                                        :
                                                        <>
                                                        </>
                                                        : mostrarFinalizadosManutencao ?
                                                            <>
                                                                <ContainerApontamentosFinalizados>
                                                                    <div className="tabela">
                                                                        <DataTable
                                                                            value={i === 0 ? manutencaoHoje :
                                                                                i === 1 ? manutencaoSemana :
                                                                                    i === 2 ? manutencaoMes :
                                                                                        i === 3 ? manutencaoAno :
                                                                                            faturamentoManutencao}
                                                                            paginator={(i === 0 ? manutencaoHoje :
                                                                                i === 1 ? manutencaoSemana :
                                                                                    i === 2 ? manutencaoMes :
                                                                                        i === 3 ? manutencaoAno :
                                                                                            faturamentoManutencao).length > 10}
                                                                            rows={10}
                                                                            emptyMessage={"Nenhum apontamento Finalizado."}
                                                                        >
                                                                            <Column
                                                                                filter={true}
                                                                                field="dataFinal"
                                                                                header="Data"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="tipo"
                                                                                header="Tipo do serviço"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="codigoObra"
                                                                                header="Código do serviço"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="pessoa.supervisor"
                                                                                header="Supervisor"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="pessoa.encarregado"
                                                                                header="Encarregado"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                field="cidade"
                                                                                header="Cidade do serviço"
                                                                                style={{ width: "200px" }}
                                                                            />
                                                                            <Column
                                                                                field="equipe"
                                                                                header="Equipe"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                field="veiculo.placa"
                                                                                header="Veículo"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                field="lucro"
                                                                                header="Lucro (R$)"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                body={actionTemplateButtonVer.bind(this)}
                                                                                style={{ textAlign: 'center', width: '200px' }}
                                                                            />
                                                                        </DataTable>
                                                                    </div>
                                                                </ContainerApontamentosFinalizados>
                                                            </>
                                                            :
                                                            <>
                                                            </>
                                        }
                                    </>
                                ))}
                            </>
                            :
                            itemAtivo === "linhaviva" ?
                                <>
                                    {graficosLinhaviva.map((grafico, i) => (
                                        <>
                                            <ContainerGrafico>
                                                <div className="titulo">
                                                    {i === 0 ? <h1>Faturamento de Hoje</h1> :
                                                        i === 1 ? <h1>Faturamento da Semana</h1> :
                                                            i === 2 ? <h1>Faturamento do Mês</h1> :
                                                                i === 3 ? <h1>Faturamento do Ano</h1> :
                                                                    <h1>Faturamento de todos os tempos</h1>}
                                                </div>
                                                <Chart type="doughnut"
                                                    data={{
                                                        labels: grafico.labels, datasets: [
                                                            { data: grafico.data, backgroundColor, hoverBackgroundColor: backgroundColor }
                                                        ]
                                                    }} />
                                                <div className="titulo">
                                                    <Button style={{
                                                        backgroundColor: '#ce5f52', borderColor: '#e57164',
                                                        WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                        MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                                                    }} label="Ver Apontamentos" onClick={
                                                        i === 0 ? onChangeMostrarFinalizadosLinhavivaHoje :
                                                            i === 1 ? onChangeMostrarFinalizadosLinhavivaSemana :
                                                                i === 2 ? onChangeMostrarFinalizadosLinhavivaMes :
                                                                    i === 3 ? onChangeMostrarFinalizadosLinhavivaAno :
                                                                        onChangeMostrarFinalizadosLinhaviva} className="p-button-raised p-button-rounded" />
                                                </div>
                                            </ContainerGrafico>
                                            {i === 0 ? mostrarFinalizadosLinhavivaHoje ?
                                                <>
                                                    <ContainerApontamentosFinalizados>
                                                        <div className="tabela">
                                                            <DataTable
                                                                value={i === 0 ? linhavivaHoje :
                                                                    i === 1 ? linhavivaSemana :
                                                                        i === 2 ? linhavivaMes :
                                                                            i === 3 ? linhavivaAno :
                                                                                faturamentoLinhaviva}
                                                                paginator={(i === 0 ? linhavivaHoje :
                                                                    i === 1 ? linhavivaSemana :
                                                                        i === 2 ? linhavivaMes :
                                                                            i === 3 ? linhavivaAno :
                                                                                faturamentoLinhaviva).length > 10}
                                                                rows={10}
                                                                emptyMessage={"Nenhum apontamento Finalizado."}
                                                            >
                                                                <Column
                                                                    filter={true}
                                                                    field="dataFinal"
                                                                    header="Data"
                                                                    style={{ width: "100px" }}
                                                                />
                                                                <Column
                                                                    filter={true}
                                                                    field="tipo"
                                                                    header="Tipo do serviço"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    filter={true}
                                                                    field="codigoObra"
                                                                    header="Código do serviço"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    filter={true}
                                                                    field="pessoa.supervisor"
                                                                    header="Supervisor"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    filter={true}
                                                                    field="pessoa.encarregado"
                                                                    header="Encarregado"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    field="cidade"
                                                                    header="Cidade do serviço"
                                                                    style={{ width: "200px" }}
                                                                />
                                                                <Column
                                                                    field="equipe"
                                                                    header="Equipe"
                                                                    style={{ width: "150px" }}
                                                                />
                                                                <Column
                                                                    field="veiculo.placa"
                                                                    header="Veículo"
                                                                    style={{ width: "100px" }}
                                                                />
                                                                <Column
                                                                    field="lucro"
                                                                    header="Lucro (R$)"
                                                                    style={{ width: "100px" }}
                                                                />
                                                                <Column
                                                                    body={actionTemplateButtonVer.bind(this)}
                                                                    style={{ textAlign: 'center', width: '200px' }}
                                                                />
                                                            </DataTable>
                                                        </div>
                                                    </ContainerApontamentosFinalizados>
                                                </>
                                                :
                                                <>
                                                </>
                                                : i === 1 ? mostrarFinalizadosLinhavivaSemana ?
                                                    <>
                                                        <ContainerApontamentosFinalizados>
                                                            <div className="tabela">
                                                                <DataTable
                                                                    value={i === 0 ? linhavivaHoje :
                                                                        i === 1 ? linhavivaSemana :
                                                                            i === 2 ? linhavivaMes :
                                                                                i === 3 ? linhavivaAno :
                                                                                    faturamentoLinhaviva}
                                                                    paginator={(i === 0 ? linhavivaHoje :
                                                                        i === 1 ? linhavivaSemana :
                                                                            i === 2 ? linhavivaMes :
                                                                                i === 3 ? linhavivaAno :
                                                                                    faturamentoLinhaviva).length > 10}
                                                                    rows={10}
                                                                    emptyMessage={"Nenhum apontamento Finalizado."}
                                                                >
                                                                    <Column
                                                                        filter={true}
                                                                        field="dataFinal"
                                                                        header="Data"
                                                                        style={{ width: "100px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="tipo"
                                                                        header="Tipo do serviço"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="codigoObra"
                                                                        header="Código do serviço"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="pessoa.supervisor"
                                                                        header="Supervisor"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="pessoa.encarregado"
                                                                        header="Encarregado"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        field="cidade"
                                                                        header="Cidade do serviço"
                                                                        style={{ width: "200px" }}
                                                                    />
                                                                    <Column
                                                                        field="equipe"
                                                                        header="Equipe"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        field="veiculo.placa"
                                                                        header="Veículo"
                                                                        style={{ width: "100px" }}
                                                                    />
                                                                    <Column
                                                                        field="lucro"
                                                                        header="Lucro (R$)"
                                                                        style={{ width: "100px" }}
                                                                    />
                                                                    <Column
                                                                        body={actionTemplateButtonVer.bind(this)}
                                                                        style={{ textAlign: 'center', width: '200px' }}
                                                                    />
                                                                </DataTable>
                                                            </div>
                                                        </ContainerApontamentosFinalizados>
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                    : i === 2 ? mostrarFinalizadosLinhavivaMes ?
                                                        <>
                                                            <ContainerApontamentosFinalizados>
                                                                <div className="tabela">
                                                                    <DataTable
                                                                        value={i === 0 ? linhavivaHoje :
                                                                            i === 1 ? linhavivaSemana :
                                                                                i === 2 ? linhavivaMes :
                                                                                    i === 3 ? linhavivaAno :
                                                                                        faturamentoLinhaviva}
                                                                        paginator={(i === 0 ? linhavivaHoje :
                                                                            i === 1 ? linhavivaSemana :
                                                                                i === 2 ? linhavivaMes :
                                                                                    i === 3 ? linhavivaAno :
                                                                                        faturamentoLinhaviva).length > 10}
                                                                        rows={10}
                                                                        emptyMessage={"Nenhum apontamento Finalizado."}
                                                                    >
                                                                        <Column
                                                                            filter={true}
                                                                            field="dataFinal"
                                                                            header="Data"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="tipo"
                                                                            header="Tipo do serviço"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="codigoObra"
                                                                            header="Código do serviço"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="pessoa.supervisor"
                                                                            header="Supervisor"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="pessoa.encarregado"
                                                                            header="Encarregado"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            field="cidade"
                                                                            header="Cidade do serviço"
                                                                            style={{ width: "200px" }}
                                                                        />
                                                                        <Column
                                                                            field="equipe"
                                                                            header="Equipe"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            field="veiculo.placa"
                                                                            header="Veículo"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            field="lucro"
                                                                            header="Lucro (R$)"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            body={actionTemplateButtonVer.bind(this)}
                                                                            style={{ textAlign: 'center', width: '200px' }}
                                                                        />
                                                                    </DataTable>
                                                                </div>
                                                            </ContainerApontamentosFinalizados>
                                                        </>
                                                        :
                                                        <>
                                                        </>
                                                        : i === 3 ? mostrarFinalizadosLinhavivaAno ?
                                                            <>
                                                                <ContainerApontamentosFinalizados>
                                                                    <div className="tabela">
                                                                        <DataTable
                                                                            value={i === 0 ? linhavivaHoje :
                                                                                i === 1 ? linhavivaSemana :
                                                                                    i === 2 ? linhavivaMes :
                                                                                        i === 3 ? linhavivaAno :
                                                                                            faturamentoLinhaviva}
                                                                            paginator={(i === 0 ? linhavivaHoje :
                                                                                i === 1 ? linhavivaSemana :
                                                                                    i === 2 ? linhavivaMes :
                                                                                        i === 3 ? linhavivaAno :
                                                                                            faturamentoLinhaviva).length > 10}
                                                                            rows={10}
                                                                            emptyMessage={"Nenhum apontamento Finalizado."}
                                                                        >
                                                                            <Column
                                                                                filter={true}
                                                                                field="dataFinal"
                                                                                header="Data"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="tipo"
                                                                                header="Tipo do serviço"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="codigoObra"
                                                                                header="Código do serviço"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="pessoa.supervisor"
                                                                                header="Supervisor"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="pessoa.encarregado"
                                                                                header="Encarregado"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                field="cidade"
                                                                                header="Cidade do serviço"
                                                                                style={{ width: "200px" }}
                                                                            />
                                                                            <Column
                                                                                field="equipe"
                                                                                header="Equipe"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                field="veiculo.placa"
                                                                                header="Veículo"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                field="lucro"
                                                                                header="Lucro (R$)"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                body={actionTemplateButtonVer.bind(this)}
                                                                                style={{ textAlign: 'center', width: '200px' }}
                                                                            />
                                                                        </DataTable>
                                                                    </div>
                                                                </ContainerApontamentosFinalizados>
                                                            </>
                                                            :
                                                            <>
                                                            </>
                                                            : mostrarFinalizadosLinhaviva ?
                                                                <>
                                                                    <ContainerApontamentosFinalizados>
                                                                        <div className="tabela">
                                                                            <DataTable
                                                                                value={i === 0 ? linhavivaHoje :
                                                                                    i === 1 ? linhavivaSemana :
                                                                                        i === 2 ? linhavivaMes :
                                                                                            i === 3 ? linhavivaAno :
                                                                                                faturamentoLinhaviva}
                                                                                paginator={(i === 0 ? linhavivaHoje :
                                                                                    i === 1 ? linhavivaSemana :
                                                                                        i === 2 ? linhavivaMes :
                                                                                            i === 3 ? linhavivaAno :
                                                                                                faturamentoLinhaviva).length > 10}
                                                                                rows={10}
                                                                                emptyMessage={"Nenhum apontamento Finalizado."}
                                                                            >
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="dataFinal"
                                                                                    header="Data"
                                                                                    style={{ width: "100px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="tipo"
                                                                                    header="Tipo do serviço"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="codigoObra"
                                                                                    header="Código do serviço"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="pessoa.supervisor"
                                                                                    header="Supervisor"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="pessoa.encarregado"
                                                                                    header="Encarregado"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    field="cidade"
                                                                                    header="Cidade do serviço"
                                                                                    style={{ width: "200px" }}
                                                                                />
                                                                                <Column
                                                                                    field="equipe"
                                                                                    header="Equipe"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    field="veiculo.placa"
                                                                                    header="Veículo"
                                                                                    style={{ width: "100px" }}
                                                                                />
                                                                                <Column
                                                                                    field="lucro"
                                                                                    header="Lucro (R$)"
                                                                                    style={{ width: "100px" }}
                                                                                />
                                                                                <Column
                                                                                    body={actionTemplateButtonVer.bind(this)}
                                                                                    style={{ textAlign: 'center', width: '200px' }}
                                                                                />
                                                                            </DataTable>
                                                                        </div>
                                                                    </ContainerApontamentosFinalizados>
                                                                </>
                                                                :
                                                                <>
                                                                </>
                                            }
                                        </>
                                    ))}
                                </>
                                :
                                itemAtivo === "poda" ?
                                    <>
                                        {graficosPoda.map((grafico, i) => (
                                            <>
                                                <ContainerGrafico>
                                                    <div className="titulo">
                                                        {i === 0 ? <h1>Faturamento de Hoje</h1> :
                                                            i === 1 ? <h1>Faturamento da Semana</h1> :
                                                                i === 2 ? <h1>Faturamento do Mês</h1> :
                                                                    i === 3 ? <h1>Faturamento do Ano</h1> :
                                                                        <h1>Faturamento de todos os tempos</h1>}
                                                    </div>
                                                    <Chart type="doughnut"
                                                        data={{
                                                            labels: grafico.labels, datasets: [
                                                                { data: grafico.data, backgroundColor, hoverBackgroundColor: backgroundColor }
                                                            ]
                                                        }} />
                                                    <div className="titulo">
                                                        <Button style={{
                                                            backgroundColor: '#ce5f52', borderColor: '#e57164',
                                                            WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                            MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                            boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                                                        }} label="Ver Apontamentos" onClick={
                                                            i === 0 ? onChangeMostrarFinalizadosPodaHoje :
                                                                i === 1 ? onChangeMostrarFinalizadosPodaSemana :
                                                                    i === 2 ? onChangeMostrarFinalizadosPodaMes :
                                                                        i === 3 ? onChangeMostrarFinalizadosPodaAno :
                                                                            onChangeMostrarFinalizadosPoda} className="p-button-raised p-button-rounded" />
                                                    </div>
                                                </ContainerGrafico>
                                                {i === 0 ? mostrarFinalizadosPodaHoje ?
                                                    <>
                                                        <ContainerApontamentosFinalizados>
                                                            <div className="tabela">
                                                                <DataTable
                                                                    value={i === 0 ? podaHoje :
                                                                        i === 1 ? podaSemana :
                                                                            i === 2 ? podaMes :
                                                                                i === 3 ? podaAno :
                                                                                    faturamentoPoda}
                                                                    paginator={(i === 0 ? podaHoje :
                                                                        i === 1 ? podaSemana :
                                                                            i === 2 ? podaMes :
                                                                                i === 3 ? podaAno :
                                                                                    faturamentoPoda).length > 10}
                                                                    rows={10}
                                                                    emptyMessage={"Nenhum apontamento Finalizado."}
                                                                >
                                                                    <Column
                                                                        filter={true}
                                                                        field="dataFinal"
                                                                        header="Data"
                                                                        style={{ width: "100px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="tipo"
                                                                        header="Tipo do serviço"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="codigoObra"
                                                                        header="Código do serviço"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="pessoa.supervisor"
                                                                        header="Supervisor"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        filter={true}
                                                                        field="pessoa.encarregado"
                                                                        header="Encarregado"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        field="cidade"
                                                                        header="Cidade do serviço"
                                                                        style={{ width: "200px" }}
                                                                    />
                                                                    <Column
                                                                        field="equipe"
                                                                        header="Equipe"
                                                                        style={{ width: "150px" }}
                                                                    />
                                                                    <Column
                                                                        field="veiculo.placa"
                                                                        header="Veículo"
                                                                        style={{ width: "100px" }}
                                                                    />
                                                                    <Column
                                                                        field="lucro"
                                                                        header="Lucro (R$)"
                                                                        style={{ width: "100px" }}
                                                                    />
                                                                    <Column
                                                                        body={actionTemplateButtonVer.bind(this)}
                                                                        style={{ textAlign: 'center', width: '200px' }}
                                                                    />
                                                                </DataTable>
                                                            </div>
                                                        </ContainerApontamentosFinalizados>
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                    : i === 1 ? mostrarFinalizadosPodaSemana ?
                                                        <>
                                                            <ContainerApontamentosFinalizados>
                                                                <div className="tabela">
                                                                    <DataTable
                                                                        value={i === 0 ? podaHoje :
                                                                            i === 1 ? podaSemana :
                                                                                i === 2 ? podaMes :
                                                                                    i === 3 ? podaAno :
                                                                                        faturamentoPoda}
                                                                        paginator={(i === 0 ? podaHoje :
                                                                            i === 1 ? podaSemana :
                                                                                i === 2 ? podaMes :
                                                                                    i === 3 ? podaAno :
                                                                                        faturamentoPoda).length > 10}
                                                                        rows={10}
                                                                        emptyMessage={"Nenhum apontamento Finalizado."}
                                                                    >
                                                                        <Column
                                                                            filter={true}
                                                                            field="dataFinal"
                                                                            header="Data"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="tipo"
                                                                            header="Tipo do serviço"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="codigoObra"
                                                                            header="Código do serviço"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="pessoa.supervisor"
                                                                            header="Supervisor"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="pessoa.encarregado"
                                                                            header="Encarregado"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            field="cidade"
                                                                            header="Cidade do serviço"
                                                                            style={{ width: "200px" }}
                                                                        />
                                                                        <Column
                                                                            field="equipe"
                                                                            header="Equipe"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            field="veiculo.placa"
                                                                            header="Veículo"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            field="lucro"
                                                                            header="Lucro (R$)"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            body={actionTemplateButtonVer.bind(this)}
                                                                            style={{ textAlign: 'center', width: '200px' }}
                                                                        />
                                                                    </DataTable>
                                                                </div>
                                                            </ContainerApontamentosFinalizados>
                                                        </>
                                                        :
                                                        <>
                                                        </>
                                                        : i === 2 ? mostrarFinalizadosPodaMes ?
                                                            <>
                                                                <ContainerApontamentosFinalizados>
                                                                    <div className="tabela">
                                                                        <DataTable
                                                                            value={i === 0 ? podaHoje :
                                                                                i === 1 ? podaSemana :
                                                                                    i === 2 ? podaMes :
                                                                                        i === 3 ? podaAno :
                                                                                            faturamentoPoda}
                                                                            paginator={(i === 0 ? podaHoje :
                                                                                i === 1 ? podaSemana :
                                                                                    i === 2 ? podaMes :
                                                                                        i === 3 ? podaAno :
                                                                                            faturamentoPoda).length > 10}
                                                                            rows={10}
                                                                            emptyMessage={"Nenhum apontamento Finalizado."}
                                                                        >
                                                                            <Column
                                                                                filter={true}
                                                                                field="dataFinal"
                                                                                header="Data"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="tipo"
                                                                                header="Tipo do serviço"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="codigoObra"
                                                                                header="Código do serviço"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="pessoa.supervisor"
                                                                                header="Supervisor"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="pessoa.encarregado"
                                                                                header="Encarregado"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                field="cidade"
                                                                                header="Cidade do serviço"
                                                                                style={{ width: "200px" }}
                                                                            />
                                                                            <Column
                                                                                field="equipe"
                                                                                header="Equipe"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                field="veiculo.placa"
                                                                                header="Veículo"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                field="lucro"
                                                                                header="Lucro (R$)"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                body={actionTemplateButtonVer.bind(this)}
                                                                                style={{ textAlign: 'center', width: '200px' }}
                                                                            />
                                                                        </DataTable>
                                                                    </div>
                                                                </ContainerApontamentosFinalizados>
                                                            </>
                                                            :
                                                            <>
                                                            </>
                                                            : i === 3 ? mostrarFinalizadosPodaAno ?
                                                                <>
                                                                    <ContainerApontamentosFinalizados>
                                                                        <div className="tabela">
                                                                            <DataTable
                                                                                value={i === 0 ? podaHoje :
                                                                                    i === 1 ? podaSemana :
                                                                                        i === 2 ? podaMes :
                                                                                            i === 3 ? podaAno :
                                                                                                faturamentoPoda}
                                                                                paginator={(i === 0 ? podaHoje :
                                                                                    i === 1 ? podaSemana :
                                                                                        i === 2 ? podaMes :
                                                                                            i === 3 ? podaAno :
                                                                                                faturamentoPoda).length > 10}
                                                                                rows={10}
                                                                                emptyMessage={"Nenhum apontamento Finalizado."}
                                                                            >
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="dataFinal"
                                                                                    header="Data"
                                                                                    style={{ width: "100px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="tipo"
                                                                                    header="Tipo do serviço"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="codigoObra"
                                                                                    header="Código do serviço"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="pessoa.supervisor"
                                                                                    header="Supervisor"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="pessoa.encarregado"
                                                                                    header="Encarregado"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    field="cidade"
                                                                                    header="Cidade do serviço"
                                                                                    style={{ width: "200px" }}
                                                                                />
                                                                                <Column
                                                                                    field="equipe"
                                                                                    header="Equipe"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    field="veiculo.placa"
                                                                                    header="Veículo"
                                                                                    style={{ width: "100px" }}
                                                                                />
                                                                                <Column
                                                                                    field="lucro"
                                                                                    header="Lucro (R$)"
                                                                                    style={{ width: "100px" }}
                                                                                />
                                                                                <Column
                                                                                    body={actionTemplateButtonVer.bind(this)}
                                                                                    style={{ textAlign: 'center', width: '200px' }}
                                                                                />
                                                                            </DataTable>
                                                                        </div>
                                                                    </ContainerApontamentosFinalizados>
                                                                </>
                                                                :
                                                                <>
                                                                </>
                                                                : mostrarFinalizadosPoda ?
                                                                    <>
                                                                        <ContainerApontamentosFinalizados>
                                                                            <div className="tabela">
                                                                                <DataTable
                                                                                    value={i === 0 ? podaHoje :
                                                                                        i === 1 ? podaSemana :
                                                                                            i === 2 ? podaMes :
                                                                                                i === 3 ? podaAno :
                                                                                                    faturamentoPoda}
                                                                                    paginator={(i === 0 ? podaHoje :
                                                                                        i === 1 ? podaSemana :
                                                                                            i === 2 ? podaMes :
                                                                                                i === 3 ? podaAno :
                                                                                                    faturamentoPoda).length > 10}
                                                                                    rows={10}
                                                                                    emptyMessage={"Nenhum apontamento Finalizado."}
                                                                                >
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="dataFinal"
                                                                                        header="Data"
                                                                                        style={{ width: "100px" }}
                                                                                    />
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="tipo"
                                                                                        header="Tipo do serviço"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="codigoObra"
                                                                                        header="Código do serviço"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="pessoa.supervisor"
                                                                                        header="Supervisor"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="pessoa.encarregado"
                                                                                        header="Encarregado"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        field="cidade"
                                                                                        header="Cidade do serviço"
                                                                                        style={{ width: "200px" }}
                                                                                    />
                                                                                    <Column
                                                                                        field="equipe"
                                                                                        header="Equipe"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        field="veiculo.placa"
                                                                                        header="Veículo"
                                                                                        style={{ width: "100px" }}
                                                                                    />
                                                                                    <Column
                                                                                        field="lucro"
                                                                                        header="Lucro (R$)"
                                                                                        style={{ width: "100px" }}
                                                                                    />
                                                                                    <Column
                                                                                        body={actionTemplateButtonVer.bind(this)}
                                                                                        style={{ textAlign: 'center', width: '200px' }}
                                                                                    />
                                                                                </DataTable>
                                                                            </div>
                                                                        </ContainerApontamentosFinalizados>
                                                                    </>
                                                                    :
                                                                    <>
                                                                    </>
                                                }
                                            </>
                                        ))}
                                    </>
                                    :
                                    itemAtivo === "decp" ?
                                        <>
                                            {graficosDECP.map((grafico, i) => (
                                                <>
                                                    <ContainerGrafico>
                                                        <div className="titulo">
                                                            {i === 0 ? <h1>Faturamento de Hoje</h1> :
                                                                i === 1 ? <h1>Faturamento da Semana</h1> :
                                                                    i === 2 ? <h1>Faturamento do Mês</h1> :
                                                                        i === 3 ? <h1>Faturamento do Ano</h1> :
                                                                            <h1>Faturamento de todos os tempos</h1>}
                                                        </div>
                                                        <Chart type="doughnut"
                                                            data={{
                                                                labels: grafico.labels, datasets: [
                                                                    { data: grafico.data, backgroundColor, hoverBackgroundColor: backgroundColor }
                                                                ]
                                                            }} />
                                                        <div className="titulo">
                                                            <Button style={{
                                                                backgroundColor: '#ce5f52', borderColor: '#e57164',
                                                                WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                                MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                                boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                                                            }} label="Ver Apontamentos" onClick={
                                                                i === 0 ? onChangeMostrarFinalizadosDECPHoje :
                                                                    i === 1 ? onChangeMostrarFinalizadosDECPSemana :
                                                                        i === 2 ? onChangeMostrarFinalizadosDECPMes :
                                                                            i === 3 ? onChangeMostrarFinalizadosDECPAno :
                                                                                onChangeMostrarFinalizadosDECP} className="p-button-raised p-button-rounded" />
                                                        </div>
                                                    </ContainerGrafico>
                                                    {i === 0 ? mostrarFinalizadosDECPHoje ?
                                                        <>
                                                            <ContainerApontamentosFinalizados>
                                                                <div className="tabela">
                                                                    <DataTable
                                                                        value={i === 0 ? decpHoje :
                                                                            i === 1 ? decpSemana :
                                                                                i === 2 ? decpMes :
                                                                                    i === 3 ? decpAno :
                                                                                        faturamentoDECP}
                                                                        paginator={(i === 0 ? decpHoje :
                                                                            i === 1 ? decpSemana :
                                                                                i === 2 ? decpMes :
                                                                                    i === 3 ? decpAno :
                                                                                        faturamentoDECP).length > 10}
                                                                        rows={10}
                                                                        emptyMessage={"Nenhum apontamento Finalizado."}
                                                                    >
                                                                        <Column
                                                                            filter={true}
                                                                            field="dataFinal"
                                                                            header="Data"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="tipo"
                                                                            header="Tipo do serviço"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="codigoObra"
                                                                            header="Código do serviço"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="pessoa.supervisor"
                                                                            header="Supervisor"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="pessoa.encarregado"
                                                                            header="Encarregado"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            field="cidade"
                                                                            header="Cidade do serviço"
                                                                            style={{ width: "200px" }}
                                                                        />
                                                                        <Column
                                                                            field="equipe"
                                                                            header="Equipe"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            field="veiculo.placa"
                                                                            header="Veículo"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            field="lucro"
                                                                            header="Lucro (R$)"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            body={actionTemplateButtonVer.bind(this)}
                                                                            style={{ textAlign: 'center', width: '200px' }}
                                                                        />
                                                                    </DataTable>
                                                                </div>
                                                            </ContainerApontamentosFinalizados>
                                                        </>
                                                        :
                                                        <>
                                                        </>
                                                        : i === 1 ? mostrarFinalizadosDECPSemana ?
                                                            <>
                                                                <ContainerApontamentosFinalizados>
                                                                    <div className="tabela">
                                                                        <DataTable
                                                                            value={i === 0 ? decpHoje :
                                                                                i === 1 ? decpSemana :
                                                                                    i === 2 ? decpMes :
                                                                                        i === 3 ? decpAno :
                                                                                            faturamentoDECP}
                                                                            paginator={(i === 0 ? decpHoje :
                                                                                i === 1 ? decpSemana :
                                                                                    i === 2 ? decpMes :
                                                                                        i === 3 ? decpAno :
                                                                                            faturamentoDECP).length > 10}
                                                                            rows={10}
                                                                            emptyMessage={"Nenhum apontamento Finalizado."}
                                                                        >
                                                                            <Column
                                                                                filter={true}
                                                                                field="dataFinal"
                                                                                header="Data"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="tipo"
                                                                                header="Tipo do serviço"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="codigoObra"
                                                                                header="Código do serviço"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="pessoa.supervisor"
                                                                                header="Supervisor"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="pessoa.encarregado"
                                                                                header="Encarregado"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                field="cidade"
                                                                                header="Cidade do serviço"
                                                                                style={{ width: "200px" }}
                                                                            />
                                                                            <Column
                                                                                field="equipe"
                                                                                header="Equipe"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                field="veiculo.placa"
                                                                                header="Veículo"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                field="lucro"
                                                                                header="Lucro (R$)"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                body={actionTemplateButtonVer.bind(this)}
                                                                                style={{ textAlign: 'center', width: '200px' }}
                                                                            />
                                                                        </DataTable>
                                                                    </div>
                                                                </ContainerApontamentosFinalizados>
                                                            </>
                                                            :
                                                            <>
                                                            </>
                                                            : i === 2 ? mostrarFinalizadosDECPMes ?
                                                                <>
                                                                    <ContainerApontamentosFinalizados>
                                                                        <div className="tabela">
                                                                            <DataTable
                                                                                value={i === 0 ? decpHoje :
                                                                                    i === 1 ? decpSemana :
                                                                                        i === 2 ? decpMes :
                                                                                            i === 3 ? decpAno :
                                                                                                faturamentoDECP}
                                                                                paginator={(i === 0 ? decpHoje :
                                                                                    i === 1 ? decpSemana :
                                                                                        i === 2 ? decpMes :
                                                                                            i === 3 ? decpAno :
                                                                                                faturamentoDECP).length > 10}
                                                                                rows={10}
                                                                                emptyMessage={"Nenhum apontamento Finalizado."}
                                                                            >
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="dataFinal"
                                                                                    header="Data"
                                                                                    style={{ width: "100px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="tipo"
                                                                                    header="Tipo do serviço"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="codigoObra"
                                                                                    header="Código do serviço"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="pessoa.supervisor"
                                                                                    header="Supervisor"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="pessoa.encarregado"
                                                                                    header="Encarregado"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    field="cidade"
                                                                                    header="Cidade do serviço"
                                                                                    style={{ width: "200px" }}
                                                                                />
                                                                                <Column
                                                                                    field="equipe"
                                                                                    header="Equipe"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    field="veiculo.placa"
                                                                                    header="Veículo"
                                                                                    style={{ width: "100px" }}
                                                                                />
                                                                                <Column
                                                                                    field="lucro"
                                                                                    header="Lucro (R$)"
                                                                                    style={{ width: "100px" }}
                                                                                />
                                                                                <Column
                                                                                    body={actionTemplateButtonVer.bind(this)}
                                                                                    style={{ textAlign: 'center', width: '200px' }}
                                                                                />
                                                                            </DataTable>
                                                                        </div>
                                                                    </ContainerApontamentosFinalizados>
                                                                </>
                                                                :
                                                                <>
                                                                </>
                                                                : i === 3 ? mostrarFinalizadosDECPAno ?
                                                                    <>
                                                                        <ContainerApontamentosFinalizados>
                                                                            <div className="tabela">
                                                                                <DataTable
                                                                                    value={i === 0 ? decpHoje :
                                                                                        i === 1 ? decpSemana :
                                                                                            i === 2 ? decpMes :
                                                                                                i === 3 ? decpAno :
                                                                                                    faturamentoDECP}
                                                                                    paginator={(i === 0 ? decpHoje :
                                                                                        i === 1 ? decpSemana :
                                                                                            i === 2 ? decpMes :
                                                                                                i === 3 ? decpAno :
                                                                                                    faturamentoDECP).length > 10}
                                                                                    rows={10}
                                                                                    emptyMessage={"Nenhum apontamento Finalizado."}
                                                                                >
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="dataFinal"
                                                                                        header="Data"
                                                                                        style={{ width: "100px" }}
                                                                                    />
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="tipo"
                                                                                        header="Tipo do serviço"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="codigoObra"
                                                                                        header="Código do serviço"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="pessoa.supervisor"
                                                                                        header="Supervisor"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="pessoa.encarregado"
                                                                                        header="Encarregado"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        field="cidade"
                                                                                        header="Cidade do serviço"
                                                                                        style={{ width: "200px" }}
                                                                                    />
                                                                                    <Column
                                                                                        field="equipe"
                                                                                        header="Equipe"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        field="veiculo.placa"
                                                                                        header="Veículo"
                                                                                        style={{ width: "100px" }}
                                                                                    />
                                                                                    <Column
                                                                                        field="lucro"
                                                                                        header="Lucro (R$)"
                                                                                        style={{ width: "100px" }}
                                                                                    />
                                                                                    <Column
                                                                                        body={actionTemplateButtonVer.bind(this)}
                                                                                        style={{ textAlign: 'center', width: '200px' }}
                                                                                    />
                                                                                </DataTable>
                                                                            </div>
                                                                        </ContainerApontamentosFinalizados>
                                                                    </>
                                                                    :
                                                                    <>
                                                                    </>
                                                                    : mostrarFinalizadosDECP ?
                                                                        <>
                                                                            <ContainerApontamentosFinalizados>
                                                                                <div className="tabela">
                                                                                    <DataTable
                                                                                        value={i === 0 ? decpHoje :
                                                                                            i === 1 ? decpSemana :
                                                                                                i === 2 ? decpMes :
                                                                                                    i === 3 ? decpAno :
                                                                                                        faturamentoDECP}
                                                                                        paginator={(i === 0 ? decpHoje :
                                                                                            i === 1 ? decpSemana :
                                                                                                i === 2 ? decpMes :
                                                                                                    i === 3 ? decpAno :
                                                                                                        faturamentoDECP).length > 10}
                                                                                        rows={10}
                                                                                        emptyMessage={"Nenhum apontamento Finalizado."}
                                                                                    >
                                                                                        <Column
                                                                                            filter={true}
                                                                                            field="dataFinal"
                                                                                            header="Data"
                                                                                            style={{ width: "100px" }}
                                                                                        />
                                                                                        <Column
                                                                                            filter={true}
                                                                                            field="tipo"
                                                                                            header="Tipo do serviço"
                                                                                            style={{ width: "150px" }}
                                                                                        />
                                                                                        <Column
                                                                                            filter={true}
                                                                                            field="codigoObra"
                                                                                            header="Código do serviço"
                                                                                            style={{ width: "150px" }}
                                                                                        />
                                                                                        <Column
                                                                                            filter={true}
                                                                                            field="pessoa.supervisor"
                                                                                            header="Supervisor"
                                                                                            style={{ width: "150px" }}
                                                                                        />
                                                                                        <Column
                                                                                            filter={true}
                                                                                            field="pessoa.encarregado"
                                                                                            header="Encarregado"
                                                                                            style={{ width: "150px" }}
                                                                                        />
                                                                                        <Column
                                                                                            field="cidade"
                                                                                            header="Cidade do serviço"
                                                                                            style={{ width: "200px" }}
                                                                                        />
                                                                                        <Column
                                                                                            field="equipe"
                                                                                            header="Equipe"
                                                                                            style={{ width: "150px" }}
                                                                                        />
                                                                                        <Column
                                                                                            field="veiculo.placa"
                                                                                            header="Veículo"
                                                                                            style={{ width: "100px" }}
                                                                                        />
                                                                                        <Column
                                                                                            field="lucro"
                                                                                            header="Lucro (R$)"
                                                                                            style={{ width: "100px" }}
                                                                                        />
                                                                                        <Column
                                                                                            body={actionTemplateButtonVer.bind(this)}
                                                                                            style={{ textAlign: 'center', width: '200px' }}
                                                                                        />
                                                                                    </DataTable>
                                                                                </div>
                                                                            </ContainerApontamentosFinalizados>
                                                                        </>
                                                                        :
                                                                        <>
                                                                        </>
                                                    }
                                                </>
                                            ))}
                                        </>
                                        :
                                        <>
                                            {graficosDEOP.map((grafico, i) => (
                                                <>
                                                    <ContainerGrafico>
                                                        <div className="titulo">
                                                            {i === 0 ? <h1>Faturamento de Hoje</h1> :
                                                                i === 1 ? <h1>Faturamento da Semana</h1> :
                                                                    i === 2 ? <h1>Faturamento do Mês</h1> :
                                                                        i === 3 ? <h1>Faturamento do Ano</h1> :
                                                                            <h1>Faturamento de todos os tempos</h1>}
                                                        </div>
                                                        <Chart type="doughnut"
                                                            data={{
                                                                labels: grafico.labels, datasets: [
                                                                    { data: grafico.data, backgroundColor, hoverBackgroundColor: backgroundColor }
                                                                ]
                                                            }} />
                                                        <div className="titulo">
                                                            <Button style={{
                                                                backgroundColor: '#ce5f52', borderColor: '#e57164',
                                                                WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                                MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
                                                                boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', marginTop: '10px'
                                                            }} label="Ver Apontamentos" onClick={
                                                                i === 0 ? onChangeMostrarFinalizadosDEOPHoje :
                                                                    i === 1 ? onChangeMostrarFinalizadosDEOPSemana :
                                                                        i === 2 ? onChangeMostrarFinalizadosDEOPMes :
                                                                            i === 3 ? onChangeMostrarFinalizadosDEOPAno :
                                                                                onChangeMostrarFinalizadosDEOP} className="p-button-raised p-button-rounded" />
                                                        </div>
                                                    </ContainerGrafico>
                                                    {i === 0 ? mostrarFinalizadosDEOPHoje ?
                                                        <>
                                                            <ContainerApontamentosFinalizados>
                                                                <div className="tabela">
                                                                    <DataTable
                                                                        value={i === 0 ? deopHoje :
                                                                            i === 1 ? deopSemana :
                                                                                i === 2 ? deopMes :
                                                                                    i === 3 ? deopAno :
                                                                                        faturamentoDEOP}
                                                                        paginator={(i === 0 ? deopHoje :
                                                                            i === 1 ? deopSemana :
                                                                                i === 2 ? deopMes :
                                                                                    i === 3 ? deopAno :
                                                                                        faturamentoDEOP).length > 10}
                                                                        rows={10}
                                                                        emptyMessage={"Nenhum apontamento Finalizado."}
                                                                    >
                                                                        <Column
                                                                            filter={true}
                                                                            field="dataFinal"
                                                                            header="Data"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="tipo"
                                                                            header="Tipo do serviço"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="codigoObra"
                                                                            header="Código do serviço"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="pessoa.supervisor"
                                                                            header="Supervisor"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            filter={true}
                                                                            field="pessoa.encarregado"
                                                                            header="Encarregado"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            field="cidade"
                                                                            header="Cidade do serviço"
                                                                            style={{ width: "200px" }}
                                                                        />
                                                                        <Column
                                                                            field="equipe"
                                                                            header="Equipe"
                                                                            style={{ width: "150px" }}
                                                                        />
                                                                        <Column
                                                                            field="veiculo.placa"
                                                                            header="Veículo"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            field="lucro"
                                                                            header="Lucro (R$)"
                                                                            style={{ width: "100px" }}
                                                                        />
                                                                        <Column
                                                                            body={actionTemplateButtonVer.bind(this)}
                                                                            style={{ textAlign: 'center', width: '200px' }}
                                                                        />
                                                                    </DataTable>
                                                                </div>
                                                            </ContainerApontamentosFinalizados>
                                                        </>
                                                        :
                                                        <>
                                                        </>
                                                        : i === 1 ? mostrarFinalizadosDEOPSemana ?
                                                            <>
                                                                <ContainerApontamentosFinalizados>
                                                                    <div className="tabela">
                                                                        <DataTable
                                                                            value={i === 0 ? deopHoje :
                                                                                i === 1 ? deopSemana :
                                                                                    i === 2 ? deopMes :
                                                                                        i === 3 ? deopAno :
                                                                                            faturamentoDEOP}
                                                                            paginator={(i === 0 ? deopHoje :
                                                                                i === 1 ? deopSemana :
                                                                                    i === 2 ? deopMes :
                                                                                        i === 3 ? deopAno :
                                                                                            faturamentoDEOP).length > 10}
                                                                            rows={10}
                                                                            emptyMessage={"Nenhum apontamento Finalizado."}
                                                                        >
                                                                            <Column
                                                                                filter={true}
                                                                                field="dataFinal"
                                                                                header="Data"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="tipo"
                                                                                header="Tipo do serviço"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="codigoObra"
                                                                                header="Código do serviço"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="pessoa.supervisor"
                                                                                header="Supervisor"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                filter={true}
                                                                                field="pessoa.encarregado"
                                                                                header="Encarregado"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                field="cidade"
                                                                                header="Cidade do serviço"
                                                                                style={{ width: "200px" }}
                                                                            />
                                                                            <Column
                                                                                field="equipe"
                                                                                header="Equipe"
                                                                                style={{ width: "150px" }}
                                                                            />
                                                                            <Column
                                                                                field="veiculo.placa"
                                                                                header="Veículo"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                field="lucro"
                                                                                header="Lucro (R$)"
                                                                                style={{ width: "100px" }}
                                                                            />
                                                                            <Column
                                                                                body={actionTemplateButtonVer.bind(this)}
                                                                                style={{ textAlign: 'center', width: '200px' }}
                                                                            />
                                                                        </DataTable>
                                                                    </div>
                                                                </ContainerApontamentosFinalizados>
                                                            </>
                                                            :
                                                            <>
                                                            </>
                                                            : i === 2 ? mostrarFinalizadosDEOPMes ?
                                                                <>
                                                                    <ContainerApontamentosFinalizados>
                                                                        <div className="tabela">
                                                                            <DataTable
                                                                                value={i === 0 ? deopHoje :
                                                                                    i === 1 ? deopSemana :
                                                                                        i === 2 ? deopMes :
                                                                                            i === 3 ? deopAno :
                                                                                                faturamentoDEOP}
                                                                                paginator={(i === 0 ? deopHoje :
                                                                                    i === 1 ? deopSemana :
                                                                                        i === 2 ? deopMes :
                                                                                            i === 3 ? deopAno :
                                                                                                faturamentoDEOP).length > 10}
                                                                                rows={10}
                                                                                emptyMessage={"Nenhum apontamento Finalizado."}
                                                                            >
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="dataFinal"
                                                                                    header="Data"
                                                                                    style={{ width: "100px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="tipo"
                                                                                    header="Tipo do serviço"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="codigoObra"
                                                                                    header="Código do serviço"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="pessoa.supervisor"
                                                                                    header="Supervisor"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    filter={true}
                                                                                    field="pessoa.encarregado"
                                                                                    header="Encarregado"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    field="cidade"
                                                                                    header="Cidade do serviço"
                                                                                    style={{ width: "200px" }}
                                                                                />
                                                                                <Column
                                                                                    field="equipe"
                                                                                    header="Equipe"
                                                                                    style={{ width: "150px" }}
                                                                                />
                                                                                <Column
                                                                                    field="veiculo.placa"
                                                                                    header="Veículo"
                                                                                    style={{ width: "100px" }}
                                                                                />
                                                                                <Column
                                                                                    field="lucro"
                                                                                    header="Lucro (R$)"
                                                                                    style={{ width: "100px" }}
                                                                                />
                                                                                <Column
                                                                                    body={actionTemplateButtonVer.bind(this)}
                                                                                    style={{ textAlign: 'center', width: '200px' }}
                                                                                />
                                                                            </DataTable>
                                                                        </div>
                                                                    </ContainerApontamentosFinalizados>
                                                                </>
                                                                :
                                                                <>
                                                                </>
                                                                : i === 3 ? mostrarFinalizadosDEOPAno ?
                                                                    <>
                                                                        <ContainerApontamentosFinalizados>
                                                                            <div className="tabela">
                                                                                <DataTable
                                                                                    value={i === 0 ? deopHoje :
                                                                                        i === 1 ? deopSemana :
                                                                                            i === 2 ? deopMes :
                                                                                                i === 3 ? deopAno :
                                                                                                    faturamentoDEOP}
                                                                                    paginator={(i === 0 ? deopHoje :
                                                                                        i === 1 ? deopSemana :
                                                                                            i === 2 ? deopMes :
                                                                                                i === 3 ? deopAno :
                                                                                                    faturamentoDEOP).length > 10}
                                                                                    rows={10}
                                                                                    emptyMessage={"Nenhum apontamento Finalizado."}
                                                                                >
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="dataFinal"
                                                                                        header="Data"
                                                                                        style={{ width: "100px" }}
                                                                                    />
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="tipo"
                                                                                        header="Tipo do serviço"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="codigoObra"
                                                                                        header="Código do serviço"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="pessoa.supervisor"
                                                                                        header="Supervisor"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        filter={true}
                                                                                        field="pessoa.encarregado"
                                                                                        header="Encarregado"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        field="cidade"
                                                                                        header="Cidade do serviço"
                                                                                        style={{ width: "200px" }}
                                                                                    />
                                                                                    <Column
                                                                                        field="equipe"
                                                                                        header="Equipe"
                                                                                        style={{ width: "150px" }}
                                                                                    />
                                                                                    <Column
                                                                                        field="veiculo.placa"
                                                                                        header="Veículo"
                                                                                        style={{ width: "100px" }}
                                                                                    />
                                                                                    <Column
                                                                                        field="lucro"
                                                                                        header="Lucro (R$)"
                                                                                        style={{ width: "100px" }}
                                                                                    />
                                                                                    <Column
                                                                                        body={actionTemplateButtonVer.bind(this)}
                                                                                        style={{ textAlign: 'center', width: '200px' }}
                                                                                    />
                                                                                </DataTable>
                                                                            </div>
                                                                        </ContainerApontamentosFinalizados>
                                                                    </>
                                                                    :
                                                                    <>
                                                                    </>
                                                                    : mostrarFinalizadosDEOP ?
                                                                        <>
                                                                            <ContainerApontamentosFinalizados>
                                                                                <div className="tabela">
                                                                                    <DataTable
                                                                                        value={i === 0 ? deopHoje :
                                                                                            i === 1 ? deopSemana :
                                                                                                i === 2 ? deopMes :
                                                                                                    i === 3 ? deopAno :
                                                                                                        faturamentoDEOP}
                                                                                        paginator={(i === 0 ? deopHoje :
                                                                                            i === 1 ? deopSemana :
                                                                                                i === 2 ? deopMes :
                                                                                                    i === 3 ? deopAno :
                                                                                                        faturamentoDEOP).length > 10}
                                                                                        rows={10}
                                                                                        emptyMessage={"Nenhum apontamento Finalizado."}
                                                                                    >
                                                                                        <Column
                                                                                            filter={true}
                                                                                            field="dataFinal"
                                                                                            header="Data"
                                                                                            style={{ width: "100px" }}
                                                                                        />
                                                                                        <Column
                                                                                            filter={true}
                                                                                            field="tipo"
                                                                                            header="Tipo do serviço"
                                                                                            style={{ width: "150px" }}
                                                                                        />
                                                                                        <Column
                                                                                            filter={true}
                                                                                            field="codigoObra"
                                                                                            header="Código do serviço"
                                                                                            style={{ width: "150px" }}
                                                                                        />
                                                                                        <Column
                                                                                            filter={true}
                                                                                            field="pessoa.supervisor"
                                                                                            header="Supervisor"
                                                                                            style={{ width: "150px" }}
                                                                                        />
                                                                                        <Column
                                                                                            filter={true}
                                                                                            field="pessoa.encarregado"
                                                                                            header="Encarregado"
                                                                                            style={{ width: "150px" }}
                                                                                        />
                                                                                        <Column
                                                                                            field="cidade"
                                                                                            header="Cidade do serviço"
                                                                                            style={{ width: "200px" }}
                                                                                        />
                                                                                        <Column
                                                                                            field="equipe"
                                                                                            header="Equipe"
                                                                                            style={{ width: "150px" }}
                                                                                        />
                                                                                        <Column
                                                                                            field="veiculo.placa"
                                                                                            header="Veículo"
                                                                                            style={{ width: "100px" }}
                                                                                        />
                                                                                        <Column
                                                                                            field="lucro"
                                                                                            header="Lucro (R$)"
                                                                                            style={{ width: "100px" }}
                                                                                        />
                                                                                        <Column
                                                                                            body={actionTemplateButtonVer.bind(this)}
                                                                                            style={{ textAlign: 'center', width: '200px' }}
                                                                                        />
                                                                                    </DataTable>
                                                                                </div>
                                                                            </ContainerApontamentosFinalizados>
                                                                        </>
                                                                        :
                                                                        <>
                                                                        </>
                                                    }
                                                </>
                                            ))}
                                        </>
            }
        </>
    )
}
export default GerenciadorView;