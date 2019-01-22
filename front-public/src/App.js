import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeContainer from './containers/home/HomeContainer';
import ListContainer from './containers/items/ListContainer';
import ItemDetailsContainer from './containers/items/ItemDetailsContainer';
import CartContainer from './containers/cart/CartContainer';
import Error404Container from './containers/error404/Error404Container';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <main>
            <Navbar />
            <Switch>
              <Route exact path="(/|/home)" render={(props) => <HomeContainer {...props} />} />
              <Route exact path="/browse" render={(props) => <ListContainer {...props} />} />
              <Route exact path="/browse/:pageId" render={(props) => <ListContainer {...props} />} />
              <Route exact path="/browse/item/:name" render={(props) => <ItemDetailsContainer {...props} />} />
              <Route exact path="/cart" render={(props) => <CartContainer {...props} />} />
              <Route path="/" render={(props) => <Error404Container {...props} />} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
