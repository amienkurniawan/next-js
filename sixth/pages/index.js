import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import { Button } from 'reactstrap';


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
        <Button color="danger">danger</Button>
      </BaseLayout>
    )
  }

}
export default Index;