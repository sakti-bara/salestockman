import React, { Component } from 'react';

class CartForm extends Component {
  constructor() {
    super();
    this.state = {
      cartNumber: 0
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.newNav('true');
          }}
        >
          🛒{this.props.numberCart - 1}
        </button>
      </div>
    );
  }
}

export default CartForm;
