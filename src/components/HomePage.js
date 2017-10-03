import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { Header, Grid } from 'semantic-ui-react';

class HomePage extends Component {
  render() {
    return (
      <Grid centered className="App">
        <Grid.Row columns={1}>
          <Header as='h1'>Welcome to E&J Badges</Header>
        </Grid.Row>
        <Grid.Row columns={1}>
          <img src="http://via.placeholder.com/750x250" />
        </Grid.Row>
        <Grid.Row className="featured" columns={1}>
          <Header as='h3'>Featured Badges</Header>
        </Grid.Row>
        <Grid.Row columns={4}>
          <Grid.Column>
            <img src="http://via.placeholder.com/250" />
            <p>Featured Badge 1</p>
          </Grid.Column>
          <Grid.Column>
            <img src="http://via.placeholder.com/250" />
            <p>Featured Badge 2</p>
          </Grid.Column>
          <Grid.Column>
            <img src="http://via.placeholder.com/250" />
            <p>Featured Badge 3</p>
          </Grid.Column>
          <Grid.Column>
            <div className="contact">
              <Header as='h4'>Location</Header>
              <img src="http://via.placeholder.com/200" />
              <p>Find Us Here!</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default HomePage;
