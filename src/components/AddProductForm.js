import React, { Component } from 'react';
import styled from 'styled-components';
import photoApparels from '../photos/Apparels-exp.jpg';
import photoHeadwears from '../photos/Headwears-exp.jpg';
import photoTrousers from '../photos/Trousers-exp.jpg';

const SideNav = styled.div`
  background-color: blanchedalmond;
`;

class NavForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      category: ''
    };
  }

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleChangePrice = event => {
    this.setState({
      price: event.target.value
    });
  };

  handleChangeCategory = event => {
    this.setState({
      category: event.target.value
    });
  };

  selectPhotoProduct = () => {
    if (this.state.category === 'Headwears') {
      this.photo = '../photos/Headwears-exp.jpg';
    } else if (this.state.category === 'Apparels') {
      this.photo = '../photos/Apparels-exp.jpg';
    } else {
      this.photo = '../photos/Trousers-exp.jpg';
    }
  };

  render() {
    return (
      <SideNav>
        {this.props.condition.map(item => {
          return (
            <form
              onSubmit={event => {
                event.preventDefault();
                this.selectPhotoProduct();
                this.props.addNotes(
                  event,
                  this.state.name,
                  this.state.category,
                  this.state.price,
                  this.photo
                );

                this.props.clearInput();
              }}
            >
              <div>
                <button
                  onClick={() => {
                    this.props.clearInput();
                  }}
                >
                  X
                </button>
              </div>
              <div>
                <div>Product Name:</div>
                <input
                  type="text"
                  placeholder="Name..."
                  value={this.state.name}
                  onChange={this.handleChangeName}
                  required
                />
              </div>
              <div>
                <div>Category:</div>
                <select onChange={this.handleChangeCategory}>
                  <option>Outfits category:</option>
                  <option value="Headwears">Headwears</option>
                  <option value="Apparels">Top</option>
                  <option value="Trousers">Trousers</option>
                </select>
              </div>
              <div>
                <div>Price:</div>
                <input
                  type="number"
                  placeholder="IDR..."
                  value={this.state.price}
                  onChange={this.handleChangePrice}
                  required
                />
              </div>
              <div>
                <input type="submit" value="ADD" />
              </div>
            </form>
          );
        })}
      </SideNav>
    );
  }
}

export default NavForm;
