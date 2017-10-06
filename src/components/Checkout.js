import React,  { Component } from 'react';
import '../styles/App.css';
import { Button, Form, Checkbox, Grid, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Checkout extends Component{

  state={
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    Paddress1: "",
    Paddress2: "",
    Pcity: "",
    Pzip: "",
    Pstate: "",
    cc: "",
    cart: []
  }


  componentDidMount() {
    fetch("https://murmuring-scrubland-72784.herokuapp.com/badges/all")
    .then(response => response.json())
    .then(responseData => this.setState({cart: responseData}))
  }


  handle = field => e => this.setState({[field]: e.target.value})

  render(){

    const confirmationRunner = () => {
      console.log('Placing Order!');
    };

    const sameAsShipping = () => {
        console.log("Payment Address Same as Shipping Address")
        this.setState({Paddress1: this.state.address1})
        this.setState({Paddress2: this.state.address2})
        this.setState({Pcity: this.state.city})
        this.setState({Pstate: this.state.state})
        this.setState({Pzip: this.state.zip})
    };


    return(
      <div className="cartPageHolder">


      <div className="itemHolder">

      <Form>
    <h3>1. Shipping Address</h3>
    <Form.Group widths='equal'>
      <Form.Input value={this.state.firstName} onChange={this.handle('firstName')} label='First Name' placeholder='First Name' />
      <Form.Input value={this.state.lastName} onChange={this.handle('lastName')} label='Last Name' placeholder='Last Name' />
    </Form.Group>
    <Form.Field>
      <label>Address Line 1</label>
      <input value={this.state.address1} onChange={this.handle('address1')} placeholder='123 Park Ave.' />
    </Form.Field>
    <Form.Field>
      <label>Address Line 2</label>
      <input value={this.state.address2} onChange={this.handle('address2')} placeholder='suite 555' />
    </Form.Field>

    <Form.Group widths='equal'>
      <Form.Input value={this.state.city} onChange={this.handle('city')} label='City' placeholder='City' />
      <Form.Input value={this.state.state} onChange={this.handle('state')} label='State' placeholder='State' />
      <Form.Input value={this.state.zip} onChange={this.handle('zip')} label='Zip Code' placeholder='Zip Code' />
    </Form.Group>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <h3>2. Payment Method</h3>
    <Form.Field>
      <Checkbox toggle onClick={sameAsShipping} label='Billing same as Shipping' />
    </Form.Field>
    <Form.Field >
      <Form.Input value={this.state.email} onChange={this.handle('email')} label='E-mail' placeholder='bill@gmail.com' />
    </Form.Field>
    <Form.Field>
      <label>Card Number</label>
      <Form.Input value={this.state.cc} onChange={this.handle('cc')} label='Credit Card' placeholder='bill@gmail.com' />
    </Form.Field>
    <Form.Group widths='equal'>
      <Form.Input label='Expires' placeholder='Expires' />
      <Form.Input label='Security Code' placeholder='Security Code' />
    </Form.Group>
    <Form.Field>
      <label>Address Line 1</label>
      <input value={this.state.Paddress1} onChange={this.handle('Paddress1')} placeholder='123 Park Ave.' />
    </Form.Field>
    <Form.Field>
      <label>Address Line 2</label>
      <input value={this.state.Paddress2} onChange={this.handle('Paddress2')} placeholder='Address' />
    </Form.Field>
    <Form.Group widths='equal'>
      <Form.Input value={this.state.Pcity} onChange={this.handle('Pcity')} label='City' placeholder='City' />
      <Form.Input value={this.state.Pstate} onChange={this.handle('Pstate')} label='State' placeholder='State' />
      <Form.Input value={this.state.Pzip} onChange={this.handle('Pzip')} label='Zip Code' placeholder='Zip Code' />
    </Form.Group>

    <h3>3. Review Items & Shipping</h3>
    <Grid columns={2}>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>

    </Grid>

    <br/>
    <Button type='submit'>Submit</Button>


  </Form>


        </div>

    <div className="subTotalHolder">
    <h3>Grand Total</h3>
      <div>
        number of items
        <br/>
        item total
        <br/>
        Shipping Cost $5.00
        <br/>
        <Button as={Link} to='/confirmation' onClick={confirmationRunner}>Place Order</Button>
      </div>

    </div>



      </div>
    )
  }
}
