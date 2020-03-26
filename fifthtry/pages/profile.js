import React, { Component } from 'react'
import Header from '../components/shared/Header'

class profile extends Component {
    constructor() {
        super()
        console.log('Construct profile')
        this.state = {

        }
    }

    componentDidMount() {
        console.log('ComponentDidMount profile');
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate profile');
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount profile')
    }

    render() {
        console.log('render profile')
        return (
            <React.Fragment>
                <Header />
                <h1>profile</h1>
            </React.Fragment>
        )
    }
}
export default profile