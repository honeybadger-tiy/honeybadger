import React, { Component } from 'react';
import '../styles/App.css';
import { Input, Button, Item, Image, Group, Content, Meta, Description, Menu, Dropdown } from 'semantic-ui-react';
import Link from 'react-router-dom';



export default class Cart extends Component{
  render(){

    // let cartItems = {};
    //
    // let subTotalCart = cartItems.map((cartItems,i)=>{
    //   return(
    //     <div>filler</div>
    //   )
    // })

    return(
      <div className="cartPageHolder">


      <div className="itemHolder">
      <Item.Group>
        <Item>
          <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src='/assets/images/wireframe/short-paragraph.png' />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </Item.Content>
        </Item>
      </Item.Group>
        </div>

    <div className="subTotalHolder">
    <h3>Subtotal</h3>
      <div>
        number of items
        <br/>
        item total
        <br/>
        <Button onClick="" >Checkout</Button>
      </div>

    </div>



      </div>
    )
  }
}
