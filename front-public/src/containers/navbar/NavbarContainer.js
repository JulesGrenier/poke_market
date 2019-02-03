import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.removeItem('token');
    const { history } = this.props;
    return history.push('/home');
  }

  render() {
    return (
      <Navbar handleLogout={this.handleLogout} />
    );
  }
}

export default NavbarContainer;
