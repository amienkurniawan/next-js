import React from 'react'
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../layouts/BasePage';

export default function (Component) {
    return class withAuth extends Component {

        static async getInitialProps(args) {
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);
            return { ...pageProps }
        }

        renderProtectedComponent = () => {
            const { isAuthenticated, user } = this.props;
            console.log("render protected component", this.props)
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