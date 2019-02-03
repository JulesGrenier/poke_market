import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

const Profile = ({
  user,
  newEmail,
  currentPassword,
  newPassword,
  newPasswordConf,
  handleChange,
  handleSubmit,
  message
}) => {
  const itemsCount = 10;

  return (
    <div id="profile">
      <Container text>
        <h2>My Profile</h2>

        <Grid doubling stackable>
          <Grid.Column width={7}>
            <div className="wallet">
              <span className="wallet-content">
                {user.money}
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
                  {`${itemsCount} ${itemsCount > 1 ? 'items' : 'item'}`}
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
            <h3>Account Informations</h3>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Field>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  value={`${user.firstname} ${user.lastname}`}
                  readOnly
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={user.email}
                  readOnly
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="newEmail">New Email</label>
                <input
                  name="newEmail"
                  id="newEmail"
                  type="email"
                  value={newEmail}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  name="currentPassword"
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="newPassword">New Password</label>
                <input
                  name="newPassword"
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="newPasswordConf">Repeat New Password</label>
                <input
                  name="newPasswordConf"
                  id="newPasswordConf"
                  type="password"
                  value={newPasswordConf}
                  onChange={handleChange}
                />
              </Form.Field>
              <p className={`msg ${message.type}`}>{message.text}</p>
              <Button type="submit">Save Changes</Button>
            </Form>
            <div>
              <h3>Account Deletion</h3>
              <Link to="/" className="acc-deletion">Delete My Account</Link>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  newEmail: PropTypes.string.isRequired,
  currentPassword: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  newPasswordConf: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.instanceOf(Object).isRequired
};

export default Profile;
