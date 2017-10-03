import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Segment, Input, Button, Icon } from 'semantic-ui-react';
import '../styles/style1.css';
import logo from '../phone.png';

export default class BaseLayout extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu>

          <img className="backgroundColor" src={logo}/>

          <Menu.Item
            name='e&j'
            active={activeItem === 'e&j'}
            onClick={this.handleItemClick}
          >
            E&J
          </Menu.Item>

          <Menu.Item
            name='badges'
            active={activeItem === 'badges'}
            onClick={this.handleItemClick}
          >
            Badges
          </Menu.Item>

          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          >
            Contact Us
          </Menu.Item>
          <Menu.Menu position='right'>
          <Menu.Item >
          <Button animated='vertical'>
            <Button.Content hidden>Shop</Button.Content>
            <Button.Content visible>
            <Icon name='shop' />
            </Button.Content>
            </Button>
            </Menu.Item>
        </Menu.Menu>
        </Menu>

        {this.props.children}

        <Segment textAlign='right'>
        This is a footer.
        </Segment>
      </div>
    )
  }
}
