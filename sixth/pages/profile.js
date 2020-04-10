import React, { Component } from 'react'
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';

class profile extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BaseLayout>
                <BasePage>
                    <h1>Profile</h1>
                    <p>this is page profile</p>
                </BasePage>
            </BaseLayout>
        )
    }
}
export default profile;