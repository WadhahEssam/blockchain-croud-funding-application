import React, { Component } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
import web3 from '../ethereum/web3';
import compiledCampaign from '../ethereum/build/Campaign.json';

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

  async componentDidMount() {
    const campaignContract = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), this.state.campaignAddress);
    const campaignDetails = await campaignContract.methods.getSummary().call();
    console.log(campaignDetails); 
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