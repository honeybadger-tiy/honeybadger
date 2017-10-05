import React, { Component } from 'react';
import kiosk from '../images/kiosk.jpg';

import '../styles/App.css';
import { Header, Grid, Card, Image } from 'semantic-ui-react';

const GOOGLE_API_KEY = 'AIzaSyB1MCzzxgHHUOwazCAJc6PUKBZw_qgYeus';
class HomePage extends Component {
  state = {
    featured: []
  }
  componentDidMount() {
    fetch('https://murmuring-scrubland-72784.herokuapp.com/badges')
    .then(response => response.json())
    .then(responseData => this.setState({featured: responseData}))
  }
  render() {
    return (
      <Grid centered className="App">
        <Grid.Row columns={1}>
          <Header as='h1'>Welcome to E&J Badges</Header>
        </Grid.Row>
        <Grid.Row columns={1}>
          <div className="road">
            <div className="text-wrapper">
              <span>Badges for wherever the road takes you </span>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row className="featured" columns={1}>
          <Header as='h3'>Featured Badges</Header>
        </Grid.Row>
        <Grid.Row columns={4}>
          {this.state.featured.map(badge => (
            <Grid.Column>

            <Card key={badge.id}>
              <Image alt='' src={badge.image_path} />
              <Card.Content>
                <Card.Header>Name: {badge.product}</Card.Header>
              </Card.Content>
            </Card>
            </Grid.Column>

          ))}
          <Grid.Column>
            <div className="contact">
              <Header as='h4'>Location</Header>
              <img width='200px' alt='kiosk' src={kiosk} />
              <p>Address: 49 W Maryland St, Indianapolis, IN 46204</p>
              <p>Hours of Operation: 2:00am - 8:00am</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default HomePage;
