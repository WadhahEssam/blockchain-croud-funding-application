import React, { Component } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
import web3 from '../ethereum/web3';
import compiledCampaign from '../ethereum/build/Campaign.json';
import { Button, Table, Label, Loader } from 'semantic-ui-react';

class Requests extends Component {

  state = {
    campaignAddress: null,
    campaignContract: null,
    requests: [],
    requestCount: null,
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
    const requestCount = await campaignContract.methods.getRequestCount().call();
    const requests = [];
    for (let i = 0; i < requestCount; i++) {
      const request = await campaignContract.methods.requests(i).call();
      requests.push(request);
    }

    this.setState({ 
      requestCount,
      campaignContract,
      requests,
    });
  }

  visitCreateRequestPage = () => { Router.push({ pathname: '/requests/new', query: {campaignAddress: this.state.campaignAddress} })};

  render() {
    const requests = this.state.requests.map((request, index) => {
      return(
        <Table.Row key={index} textAlign={'center'}>
          <Table.Cell>{index+1}</Table.Cell>
          <Table.Cell>{request.description}</Table.Cell>
          <Table.Cell>{web3.utils.fromWei(request.value, 'ether')}</Table.Cell>
          <Table.Cell>{request.recipient}</Table.Cell>
          <Table.Cell>{request.approvalCount}</Table.Cell>
          <Table.Cell><Button color={'green'} inverted>Approve</Button></Table.Cell>
          <Table.Cell><Button color={'red'} inverted>Finalize</Button></Table.Cell>
        </Table.Row>
      );
    })

    const norequests = () => {
      console.log(this.state.requestCount);
      if (this.state.requestCount === 0) {
        return (
          <Table.Row>
            <Table.Cell width={3}>
              <Label ribbon>No Requests Found</Label>
            </Table.Cell>
          </Table.Row>
        );
      } else {
        return (
          <Table.Row textAlign={'center'}>
            <Table.Cell width={3}><Loader active inline /></Table.Cell>
            <Table.Cell width={3}><Loader active inline /></Table.Cell>
            <Table.Cell width={3}><Loader active inline /></Table.Cell>
            <Table.Cell width={3}><Loader active inline /></Table.Cell>
            <Table.Cell width={3}><Loader active inline /></Table.Cell>
            <Table.Cell width={3}><Loader active inline /></Table.Cell>
            <Table.Cell width={3}><Loader active inline /></Table.Cell>
          </Table.Row>
        );
      }
    }

    return(
      <Layout>
        <Table celled>
          <Table.Header>
            <Table.Row textAlign={'center'}>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Amount (Ether)</Table.HeaderCell>
              <Table.HeaderCell>Recipient</Table.HeaderCell>
              <Table.HeaderCell>Approval Count</Table.HeaderCell>
              <Table.HeaderCell>Approve</Table.HeaderCell>
              <Table.HeaderCell>Finalize</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {(this.state.requestCount) ? requests : norequests()}
          </Table.Body>
        </Table>
        <Button primary onClick={this.visitCreateRequestPage}>Create Request</Button>
      </Layout>
    );
  }
}

export default Requests;