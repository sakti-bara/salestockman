import React, { Component } from 'react';
import ListAddProduct from './ListAddProduct';
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
            <ListAddProduct key={index}>
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
              <p>Category: {item.category}</p>
              <p>IDR: {item.price}</p>

              <button
                onClick={() => {
                  const newNo = this.props.no - 1;

                  this.props.addCart(this.props.data[newNo - 1]);
                }}
              >
                ADD TO CART 🛒
              </button>
            </ListAddProduct>
          );
        })}
      </ListProdut>
    );
  }
}

export default NotesList;
