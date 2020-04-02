import React, { Component } from 'react'
import { withRouter } from 'next/router';
import Header from '../../components/shared/Header';


class portfolio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <h1>Portfolio</h1>
                <p>this is portfolio</p>
                <p>this is id = {this.props.router.query.id}</p>
            </React.Fragment>
        )
    }
    static async getInitialProps({ context }) {

        return {}
    }
}
export default withRouter(portfolio);