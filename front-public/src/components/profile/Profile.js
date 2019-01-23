import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Form,
  Button,
  Grid,
  Icon,
  Popup,
  Input
} from 'semantic-ui-react';
import '../../styles/profile/profile.scss';

const Profile = () => {

  const itemsCount = 10;
  const money = 99999;

  return (
    <div id="profile">
      <Container text>
        <h2>My Profile</h2>

        <Grid doubling stackable>
          <Grid.Column width={7}>
            <div className="wallet">
              <span className="wallet-content">
                {money}
                <Icon name="money bill alternate outline" />
                in my wallet
              </span>

              <Popup
                trigger={
                  <span className="add-money">
                    <Icon.Group>
                      <Icon name='money bill alternate outline' />
                      <Icon corner='top right' name='add' />
                    </Icon.Group>
                  </span>
                }
                content={<Input type="number" min="1" placeholder='Money amount...' />}
                on='click'
                position='top right'
              />

            </div>

            <Link to="/cart" className="cart-link">
              <div className="cart">
                <Icon name="cart" />
                <span className="items-count">
                  {`${itemsCount} ${itemsCount > 1 ? 'items' : 'item'} in my cart`}
                </span>
              </div>
            </Link>

            <div className="order-history">
              <h3>Order History</h3>
              <ul className="history">
                <li className="order">
                  <Link to={`/profile/order/1`}>
                    Order
                  </Link>
                </li>
                <li className="order">
                  <Link to={`/profile/order/1`}>
                    Order
                  </Link>
                </li>
              </ul>
            </div>
          </Grid.Column>
          <Grid.Column width={7} style={{marginLeft: "auto"}}>
            <h3>My Informations</h3>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input type="text" readOnly />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input type="text" readOnly />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input type="email" readOnly />
              </Form.Field>
              <br />
              <Form.Field>
                <label>Current Password</label>
                <input type="password" />
              </Form.Field>
              <Form.Field>
                <label>New Password</label>
                <input type="password" />
              </Form.Field>
              <Form.Field>
                <label>Repeat New Password</label>
                <input type="password" />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;