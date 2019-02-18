import React, { Component } from 'react';
import Notes from '../components/Notes';
import photoApparels from '../photos/Apparels-exp.jpg';
import photoHeadwears from '../photos/Headwears-exp.jpg';
import photoTrousers from '../photos/Trousers-exp.jpg';
import styled from 'styled-components';

const ListProdut = styled.ul`
  display: flex;
  align-content: flex-start;
`;

class NotesList extends Component {
  constructor() {
    super();
    this.state = {
      photos: [photoApparels, photoHeadwears, photoTrousers]
    };
  }

  render() {
    return (
      <ListProdut>
        {this.props.data.map((item, index) => {
          return (
            <Notes key={index}>
              <div>
                <button
                  onClick={() => {
                    this.props.deleteTask(index);
                  }}
                >
                  ✖
                </button>
              </div>

              <img src={photoApparels} alt="" />
              <h2>{item.name}</h2>
              <p>{item.category}</p>
              <p>{item.price}</p>

              <button
                onClick={() => {
                  const newNo = this.props.no - 1;

                  this.props.addCart(this.props.data[newNo - 1]);
                }}
              >
                ADD TO CART 🛒
              </button>
            </Notes>
          );
        })}
      </ListProdut>
    );
  }
}

export default NotesList;
