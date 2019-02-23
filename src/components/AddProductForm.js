import React, { Component } from 'react'
import styled from 'styled-components'

const SideNav = styled.div`
  background-color: blanchedalmond;
`

class AddProductForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: '',
      category: ''
    }
  }

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleChangePrice = event => {
    this.setState({
      price: event.target.value
    })
  }

  handleChangeCategory = event => {
    this.setState({
      category: event.target.value
    })
  }

  addPhotos = () => {
    if (this.state.category === 'Headwears') {
      return 'assets/headwears.jpg'
    } else if (this.state.category === 'TOP') {
      return 'assets/top.jpg'
    } else {
      return 'assets/trousers.jpg'
    }
  }

  render() {
    return (
      <SideNav>
        {this.props.condition.map(item => {
          return (
            <form
              onSubmit={event => {
                event.preventDefault()
                this.props.addProduct(
                  event,
                  this.state.name,
                  this.state.category,
                  this.state.price,
                  this.addPhotos()
                )

                this.props.clearInput()
              }}
            >
              <div>
                <button
                  onClick={() => {
                    this.props.clearInput()
                  }}
                >
                  X
                </button>
              </div>
              <div>
                <div>Product Name:</div>
                <input
                  type="text"
                  placeholder="Name..."
                  value={this.state.name}
                  onChange={this.handleChangeName}
                  required
                />
              </div>
              <div>
                <div>Category:</div>
                <select onChange={this.handleChangeCategory}>
                  <option>Outfits category:</option>
                  <option value="Headwears">Headwears</option>
                  <option value="TOP">Top</option>
                  <option value="Trousers">Trousers</option>
                </select>
              </div>
              <div>
                <div>Price:</div>
                <input
                  type="number"
                  placeholder="IDR..."
                  value={this.state.price}
                  onChange={this.handleChangePrice}
                  required
                />
              </div>
              <div>
                <input type="submit" value="ADD" />
              </div>
            </form>
          )
        })}
      </SideNav>
    )
  }
}

export default AddProductForm
