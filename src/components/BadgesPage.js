import React from 'react';
import { Grid, Form, Button, Card, Popup, Image } from 'semantic-ui-react';
import '../styles/badges.css';

export default class BadgesPage extends React.Component {
  state = {
    badges: [],
    cart: []
  }

  componentDidMount() {
    fetch("https://murmuring-scrubland-72784.herokuapp.com/badges/all")
    .then(response => response.json())
    .then(responseData => this.setState({badges: responseData}))
  }

  handleCartAdd = id => () => (
    this.setState({cart: [...this.state.cart, id]})
    // This is for when the cart api endpoint is ready
    // const myOptions = {
    //   method: 'POST',
    //   mode: 'cors',
    //   header: new Headers()
    // }
    // fetch(url, myOptions)
    // .then(response => response.json())
    // .then(() => console.log('You added to cart'))
  )

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
        <Grid.Row>
          {this.state.badges.map(badge => (
            <Card key={badge.id} className='badge'>
              <Image width='100%' src={badge.image_path} alt='placeholder' />
              <Card.Content>
                <Card.Header>Name: {badge.product}</Card.Header>
                <Card.Meta>Category: {badge.category}</Card.Meta>
                <Card.Description>Description: {badge.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>Price: {badge.price}</Card.Content>
              <Popup trigger={<Button onClick={this.handleCartAdd(badge.id)} icon='add' />} content='Add to Cart?' />
            </Card>
          ))}

        </Grid.Row>
      </Grid>

    )
  }
}
