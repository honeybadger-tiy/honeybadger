import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

export default class BaseLayout extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu>
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
        </Menu>

        {this.props.children}

        <Segment textAlign='right'>
        This is a footer.
        </Segment>
      </div>
    )
  }
}
