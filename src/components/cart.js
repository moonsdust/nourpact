import React, { Component } from "react";
import './App.css';
import CartItems from "./cartItems";
import {useNavigate, Link} from 'react-router-dom';

class Cart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.addFood = this.addFood.bind(this);
  }
   
  addFood(f) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    f.preventDefault();
  }

  render() {
    
  return (
    <div className="cartList">
      <h2>Type in food items you want recipes for</h2>
      <div className="container">

        <div className="cartInput">
          <div className="header">
            <form onSubmit={this.addFood}>
              <input ref={(a) => this._inputElement = a} placeholder="Enter Food">
              </input>
              <button type="submit">Add</button>
            </form>
          </div>
          <CartItems entries={this.state.items}/>
        </div>
      <button className="cartButton"><Link to="/Recipe">Look for recipes</Link></button>

    </div>
    </div> 
    );
  }
}

export default Cart;
