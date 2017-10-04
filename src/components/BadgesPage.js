import React from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';

export default class BadgesPage extends React.Component {
  state = {
    badges: []
  }

  componentDidMount() {
    fetch("https://murmuring-scrubland-72784.herokuapp.com/badges/all")
    .then(response => response.json())
    .then(responseData => this.setState({badges: responseData}))
  }
  render() {
    return (
      <Grid centered>
        <Grid.Row verticalAlign='middle'>
          <Form.Field label='Filter By:' control='select'>
            <option value='category'>Category</option>
            <option value='color'>Color</option>
            <option value='price'>Price</option>
          </Form.Field>
          <Form.Field label='Specific Filter:' control='select'>
            <option value='music'>Music</option>
            <option value='bands'>Bands</option>
          </Form.Field>
          <Button>Filter</Button>
        </Grid.Row>
        <Grid.Row columns={4}>
          <Grid.Column>
            <img src='http://via.placeholder.com/200' alt='placeholder' />
            <p>Name:</p>
            <p>Category:</p>
            <p>Price:</p>
          </Grid.Column>
          <Grid.Column>
            <img src='http://via.placeholder.com/200' alt='placeholder' />
            <p>Name:</p>
            <p>Category:</p>
            <p>Price:</p>
          </Grid.Column>
          <Grid.Column>
            <img src='http://via.placeholder.com/200' alt='placeholder' />
            <p>Name:</p>
            <p>Category:</p>
            <p>Price:</p>
          </Grid.Column>
          <Grid.Column>
            <img src='http://via.placeholder.com/200' alt='placeholder' />
            <p>Name:</p>
            <p>Category:</p>
            <p>Price:</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={4}>
          <Grid.Column>
            <img src='http://via.placeholder.com/200' alt='placeholder' />
            <p>Name:</p>
            <p>Category:</p>
            <p>Price:</p>
          </Grid.Column>
          <Grid.Column>
            <img src='http://via.placeholder.com/200' alt='placeholder' />
            <p>Name:</p>
            <p>Category:</p>
            <p>Price:</p>
          </Grid.Column>
          <Grid.Column>
            <img src='http://via.placeholder.com/200' alt='placeholder' />
            <p>Name:</p>
            <p>Category:</p>
            <p>Price:</p>
          </Grid.Column>
          <Grid.Column>
            <img src='http://via.placeholder.com/200' alt='placeholder' />
            <p>Name:</p>
            <p>Category:</p>
            <p>Price:</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
