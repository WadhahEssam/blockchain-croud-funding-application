import React from 'react';
import factory from '../ethereum/factory';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react'

class CampaignIndex extends React.Component {

  async componentDidMount() {
    console.log(this.props);
  }

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return {
      campaigns
    };
  }
  
  render() {
    return(
      <div>
        <h1>address of the campaign : {this.props.campaigns[0]}</h1>
        <Button>Click Here</Button>
      </div>
    );
  }
}

export default CampaignIndex;  