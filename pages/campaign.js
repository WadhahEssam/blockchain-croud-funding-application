import React, { Component } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
import web3 from '../ethereum/web3';
import compiledCampaign from '../ethereum/build/Campaign.json';
import { Card, Form, Input, Button, Container, Grid } from 'semantic-ui-react';

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
    this.setState({ 
      minimumContribution: campaignDetails[0],
      balance: campaignDetails[1],
      requestsCount: campaignDetails[2],
      approversCount: campaignDetails[3],
      manager: campaignDetails[4],
    });
  }

  renderDetails() {
    const items = [
      {
        header: this.state.balance,
        description: 'Campaign Balance',
        fluid: true,
      }, 
      {
        header: this.state.minimumContribution,
        description: 'Minimum Contribution',
        fluid: true,
      }, 
      {
        header: this.state.requestsCount,
        description: 'Requests',
        fluid: true,
      }, 
      {
        header: this.state.approversCount,
        description: 'Contributers',
        fluid: true,
      }
    ]

    return <Card.Group itemsPerRow={2} items={items}/>
  }

  render() {
    console.log(this.state);
    return (
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10} >
              <h1>Campaign Details</h1>
              <Card header={this.state.manager} meta={'Address of the Manager'} style={{ overflowWrap: 'break-word' }} description={'The manager created this campaign and can create requests.'} fluid />
              {this.renderDetails()}

              <Container textAlign="center" style={{ padding: 20 }}>
                <Button color="green" >View Requests</Button>
              </Container>
            </Grid.Column>

            <Grid.Column width={6} >
              <h1>Contribution</h1>
              <Card color="blue" fluid>
                <Card.Content extra>
                  <Form>
                    <Form.Field>
                      <label>Amount to Contribute</label>
                      <Input
                        label="Ether"
                        labelPosition="right"
                      />
                    </Form.Field>
                    <Button primary>Contribute</Button>
                  </Form>
                </Card.Content>
              </Card>
            </Grid.Column>

          </Grid.Row>
        </Grid>

      </Layout>
    )
  }
}

export default Campaign;