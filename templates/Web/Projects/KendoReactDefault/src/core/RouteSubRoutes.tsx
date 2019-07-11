///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import React from 'react';
import { Route } from 'react-router-dom';

const RouteSubRoutes = (route: any ) => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

export default RouteSubRoutes;
