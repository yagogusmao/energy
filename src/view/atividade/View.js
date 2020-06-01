import React from 'react';
import  InputFloat  from '../../component/input/InputFloat';
import { Container, ContainerInsideUp, ContainerInsideDown } from './styles/Style';
const AtividadeView = props => {
    const { _id, nome, tipo, valor, atividades, handleInputChange, submit} = props;
    return (
        <Container>
            <ContainerInsideUp>
                <InputFloat name="_id" label="_id" type="text" value={_id} onChange={handleInputChange}/>
                <InputFloat name="valor" label="valor" type="number" value={valor} onChange={handleInputChange}/>
                <InputFloat name="nome" label="nome" type="text" value={nome} onChange={handleInputChange}/>
                <InputFloat name="tipo" label="tipo" type="text" value={tipo} onChange={handleInputChange}/>
                <button onClick={submit}>Criar Atividade</button>
            </ContainerInsideUp>
            <ContainerInsideDown>
                {atividades.map(atividade => (<p>{atividade.nome}</p>))}
            </ContainerInsideDown>
        </Container>
    )
}
export default AtividadeView;