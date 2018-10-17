import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './rootreducers';
import App from './app';
import promiseMiddleware from 'redux-promise-middleware';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore( reducers, composeEnhancers (
  applyMiddleware (
    promiseMiddleware()
  )
));
// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
/* eslint-enable */



render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
