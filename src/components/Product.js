import React, { Component } from 'react';
import styled from 'styled-components';

const LiStyled = styled.li`
  list-style: none;
`;

class ListAddProduct extends Component {
  render() {
    return <LiStyled>{this.props.children}</LiStyled>;
  }
}

export default ListAddProduct;
