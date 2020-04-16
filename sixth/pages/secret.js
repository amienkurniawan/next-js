import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';
import withAuth from '../components/hoc/withAuth';
import Axios from 'axios';
import { authHeaders } from '../server/services/authHeader';
class secret extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secretData: []
        }
    }

    async componentDidMount() {
        const data = await authHeaders();
        console.log("data", data)
        this.setState({ secretData: data })
    }
    secretDataDisplay = () => {
        const { secretData } = this.state;
        if (secretData && secretData.length > 0) {
            return secretData.map((data, index) => {
                return (
                    <div key={index}>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                )
            });
        }
    }

    render() {
        const { isAuthenticated, user } = this.props;

        return (
            <BaseLayout isAuthenticated={isAuthenticated} user={user}>
                <BasePage>
                    <h1>Secret</h1>
                    <p>this is secret page</p>
                    <p>{this.props.amien}</p>
                    <h2>Secret Data are</h2>
                    {this.secretDataDisplay()}
                </BasePage>
            </BaseLayout>
        )
    }

    static getInitialProps() {
        const amien = "amien";
        return { amien }
    }
}
export default withAuth(secret);