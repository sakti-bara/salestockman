import React, { Component } from 'react';
import Cart from '../components/Cart';

class CartList extends Component {
  render() {
    return (
      <div>
        {this.props.condition.map(item => {
          return <Cart cartGroup={this.props.cartGroup} />;
        })}
      </div>
    );
  }
}

export default CartList;
