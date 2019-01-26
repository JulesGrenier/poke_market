import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react';
import '../../styles/home/home.scss';
import pokecoin from '../../images/shop-bag.svg';

const Home = () => (
  <div id="home">
    <div className="background">
      <div className="image" />
    </div>
    <Container text textAlign="center">
      <img src={pokecoin} alt="shop-bag" />
      <h1>Poke Market</h1>
      <p>Browse our large list of pokemon items from the official PokéAPI.
        <br />There must be something you want, or will want !
      </p>
      <Link to="/browse">
        <Button>Browse</Button>
      </Link>
    </Container>
  </div>
);

export default Home;
