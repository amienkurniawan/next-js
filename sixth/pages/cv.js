import React, { Component } from 'react'
import Header from '../components/shared/Header';

class cv extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <h1>CV</h1>
                <p>this is page cv</p>
            </React.Fragment>
        )
    }
}

export default cv;