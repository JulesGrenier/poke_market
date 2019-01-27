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
import '../../styles/user/profile.scss';
import pokecoin from '../../images/pokecoin.svg';
import coinBag from '../../images/coin-bag.svg';

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
                You have {money}
                <img src={pokecoin} alt="pokecoin" className="pokecoin" />
              </span>

              <Popup
                trigger={
                  (
                    <span className="add-money">
                      <img src={coinBag} alt="coin-bag" className="coin-bag" />
                    </span>
                  )
                }
                content={<Input type="number" min="1" placeholder="Money amount..." />}
                on="click"
                position="top right"
              />

            </div>

            <Link to="/cart" className="cart-link">
              <div className="cart">
                <Icon name="cart" />
                <span className="items-count">
                  {`${itemsCount} ${itemsCount > 1 ? 'items' : 'item'} in your cart`}
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
          <Grid.Column width={7} style={{ marginLeft: 'auto' }}>
            <h3>Your Informations</h3>
            <Form autoComplete="off">
              <Form.Field>
                <label htmlFor="firstname">First Name</label>
                <input name="firstname" id="firstname" type="text" readOnly />
              </Form.Field>
              <Form.Field>
                <label htmlFor="lastname">Last Name</label>
                <input name="lastname" id="lastname" type="text" readOnly />
              </Form.Field>
              <Form.Field>
                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="email" readOnly />
              </Form.Field>
              <br />
              <Form.Field>
                <label htmlFor="currentPassword">Current Password</label>
                <input name="currentPassword" id="currentPassword" type="password" />
              </Form.Field>
              <Form.Field>
                <label htmlFor="newPassword">New Password</label>
                <input name="newPassword" id="newPassword" type="password" />
              </Form.Field>
              <Form.Field>
                <label htmlFor="repeatNewPassword">Repeat New Password</label>
                <input name="repeatNewPassword" id="repeatNewPassword" type="password" />
              </Form.Field>
              <Button type="submit">Save Changes</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
