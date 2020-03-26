import React, { Component } from 'react'
import Header from '../components/shared/Header'

class about extends Component {
    constructor() {
        super()
        console.log('Construct about')
        this.state = {

        }
    }

    componentDidMount() {
        console.log('ComponentDidMount about');
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate about');
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount about')
    }

    render() {
        console.log('render about')
        return (
            <React.Fragment>
                <Header />
                <h1>About</h1>
            </React.Fragment>
        )
    }
}
export default about