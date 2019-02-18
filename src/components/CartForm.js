import React, { Component } from 'react'
import CartList from '../components/CartList'

class CartForm extends Component {
  constructor() {
    super()
    this.state = {
      condition: []
    }
  }

  newNav = text => {
    const newCondition = this.state.condition.concat({
      condition: text
    })

    this.setState({
      condition: newCondition
    })
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.newNav('true')
          }}
        >
          <span role="img" aria-label="cart">
            🛒
          </span>{' '}
          {this.props.numberCart - 1}
        </button>
        <CartList
          condition={this.state.condition}
          cartGroup={this.props.cartGroup}
        />
      </div>
    )
  }
}

export default CartForm
