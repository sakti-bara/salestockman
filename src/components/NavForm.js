import React, { Component } from 'react';
import styled from 'styled-components';

const SideNav = styled.div``;

class NavForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: ''
    };
  }

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleChangePrice = event => {
    this.setState({
      price: event.target.value
    });
  };

  render() {
    return (
      <SideNav>
        {this.props.condition.map(item => {
          return (
            <form
              onSubmit={event => {
                event.preventDefault();
                this.props.addNotes(event, this.state.name, this.state.price);
                this.props.clearInput();
              }}
            >
              <button
                onClick={() => {
                  this.props.clearInput();
                }}
              >
                X
              </button>
              <input
                type="text"
                placeholder="Product Name..."
                value={this.state.name}
                onChange={this.handleChangeName}
                required
              />
              <input
                type="number"
                placeholder="Price..."
                value={this.state.price}
                onChange={this.handleChangePrice}
                required
              />
              <div>
                <input type="submit" value="add" />
              </div>
            </form>
          );
        })}
      </SideNav>
    );
  }
}

export default NavForm;
