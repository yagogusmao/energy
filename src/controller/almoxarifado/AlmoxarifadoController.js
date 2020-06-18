import React, { Component } from 'react';

import AlmoxarifadoView from '../../view/almoxarifado/View';
import Api from '../../service/ApiBaseAlmoxarifado';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';

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

    actionTemplateButton = (rowData) => <Button style={{
        backgroundColor: '#f79c91', borderColor: '#f7b9b2',
        WebkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
    }} label="Ver estoque" onClick={() => { this.goTo(`/usuario/estoque?_id=${rowData._id}`) }}
        className="p-button-raised p-button-rounded" />

    render() {
        let { almoxarifados, carregando } = this.state;
        return (
            <>
                {carregando ? <ProgressSpinner />
                    :
                    <>
                        <AlmoxarifadoView
                            actionTemplateButton={this.actionTemplateButton}
                            almoxarifados={almoxarifados}
                        />
                    </>}
            </>
        )
    }
}


