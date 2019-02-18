import React, { Component } from 'react';

import ButtonAddProductForm from '../components/ButtonAddProductForm';
import ProductList from '../components/ProductList';
import CartForm from '../components/CartForm';
import styled from 'styled-components';

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
`;

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      no: 1,
      cartGroup: [],
      noCart: 1,
      sourcePhotos: []
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
    this.state.cartGroup.push(newNumber);
    let numberList = this.state.noCart;
    this.setState({
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
        <DivStyle>
          <ButtonAddProductForm addNotes={this.addNotes} />
          <CartForm numberCart={this.state.noCart} cartGroup={this.cartGroup} />
        </DivStyle>
        <DivStyle>
          <ProductList
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
