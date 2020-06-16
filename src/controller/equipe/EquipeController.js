import React, { Component } from 'react';

import EquipeView from '../../view/equipe/View';
import Api from '../../service/ApiBaseEquipe';
import { ProgressSpinner } from 'primereact/progressspinner';

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

    render() {
        const { equipes, carregando } = this.state;
        return (
            <>
                {carregando ? <ProgressSpinner />
                    :
                    <>
                        <EquipeView
                            equipes={equipes}
                            goTo={this.goTo}
                        />
                    </>}
            </>
        )
    }
}


