import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUserChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePassChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  clearInput = () => {
    this.setState({
      username: '',
      password: ''
    });
  };

  viewData = () => {
    window.open('./pages/Stock.js');
  };

  submit = event => {
    if (this.state.username === 'admin' && this.state.password === 'admin') {
      this.viewData();
    } else {
      alert('Wrong username or password. Please try again.');
      this.clearInput();
    }
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <h3>Please Login First.</h3>
        <div>
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleUserChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handlePassChange}
            required
          />
          <div>
            <input type="submit" value="Login" />
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
