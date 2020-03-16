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
`;

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
