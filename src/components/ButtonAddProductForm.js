import React, { Component } from 'react'
import AddProductForm from './AddProductForm'

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

  addForm = text => {
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
            if (this.state.condition.length === 0) {
              this.addForm('Appear')
            } else {
              return null
            }
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
