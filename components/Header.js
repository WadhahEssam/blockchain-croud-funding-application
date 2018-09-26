import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class Header extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
            Campaigns
          </Menu.Item>

          <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
            <Icon name='add' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;