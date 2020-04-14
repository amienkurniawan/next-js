import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';
import withAuth from '../components/hoc/withAuth';
import Axios from 'axios';

class secret extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    async componentDidMount() {
        const response = await Axios.get('/api/v1/secret');
        const data = response.data;
        this.setState({ data })
    }
    secretDataDisplay = () => {
        const { data } = this.state;
        if (data && data.length > 0) {
            return data.map((data, index) => {
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
        console.log("secret", this.props)
        console.log("this state ", this.state)
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