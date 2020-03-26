import BaseLayout from '../components/layouts/BaseLayout'
import React, { Component } from 'react'

class Index extends Component {
  constructor() {
    super()
    console.log('Construct Index')
    this.state = {
      text: "this init text"
    }
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
    this.setState({ text: "change text" })
  }

  render() {
    console.log('render Index')
    return (
      <BaseLayout>
        <h1>Iam The Index boo yaa</h1>
        {this.state.text}
        <button onClick={() => this.onChangeButtonText()}>Change Text</button>
      </BaseLayout >
    )
  }
}

export default Index
