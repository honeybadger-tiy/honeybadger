import React from 'react';
import { Grid, Form, Button, Card, Popup, Image } from 'semantic-ui-react';
import '../styles/badges.css';

export default class BadgesPage extends React.Component {
  state = {
    badges: [],
    cart_item: {},
    category: ''
  }

  componentDidMount() {
    fetch("https://murmuring-scrubland-72784.herokuapp.com/badges/all")
    .then(response => response.json())
    .then(responseData => this.setState({badges: responseData}))
  }

  handleCartAdd = (id, price) => () => {
    const body = new FormData();
    body.append('badge_id', id);
    body.append('unit_price', price);
    body.append('quantity', 1);
    return fetch('https://murmuring-scrubland-72784.herokuapp.com/badges/add', {
      method: 'POST',
      mode: 'cors',
      body
    })
    .then(response => response.json())
    .then(() => console.log('You added to cart'))
  }

  handleFilter = e => (
    this.setState({category: e.target.value})
  )

  render() {
    return (
      <Grid centered>
        <Grid.Row verticalAlign='middle'>
          <Form.Field onChange={this.handleFilter} label='Filter By:' control='select'>
            <option hidden placeholder=''></option>
            <option value='Music'>Music</option>
            <option value='Bands'>Bands</option>
            <option value='Farming'>Farming</option>
            <option value='National Parks'>National Parks</option>
            <option value='Movies'>Movies</option>
          </Form.Field>
        </Grid.Row>
        <Grid.Row>
          {this.state.badges.filter(badge => (this.state.category === '' ? true : badge.category === this.state.category)).map(badge => (
            <Card key={badge.id} className='badge'>
              <Image width='100%' src={badge.image_path} alt='placeholder' />
              <Card.Content>
                <Card.Header>Name: {badge.product}</Card.Header>
                <Card.Meta>Category: {badge.category}</Card.Meta>
                <Card.Description>Description: {badge.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>Price: {badge.price}</Card.Content>
              <Popup trigger={<Button onClick={this.handleCartAdd(badge.id, badge.price)} icon='add' />} content='Add to Cart?' />
            </Card>
          ))}

        </Grid.Row>
      </Grid>

    )
  }
}
