import React, { Component } from 'react'
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../layouts/BasePage';

export default function (Component) {
    return class withAuth extends Component {
        renderProtectedComponent = () => {
            const { isAuthenticated, user } = this.props;
            if (isAuthenticated) {
                return <Component {...this.props} />
            } else {
                return (
                    <BaseLayout >
                        <BasePage>
                            <h1>You Have No Authorize</h1>
                            <p>you cant access this page</p>
                        </BasePage>
                    </BaseLayout>
                )
            }
        }
        render() {
            return this.renderProtectedComponent();
        }
    }
}