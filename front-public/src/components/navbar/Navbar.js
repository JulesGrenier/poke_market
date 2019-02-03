import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar/navbar.scss';
import { Icon } from 'semantic-ui-react';

const toggleNav = () => {
  document.getElementById('nav').classList.toggle('show');
};

const Navbar = ({ handleLogout }) => {
  const token = localStorage.getItem('token');

  return (
    <nav className="navbar">

      <button
        type="button"
        className="menu-toggler"
        onClick={() => toggleNav()}
      >
        Menu
      </button>

      <ul id="nav" className="navbar-nav">
        <li>
          <NavLink
            exact
            to="/"
            className="nav-link"
            onClick={() => toggleNav()}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/browse"
            className="nav-link"
            onClick={() => toggleNav()}
          >
            Browse
          </NavLink>
        </li>

        <li className="user-part">
          <ul>
            {
              !token
                ? (
                  <li>
                    <NavLink
                      to="/login"
                      className="nav-link btn"
                      onClick={() => toggleNav()}
                    >
                      Login
                    </NavLink>
                  </li>
                )
                : (
                  <Fragment>
                    <li>
                      <NavLink
                        to="/cart"
                        className="nav-link"
                        onClick={() => toggleNav()}
                      >
                        <Icon name="shopping cart" />
                        Cart
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/profile"
                        className="nav-link"
                        onClick={() => toggleNav()}
                      >
                        <Icon name="user" />
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="nav-link btn"
                        onClick={() => {
                          toggleNav();
                          handleLogout();
                        }}
                      >
                        <Icon name="log out" />
                        Log out
                      </button>
                    </li>
                  </Fragment>
                )
            }
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
