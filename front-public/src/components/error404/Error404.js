import React from 'react';
import { Container } from 'semantic-ui-react';
import '../../styles/error404/error404.scss';

const Error404 = () => {
  return (
    <div id="error-404">
      <Container text textAlign="center">
        <img src={require('../../images/sad-pikachu.png')} alt="sad pikachy"/>
        <h2>404</h2>
        <p>The page you are looking for does not exist</p>
      </Container>
    </div>
  );
};

export default Error404;