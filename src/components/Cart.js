import React, { Component } from 'react';
import '../styles/App.css';
import { Button, Item, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Picture from '../images/igp4.png';



export default class Cart extends Component{
  render(){

    // let cartItems = {};
    //
    // let subTotalCart = cartItems.map((cartItems,i)=>{
    //   return(
    //     <div>filler</div>
    //   )
    // })

    const checkoutRunner = () => {
      console.log('checking out!');
    };

    return(
      <div className="cartPageHolder">


      <div className="itemHolder">
      <Item.Group>
        <Item>
          <Item.Image size='tiny' src={Picture} />

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

      <Item.Group>
        <Item>
          <Item.Image size='tiny' src={Picture} />

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
        <Button as={Link} to='/checkout' onClick={checkoutRunner} >Checkout</Button>
      </div>

    </div>



      </div>
    )
  }
}
