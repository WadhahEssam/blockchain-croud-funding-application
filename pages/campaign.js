import React, { Component } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
import { runInThisContext } from 'vm';

class Campaign extends Component {

  state = {
    campaignAddress: undefined,
  }

  componentWillMount() {
    if (process.browser) {
      // client-side-only code
      this.setState({ campaignAddress: Router.router.query.campaignAddress + '' });
      console.log(Router.router.query.campaignAddress);
    }


  }

  render() {

    return (
      <Layout>
        <div>campaign address : {this.state.campaignAddress}</div>
      </Layout>
    )
  }
}

export default Campaign;