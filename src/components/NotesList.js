import React, { Component } from 'react';
import Notes from '../components/Notes';

class NotesList extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map((item, index) => {
          return (
            <Notes key={index}>
              {item.name} {item.price}
              <button
                onClick={() => {
                  this.props.deleteTask(index);
                }}
              >
                DELETE
              </button>
              <button
                onClick={() => {
                  this.props.editTask(index);
                }}
              >
                EDIT
              </button>
            </Notes>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;
