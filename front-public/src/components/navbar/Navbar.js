import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar/navbar.scss';
import { Icon } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <NavLink
            exact
            to="/"
            className="nav-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/browse"
            className="nav-link"
          >
            Browse
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="nav-link"
          >
            <Icon name="shopping cart" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className="nav-link"
          >
            <Icon name="user" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;