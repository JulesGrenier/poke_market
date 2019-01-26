import React, { Component } from 'react';
import Home from '../../components/home/Home';

class HomeContainer extends Component {

  componentWillMount(){
    document.title = "Poké Market";
  }

  render() {
    return (
      <Home />
    );
  }
}

export default HomeContainer;