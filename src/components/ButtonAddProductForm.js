import React, { Component } from 'react'
import AddProductForm from './AddProductForm'

// const ButtonAddProduct = styled.button`
//   display: flex;
//   align-content: flex-start;
//   flex-direction: column;
//   font-family: Arial, Helvetica, sans-serif;
// `;

class ButtonAddProductForm extends Component {
  constructor() {
    super()
    this.state = {
      condition: []
    }
  }

  clearInput = () => {
    this.setState({
      condition: []
    })
  }

  newNav = text => {
    const newCondition = this.state.condition.concat({
      condition: text
    })

    this.setState({
      condition: newCondition
    })
  }

  handlerAdd = text => {
    if (this.state.condition === null && this.state.condition.length !== 1) {
      const newCondition = this.state.condition.concat({
        text
      })
      this.setState({
        conditin: newCondition
      })
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.newNav('true')
          }}
        >
          &#9776; ADD PRODUCT
        </button>

        <AddProductForm
          addProduct={this.props.addProduct}
          condition={this.state.condition}
          clearInput={this.clearInput}
        />
      </div>
    )
  }
}

export default ButtonAddProductForm
