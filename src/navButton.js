import React from 'react';

import { NavContext } from './basic_component';

const NavButton = () => (
  <NavContext.Consumer>
    {({ changePage }) => {
      // eslint-disable-next-line no-unused-expressions
      return <button onClick={() => changePage("home")}>Go Home</button>;
    }}
  </NavContext.Consumer>
);

export default NavButton;