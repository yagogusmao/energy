import React, { Component } from 'react';

import AlmoxarifadoView from '../../view/almoxarifado/View';
import Api from '../../service/ApiBaseAlmoxarifado';

export default class AlmoxarifadoController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            almoxarifados: []
        }
    }

    componentDidMount = () => {
        Api.listar().then(res => this.setState({ almoxarifados: res.data.almoxarifados }));
    }

    goTo = (path) => {
        this.props.history.push(path);
    }

    render() {
        let { almoxarifados } = this.state;
        return (
            <AlmoxarifadoView
                almoxarifados={almoxarifados}
                goTo={this.goTo}
            />
        )
    }
}


