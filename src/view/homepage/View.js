import React from 'react';
import { Container } from './styles/Style'
const HomePageView = props => {
    const { goTo } = props;
    return (
        <Container>
            <button type="button" onClick={() => goTo("/atividade")}>Atividade</button>
            <button type="button" onClick={() => goTo("/equipe")}>Equipe</button> 
            <button type="button" onClick={() => goTo("/funcionario")}>Funcionário</button> 
            <button type="button" onClick={() => goTo("/veiculo")}>Veículo</button> 
            <button type="button" onClick={() => goTo("/apontamento")}>Apontamento</button> 
        </Container>
    )
}
export default HomePageView;