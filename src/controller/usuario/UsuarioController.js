import React, { Component } from 'react';

import UsuarioView from '../../view/usuario/View';
import Api from '../../service/ApiBaseUsuario';
import { authenticate } from '../../service/LocalAuth';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Growl } from 'primereact/growl';

export default class UsuarioController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            senha: "",
            carregando: false
        }
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    submit = () => {
        const { _id, senha } = this.state;
        this.setState({ carregando: true }, () => {
            Api.login({ _id, senha }).then(res => {
                const { token } = res.data;
                authenticate(token)
                this.props.history.push("/homepage");
            }, erro => {
                const { mensagem } = erro.response.data;
                this.setState({ carregando: false }, () => this.growl.show({ severity: 'error', summary: mensagem }))
            })
        })
    }

    render() {
        let { _id, senha, carregando } = this.state;
        return (
            <>
                {carregando ? <ProgressSpinner />
                    :
                    <>
                        <Growl ref={(el) => this.growl = el} />
                        <UsuarioView
                            _id={_id}
                            senha={senha}
                            submit={this.submit}
                            handleInputChange={this.handleInputChange} />
                    </>
                }
            </>
        );
    }
}


