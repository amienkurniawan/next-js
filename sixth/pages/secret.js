import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';
import withAuth from '../components/hoc/withAuth';

class secret extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isAuthenticated, user } = this.props;
        return (
            <BaseLayout isAuthenticated={isAuthenticated} user={user}>
                <BasePage>
                    <h1>Secret</h1>
                    <p>this is secret page</p>
                </BasePage>
            </BaseLayout>
        )
    }
}
export default withAuth(secret);