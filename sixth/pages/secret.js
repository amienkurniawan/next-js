import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';

class secret extends Component {
    constructor(props) {
        super(props);
    }
    renderSecretPage = () => {
        const { isAuthenticated, user } = this.props;
        if (isAuthenticated) {
            return (
                <BaseLayout isAuthenticated={isAuthenticated} user={user}>
                    <BasePage>
                        <h1>Secret</h1>
                        <p>this is secret page</p>
                    </BasePage>
                </BaseLayout>
            )
        } else {
            return (
                <BaseLayout isAuthenticated={isAuthenticated} user={user}>
                    <BasePage>
                        <h1>You Have No Authorize to access this page</h1>
                    </BasePage>
                </BaseLayout>
            )
        }
    }
    render() {
        return this.renderSecretPage();
    }
}
export default secret;