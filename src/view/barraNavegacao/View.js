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

const UserNavbarHomeView = props => {

    const { goTo } = props;

    return (
        <Container>
            <NavbarContainer>
                <NavbarList>
                    <Link to="/usuario/almoxarifado" >Almoxarifados</Link>
                    <Link to="/usuario/material" >Materiais</Link>
                    <Link to="/usuario/atividade" >Atividades</Link>
                </NavbarList>
                <ButtonArea className="ButtonArea">
                    <button style={{padding: '5px'}} onClick={() => {
                        signout();
                        goTo("/")
                    }}>Sair</button>
                </ButtonArea>
            </NavbarContainer>
            <RotasUsuario />
        </Container >
    );
};

export default UserNavbarHomeView;
