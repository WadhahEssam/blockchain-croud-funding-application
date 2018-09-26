import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import Router from 'next/router';

class Header extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentWillMount() {
    if (process.browser) {
      // client-side-only code
      console.log(Router.router.query);
    }
  }

  render() {

    const { activeItem } = this.state

    return (
      <Menu fixed={'top'} >
        <Menu.Item>

          <img src='https://cdn-images-1.medium.com/max/1600/0*Vvi2pRn2i827E_YQ.' />
        </Menu.Item>

        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <h4>CroudCoin</h4>
        </Menu.Item>

        <Menu.Menu position='right'>

          <Link href={{ pathname: '/', query: {test: 'test'} }}>
            <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
              Campaigns
            </Menu.Item>
          </Link>

          <Link href={{ pathname: '/campaigns/new', query: {test: 'test'} }}>
            <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
              <Icon name='add circle' />
            </Menu.Item>
          </Link>

        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;