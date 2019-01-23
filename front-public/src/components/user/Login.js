import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Grid } from 'semantic-ui-react';
import '../../styles/user/auth.scss';

const Login = () => {
  return (
    <div id="login">
      <Container text textAlign="center">
        <h2>Login</h2>
        <Grid centered>
          <Grid.Column mobile={14} tablet={8} computer={7}>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input type="email" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type="password" />
              </Form.Field>
              <Button type='submit'>Login</Button>
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
};

export default Login;