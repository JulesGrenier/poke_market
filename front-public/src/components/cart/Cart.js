import React from 'react';
import { Container, Icon, Grid } from 'semantic-ui-react';
import CartItem from './CartItem';
import '../../styles/cart/cart.scss';

const Cart = ({ items }) => {
  return (
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
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Cart;