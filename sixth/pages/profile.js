import React, { Component } from 'react'
import Header from '../components/shared/Header';

class profile extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <h1>Profile</h1>
                <p>this is page profile</p>
            </React.Fragment>
        )
    }
}
export default profile;