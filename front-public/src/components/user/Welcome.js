import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import jigglypuff from '../../images/jigglypuff.svg';
import '../../styles/user/welcome.scss';

const Welcome = () => {
  return (
    <div id="welcome">
      <Container text textAlign="center">
        <img src={jigglypuff} alt="bellsprout" />
        <h2>Welcome !</h2>
        <p>Your account has been created.</p>
        <p>You can now <Link to="/login">login</Link></p>
      </Container>
    </div>
  );
};

export default Welcome;