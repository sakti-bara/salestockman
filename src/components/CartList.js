import React, { Component } from 'react';
import Cart from '../components/Cart';

class CartList extends Component {
  render() {
    return (
      <div>
        {this.props.condition.map(item => {
          return (
            <ul>
              {this.props.cartGroup.map((item, index) => {
                return <li key={index}>test</li>;
              })}
            </ul>
          );
        })}
      </div>
    );
  }
}

export default CartList;
