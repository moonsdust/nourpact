import React, { Component } from "react";
 
class cartItems extends Component {
    createCart(item) {
        return <li key={item.key}>{item.text}</li>
    }
    render() {
        var foodEntries = this.props.entries;
        var listItems = foodEntries.map(this.createCart);
        
        return (
        <ul className="theList">
            {listItems}
        </ul>
        );
    }
        };

export default cartItems;