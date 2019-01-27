import React, { Component } from 'react';
import Home from '../../components/home/Home';

class HomeContainer extends Component {
  componentWillMount() {
    document.title = 'Poké Market';
    window.scroll(0, 0);
  }

  render() {
    return (
      <Home />
    );
  }
}

export default HomeContainer;
