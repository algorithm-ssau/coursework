import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/pony-reset.css';

((init) => {
  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})(() => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
