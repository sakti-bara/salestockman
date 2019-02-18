import React, { Component } from 'react'
import Product from './Product'
import styled from 'styled-components'

const ListProduct = styled.ul`
  display: flex;
  align-content: flex-start;
`

class NotesList extends Component {
  render() {
    return (
      <ListProduct>
        {this.props.data.map((item, index) => {
          return (
            <Product key={index}>
              <div>
                <button
                  onClick={() => {
                    this.props.deleteTask(index)
                  }}
                >
                  ✖
                </button>
              </div>

              <img src={item.photo} alt="" />
              <h2>{item.name}</h2>
              <p>Category: {item.category}</p>
              <p>IDR: {item.price}</p>

              <button
                onClick={() => {
                  const newNo = this.props.no - 1

                  this.props.addCart(this.props.data[newNo - 1])
                }}
              >
                ADD TO CART{' '}
                <span role="img" aria-label="cart">
                  🛒
                </span>
              </button>
            </Product>
          )
        })}
      </ListProduct>
    )
  }
}

export default NotesList
