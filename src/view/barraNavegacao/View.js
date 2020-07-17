import React from "react";
import {
    NavbarContainer,
    Container,
    ButtonArea,
    NavbarMobile,
    NavbarListMobile,
    NavbarList,
} from "./Style";
import { Link } from "react-router-dom";
import { RotasUsuario } from '../../Router'
import { signout } from '../../service/LocalAuth';
import { Button } from 'primereact/button'
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";

const UserNavbarHomeView = props => {

    const { goTo, showMobileNavbar, onChangeMobileNavbar, onChangeClearNavbar, clearNavbar } = props;

    return (
        <Container>
            <NavbarContainer>
                <MenuIcon fill="#ffffff" onClick={onChangeMobileNavbar} />
                {!clearNavbar && (
                    <NavbarList>
                        <Link to="/usuario/homepage" >Página inicial</Link>
                        <Link to="/usuario/equipe" >Equipes</Link>
                        <Link to="/usuario/almoxarifado" >Almoxarifados</Link>
                        <Link to="/usuario/apontamento" >Apontamentos</Link>
                        <Link to="/usuario/material" >Materiais</Link>
                        <Link to="/usuario/atividade" >Atividades</Link>
                        <Link to="/usuario/funcionario" >Funcionários</Link>
                        <Link to="/usuario/veiculo" >Veículos</Link>
                    </NavbarList>
                )}
                <ButtonArea className="ButtonArea">
                    <Button style={{ backgroundColor: '#780000' }} label="Sair" onClick={() => {
                        signout();
                        goTo("/")
                    }} className="p-button-raised" />
                </ButtonArea>
            </NavbarContainer>
            <NavbarMobile show={showMobileNavbar}>
                <CloseIcon fill="#ffffff" onClick={onChangeMobileNavbar} />
                <NavbarListMobile>
                    <Link to="/usuario/homepage" >Página inicial</Link>
                    <Link to="/usuario/equipe" >Equipes</Link>
                    <Link to="/usuario/almoxarifado" >Almoxarifados</Link>
                    <Link to="/usuario/apontamento" >Apontamentos</Link>
                    <Link to="/usuario/material" >Materiais</Link>
                    <Link to="/usuario/atividade" >Atividades</Link>
                    <Link to="/usuario/funcionario" >Funcionários</Link>
                    <Link to="/usuario/veiculo" >Veículos</Link>
                    <Link
                        to="/"
                        onClick={(e) => {
                            signout();
                            onChangeMobileNavbar(e);
                        }}
                    >Sair</Link>
                </NavbarListMobile>
            </NavbarMobile>
            <RotasUsuario onChangeClearNavbar={onChangeClearNavbar} />
        </Container >
    );
};

export default UserNavbarHomeView;
