import React from 'react';
import InputFloat from '../../component/input/InputFloat';
import { Container } from './Styles';
import { Button } from 'primereact/button'
const UsuarioView = props => {
    const { _id, senha, handleInputChange, submit } = props;
    return (
        <Container>
            <div className="titulo">
                <h1 style={{color: 'red'}}>Energy Instalações Elétricas</h1>
            </div>
            <InputFloat name="_id" label="Matrícula" type="text" value={_id} onChange={handleInputChange} />
            <InputFloat name="senha" label="Senha" type="password" value={senha} onChange={handleInputChange} />
            <div className="botao">
                <Button style={{ backgroundColor: '#ce5f52', width: '100px' }} label="Logar" onClick={submit} className="p-button-raised p-button-rounded" />
            </div>
        </Container>
    )
}
export default UsuarioView;