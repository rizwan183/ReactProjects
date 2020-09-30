import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Tap from './Tap'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Tap />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
