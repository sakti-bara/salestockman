import React, { Component } from 'react'
import styled from 'styled-components'

const LiStyled = styled.li`
  list-style: none;
`

class Product extends Component {
  render() {
    return <LiStyled>{this.props.children}</LiStyled>
  }
}

export default Product
