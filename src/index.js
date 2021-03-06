import React from 'react';
import 'babel-polyfill';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import './styles/styles.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
