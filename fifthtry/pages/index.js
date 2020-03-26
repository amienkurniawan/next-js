import BaseLayout from '../components/layouts/BaseLayout'
import React, { Component } from 'react'
import { ButtonDropdown } from 'reactstrap'

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

  onChangeButtonText() {
    console.log("onChangeButtonText")
    this.setState({ text: "change text" })
  }

  render() {
    console.log('render Index')
    return (
      <BaseLayout>
        <h1>Iam The Index boo yaa</h1>
        {this.state.text}
        <button onClick={this.onChangeButtonText}>Change Text</button>
      </BaseLayout >
    )
  }
}

export default Index
