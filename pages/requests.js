import React, { Component } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';

class Requests extends Component {

  state = {
    campaignAddress: null,
  }

  componentDidMount() {
    this.setState({ campaignAddress: Router.router.query.campaignAddress });
  }

  render() {
    return(
      <Layout>
        <div>{this.state.campaignAddress}</div>
      </Layout>
    );
  }
}

export default Requests;