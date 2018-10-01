import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Input, Button } from 'semantic-ui-react'; 
import Router from 'next/router';
import web3 from '../../ethereum/web3';
import compiledCampaign from '../../ethereum/build/Campaign.json';

class NewRequest extends Component {

  state = {
    description: '',
    value: '',
    recipient: '',
    campaignAddress: null,
    campaignContract: null,
    userAccount: null,
  }

  componentWillMount() {
    if (process.browser) {
      // client-side-only code
      this.setState({ campaignAddress: Router.router.query.campaignAddress + '' });
    }
  }

  async componentDidMount() {
    const campaignContract = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), this.state.campaignAddress);
    const accounts = await web3.eth.getAccounts();

    this.setState({
      campaignContract,
      userAccount: accounts[0],
    })
  }

  onSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    this.state.campaignContract.methods
    .createRequest(this.state.description, web3.utils.toWei(this.state.value, 'ether'), this.state.recipient)
    .send({ from: this.state.userAccount })
    .then(() => {
      console.log('the request is created');
    })
    .catch(e => {
      console.log(e);
    })
  };

  render() {
    return(
      <Layout>
        <Container>
          <h3>Create a Request</h3>
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Description</label>
              <Input 
                value={this.state.description}
                onChange={(e) => { this.setState({ description: e.target.value }); }}
              />
            </Form.Field>

            <Form.Field>
              <label>Value</label>
              <Input 
                label="Ether"
                labelPosition="right"
                value={this.state.value}
                onChange={(e) => { this.setState({ value: e.target.value }); }}
              />
            </Form.Field>

            <Form.Field>
              <label>Recipient Address</label>
              <Input 
                value={this.state.recipient}
                onChange={(e) => { this.setState({ recipient: e.target.value }); }}
              />
            </Form.Field>

            <Button primary>Create</Button>
          </Form>
        </Container>
      </Layout>
    );
  }
}

export default NewRequest;