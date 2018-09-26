import React from 'react';
import factory from '../ethereum/factory';
import { Button, Card } from 'semantic-ui-react';
import Layout from '../components/Layout';

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

  renderCampaigns() { 
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      }
    });

    return <Card.Group items={items}/>
  }
  
  render() {
    return(
      
      <div>
        <link 
          rel="stylesheet" 
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
        />

        <Layout>
          <h3>Open Campaigns</h3>
          {this.renderCampaigns()}

          <Button 
            content='Create Campaign' 
            icon='plus'
            labelPosition='left' 
            primary
          />
        </Layout>

      </div>
    );
  }
}

export default CampaignIndex;  