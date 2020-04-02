import React, { Component } from 'react'
// import { withRouter } from 'next/router';
import Header from '../../components/shared/Header';
import Axios from 'axios';


class portfolio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { response } = this.props;
        return (
            <React.Fragment>
                <Header />
                <h1>Portfolio</h1>
                <p>this is portfolio</p>
                <p>title : {response.title}</p>
                <p>body : {response.body}</p>
                <p>this is id = {response.id}</p>
            </React.Fragment>
        )
    }
    static async getInitialProps(context) {
        let id = context.query.id;
        let response = {};
        try {
            const respoonseData = await Axios.get(`http://dev.amien.portfolio.local/articles/${id}`);
            response = respoonseData.data;
        } catch (error) {
            console.log("error")
        }
        return { response }
    }
}
export default portfolio;