import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Input, Button, Segment } from 'semantic-ui-react'; 
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
    errorMessage: '',
    loading: false,
    notAllowed: false,
  }

  componentWillMount() {
    if (process.browser) {
      // client-side-only code
      this.setState({ campaignAddress: Router.router.query.campaignAddress + '' });
    }
  }

  async componentDidMount() {
    const campaignContract = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), this.state.campaignAddress);
    const manager = await campaignContract.methods.manager().call();
    const accounts = await web3.eth.getAccounts();
    if(manager != accounts[0]) {
      this.setState({ notAllowed: true, errorMessage: 'You are not the manager' })
    }

    this.setState({
      campaignContract,
      userAccount: accounts[0],
    })
  }

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, errorMessage: '', })
    
    try {
      this.state.campaignContract.methods
      .createRequest(this.state.description, web3.utils.toWei(this.state.value, 'ether'), this.state.recipient)
      .send({ from: this.state.userAccount })
      .then(() => {
        console.log('the request is created');
        Router.push({ pathname: '/requests', query: { campaignAddress: this.state.campaignAddress }})
      })
      .catch(e => {
        this.setState({ errorMessage: e.message, loading: false });
      })
    } catch(e) {
      this.setState({ errorMessage: e.message, loading: false });
    }

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
              disabled={(this.state.loading || this.state.notAllowed)}
              value={this.state.description}
              onChange={(e) => { this.setState({ description: e.target.value }); }}
              />
            </Form.Field>

            <Form.Field>
              <label>Value</label>
              <Input 
              label="Ether"
              labelPosition="right"
              disabled={(this.state.loading || this.state.notAllowed)}
              value={this.state.value}
              onChange={(e) => { this.setState({ value: e.target.value }); }}
              />
            </Form.Field>

            <Form.Field>
              <label>Recipient Address</label>
              <Input 
              disabled={(this.state.loading || this.state.notAllowed)}
              value={this.state.recipient}
              onChange={(e) => { this.setState({ recipient: e.target.value}); }}
              />
            </Form.Field>

            {(this.state.errorMessage) ? 
              <Segment inverted color="red" >
                {this.state.errorMessage}
              </Segment> :
              ''
            }

            <Button 
            primary
            loading={(this.state.loading)}
            disabled={(this.state.notAllowed)}
            >
            Create
            </Button>
          </Form>
        </Container>
      </Layout>
    );
  }
}

export default NewRequest;