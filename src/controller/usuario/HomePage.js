import React, { Component } from 'react';

import HomePageView from '../../view/homepage/View';

export default class HomePageController extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    goTo = (path) => this.props.history.push(path);
    //this.props.history.goBack()
    
    render() {
        return (
            <HomePageView goTo={this.goTo}/>
        );
    }
}


