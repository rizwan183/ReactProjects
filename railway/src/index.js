import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Menu from './Menu.js'

ReactDOM.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
