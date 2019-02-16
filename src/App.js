import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Stock from './pages/Stock';
import styled from 'styled-components';

const StyleHeader = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <StyleHeader>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Stock" component={Stock} />
          </Switch>
        </StyleHeader>
      </Router>
    );
  }
}

export default App;
