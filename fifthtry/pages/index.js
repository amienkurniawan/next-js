import BaseLayout from '../components/layouts/BaseLayout'
import React, { Component } from 'react'
import axios from 'axios';

class Index extends Component {
  constructor() {
    super()
    console.log('Construct Index')
    this.state = {
      text: "this init text"
    }
    // this.onChangeButtonText = this.onChangeButtonText.bind(this);
  }

  componentDidMount() {
    console.log('ComponentDidMount Index');
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate Index');
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount Index')
  }

  onChangeButtonText = () => {
    console.log("onChangeButtonText")
    this.setState({ text: "change text" })
  }

  render() {
    const { propsData, reponseData } = this.props;
    console.log('render Index');
    console.log('propsData', propsData);
    console.log('responseData', reponseData)

    return (
      <BaseLayout>
        <h1>Iam The Index boo yaa</h1>
        {this.state.text}
        {propsData}
        <button onClick={this.onChangeButtonText}>Change Text</button>
      </BaseLayout >
    )
  }

  // execute in server must return object
  static async getInitialProps() {
    let reponseData = {};
    try {
      const response = await axios.get('http://dev.amien.portfolio.local/user');
      reponseData = response.data;
    } catch (error) {
      console.error('error')
    }
    return {
      initialData: [1, 2, 3, 4],
      reponseData
    };
  }

}

export default Index
