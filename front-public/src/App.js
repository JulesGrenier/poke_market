import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeContainer from './containers/home/HomeContainer';
import ListContainer from './containers/items/ListContainer';
import ItemDetailsContainer from './containers/items/ItemDetailsContainer';
import CartContainer from './containers/cart/CartContainer';
import ProfileContainer from './containers/user/ProfileContainer';
import LoginContainer from './containers/user/LoginContainer';
import RegisterContainer from './containers/user/RegisterContainer';
import WelcomeContainer from './containers/user/WelcomeContainer';
import Error404Container from './containers/error404/Error404Container';
import NavbarLayout from './layout/NavbarLayout';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <main>
            <Switch>
              <Route
                exact
                path="(/|/home)"
                render={(props) => (
                  <Fragment>
                    <NavbarLayout {...props}>
                      <HomeContainer {...props} />
                    </NavbarLayout>
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/browse"
                render={(props) => (
                  <Fragment>
                    <NavbarLayout {...props}>
                      <ListContainer {...props} />
                    </NavbarLayout>
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/browse/:pageId"
                render={(props) => (
                  <Fragment>
                    <NavbarLayout {...props}>
                      <ListContainer {...props} />
                    </NavbarLayout>
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/browse/item/:slug"
                render={(props) => (
                  <Fragment>
                    <NavbarLayout {...props}>
                      <ItemDetailsContainer {...props} />
                    </NavbarLayout>
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/cart"
                render={(props) => (
                  <Fragment>
                    <NavbarLayout {...props}>
                      <CartContainer {...props} />
                    </NavbarLayout>
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/profile"
                render={(props) => (
                  <Fragment>
                    <NavbarLayout {...props}>
                      <ProfileContainer {...props} />
                    </NavbarLayout>
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/login"
                render={(props) => (
                  <Fragment>
                    <NavbarLayout {...props}>
                      <LoginContainer {...props} />
                    </NavbarLayout>
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/register"
                render={(props) => (
                  <Fragment>
                    <NavbarLayout {...props}>
                      <RegisterContainer {...props} />
                    </NavbarLayout>
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/welcome"
                render={(props) => (
                  <Fragment>
                    <NavbarLayout {...props}>
                      <WelcomeContainer {...props} />
                    </NavbarLayout>
                  </Fragment>
                )}
              />
              <Route
                path="/"
                render={(props) => (
                  <Fragment>
                    <NavbarLayout {...props}>
                      <Error404Container {...props} />
                    </NavbarLayout>
                  </Fragment>
                )}
              />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
