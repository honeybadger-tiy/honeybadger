import React, { Component } from 'react';
import '../styles/App.css';


export default class Confirmation extends Component{
  render(){
    return(
      <div className="thankYouPage">

        <h2 align="center" >Thank You for your Order </h2>
        <div>
          Address:
          <br/>
          Payment Total:
          <br/>
          Items:
          <br/>
          <h4 align="center" >A copy of this receipt has been sent to your email address</h4>
        </div>


      </div>
    )
  }
}
