import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.nav`
  a {
    text-decoration: none;
    margin-right: 10px;
  }
`;

class Navigation extends Component {
  render() {
    return (
      <div>
        <h1>SalesStock</h1>
        <NavStyle>
          <Link to="/">Home</Link>
          <Link to="/Stock">Stock</Link>
        </NavStyle>
      </div>
    );
  }
}

export default Navigation;
