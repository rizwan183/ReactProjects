import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LiveStation from './LiveStation'
import StationLive from './StationLive'
import Form from './Form';
import Form2 from './Form2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Form2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
