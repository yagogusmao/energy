import React, { Component } from "react";
import UserNavbar from '../../view/barraNavegacao/View';
import { getAuthenticate } from '../../service/LocalAuth';

class UserNavbarController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
            isAuthenticate: false,
            showMobileNavbar: false
        };

    }

    goTo = path => {
        this.props.history.push(path);
    };

    render() {
        const { isAdmin, isAuthenticate, showMobileNavbar } = this.state;

        return (
            <>
                <UserNavbar
                    goTo={this.goTo}
                />
            </>
        );

    }
}

export default UserNavbarController;
