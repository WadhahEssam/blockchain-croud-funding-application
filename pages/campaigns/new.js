import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Input, Container } from 'semantic-ui-react'

class NewCampaign extends Component {

  state = {
    value: '',
  }
  render() {
    return(
        <Layout>

            <Container>

              <h3>Create a Campaign</h3>
              <Form onSubmit={(e) => { e.preventDefault() }}>
                <Form.Field>
                  <label>Minimum Contribution :</label>
                  <Input 
                    label="wei" 
                    labelPosition="right" 
                    type="number" 
                    value={this.state.value} 
                    onChange={e => { this.setState({ value: e.target.value }); } } 
                  />

                </Form.Field>

                <Button primary type='submit'>Create</Button>
              </Form>
                            
            </Container>
        </Layout>
    );
  }
}

export default NewCampaign;