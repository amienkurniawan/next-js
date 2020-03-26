import React, { Component } from 'react'
import Header from '../components/shared/Header'

class cv extends Component {
    constructor() {
        super()
        console.log('Construct cv')
        this.state = {

        }
    }

    componentDidMount() {
        console.log('ComponentDidMount cv');
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate cv');
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount cv')
    }

    render() {
        console.log('render cv')
        return (
            <React.Fragment>
                <Header />
                <h1>CV</h1>
            </React.Fragment>
        )
    }
}
export default cv