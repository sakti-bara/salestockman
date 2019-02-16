import React, { Component } from 'react';
import styled from 'styled-components';
import NavForm from './NavForm';

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
