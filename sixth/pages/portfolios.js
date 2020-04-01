import React, { Component } from 'react'
import Header from '../components/shared/Header';
import Link from 'next/link';
import Axios from 'axios';

class portfolios extends Component {
    constructor(props) {
        super(props);
    }
    renderPortfolio = (portfolios) => {
        return (
            portfolios.map(data => {
                return <li className="porfolio-link"><Link as={`portfolio/${data.id}`} href='portfolio/[id]'><a >{data.title}</a></Link></li>
            })
        )
    }
    render() {
        let { portfolios } = this.props;
        return (
            <React.Fragment>
                <Header />
                <h1>Portfolios</h1>
                <p>this is page portfolios</p>
                <ul>
                    {
                        this.renderPortfolio(portfolios.data)
                    }
                </ul>
            </React.Fragment>
        )
    }
    static async getInitialProps() {
        let portfolios = {};
        try {
            const portfolioData = await Axios.get('http://dev.amien.portfolio.local/articles');
            portfolios = portfolioData.data;
        } catch (error) {
            console.error('error')
        }
        return { portfolios }
    }
}
export default portfolios;