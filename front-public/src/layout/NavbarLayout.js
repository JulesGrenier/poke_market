import React, { Fragment } from 'react';
import NavbarContainer from '../containers/navbar/NavbarContainer';

const NavbarLayout = ({ children, history }) => (
  <Fragment>
    <NavbarContainer history={history} />
    {children}
  </Fragment>
);

export default NavbarLayout;
