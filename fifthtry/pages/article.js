import React, { Component } from 'react'
import Header from '../components/shared/Header';
import { withRouter } from 'next/router';
import Axios from 'axios';

class article extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    componentWillUnmount() {

    }
    render() {
        const { responseData } = this.props;
        return (
            <React.Fragment>
                <Header />
                <h1>this is Article Page</h1>
                <h2>Title {responseData.title}</h2>
                <p>{responseData.body}</p>
            </React.Fragment>
        )
    }

    static async getInitialProps({ query }) {
        let id = query.id
        let responseData = {};
        try {
            const response = await Axios.get(`http://dev.amien.portfolio.local/articles/${id}`);
            responseData = response.data;
        } catch (error) {
            console.log("error", error);
        }
        return {
            responseData
        };
    }
}
export default withRouter(article);