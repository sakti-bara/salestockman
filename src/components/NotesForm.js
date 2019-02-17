import React, { Component } from 'react';
import styled from 'styled-components';
import NavForm from './NavForm';

// const ButtonAddProduct = styled.button`
//   display: flex;
//   align-content: flex-start;
//   flex-direction: column;
//   font-family: Arial, Helvetica, sans-serif;
// `;

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

  handlerAdd = text => {
    if (this.state.condition === null && this.state.condition.length !== 1) {
      const newCondition = this.state.condition.concat({
        text
      });
      this.setState({
        conditin: newCondition
      });
    }
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default NotesForm;
