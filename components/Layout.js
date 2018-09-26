import React, { Component } from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

class Layout extends Component {

  render() {
    return (
      <div>
        <Head>
          <link 
            rel="stylesheet" 
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
          />
        </Head>

        <Header />

        <Container style={{ marginTop: 60 }}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default Layout;