import React, { Component } from 'react'
import Header from '../components/shared/Header';

class about extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <h1> About</h1>
                <p>this is page About</p>
            </React.Fragment>
        )
    }
}
export default about;