import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import './styles/styles.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById("app")
);
