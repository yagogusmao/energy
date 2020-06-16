import React from 'react';
import { ContainerInside } from './Style';
import { Button } from 'primereact/button'
const EquipeView = props => {
    const { equipes, goTo } = props;
    return (
        <ContainerInside>
            <div className="titulo">
                <h1>Equipes</h1>
            </div>
            <div className="equipes">
                {equipes.map(equipe =>
                    (
                        <div className="equipesIndividuais">
                            <div class="apresentacao">
                                <strong style={{marginTop: '5px'}}>{equipe._id}</strong>
                                <p>Local: {equipe.local}</p>
                                <p style={{marginBottom: '5px'}}>Tipo: {equipe.tipo}</p>
                            </div>
                            <Button style={{ backgroundColor: '#ce5f52' }} label="Ver Equipe" onClick={() => goTo(`/usuario/equipe/gerenciar?_id=${equipe._id}`)} className="p-button-raised p-button-rounded" />
                        </div>
                    )
                )}
            </div>
        </ContainerInside>
    )
}
export default EquipeView;