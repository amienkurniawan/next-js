import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentDidUpdate() {

  }
  render() {
    return (
      <BaseLayout>
        <h1>Home</h1>
        <p>this is Home Page</p>
      </BaseLayout>
    )
  }

}
export default Index;