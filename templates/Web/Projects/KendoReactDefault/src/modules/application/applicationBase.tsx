///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouteSubRoutes from '../../core/RouteSubRoutes';
import Loading from '../../core/Loading';
import { ApplicationRoutes } from './applicationRoutes';
import LandingPage from './landing-page/LandingPage';
import AppLayout from './app-layout/AppLayout';

const baseApplicationRouting: React.FunctionComponent<any> = () => {

  return (
    <div className="ng-star-inserted">
      <Router>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact={true} path="/" component={LandingPage} />
            <AppLayout>
              <Switch>
                {
                  ApplicationRoutes.map((route: any, index: any) => <RouteSubRoutes key={index} {...route} /> )
                }
              </Switch>
            </AppLayout>
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
};

export default baseApplicationRouting;
