import React from 'react';
import { ContainerInside } from './styles/Style';
import { Button } from 'primereact/button'
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
                            <Button style={{backgroundColor: '#ce5f52'}} label="Ver Estoque" onClick={() => goTo(`/usuario/estoque?_id=${almoxarifado._id}`)} className="p-button-raised p-button-rounded" />
                        </div>
                    )
                )}
            </div>
        </ContainerInside>
    )
}
export default AlmoxarifadoView;