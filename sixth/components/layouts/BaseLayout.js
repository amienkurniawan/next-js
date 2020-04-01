import React, { Component } from 'react';
import Header from '../shared/Header';

class BaseLayout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                {this.props.children}
            </React.Fragment>
        )
    }
}
export default BaseLayout;