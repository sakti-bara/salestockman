import React, { Component } from 'react';

import NotesForm from '../components/NotesForm';
import NotesList from '../components/NotesList';
import Chart from '../components/CartForm';
import styled from 'styled-components';

const DivStyle = styled.div`
  display: flex;
  align-content: left;
`;

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      no: 1,
      cartGroup: [],
      noCart: 1,
      temporaryCart: []
    };
  }

  addNotes = (
    event,
    productName,
    productCategory,
    productPrice,
    productPhotos
  ) => {
    event.preventDefault();

    const newNotes = this.state.data.concat({
      name: productName,
      category: productCategory,
      price: productPrice,
      photos: productPhotos,
      id: this.state.no
    });

    let numberList = this.state.no;

    this.setState({
      data: newNotes,
      no: numberList + 1
    });
  };

  addCart = newNumber => {
    const newCart = this.state.temporaryCart.concat(newNumber);
    const newAddCart = this.state.cartGroup.concat({
      cart: newCart,
      numberCart: this.state.noCart
    });

    let numberList = this.state.noCart;

    this.setState({
      cartGroup: newAddCart,
      noCart: numberList + 1
    });
  };

  deleteTask = index => {
    // console.log(index);
    const newTask = this.state.data.filter((item, itemIndex) => {
      return index !== itemIndex;
    });
    this.setState({
      data: newTask
    });
  };

  editTask = index => {
    const newText = prompt('Edit this task: ');
    if (newText !== null) {
      const newTask = this.state.data.map((item, itemIndex) => {
        if (index === itemIndex) {
          return newText;
        } else {
          return item;
        }
      });
      this.setState({
        data: newTask
      });
    }
  };

  render() {
    return (
      <div>
        <NotesForm addNotes={this.addNotes} />
        <Chart numberCart={this.state.noCart} addCartGroup={this.addCart} />
        <DivStyle>
          <NotesList
            no={this.state.no}
            data={this.state.data}
            deleteTask={this.deleteTask}
            addCart={this.addCart}
          />
        </DivStyle>
      </div>
    );
  }
}

export default Home;
