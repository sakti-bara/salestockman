import React, { Component } from 'react';
import styled from 'styled-components';

const LiStyled = styled.li`
  list-style: none;
`;

class Cart extends Component {
  render() {
    return (
      <ul>
        {this.props.cartGroup.map((item, index) => {
          return <LiStyled key={index}>{item.name}</LiStyled>;
        })}
      </ul>
    );
  }
}

export default Cart;
