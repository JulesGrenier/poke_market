import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  Form,
  Button,
  Grid
} from 'semantic-ui-react';
import '../../styles/user/auth.scss';

const Register = ({
  firstname,
  lastname,
  email,
  password,
  message,
  handleChange,
  handleSubmit
}) => (
  <div id="register">
    <Container text textAlign="center">
      <h2>Register</h2>
      <Grid centered>
        <Grid.Column mobile={14} tablet={8} computer={7}>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Form.Field>
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" id="firstname" value={firstname} onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" id="lastname" value={lastname} onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" value={email} onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" value={password} onChange={handleChange} />
            </Form.Field>
            {message && <p className={`msg ${message.type}`}>{message.text}</p>}
            <Button type="submit">Register</Button>
          </Form>
          <div className="actions">
            <Link to="/login">I already have an account</Link>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

Register.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Register;
