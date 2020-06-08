import React from 'react';
import InputFloat from '../../component/input/InputFloat';
import { Container } from './Styles';
const UsuarioView = props => {
    const { _id, senha, handleInputChange, submit } = props;
    return (
        <Container>
            <InputFloat name="_id" label="Matrícula" type="text" value={_id} onChange={handleInputChange} />
            <InputFloat name="senha" label="Senha" type="password" value={senha} onChange={handleInputChange} />
            <button onClick={submit}>Logar</button>
        </Container>
    )
}
export default UsuarioView;