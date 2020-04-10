import React, { Component } from 'react'
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';

class cv extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BaseLayout>
                <BasePage>
                    <h1>CV</h1>
                    <p>this is page cv</p>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default cv;