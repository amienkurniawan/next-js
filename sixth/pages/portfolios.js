import React, { Component } from 'react'
import Header from '../components/shared/Header';
import Link from 'next/link';
import Axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';

class portfolios extends Component {
    constructor(props) {
        super(props);
    }

    renderPortfolio = (portfolios) => {
        if (!portfolios) {
            return;
        }
        return (
            portfolios.map(data => {
                return <li key={data.id} className="porfolio-link"><Link as={`portfolio/${data.id}`} href='portfolio/[id]'><a >{data.title}</a></Link></li>
            })
        )
    }

    render() {
        let { portfolios, isAuthenticated } = this.props;
        return (

            <BaseLayout isAuthenticated={isAuthenticated}>
                <BasePage>
                    <h1>Portfolios</h1>
                    <p>this is page portfolios</p>
                    <ul>
                        {
                            this.renderPortfolio(portfolios.data)
                        }
                    </ul>
                </BasePage>
            </BaseLayout>

        )
    }

    static async getInitialProps() {
        let portfolios = {};
        try {
            const portfolioData = await Axios.get('http://dev.amien.portfolio.local/articles');
            portfolios = portfolioData.data;
        } catch (error) {
            console.log("Internal Server Error")
        }
        return { portfolios }
    }
}
export default portfolios;