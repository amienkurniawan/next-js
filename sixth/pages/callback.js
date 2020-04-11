import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';
import auth0Client from '../services/auth0';
import { withRouter } from 'next/router';

class Callback extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await auth0Client.handleAuthentication();
        this.props.router.push('/about')
    }
    render() {
        return (
            <BaseLayout>
                <BasePage>
                    <h1> Callback</h1>
                    <p>this user is authenticated</p>
                </BasePage>
            </BaseLayout>

        )
    }
}
export default withRouter(Callback);