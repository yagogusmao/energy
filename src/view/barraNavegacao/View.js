import React from "react";
import {
    NavbarContainer,
    Container,
    ButtonArea,
    NavbarList
} from "./Style";
import { Link } from "react-router-dom";
import { RotasUsuario } from '../../Router'
import { signout } from '../../service/LocalAuth';
import { Button } from 'primereact/button'

const UserNavbarHomeView = props => {

    const { goTo } = props;

    return (
        <Container>
            <NavbarContainer>
                <NavbarList>
                    <Link to="/usuario/equipe" >Equipes</Link>
                    <Link to="/usuario/almoxarifado" >Almoxarifados</Link>
                    <Link to="/usuario/apontamento" >Apontamentos</Link>
                    <Link to="/usuario/material" >Materiais</Link>
                    <Link to="/usuario/atividade" >Atividades</Link>
                    <Link to="/usuario/funcionario" >Funcionários</Link>
                    <Link to="/usuario/veiculo" >Veículos</Link>
                </NavbarList>
                <ButtonArea className="ButtonArea">
                    <Button style={{ backgroundColor: '#780000' }} label="Sair" onClick={() => {
                        signout();
                        goTo("/")
                    }} className="p-button-raised" />
                </ButtonArea>
            </NavbarContainer>
            <RotasUsuario />
        </Container >
    );
};

export default UserNavbarHomeView;
