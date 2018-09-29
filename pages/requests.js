import React, { Component } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
import web3 from '../ethereum/web3';
import compiledCampaign from '../ethereum/build/Campaign.json';
import { Button } from 'semantic-ui-react';

class Requests extends Component {

  state = {
    campaignAddress: null,
  }

  async componentDidMount() {
    this.setState({ campaignAddress: Router.router.query.campaignAddress });
    const campaignContract = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), this.state.campaignAddress);


  }

  visitCreateRequestPage = () => { Router.push({ pathname: '/requests/new', query: { campaignAddress: this.state.campaignAddress } })};

  render() {
    return(
      <Layout>
        <div>{this.state.campaignAddress}</div>
        <Button primary onClick={this.visitCreateRequestPage}>Create Request</Button>
      </Layout>
    );
  }
}

export default Requests;