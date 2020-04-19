import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from 'react-router-dom';
import {
  CSSTransition,
  SwitchTransition
} from 'react-transition-group';

import { createGlobalStyle } from 'styled-components/macro';
import ScrollReset from './components/renderless/ScrollReset';

import events from './utils/events';
import routes from './pages/routes';

import colors from './styles/colors';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.white};
    color: ${colors.black};
  }

  .page-enter,
  .page-appear {
    opacity: 0;
  }
  .page-exit,
  .page-enter-active,
  .page-enter-done,
  .page-appear-active,
  .page-appear-done {
    opacity: 1;
  }
  .page-exit-active,
  .page-exit-done {
    opacity: 0;
  }
  .page-appear-active,
  .page-enter-active,
  .page-exit-active {
    transition: opacity 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  }
`;

const RouterView = () => {
  const location = useLocation();
  const endListener = useCallback(() => events.transitionEndHandler.bind(null, 300), []);

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="page"
        timeout={600}
        addEndListener={endListener}
        appear
      >
        <Switch location={location}>
          {routes}
        </Switch>
      </CSSTransition>
    </SwitchTransition>
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
