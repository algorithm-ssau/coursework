import React from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
import ScrollReset from './components/renderless/ScrollReset';
import routes from './pages/routes';

const RouterView = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Switch>
          {routes}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => (
  <Router>
    <Helmet />
    <ScrollReset />
    <RouterView />
  </Router>
);

export default App;
