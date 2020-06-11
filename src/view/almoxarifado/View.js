import React from 'react';
import { ContainerInside } from './styles/Style';
const AlmoxarifadoView = props => {
    const { almoxarifados, goTo } = props;
    return (
        <ContainerInside>
            <div className="titulo">
                <h1>Almoxarifados</h1>
            </div>
            <div className="almoxarifados">
                {almoxarifados.map(almoxarifado =>
                    (
                        <div className="almoxarifadosIndividuais">
                            <p>{almoxarifado._id}</p>
                            <button type="button" onClick={() => goTo(`/usuario/estoque?_id=${almoxarifado._id}`)}>Ver Estoque</button>
                        </div>
                    )
                )}
            </div>
        </ContainerInside>
    )
}
export default AlmoxarifadoView;