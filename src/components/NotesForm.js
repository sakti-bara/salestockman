import React, { Component } from 'react';
import styled from 'styled-components';
import NavForm from './NavForm';

const ButtonAddProduct = styled.button`
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
`;

class NotesForm extends Component {
  constructor() {
    super();
    this.state = {
      condition: []
    };
  }

  clearInput = () => {
    this.setState({
      condition: []
    });
  };

  newNav = text => {
    const newCondition = this.state.condition.concat({
      condition: text
    });

    this.setState({
      condition: newCondition
    });
  };

  render() {
    return (
      <ButtonAddProduct>
        <button
          onClick={() => {
            this.newNav('true');
          }}
        >
          &#9776; ADD PRODUCT
        </button>

        <NavForm
          addNotes={this.props.addNotes}
          condition={this.state.condition}
          clearInput={this.clearInput}
        />
      </ButtonAddProduct>
    );
  }
}

export default NotesForm;
