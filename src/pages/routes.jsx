/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import loadable from '@loadable/component';
import { Route } from 'react-router-dom';
import Loading from '../components/Loading';

const withDynamicRoute = (provide) => {
  const LazyRoute = loadable(provide, {
    fallback: (<Loading />)
  });

  return React.memo((props) => (
    <LazyRoute {...props} />
  ));
};

const routes = [{
  path: '/',
  exact: true,
  component: withDynamicRoute(() => import('./Home'))
}, {
  path: '*',
  exact: false,
  component: withDynamicRoute(() => import('./NotFound'))
}];

const generateLazyRoutes = () => routes.map((route) => (
  <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
));

export default generateLazyRoutes();
