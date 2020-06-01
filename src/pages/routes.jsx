/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import loadable from '@loadable/component';
import { Route } from 'react-router-dom';
import Loading from '../components/Loading';

const withDynamicRoute = (provide) => {
  const LazyRoute = loadable(provide, {
    cacheKey: (props) => props.location.pathname,
    fallback: (<Loading />)
  });

  return React.memo((props) => (
    <LazyRoute {...props} />
  ));
};

const routes = [{
  path: '/',
  exact: true,
  component: withDynamicRoute(() => import(/* webpackPrefetch: true */ './Home'))
}, {
  path: '/sale',
  exact: true,
  component: withDynamicRoute(() => import(/* webpackPrefetch: true */ './Sale'))
}, {
  path: '/explore',
  exact: true,
  component: withDynamicRoute(() => import(/* webpackPrefetch: true */ './Explore'))
}, {
  path: '/explore/:id',
  exact: true,
  component: withDynamicRoute(() => import(/* webpackPrefetch: true */ './Product'))
}, {
  path: '/about',
  exact: true,
  component: withDynamicRoute(() => import(/* webpackPrefetch: true */ './About'))
}, {
  path: '*',
  exact: false,
  component: withDynamicRoute(() => import(/* webpackPrefetch: true */ './NotFound'))
}];

const generateLazyRoutes = () => routes.map((route) => (
  <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
));

export default generateLazyRoutes();
