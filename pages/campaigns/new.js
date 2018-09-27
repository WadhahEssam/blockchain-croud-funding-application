import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Input, Container, Segment } from 'semantic-ui-react'
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import Router from 'next/router';

class NewCampaign extends Component {

  state = {
    value: '',
    loading: false,
    responseMessage: '',
    responseColor: '',
  }

  onSubmit = async (e) => {
    e.preventDefault();

    // creating a new campaign
    // we don't have to specify the amount of gas 
    // cuz metamask is going to do that automatically
    this.setState({ value: '', loading: true, responseMessage: '' });
    const accounts = await web3.eth.getAccounts();
    factory.methods.createCampaign(this.state.value).send({ from: accounts[0] })
    .then(response => {
      Router.push('/#');
    }) 
    .catch(error => {
      this.setState({ loading: false, responseColor: 'red', responseMessage: error.message });
    })
  }; 

  render() {
    return(
        <Layout>

            <Container>

              <h3>Create a Campaign</h3>
              <Form onSubmit={this.onSubmit}>
                <Form.Field>
                  <label>Minimum Contribution :</label>
                  <Input 
                    loading={(this.state.loading)}
                    { ... (this.state.loading) ? {iconPosition: 'left'} : {} }
                    disabled={(this.state.loading)}
                    label="wei" 
                    labelPosition="right" 
                    value={this.state.value} 
                    onChange={e => { this.setState({ value: e.target.value }); } } 
                  />

                </Form.Field>

              {(this.state.responseMessage) ? 
                <Segment inverted color={this.state.responseColor} >
                  {this.state.responseMessage}
                </Segment> :
                ''
              }

                <Button disabled={(this.state.loading)} primary type='submit'>Create</Button>
              </Form>
                            
            </Container>

        </Layout>
    );
  }
}

export default NewCampaign;