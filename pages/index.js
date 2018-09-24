import React from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends React.Component {
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaings().call();
    console.log(campaigns);
    console.log('hey');
  }
  
  render() {
    return(
      <h1>are u happy react</h1>
    );
  }
}

export default CampaignIndex;