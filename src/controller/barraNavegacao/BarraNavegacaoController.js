import React, { Component } from "react";
import UserNavbar from '../../view/barraNavegacao/View';

class NavbarController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
            isAuthenticate: false,
            showMobileNavbar: false,
            clearNavbar: false,
        };
    }

    onChangeMobileNavbar = () => {
        this.setState({ showMobileNavbar: !this.state.showMobileNavbar });
        console.log(this.state.showMobileNavbar)
    };

    goTo = (path) => {
        this.props.history.push(path);
    };

    onChangeClearNavbar = (bool) => this.setState({ clearNavbar: bool });

    render() {
        const { showMobileNavbar, clearNavbar } = this.state;

        return (
            <>
                <UserNavbar
                    goTo={this.goTo}
                    showMobileNavbar={showMobileNavbar}
                    onChangeMobileNavbar={this.onChangeMobileNavbar}
                    onChangeClearNavbar={this.onChangeClearNavbar}
                    clearNavbar={clearNavbar}
                />
            </>
        );

    }
}

export default NavbarController;
