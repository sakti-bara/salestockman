import React, { Component } from 'react';
import Notes from '../components/Notes';
import photoApparels from '../photos/Apparels-exp.jpg';
import photoHeadwears from '../photos/Headwears-exp.jpg';
import photoTrousers from '../photos/Trousers-exp.jpg';

class NotesList extends Component {
  constructor() {
    super();
    this.state = {
      photos: [photoApparels, photoHeadwears, photoTrousers]
    };
  }
  render() {
    return (
      <ul>
        {this.props.data.map((item, index) => {
          return (
            <Notes key={index}>
              <img src={photoApparels} alt="" />
              <h2>{item.name}</h2>
              <p>{item.category}</p>
              <p>{item.price}</p>

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
