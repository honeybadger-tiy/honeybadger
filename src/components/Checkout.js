import React,  { Component } from 'react';
import '../styles/App.css';
import { Button, Item, Image, Form, Checkbox} from 'semantic-ui-react';

export default class Checkout extends Component{

  state={
    firstName: "",
    lastName: ""
  }

  render(){

    const sameAsShipping = () => {
        console.log("check box was checked")
    }


    return(
      <div className="cartPageHolder">


      <div className="itemHolder">

      <Form>
    <h3>1. Shipping Address</h3>
    <Form.Group widths='equal'>
      <Form.Input value={this.state.firstName} label='First Name' placeholder='First Name' />
      <Form.Input label='Last Name' placeholder='Last Name' />
    </Form.Group>
    <Form.Field>
      <label>Address Line 1</label>
      <input placeholder='123 Park Ave.' />
    </Form.Field>
    <Form.Field>
      <label>Address Line 2</label>
      <input placeholder='Address' />
    </Form.Field>

    <Form.Group widths='equal'>
      <Form.Input label='City' placeholder='City' />
      <Form.Input label='State' placeholder='State' />
      <Form.Input label='Zip Code' placeholder='Zip Code' />
    </Form.Group>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <h3>2. Payment Method</h3>
    <Form.Field>
      <Checkbox toggle onClick={sameAsShipping} label='Billing same as Shipping' />
    </Form.Field>
    <Form.Group widths='equal'>
      <Form.Input label='First Name' placeholder='First Name' />
      <Form.Input label='Last Name' placeholder='Last Name' />
    </Form.Group>
    <Form.Field>
      <label>Card Number</label>
      <input/>
    </Form.Field>
    <Form.Group widths='equal'>
      <Form.Input label='Expires' placeholder='Expires' />
      <Form.Input label='Security Code' placeholder='Security Code' />
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Input label='City' placeholder='City' />
      <Form.Input label='State' placeholder='State' />
      <Form.Input label='Zip Code' placeholder='Zip Code' />
    </Form.Group>

    <h3>3. Review Items & Shipping</h3>

    filler text based on Input

    <br/>
    <Button type='submit'>Submit</Button>
  </Form>


        </div>

    <div className="subTotalHolder">
    <h3>Subtotal</h3>
      <div>
        number of items
        <br/>
        item total
        <br/>
        <Button>Checkout</Button>
      </div>

    </div>



      </div>
    )
  }
}
