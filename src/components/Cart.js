import React, { Component } from 'react';
import '../styles/App.css';
import { Button, Item, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Picture from '../images/igp4.png';
import { cart } from '../data/data';



export default class Cart extends Component{

  state = {
    cart: []
  };


  componentDidMount() {
    fetch("https://murmuring-scrubland-72784.herokuapp.com/badges")
    .then(response => response.json())
    .then(responseData => this.setState({cart: responseData}));
    }

    // componentDidMount() {
    //   fetch("https://murmuring-scrubland-72784.herokuapp.com/orders/5")
    //   .then(response => response.json())
    //   .then(responseData => this.setState({cart: responseData}));
    //   }

      // componentDidMount() {
      //   fetch("https://murmuring-scrubland-72784.herokuapp.com/orders/15")
      //   .then(response => response.json())
      //   .then(responseData => this.setState({cart: responseData}));
      //   }




  render(){
    console.log(this.state.cart)
    console.log("cart", this.state.cart.order);

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

    let orderID = null;
    let numberOfItems = null;
    let subtotal = null;

    if (this.state.cart && this.state.cart.order){
      orderID = this.state.cart.order.id
      subtotal = this.state.cart.order.subtotal
      numberOfItems = this.state.cart.order.items_count
    }
    console.log(orderID);
    return(
      <div className="cartPageHolder">


  <div className="itemHolder">

  <Item.Group>

    {this.state.cart.map((item, i) => {
      return <Item> <div key={i}>

          <img width="100px" height="100px" src={item.image_path} alt={item.description} />
          <div>
          <Item.Content>
            <Item.Header as='a'>Title: {item.product}</Item.Header>
            <Item.Meta>Description: {item.description}</Item.Meta>
            <div>Price: {item.price}</div>
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
          </div>

        </div>
        </Item>
      })}
  </Item.Group>

  </div>



    <div className="subTotalHolder">
    <h3>Subtotal</h3>
      <div>
        number of items: 3
        <br/>
        Subtotal: 115
        <br/>
        <Button as={Link} to='/checkout' onClick={checkoutRunner} >Checkout</Button>
      </div>

    </div>



      </div>
    )
  }
}
