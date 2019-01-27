import React, { Component } from 'react';
import Cart from '../../components/cart/Cart';

class CartContainer extends Component {
  componentWillMount() {
    document.title = 'My Cart';
    window.scroll(0, 0);
  }

  render() {
    return (
      <Cart />
    );
  }
}

export default CartContainer;
