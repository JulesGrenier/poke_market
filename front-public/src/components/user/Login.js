import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Form,
  Button,
  Grid
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../../styles/user/auth.scss';

const Login = ({
  email,
  password,
  message,
  handleChange,
  handleSubmit
}) => (
  <div id="login">
    <Container text textAlign="center">
      <h2>Login</h2>
      <Grid centered>
        <Grid.Column mobile={14} tablet={8} computer={7}>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Form.Field>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" value={email} onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" value={password} onChange={handleChange} />
            </Form.Field>
            {message && <p className={`msg ${message.type}`}>{message.text}</p>}
            <Button type="submit">Login</Button>
          </Form>
          <div className="actions">
            <Link to="/register">{"I don't have an account"}</Link>
            <br />
            <Link to="/recovery">{"I can't login"}</Link>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  message: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Login;
