import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import '../../styles/cart/cart.scss';

const Cart = ({ items }) => (
  <div id="cart">
    <Container text>
      <h2><Icon name="cart" /> My Cart</h2>

      <div className="cart-items">
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <CartItem />
            </Grid.Column>
            <Grid.Column width={16}>
              <CartItem />
            </Grid.Column>
            <Grid.Column width={16}>
              <Link to="/home" className="validate-order-btn">Validate My Order</Link>
              <Link to="/home" className="empty-cart-btn">Empty My Cart</Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Container>
  </div>
);

Cart.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired
};

export default Cart;
