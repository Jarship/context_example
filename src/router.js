import React from 'react';

import { NavContext } from './basic_component';
import { Index, Home } from './pages';

const Router = () => (
  <NavContext.Consumer>
    {({ page, props }) => {
      if (page === "index") {
        return <Index {...props} />;
      } else if (page === "home") {
        return <Home {...props} />;
      } else {
        return <div />;
      }
    }}
  </NavContext.Consumer>
);

export default Router;
