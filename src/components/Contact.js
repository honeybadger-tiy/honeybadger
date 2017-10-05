import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import logo from '../images/logo.png';

export default class Contact extends React.Component {
  render() {
    return (
      <Segment.Group raised>
        <Segment>Contact Us</Segment>
        <Segment.Group>
          <Segment>
          You will find our number at the bottom of every beautiful bottle of scotch and whenever you need a patch to snazz up that jacket and/or backpack of yours.
          </Segment>
          <Segment><Image width='400px' alt='logo' src={logo} /></Segment>
        </Segment.Group>
      </Segment.Group>

    )
  }
}
