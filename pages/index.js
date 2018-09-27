import React from 'react';
import factory from '../ethereum/factory';
import { Button, Card, } from 'semantic-ui-react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Router from 'next/router';

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
        description: <Link href={{ pathname:'/campaign', query: { campaignAddress: address } }}><a>View Campaign</a></Link>,
        fluid: true
      }
    });

    return <Card.Group items={items}/>
  }
  
  render() {
    return(
      
      <div>

        <Layout>

          <h3>Open Campaigns</h3>

          <Button 
            floated="right"
            content='Create Campaign' 
            icon='plus'
            labelPosition='left' 
            primary
            onClick={()=>{Router.push('/campaigns/new')}}
          />

          {this.renderCampaigns()}

        </Layout>

      </div>
    );
  }
}

export default CampaignIndex;  