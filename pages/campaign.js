import React, { Component } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
import web3 from '../ethereum/web3';
import compiledCampaign from '../ethereum/build/Campaign.json';
import { Card, Form, Input, Button, Container, Grid, Segment } from 'semantic-ui-react';

class Campaign extends Component {

  state = {
    campaignAddress: undefined,
    loading: false,
    contributionAmount: '',
    isContributer: false,
    userAccount: null,
    campaignContract: null,
    minimumContribution: null,
    balance: null,
    requestsCount: null,
    approversCount: null,
    manager: null,
    responseMessage: null,
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
    const accounts = await web3.eth.getAccounts();
    const isContributer = await campaignContract.methods.approvers(accounts[0]).call();
    this.setState({ 
      userAccount: accounts[0],
      campaignContract, 
      minimumContribution: campaignDetails[0],
      balance: campaignDetails[1],
      requestsCount: campaignDetails[2],
      approversCount: campaignDetails[3],
      manager: campaignDetails[4],
      isContributer
    });
  }

  renderDetails() {
    const items = [
      {
        header: (parseInt(this.state.balance) / 1000000000000000000) + ' Ether',
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

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, responseMessage: null });
    this.state.campaignContract.methods.contribute().send({ from: this.state.userAccount, value: web3.utils.toWei(this.state.contributionAmount, 'ether') })
    .then(async () => {
      this.setState({ loading: false, });
      const campaignDetails = await this.state.campaignContract.methods.getSummary().call();
      const isContributer = await this.state.campaignContract.methods.approvers(this.state.userAccount).call();
      this.setState({ 
        minimumContribution: campaignDetails[0],
        balance: campaignDetails[1],
        requestsCount: campaignDetails[2],
        approversCount: campaignDetails[3],
        manager: campaignDetails[4],
        isContributer
      });
    })
    .catch((error) => {
      this.setState({ loading: false, responseMessage: error.message });
    });
  }

  renderForm = () => {
    return(
      <div>
        <h1>Contribution</h1>
        <Card color="blue" fluid>
          <Card.Content extra>
            <Form onSubmit={this.onSubmit} >
              <Form.Field>
                <label>Amount to Contribute</label>
                <Input
                  loading={(this.state.loading)}
                  { ... (this.state.loading) ? {iconPosition: 'left'} : {} }
                  disabled={(this.state.loading)}
                  label="Ether"
                  labelPosition="right"
                  value={this.state.contributionAmount}
                  onChange={e => {this.setState({ contributionAmount: e.target.value })}}
                />
              </Form.Field>
              <Button disabled={(this.state.loading)} type="submit" primary>Contribute</Button>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }

  renderContributerCard = () => {
    return(
      <div style={{ paddingTop: 50 }} >
        <Card color="green" fluid>
          <Card.Content extra textAlign="center">
            <h3>You are a Contributer</h3>
          </Card.Content>
        </Card>
      </div>
    );
  }

  renderResponse = () => {
    return (
      <Segment inverted color={'red'} >
        {this.state.responseMessage}
      </Segment> 
    );
  }

  render() {
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
              {(!this.state.isContributer) ? this.renderForm() : this.renderContributerCard()}
              {(this.state.responseMessage) ? this.renderResponse() : ''}
            </Grid.Column>

          </Grid.Row>
        </Grid>

      </Layout>
    )
  }
}

export default Campaign;