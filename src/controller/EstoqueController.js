import React, { Component } from 'react';

import EstoqueView from '../view/estoque/View';
import Api from '../service/ApiBaseAlmoxarifado';

export default class EstoqueController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            material: "",
            quantidade: 0,
            materiais: []
        }
    }

    componentDidMount = () => {
        const _id = this.props.location.search.split("=")[1];
        Api.listarEstoque(_id).then(res => {
            this.setState({ materiais: res.data.materiais })
        }
        );
    }
    
    handleInputChange = (e) => {
        console.log(e)
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    submit = () => {
        const { material, quantidade } = this.state;
        Api.adicionarEstoque({ material, quantidade: Number(quantidade) }).then(res => {
            const materiais = res.data.materiais;
            this.setState({ materiais: materiais })
        })
    }
    
    render() {
        let { materiais } = this.state;
        return (
            <EstoqueView
                materiais={materiais}
                handleInputChange={this.handleInputChange}
                submit={this.submit}
            />
        )
    }
}


