import React, { Component } from 'react';

import AlmoxarifadoView from '../../view/almoxarifado/View';
import Api from '../../service/ApiBaseAlmoxarifado';
import { ProgressSpinner } from 'primereact/progressspinner';

export default class AlmoxarifadoController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            almoxarifados: [],
            carregando: false
        }
    }

    componentDidMount = () => {
        this.setState({ carregando: true }, () =>
            Api.listar().then(res =>
                this.setState({ almoxarifados: res.data.almoxarifados, carregando: false })
            )
        )
    }

    goTo = (path) => {
        this.props.history.push(path);
    }

    render() {
        let { almoxarifados, carregando } = this.state;
        return (
            <>
                {carregando ? <ProgressSpinner />
                    :
                    <>
                        <AlmoxarifadoView
                            almoxarifados={almoxarifados}
                            goTo={this.goTo}
                        />
                    </>}
            </>
        )
    }
}


