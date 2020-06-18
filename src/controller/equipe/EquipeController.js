import React, { Component } from 'react';

import EquipeView from '../../view/equipe/View';
import Api from '../../service/ApiBaseEquipe';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';

export default class AlmoxarifadoController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            equipes: [],
            carregando: false
        }
    }

    componentDidMount = () => {
        this.setState({ carregando: true }, () =>
            Api.listarEquipes().then(res =>
                this.setState({ equipes: res.data.equipes, carregando: false })
            )
        )
    }

    goTo = (path) => {
        this.props.history.push(path);
    }

    actionTemplateButton = (rowData) => <Button style={{
        backgroundColor: '#f79c91', borderColor: '#f7b9b2',
        WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
    }} label="Ver Equipe" onClick={() => this.goTo(`/usuario/equipe/gerenciar?_id=${rowData._id}`)} className="p-button-raised p-button-rounded" />


    render() {
        const { equipes, carregando } = this.state;
        return (
            <>
                {carregando ? <ProgressSpinner />
                    :
                    <>
                        <EquipeView
                            actionTemplateButton={this.actionTemplateButton}
                            equipes={equipes}
                        />
                    </>}
            </>
        )
    }
}


