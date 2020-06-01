import React from 'react';
import  InputFloat  from '../../component/input/InputFloat';
import { Container, ContainerInsideUp, ContainerInsideDown } from './styles/Style';
const EstoqueView = props => {
    const { materiais, material, quantidade, handleInputChange, submit } = props;
    return (
        <Container>
            <ContainerInsideUp>
                <InputFloat name="material" label="material" value={material} onChange={handleInputChange} />
                <InputFloat name="quantidade" label="quantidade" value={quantidade} onChange={handleInputChange} />
                <button onClick={submit}>Adicionar Estoque</button>
            </ContainerInsideUp>
            <ContainerInsideDown>
                {materiais.length === 0 ?
                    <h1>Não existem materiais neste almoxarifado</h1>
                    :
                    materiais.map(material =>
                        (
                            <div>
                                <p><bold>_id: </bold>{material._id}</p>
                                <p><bold>Descrição: </bold>{material.descricao}</p>
                                <p><bold>Quantidade: </bold>{material.quantidade} {material.unidadeMedida}</p>
                            </div>
                        )
                    )
                }
            </ContainerInsideDown>
        </Container>
    )
}
export default EstoqueView;