import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Grid } from 'semantic-ui-react';
import '../../styles/user/auth.scss';

const Register = () => {
  return (
    <div id="register">
      <Container text textAlign="center">
        <h2>Register</h2>
        <Grid centered>
          <Grid.Column mobile={14} tablet={8} computer={7}>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input type="text" />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input type="text" />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input type="email" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type="password" />
              </Form.Field>
              <Button type='submit'>Register</Button>
            </Form>
            <div className="actions">
              <Link to="/login">{"I already have an account"}</Link>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;