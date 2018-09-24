import React from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends React.Component {
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);
  }
  
  render() {
    return(
      <h1>are u happy react</h1>
    );
  }
}

export default CampaignIndex;