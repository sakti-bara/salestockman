import React, { Component } from 'react';

import NotesForm from '../components/NotesForm';
import NotesList from '../components/NotesList';
// import styled from 'styled-components';

// const DivStyle = styled.div`
//   text-align: left;
// `;

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      no: 1
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
        <NotesList
          data={this.state.data}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
        />
      </div>
    );
  }
}

export default Home;
