import React, { Component } from 'react';
import styled from 'styled-components';

const InputFormStyle = styled.textarea`
  width: 250px;
  height: 100px;
`;

class NotesForm extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ''
    };
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  clearInput = () => {
    this.setState({
      inputText: ''
    });
  };

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.props.addNotes(event, this.state.inputText);
          this.clearInput();
        }}
      >
        <InputFormStyle
          type="text"
          placeholder="Add News..."
          value={this.state.inputText}
          onChange={this.handleChange}
          required
        />
        <div>
          <input type="submit" value="add" />
        </div>
      </form>
    );
  }
}

export default NotesForm;
