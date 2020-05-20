import React, { Component } from 'react';

import HomePageView from '../../view/homepage/View';

export default class HomePageController extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <HomePageView message={"topperson"}/>
               
        );
    }
}


