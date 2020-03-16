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
import { createGlobalStyle } from 'styled-components/macro';
import ScrollReset from './components/renderless/ScrollReset';
import routes from './pages/routes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    color: #595959;
  }

  .page-enter {
    opacity: 0;
  }
  .page-enter-active {
    opacity: 1;
    transition: opacity 0.3s ease-in;
  }
  .page-exit {
    opacity: 1;
  }
  .page-exit-active {
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }
`;

const RouterView = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="page"
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
  <>
    <GlobalStyle />
    <Router>
      <Helmet />
      <ScrollReset />
      <RouterView />
    </Router>
  </>
);

export default App;
