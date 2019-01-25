import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar/navbar.scss';
import { Icon } from 'semantic-ui-react';

const toggleNav= () => {
  document.getElementById("nav").classList.toggle("show");
}

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="menu-toggler" onClick={() => toggleNav()}>
        Menu
      </div>

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
        <li>
          <NavLink
            to="/login"
            className="nav-link btn"
             onClick={() => toggleNav()}
          >
            Login
          </NavLink>
        </li>
        
        <li className="user-part">
          <ul>
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
              <div
                className="nav-link btn"
                 onClick={() => toggleNav()}
              >
                <Icon name="log out" />
                Log out
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;