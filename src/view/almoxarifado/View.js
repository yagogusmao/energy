import React from 'react';
import { Container, ContainerInside } from './styles/Style';
const AlmoxarifadoView = props => {
    const { almoxarifados, goTo} = props;
    return (
        <Container>
            <ContainerInside>
                {almoxarifados.map(almoxarifado => 
                    (
                        <div>
                            <p>{almoxarifado._id}</p>
                            <button type="button" onClick={() => goTo(`/estoque?_id=${almoxarifado._id}`)}>Ver Estoque</button>
                        </div>
                    )
                )}
            </ContainerInside>
        </Container>
    )
}
export default AlmoxarifadoView;